import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { CharacterModel } from './characterModel';
import { HospitalWorld, InteractiveHotspot } from './hospitalWorld';
import { hospitalAudio } from '../../utils/audioSynthesis';

interface Hospital3DSceneProps {
  onTriggerInteraction: (hotspot: InteractiveHotspot) => void;
  onOpenQuickMenu?: () => void;
  studentConfig: {
    hijabColor: string;
    scrubColor: string;
    studentName: string;
  };
  joystickInput: { x: number; y: number; active: boolean };
  isRunning: boolean;
  onActionTrigger?: () => void;
  activeNearbyHotspot: InteractiveHotspot | null;
  setActiveNearbyHotspot: (hotspot: InteractiveHotspot | null) => void;
}

export const Hospital3DScene: React.FC<Hospital3DSceneProps> = ({
  onTriggerInteraction,
  studentConfig,
  joystickInput,
  isRunning,
  activeNearbyHotspot,
  setActiveNearbyHotspot,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [currentRoomName, setCurrentRoomName] = useState<string>('Lobby Rumah Sakit');

  // Input state refs (for zero-latency frame ticks)
  const keysPressed = useRef<Record<string, boolean>>({});
  const mouseDragRef = useRef<{ isDragging: boolean; lastX: number; lastY: number }>({
    isDragging: false,
    lastX: 0,
    lastY: 0,
  });
  const cameraYaw = useRef<number>(0);
  const cameraPitch = useRef<number>(0.25); // Slight look down
  const cameraDistance = useRef<number>(4.2);

  const playerPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 5.0)); // Starts in Lobby
  const playerRotY = useRef<number>(Math.PI); // Facing North towards nurse station
  const playerVelocity = useRef<THREE.Vector3>(new THREE.Vector3());

  // Keep references to world and characters
  const worldRef = useRef<HospitalWorld | null>(null);
  const playerModelRef = useRef<CharacterModel | null>(null);
  const npcsRef = useRef<{ model: CharacterModel; targetPath: THREE.Vector3[]; currentPathIdx: number }[]>([]);

  // Update nearby room based on player coordinates
  const updateRoomName = useCallback((pos: THREE.Vector3) => {
    let room = 'Koridor Rumah Sakit';
    if (Math.abs(pos.x) < 7 && pos.z > -1 && pos.z < 10) room = 'Lobby Rumah Sakit';
    else if (Math.abs(pos.x) < 7 && pos.z <= -1 && pos.z > -12) room = 'Nurse Station Pusat';
    else if (pos.x < -10 && pos.z < -10) room = pos.z < -22 ? 'Ruang ICU' : 'Ruang IGD Resusitasi';
    else if (pos.x > 10 && pos.z < -10) room = 'Ruang Rawat Inap Melati';
    else if (pos.x > 10 && pos.z > 10) room = pos.x > 18 && pos.z > 14 ? 'Laboratorium Patologi' : 'Ruang Rawat Inap Dahlia';
    else if (pos.x < -10 && pos.z > 10) room = 'Ruang Farmasi Klinis';
    else if (Math.abs(pos.x) < 8 && pos.z < -18) room = 'Ruang Pemeriksaan Dokter';
    else if (Math.abs(pos.x) < 8 && pos.z > 18) room = 'Ruang Rapat Medis';
    else if (pos.x > 5 && pos.z > 8 && pos.z < 16) room = 'Ruang Keluarga Pasien';
    else if (pos.x < -5 && pos.z > 8 && pos.z < 16) room = 'Ruang Edukasi Pasien';

    setCurrentRoomName(room);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;

    // 1. Detect Software WebGL
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    // 2. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#e2e8f0');
    scene.fog = new THREE.Fog('#e2e8f0', 25, 48);

    // 3. Camera Setup
    const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 75);

    // 4. Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 5. Studio Environment Map (PBR Reflection)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 6. Balanced Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xe0f2fe, 0xf1f5f9, 0.6);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    // Key directional light with shadows
    const keyLight = new THREE.DirectionalLight(0xfffbeb, 1.2);
    keyLight.position.set(12, 18, 10);
    keyLight.castShadow = !isSoftwareGl;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 45;
    const shadowD = 18;
    keyLight.shadow.camera.left = -shadowD;
    keyLight.shadow.camera.right = shadowD;
    keyLight.shadow.camera.top = shadowD;
    keyLight.shadow.camera.bottom = -shadowD;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Soft Fill Light
    const fillLight = new THREE.DirectionalLight(0xbae6fd, 0.5);
    fillLight.position.set(-15, 14, -12);
    scene.add(fillLight);

    // 7. Hospital 3D Architecture & Furniture
    const hospital = new HospitalWorld();
    scene.add(hospital.scene);
    worldRef.current = hospital;

    // 8. Player Character Model (Female Nursing Student with Hijab)
    const player = new CharacterModel({
      name: studentConfig.studentName || 'Ners Mahasiswi',
      role: 'student_nurse',
      gender: 'female',
      hasHijab: true,
      hijabColor: studentConfig.hijabColor || '#0f172a',
      scrubColor: studentConfig.scrubColor || '#0284c7',
      scale: 0.95,
    });
    player.group.position.copy(playerPos.current);
    player.group.rotation.y = playerRotY.current;
    scene.add(player.group);
    playerModelRef.current = player;

    // 9. Hospital Living NPCs
    // (a) Walking Floor Nurse NPC
    const nurseNpc = new CharacterModel({
      name: 'Ners Sarah, S.Kep.',
      role: 'nurse_female',
      gender: 'female',
      hasHijab: true,
      hijabColor: '#0369a1',
      scrubColor: '#0284c7',
      scale: 0.95,
    });
    scene.add(nurseNpc.group);

    // (b) Doctor Specialist NPC (dr. Juwita Ninda Suherman, M.Kes.)
    const docNpc = new CharacterModel({
      name: 'dr. Juwita Ninda Suherman, M.Kes.',
      role: 'doctor_female',
      gender: 'female',
      hasHijab: true,
      hijabColor: '#1e293b',
      scrubColor: '#0f766e',
      coatColor: '#ffffff',
      scale: 0.98,
    });
    docNpc.group.position.set(0, 0, -22.5);
    docNpc.group.rotation.y = 0;
    scene.add(docNpc.group);

    // (c) Pharmacist NPC
    const pharmNpc = new CharacterModel({
      name: 'Apt. Rian, S.Farm.',
      role: 'pharmacist',
      gender: 'male',
      hasHijab: false,
      scrubColor: '#0d9488',
      scale: 0.95,
    });
    pharmNpc.group.position.set(-22, 0, 17.5);
    pharmNpc.group.rotation.y = Math.PI;
    scene.add(pharmNpc.group);

    // (d) Lab Technician NPC
    const labNpc = new CharacterModel({
      name: 'Analis Laboratorium',
      role: 'lab_tech',
      gender: 'female',
      hasHijab: true,
      hijabColor: '#334155',
      scrubColor: '#475569',
      scale: 0.95,
    });
    labNpc.group.position.set(22, 0, 17.5);
    labNpc.group.rotation.y = Math.PI;
    scene.add(labNpc.group);

    npcsRef.current = [
      {
        model: nurseNpc,
        targetPath: [
          new THREE.Vector3(0, 0, -3),
          new THREE.Vector3(12, 0, -3),
          new THREE.Vector3(12, 0, -18),
          new THREE.Vector3(0, 0, -18),
        ],
        currentPathIdx: 0,
      },
    ];

    // 10. Desktop Keyboard Controls Event Listeners
    const onKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.code] = true;

      // [E] for interaction
      if (e.code === 'KeyE') {
        if (activeNearbyHotspot) {
          hospitalAudio.playInteractionChime();
          onTriggerInteraction(activeNearbyHotspot);
        }
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.code] = false;
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    // Mouse drag for 360 camera orbit
    const onMouseDown = (e: MouseEvent) => {
      if (e.button === 0 || e.button === 2) {
        mouseDragRef.current.isDragging = true;
        mouseDragRef.current.lastX = e.clientX;
        mouseDragRef.current.lastY = e.clientY;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!mouseDragRef.current.isDragging) return;
      const deltaX = e.clientX - mouseDragRef.current.lastX;
      const deltaY = e.clientY - mouseDragRef.current.lastY;
      mouseDragRef.current.lastX = e.clientX;
      mouseDragRef.current.lastY = e.clientY;

      cameraYaw.current -= deltaX * 0.006;
      cameraPitch.current = Math.max(0.05, Math.min(0.9, cameraPitch.current + deltaY * 0.005));
    };

    const onMouseUp = () => {
      mouseDragRef.current.isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      cameraDistance.current = Math.max(2.5, Math.min(8.0, cameraDistance.current + e.deltaY * 0.004));
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: true });

    // Touch controls for camera rotation on right side of screen
    let touchStartId: number | null = null;
    let touchStartX = 0;
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        // If touch is on right half of screen, use for camera look
        if (t.clientX > window.innerWidth * 0.45 && touchStartId === null) {
          touchStartId = t.identifier;
          touchStartX = t.clientX;
          touchStartY = t.clientY;
          break;
        }
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchStartId === null) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        if (t.identifier === touchStartId) {
          const deltaX = t.clientX - touchStartX;
          const deltaY = t.clientY - touchStartY;
          touchStartX = t.clientX;
          touchStartY = t.clientY;

          cameraYaw.current -= deltaX * 0.008;
          cameraPitch.current = Math.max(0.05, Math.min(0.9, cameraPitch.current + deltaY * 0.007));
          break;
        }
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === touchStartId) {
          touchStartId = null;
          break;
        }
      }
    };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // 11. Animation Loop with Clock
    const clock = new THREE.Clock();
    let animFrameId = 0;
    let footstepTimer = 0;

    const tick = () => {
      const delta = Math.min(clock.getDelta(), 0.1);

      // A. Movement Input Calculation
      let moveForward = 0;
      let moveStrafe = 0;

      // Keyboard WASD
      if (keysPressed.current['KeyW'] || keysPressed.current['ArrowUp']) moveForward += 1;
      if (keysPressed.current['KeyS'] || keysPressed.current['ArrowDown']) moveForward -= 1;
      if (keysPressed.current['KeyA'] || keysPressed.current['ArrowLeft']) moveStrafe -= 1;
      if (keysPressed.current['KeyD'] || keysPressed.current['ArrowRight']) moveStrafe += 1;

      // Mobile Joystick Integration
      if (joystickInput.active) {
        moveStrafe += joystickInput.x;
        moveForward -= joystickInput.y; // Joystick up is negative Y
      }

      const isShift = keysPressed.current['ShiftLeft'] || keysPressed.current['ShiftRight'] || isRunning;
      const moveSpeed = isShift ? 6.2 : 3.6;

      const inputLen = Math.hypot(moveForward, moveStrafe);
      let isMoving = inputLen > 0.08;

      if (isMoving) {
        // Normalize input vector
        const dirForward = moveForward / (inputLen || 1);
        const dirStrafe = moveStrafe / (inputLen || 1);

        // Move relative to current camera yaw angle
        const sinYaw = Math.sin(cameraYaw.current);
        const cosYaw = Math.cos(cameraYaw.current);

        const worldMoveX = dirStrafe * cosYaw + dirForward * sinYaw;
        const worldMoveZ = -dirStrafe * sinYaw + dirForward * cosYaw;

        // Desired target angle
        const targetAngle = Math.atan2(worldMoveX, worldMoveZ);
        playerRotY.current = THREE.MathUtils.damp(playerRotY.current, targetAngle, 12, delta);

        // Calculate potential new position
        const nextX = playerPos.current.x + worldMoveX * moveSpeed * delta;
        const nextZ = playerPos.current.z + worldMoveZ * moveSpeed * delta;

        // Collision Check with Hospital Colliders
        let canMoveX = true;
        let canMoveZ = true;
        const pRadius = 0.45;

        if (worldRef.current) {
          for (const box of worldRef.current.colliders) {
            // Check X axis
            if (
              nextX + pRadius > box.min.x &&
              nextX - pRadius < box.max.x &&
              playerPos.current.z + pRadius > box.min.z &&
              playerPos.current.z - pRadius < box.max.z
            ) {
              canMoveX = false;
            }
            // Check Z axis
            if (
              playerPos.current.x + pRadius > box.min.x &&
              playerPos.current.x - pRadius < box.max.x &&
              nextZ + pRadius > box.min.z &&
              nextZ - pRadius < box.max.z
            ) {
              canMoveZ = false;
            }
          }
        }

        // Hospital Outer Perimeter bounds (-30 to 30)
        if (Math.abs(nextX) > 30) canMoveX = false;
        if (Math.abs(nextZ) > 30) canMoveZ = false;

        if (canMoveX) playerPos.current.x = nextX;
        if (canMoveZ) playerPos.current.z = nextZ;

        // Footstep audio pacing
        footstepTimer += delta * (isShift ? 3.5 : 2.2);
        if (footstepTimer >= 1.0) {
          footstepTimer = 0;
          hospitalAudio.playFootstep();
        }

        player.setAnimationState(isShift ? 'run' : 'walk');
      } else {
        player.setAnimationState('idle');
      }

      // Update Player Visual Model
      player.group.position.copy(playerPos.current);
      player.group.rotation.y = playerRotY.current;
      player.update(delta, inputLen);

      // B. Third-Person Follow Camera Rig
      // Calculate ideal camera position behind player based on yaw & pitch
      const camOffsetHoriz = Math.cos(cameraPitch.current) * cameraDistance.current;
      const camOffsetY = Math.sin(cameraPitch.current) * cameraDistance.current + 1.2;

      const targetCamX = playerPos.current.x - Math.sin(cameraYaw.current) * camOffsetHoriz;
      const targetCamZ = playerPos.current.z - Math.cos(cameraYaw.current) * camOffsetHoriz;
      const targetCamY = playerPos.current.y + camOffsetY;

      // Smooth camera follow
      camera.position.x = THREE.MathUtils.damp(camera.position.x, targetCamX, 9, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, targetCamY, 9, delta);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, targetCamZ, 9, delta);

      // Camera looks at player chest height (y + 1.4)
      const lookTarget = new THREE.Vector3(playerPos.current.x, playerPos.current.y + 1.35, playerPos.current.z);
      camera.lookAt(lookTarget);

      // C. Update NPC Wander Paths
      npcsRef.current.forEach((item) => {
        const target = item.targetPath[item.currentPathIdx];
        const dist = item.model.group.position.distanceTo(target);

        if (dist < 0.6) {
          item.currentPathIdx = (item.currentPathIdx + 1) % item.targetPath.length;
        } else {
          const moveDir = target.clone().sub(item.model.group.position).normalize();
          item.model.group.position.addScaledVector(moveDir, 1.6 * delta);
          item.model.group.rotation.y = Math.atan2(moveDir.x, moveDir.z);
          item.model.setAnimationState('walk');
          item.model.update(delta, 0.5);
        }
      });

      // Update doctor idle talking gesture
      docNpc.setAnimationState('talk');
      docNpc.update(delta);

      // D. Hotspot Proximity Detection
      if (worldRef.current) {
        let closestHotspot: InteractiveHotspot | null = null;
        let minDistance = Infinity;

        for (const hs of worldRef.current.hotspots) {
          const d = playerPos.current.distanceTo(hs.position);
          if (d <= hs.radius && d < minDistance) {
            minDistance = d;
            closestHotspot = hs;
          }
        }

        setActiveNearbyHotspot(closestHotspot);
      }

      // E. Update Room Locator
      updateRoomName(playerPos.current);

      renderer.render(scene, camera);
      animFrameId = requestAnimationFrame(tick);
    };

    animFrameId = requestAnimationFrame(tick);

    // Listen for external teleport requests (from MiniMapModal)
    const onTeleportEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ x: number; z: number; roomName: string }>;
      if (customEvent.detail) {
        playerPos.current.set(customEvent.detail.x, 0, customEvent.detail.z);
        setCurrentRoomName(customEvent.detail.roomName);
        hospitalAudio.playInteractionChime();
      }
    };
    window.addEventListener('teleport_player', onTeleportEvent);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('teleport_player', onTeleportEvent);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [studentConfig, onTriggerInteraction, updateRoomName, isRunning, setActiveNearbyHotspot]);

  // Teleport player when clicking map or room directory
  const teleportToRoom = useCallback((x: number, z: number, roomName: string) => {
    playerPos.current.set(x, 0, z);
    setCurrentRoomName(roomName);
    hospitalAudio.playInteractionChime();
  }, []);

  return (
    <div className="relative w-full h-full select-none overflow-hidden bg-slate-900">
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top HUD: Current Hospital Location & Room Badge */}
      <div className="absolute top-4 left-4 right-4 pointer-events-none flex items-center justify-between z-10">
        <div className="flex items-center gap-3 bg-slate-900/85 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-sky-500/30 shadow-lg pointer-events-auto">
          <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
          <div>
            <div className="text-[11px] font-semibold text-sky-400 tracking-wider uppercase">LOKASI RUMAH SAKIT</div>
            <div className="text-sm font-bold text-white flex items-center gap-1.5">
              <span>🏥</span>
              <span>{currentRoomName}</span>
            </div>
          </div>
        </div>

        {/* Quick Room Teleport Dropdown */}
        <div className="pointer-events-auto">
          <select
            value={currentRoomName}
            onChange={(e) => {
              const val = e.target.value;
              if (val === 'Lobby Rumah Sakit') teleportToRoom(0, 5, val);
              else if (val === 'Nurse Station Pusat') teleportToRoom(0, -6, val);
              else if (val === 'Ruang IGD Resusitasi') teleportToRoom(-20, -16, val);
              else if (val === 'Ruang ICU') teleportToRoom(-20, -24, val);
              else if (val === 'Ruang Rawat Inap Melati') teleportToRoom(16, -16, val);
              else if (val === 'Ruang Rawat Inap Dahlia') teleportToRoom(16, 16, val);
              else if (val === 'Ruang Farmasi Klinis') teleportToRoom(-20, 16, val);
              else if (val === 'Laboratorium Patologi') teleportToRoom(20, 16, val);
              else if (val === 'Ruang Dokter') teleportToRoom(0, -22, val);
              else if (val === 'Ruang Rapat Medis') teleportToRoom(0, 24, val);
            }}
            className="bg-slate-900/85 backdrop-blur-md text-white text-xs font-medium px-3.5 py-2.5 rounded-xl border border-slate-700/60 shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="Lobby Rumah Sakit">📍 Pindah Ruangan...</option>
            <option value="Lobby Rumah Sakit">1. Lobby RS & Registrasi</option>
            <option value="Nurse Station Pusat">2. Nurse Station Pusat</option>
            <option value="Ruang IGD Resusitasi">3. Ruang IGD Resusitasi</option>
            <option value="Ruang Rawat Inap Melati">4. Rawat Inap Melati (Bed 1-6)</option>
            <option value="Ruang Rawat Inap Dahlia">5. Rawat Inap Dahlia (Bed 1-6)</option>
            <option value="Ruang ICU">6. Ruang ICU</option>
            <option value="Ruang Dokter">7. Ruang Pemeriksaan Dokter</option>
            <option value="Ruang Farmasi Klinis">8. Ruang Farmasi Klinis</option>
            <option value="Laboratorium Patologi">9. Laboratorium Patologi</option>
            <option value="Ruang Rapat Medis">10. Ruang Rapat Medis</option>
          </select>
        </div>
      </div>

      {/* Interactive Hotspot Notification Pill when within 2.5 meters */}
      {activeNearbyHotspot && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <button
            onClick={() => {
              hospitalAudio.playInteractionChime();
              onTriggerInteraction(activeNearbyHotspot);
            }}
            className="flex items-center gap-3 bg-gradient-to-r from-sky-600 via-sky-500 to-teal-500 text-white px-5 py-3 rounded-full shadow-2xl border-2 border-white/50 cursor-pointer active:scale-95 transition-transform"
          >
            <span className="w-8 h-8 rounded-full bg-white text-sky-700 flex items-center justify-center font-black text-sm shadow">
              E
            </span>
            <div className="text-left">
              <div className="text-[11px] font-bold tracking-wider text-sky-100 uppercase">
                {activeNearbyHotspot.name}
              </div>
              <div className="text-sm font-extrabold flex items-center gap-1">
                <span>👉 Tekan [E] atau Ketuk di Sini: {activeNearbyHotspot.promptAction}</span>
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Desktop Controls Hint (Top-right corner) */}
      <div className="hidden md:flex absolute bottom-20 right-4 pointer-events-none z-10 flex-col items-end gap-1.5 text-[11px] text-slate-300 bg-slate-900/80 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-700/60 shadow">
        <div className="font-bold text-sky-400 mb-0.5">KONTROL KEYBOARD & MOUSE:</div>
        <div className="flex items-center gap-2">
          <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-600 text-white">W A S D</kbd>
          <span>Gerak Karakter</span>
        </div>
        <div className="flex items-center gap-2">
          <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-600 text-white">Shift</kbd>
          <span>Berlari Cepat</span>
        </div>
        <div className="flex items-center gap-2">
          <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-600 text-white">E</kbd>
          <span>Interaksi Pasien / Objek</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Tahan Klik & Geser</span>
          <span>Putar Kamera 360°</span>
        </div>
      </div>
    </div>
  );
};
