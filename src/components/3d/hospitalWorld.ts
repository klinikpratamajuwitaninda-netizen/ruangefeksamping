import * as THREE from 'three';
import { createFloorTileTexture, createMonitorTexture, createRoomSignTexture, createWoodFloorTexture } from './proceduralTextures';

export interface InteractiveHotspot {
  id: string;
  name: string;
  type: 'patient_case' | 'doctor' | 'nurse' | 'pharmacist' | 'lab_tech' | 'computer' | 'med_cart' | 'family';
  caseId?: number;
  position: THREE.Vector3;
  radius: number;
  dialogueSpeaker: string;
  roomName: string;
  promptAction: string;
}

export class HospitalWorld {
  public scene: THREE.Group;
  public colliders: THREE.Box3[] = [];
  public hotspots: InteractiveHotspot[] = [];

  constructor() {
    this.scene = new THREE.Group();
    this.buildHospitalFloorsAndWalls();
    this.buildLobby();
    this.buildNurseStation();
    this.buildInpatientWards();
    this.buildEmergencyRoom();
    this.buildICU();
    this.buildDoctorClinic();
    this.buildProcedureRoom();
    this.buildPharmacy();
    this.buildLaboratory();
    this.buildObservationRoom();
    this.buildConferenceRoom();
    this.buildFamilyLounge();
    this.buildEducationRoom();
    this.buildCorridorsAndWayfinding();
  }

  private addCollider(box: THREE.Box3) {
    this.colliders.push(box);
  }

  private buildHospitalFloorsAndWalls() {
    const floorTileTex = createFloorTileTexture();
    const floorMat = new THREE.MeshStandardMaterial({
      map: floorTileTex,
      roughness: 0.3,
      metalness: 0.05,
    });

    // Main hospital floor plate (60m x 60m)
    const floorGeo = new THREE.PlaneGeometry(64, 64);
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI * 0.5;
    floorMesh.position.y = 0;
    floorMesh.receiveShadow = true;
    this.scene.add(floorMesh);

    // Ceiling
    const ceilingMat = new THREE.MeshStandardMaterial({
      color: '#f8fafc',
      roughness: 0.8,
    });
    const ceilingMesh = new THREE.Mesh(floorGeo.clone(), ceilingMat);
    ceilingMesh.rotation.x = Math.PI * 0.5;
    ceilingMesh.position.y = 4.2;
    this.scene.add(ceilingMesh);

    // Outer Perimeter Walls
    const wallMat = new THREE.MeshStandardMaterial({
      color: '#f1f5f9',
      roughness: 0.6,
    });

    const createWall = (width: number, height: number, depth: number, x: number, y: number, z: number) => {
      const geo = new THREE.BoxGeometry(width, height, depth);
      const mesh = new THREE.Mesh(geo, wallMat);
      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      this.addCollider(new THREE.Box3().setFromObject(mesh));
      return mesh;
    };

    // North wall
    createWall(64, 4.2, 0.4, 0, 2.1, -32);
    // South wall
    createWall(64, 4.2, 0.4, 0, 2.1, 32);
    // West wall
    createWall(0.4, 4.2, 64, -32, 2.1, 0);
    // East wall
    createWall(0.4, 4.2, 64, 32, 2.1, 0);

    // Internal Partition Walls (Separating Wings)
    // Central North-South corridor dividers
    createWall(0.3, 4.2, 22, -12, 2.1, -19); // West divider North
    createWall(0.3, 4.2, 22, 12, 2.1, -19); // East divider North
    createWall(0.3, 4.2, 22, -12, 2.1, 19); // West divider South
    createWall(0.3, 4.2, 22, 12, 2.1, 19); // East divider South

    // East-West partition dividers
    createWall(18, 4.2, 0.3, -22, 2.1, -8);
    createWall(18, 4.2, 0.3, 22, 2.1, -8);
    createWall(18, 4.2, 0.3, -22, 2.1, 8);
    createWall(18, 4.2, 0.3, 22, 2.1, 8);
  }

  private buildLobby() {
    // 1. Grand Hospital Lobby (x: -6 to 6, z: 0 to 8)
    const deskMat = new THREE.MeshStandardMaterial({ color: '#0284c7', roughness: 0.3, metalness: 0.1 });
    const topMat = new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.2, metalness: 0.2 });

    // Curved Reception counter
    const counterBase = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 1.1, 24, 1, false, 0, Math.PI), deskMat);
    counterBase.rotation.y = Math.PI * 0.5;
    counterBase.position.set(0, 0.55, 3.0);
    counterBase.castShadow = true;
    this.scene.add(counterBase);
    this.addCollider(new THREE.Box3().setFromObject(counterBase));

    // Sign on counter
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 0.6),
      new THREE.MeshBasicMaterial({ map: createRoomSignTexture('LOBBY & INFORMASI', '🏥') })
    );
    sign.position.set(0, 0.8, 1.35);
    this.scene.add(sign);

    // Waiting Couches (Sofa rows)
    const sofaMat = new THREE.MeshStandardMaterial({ color: '#0284c7', roughness: 0.6 });
    for (let i = -1; i <= 1; i += 2) {
      const sofa = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.5, 0.8), sofaMat);
      sofa.position.set(i * 5.5, 0.25, 4.5);
      sofa.castShadow = true;
      this.scene.add(sofa);
      this.addCollider(new THREE.Box3().setFromObject(sofa));
    }

    // Potted Ornamental Plant
    const potMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.3 });
    const leafMat = new THREE.MeshStandardMaterial({ color: '#16a34a', roughness: 0.7 });
    for (let i = -1; i <= 1; i += 2) {
      const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.25, 0.7, 16), potMat);
      pot.position.set(i * 3.8, 0.35, 0.5);
      const leaf = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55), leafMat);
      leaf.position.set(i * 3.8, 0.95, 0.5);
      this.scene.add(pot);
      this.scene.add(leaf);
    }
  }

  private buildNurseStation() {
    // 2. Nurse Station (x: -5 to 5, z: -5 to -11)
    const deskMat = new THREE.MeshStandardMaterial({ color: '#0369a1', roughness: 0.3 });
    const deskTopMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.2 });

    const counter = new THREE.Mesh(new THREE.BoxGeometry(6.4, 1.1, 1.2), deskMat);
    counter.position.set(0, 0.55, -8.0);
    counter.castShadow = true;
    this.scene.add(counter);
    this.addCollider(new THREE.Box3().setFromObject(counter));

    const topLedge = new THREE.Mesh(new THREE.BoxGeometry(6.6, 0.08, 1.3), deskTopMat);
    topLedge.position.set(0, 1.14, -8.0);
    this.scene.add(topLedge);

    // Nurse Station Computers
    const compMat = new THREE.MeshStandardMaterial({ color: '#1e293b', roughness: 0.3 });
    for (let c = -1.8; c <= 1.8; c += 1.8) {
      const compScreen = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.45, 0.05), compMat);
      compScreen.position.set(c, 1.45, -7.8);
      compScreen.rotation.y = Math.PI;
      this.scene.add(compScreen);
    }

    // Interactive Hotspot: Nurse Station EMR Computer
    this.hotspots.push({
      id: 'hs-nurse-computer',
      name: 'Terminal Komputer Nurse Station',
      type: 'computer',
      position: new THREE.Vector3(0, 0, -6.8),
      radius: 2.2,
      dialogueSpeaker: 'Nurse Station EMR',
      roomName: 'Nurse Station',
      promptAction: 'Buka Rekam Medis & EMR Pasien',
    });

    // Emergency Medication Trolley (Troli Obat / Emergency Cart)
    const cartMat = new THREE.MeshStandardMaterial({ color: '#dc2626', roughness: 0.4, metalness: 0.2 });
    const cart = new THREE.Mesh(new THREE.BoxGeometry(0.85, 1.1, 0.65), cartMat);
    cart.position.set(3.8, 0.55, -8.0);
    cart.castShadow = true;
    this.scene.add(cart);
    this.addCollider(new THREE.Box3().setFromObject(cart));

    this.hotspots.push({
      id: 'hs-med-cart',
      name: 'Troli Obat Emergensi & Kit MESO',
      type: 'med_cart',
      position: new THREE.Vector3(3.8, 0, -7.0),
      radius: 2.0,
      dialogueSpeaker: 'Troli Obat',
      roomName: 'Nurse Station',
      promptAction: 'Periksa Stok Obat & Formulir Kuning MESO',
    });

    // Nurse Station Sign
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(3.0, 0.7),
      new THREE.MeshBasicMaterial({ map: createRoomSignTexture('NURSE STATION PUSAT', '📋') })
    );
    sign.position.set(0, 3.2, -8.0);
    this.scene.add(sign);
  }

  private buildInpatientWards() {
    // 3. Rawat Inap Melati (North-East: x: 14 to 30, z: -10 to -30) -> Cases 1 to 5
    // 4. Rawat Inap Dahlia (East: x: 14 to 30, z: 10 to 30) -> Cases 11 to 16
    const bedFrameMat = new THREE.MeshStandardMaterial({ color: '#94a3b8', metalness: 0.6, roughness: 0.3 });
    const mattressMat = new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.8 });
    const blanketMat = new THREE.MeshStandardMaterial({ color: '#0284c7', roughness: 0.6 });
    const pillowMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.9 });

    const createHospitalBed = (x: number, z: number, rotationY: number, patientName: string, caseId: number, roomName: string) => {
      const bedGroup = new THREE.Group();
      bedGroup.position.set(x, 0, z);
      bedGroup.rotation.y = rotationY;

      // Bed Frame
      const frame = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.45, 2.3), bedFrameMat);
      frame.position.y = 0.35;
      frame.castShadow = true;
      bedGroup.add(frame);

      // Mattress
      const mattress = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.22, 2.15), mattressMat);
      mattress.position.y = 0.62;
      bedGroup.add(mattress);

      // Blanket (covers lower half)
      const blanket = new THREE.Mesh(new THREE.BoxGeometry(1.22, 0.24, 1.3), blanketMat);
      blanket.position.set(0, 0.64, 0.35);
      blanket.castShadow = true;
      bedGroup.add(blanket);

      // Pillow
      const pillow = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.16, 0.4), pillowMat);
      pillow.position.set(0, 0.78, -0.75);
      bedGroup.add(pillow);

      // Bedside Monitor Stand
      const standPole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.8), bedFrameMat);
      standPole.position.set(-0.85, 0.9, -0.6);
      bedGroup.add(standPole);

      // Monitor Screen with live waveform texture
      const monMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.55, 0.38, 0.06),
        new THREE.MeshStandardMaterial({ map: createMonitorTexture('120/80', 75, 98, patientName, false) })
      );
      monMesh.position.set(-0.85, 1.6, -0.6);
      monMesh.rotation.y = Math.PI * 0.25;
      bedGroup.add(monMesh);

      // IV Drip Pole
      const ivPole = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.2), bedFrameMat);
      ivPole.position.set(0.85, 1.1, -0.6);
      bedGroup.add(ivPole);

      const ivBag = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.28, 0.08),
        new THREE.MeshStandardMaterial({ color: '#e0f2fe', transparent: true, opacity: 0.75 })
      );
      ivBag.position.set(0.85, 2.0, -0.6);
      bedGroup.add(ivBag);

      // Patient 3D Avatar lying in bed (Cartoon stylized patient)
      const patientBody = new THREE.Mesh(
        new THREE.BoxGeometry(0.65, 0.35, 1.4),
        new THREE.MeshStandardMaterial({ color: '#38bdf8', roughness: 0.6 })
      );
      patientBody.position.set(0, 0.78, 0.1);
      bedGroup.add(patientBody);

      // Patient head on pillow
      const headMat = new THREE.MeshStandardMaterial({ color: '#fed7aa', roughness: 0.6 });
      const patientHead = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), headMat);
      patientHead.position.set(0, 0.92, -0.72);
      bedGroup.add(patientHead);

      this.scene.add(bedGroup);
      this.addCollider(new THREE.Box3().setFromObject(frame));

      // Register Interactive Hotspot for Patient Case
      this.hotspots.push({
        id: `hs-case-${caseId}`,
        name: `Pasien: ${patientName}`,
        type: 'patient_case',
        caseId: caseId,
        position: new THREE.Vector3(x, 0, z),
        radius: 2.8,
        dialogueSpeaker: patientName,
        roomName: roomName,
        promptAction: `Periksa Pasien & Anamnesis (${patientName})`,
      });
    };

    // Melati Ward Beds (Cases 1, 5, 6, 7, 10, 11)
    createHospitalBed(18, -16, 0, 'Ny. Aisyah (Hipoglikemia)', 1, 'Rawat Inap Melati - Bed 1');
    createHospitalBed(24, -16, 0, 'Nn. Erika (SJS Lamotrigin)', 5, 'Rawat Inap Melati - Bed 4');
    createHospitalBed(18, -24, 0, 'Tn. Hartono (Perdarahan OAINS)', 6, 'Rawat Inap Melati - Bed 5');
    createHospitalBed(24, -24, 0, 'Tn. Iwan (Warfarin + Aspirin)', 7, 'Rawat Inap Melati - Bed 6');

    // Dahlia Ward Beds (Cases 3, 13, 14, 15, 16, 18)
    createHospitalBed(18, 16, Math.PI, 'Tn. Cokroaminoto (Polifarmasi Ginjal)', 3, 'Rawat Inap Dahlia - Bed 3');
    createHospitalBed(24, 16, Math.PI, 'Tn. Lukman (Toksisitas Lithium)', 13, 'Rawat Inap Dahlia - Bed 1');
    createHospitalBed(18, 24, Math.PI, 'Tn. Subagyo (Rhabdomiolisis)', 14, 'Rawat Inap Dahlia - Bed 2');
    createHospitalBed(24, 24, Math.PI, 'Ny. Shinta (Sindrom Serotonin)', 15, 'Rawat Inap Dahlia - Bed 4');
  }

  private buildEmergencyRoom() {
    // 5. Ruang IGD (West Wing: x: -14 to -30, z: -10 to -30) -> Case 2 Anafilaksis
    const bedFrameMat = new THREE.MeshStandardMaterial({ color: '#ef4444', metalness: 0.5, roughness: 0.3 });

    // Trauma Bed
    const bedGroup = new THREE.Group();
    bedGroup.position.set(-22, 0, -18);

    const frame = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.45, 2.3), bedFrameMat);
    frame.position.y = 0.35;
    frame.castShadow = true;
    bedGroup.add(frame);

    const mattress = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.22, 2.15), new THREE.MeshStandardMaterial({ color: '#f8fafc' }));
    mattress.position.y = 0.62;
    bedGroup.add(mattress);

    // Patient in Anaphylactic Shock (Tn. Budi)
    const patientBody = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.35, 1.4), new THREE.MeshStandardMaterial({ color: '#f43f5e' }));
    patientBody.position.set(0, 0.78, 0.1);
    bedGroup.add(patientBody);

    const patientHead = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), new THREE.MeshStandardMaterial({ color: '#fed7aa' }));
    patientHead.position.set(0, 0.92, -0.72);
    bedGroup.add(patientHead);

    // High flow Oxygen Cylinder
    const o2Cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 1.4, 16),
      new THREE.MeshStandardMaterial({ color: '#059669', metalness: 0.7, roughness: 0.2 })
    );
    o2Cylinder.position.set(-1.0, 0.7, 0.8);
    bedGroup.add(o2Cylinder);

    // Critical Emergency Bed Monitor with Red Alarm
    const monMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.65, 0.44, 0.08),
      new THREE.MeshStandardMaterial({ map: createMonitorTexture('78/46', 132, 87, 'Tn. Budi', true) })
    );
    monMesh.position.set(-0.9, 1.6, -0.5);
    monMesh.rotation.y = Math.PI * 0.3;
    bedGroup.add(monMesh);

    this.scene.add(bedGroup);
    this.addCollider(new THREE.Box3().setFromObject(frame));

    // Hotspot for Case 2 (Anafilaksis)
    this.hotspots.push({
      id: 'hs-case-2',
      name: 'Tn. Budi Pratama (Syok Anafilaksis)',
      type: 'patient_case',
      caseId: 2,
      position: new THREE.Vector3(-22, 0, -18),
      radius: 3.0,
      dialogueSpeaker: 'Tn. Budi (Pasien IGD)',
      roomName: 'Ruang IGD',
      promptAction: 'Tangani Syok Anafilaksis (Lini Pertama Epinefrin)',
    });

    // Room Sign for IGD
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(3.0, 0.75),
      new THREE.MeshBasicMaterial({ map: createRoomSignTexture('RUANG IGD RESUSITASI', '🚨') })
    );
    sign.position.set(-22, 3.4, -10.2);
    this.scene.add(sign);
  }

  private buildICU() {
    // 6. Ruang ICU (North-West: x: -14 to -30, z: -20 to -30) -> Case 30 Prolonged Apnea
    const icuGroup = new THREE.Group();
    icuGroup.position.set(-22, 0, -26);

    const bed = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 2.3), new THREE.MeshStandardMaterial({ color: '#0369a1' }));
    bed.position.y = 0.35;
    bed.castShadow = true;
    icuGroup.add(bed);

    // Ventilator Machine Tower
    const vent = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.6, 0.5), new THREE.MeshStandardMaterial({ color: '#f8fafc', metalness: 0.3 }));
    vent.position.set(1.1, 0.8, -0.4);
    vent.castShadow = true;
    icuGroup.add(vent);

    this.scene.add(icuGroup);
    this.addCollider(new THREE.Box3().setFromObject(bed));

    this.hotspots.push({
      id: 'hs-case-30',
      name: 'Tn. Bagus (Prolonged Apnea Suksinilkolin)',
      type: 'patient_case',
      caseId: 30,
      position: new THREE.Vector3(-22, 0, -26),
      radius: 2.8,
      dialogueSpeaker: 'Tn. Bagus (Pasien ICU)',
      roomName: 'Ruang ICU',
      promptAction: 'Periksa Pasien ICU (Ventilator & Pseudocholinesterase)',
    });
  }

  private buildDoctorClinic() {
    // 7. Ruang Pemeriksaan Dokter (North: x: -6 to 6, z: -22 to -30)
    const deskMat = new THREE.MeshStandardMaterial({ color: '#475569', roughness: 0.4 });
    const desk = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.0, 1.2), deskMat);
    desk.position.set(0, 0.5, -24);
    desk.castShadow = true;
    this.scene.add(desk);
    this.addCollider(new THREE.Box3().setFromObject(desk));

    // Doctor Consultation Chair
    const chair = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.2, 0.7), new THREE.MeshStandardMaterial({ color: '#0284c7' }));
    chair.position.set(0, 0.6, -25.2);
    this.scene.add(chair);

    // Interactive Hotspot: Doctor Consultation
    this.hotspots.push({
      id: 'hs-doctor-consult',
      name: 'dr. Juwita Ninda Suherman, M.Kes. (Dokter Spesialis)',
      type: 'doctor',
      position: new THREE.Vector3(0, 0, -23.5),
      radius: 2.5,
      dialogueSpeaker: 'dr. Juwita Ninda Suherman, M.Kes.',
      roomName: 'Ruang Dokter',
      promptAction: 'Konsultasi Kasus ESO & Lapor SBAR Dokter',
    });
  }

  private buildProcedureRoom() {
    // 8. Ruang Tindakan (x: -22, z: -2)
    const procTable = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.8, 2.2), new THREE.MeshStandardMaterial({ color: '#64748b' }));
    procTable.position.set(-22, 0.4, -2);
    procTable.castShadow = true;
    this.scene.add(procTable);
    this.addCollider(new THREE.Box3().setFromObject(procTable));

    // Surgical Lamp Overhead
    const lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.1, 16), new THREE.MeshStandardMaterial({ color: '#f8fafc', emissive: '#fef08a', emissiveIntensity: 0.4 }));
    lamp.position.set(-22, 3.2, -2);
    this.scene.add(lamp);
  }

  private buildPharmacy() {
    // 9. Ruang Farmasi (South-West: x: -14 to -30, z: 12 to 28)
    const counter = new THREE.Mesh(new THREE.BoxGeometry(6.0, 1.1, 0.8), new THREE.MeshStandardMaterial({ color: '#0d9488', roughness: 0.3 }));
    counter.position.set(-22, 0.55, 16);
    counter.castShadow = true;
    this.scene.add(counter);
    this.addCollider(new THREE.Box3().setFromObject(counter));

    // Shelves of medicine boxes
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(5.6, 2.8, 0.4), new THREE.MeshStandardMaterial({ color: '#e2e8f0', roughness: 0.5 }));
    shelf.position.set(-22, 1.4, 21);
    this.scene.add(shelf);
    this.addCollider(new THREE.Box3().setFromObject(shelf));

    // Hotspot for Pharmacist NPC
    this.hotspots.push({
      id: 'hs-pharmacist',
      name: 'Apoteker Farmasi Klinis',
      type: 'pharmacist',
      position: new THREE.Vector3(-22, 0, 17.5),
      radius: 2.5,
      dialogueSpeaker: 'Apoteker RS',
      roomName: 'Ruang Farmasi',
      promptAction: 'Konsultasi Interaksi Obat & Rekonsiliasi Farmasi',
    });
  }

  private buildLaboratory() {
    // 10. Laboratorium RS (South-East: x: 14 to 30, z: 12 to 28)
    const labBench = new THREE.Mesh(new THREE.BoxGeometry(6.0, 1.0, 1.2), new THREE.MeshStandardMaterial({ color: '#475569', roughness: 0.2 }));
    labBench.position.set(22, 0.5, 16);
    labBench.castShadow = true;
    this.scene.add(labBench);
    this.addCollider(new THREE.Box3().setFromObject(labBench));

    // Microscope & Centrifuge
    const scope = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.4, 12), new THREE.MeshStandardMaterial({ color: '#1e293b' }));
    scope.position.set(20.5, 1.2, 16);
    this.scene.add(scope);

    // Hotspot for Lab Technician
    this.hotspots.push({
      id: 'hs-lab-tech',
      name: 'Petugas Laboratorium Patologi Klinis',
      type: 'lab_tech',
      position: new THREE.Vector3(22, 0, 17.5),
      radius: 2.5,
      dialogueSpeaker: 'Petugas Lab',
      roomName: 'Laboratorium',
      promptAction: 'Konfirmasi Nilai Kritis Lab (Tryptase/Kreatinin/G6PD)',
    });
  }

  private buildObservationRoom() {
    // 11. Ruang Observasi Pasien (x: -22, z: 6)
    const obsBed = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.45, 2.2), new THREE.MeshStandardMaterial({ color: '#38bdf8' }));
    obsBed.position.set(-22, 0.35, 6);
    this.scene.add(obsBed);
    this.addCollider(new THREE.Box3().setFromObject(obsBed));
  }

  private buildConferenceRoom() {
    // 12. Ruang Rapat Medis (South: x: -6 to 6, z: 22 to 30)
    const tableMat = new THREE.MeshStandardMaterial({ color: '#78350f', roughness: 0.3 });
    const confTable = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.9, 2.2), tableMat);
    confTable.position.set(0, 0.45, 26);
    confTable.castShadow = true;
    this.scene.add(confTable);
    this.addCollider(new THREE.Box3().setFromObject(confTable));

    // Presentation projector screen
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 2.2), new THREE.MeshBasicMaterial({ color: '#ffffff' }));
    screen.position.set(0, 2.4, 31.8);
    screen.rotation.y = Math.PI;
    this.scene.add(screen);
  }

  private buildFamilyLounge() {
    // 13. Ruang Keluarga Pasien (x: 8, z: 12)
    const couch = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.6, 0.9), new THREE.MeshStandardMaterial({ color: '#0369a1' }));
    couch.position.set(6.5, 0.3, 12);
    this.scene.add(couch);
    this.addCollider(new THREE.Box3().setFromObject(couch));

    // Hotspot for Family member
    this.hotspots.push({
      id: 'hs-family-member',
      name: 'Keluarga Pasien (Pendamping)',
      type: 'family',
      position: new THREE.Vector3(6.5, 0, 13.5),
      radius: 2.5,
      dialogueSpeaker: 'Keluarga Pasien',
      roomName: 'Ruang Keluarga',
      promptAction: 'Komunikasi & Edukasi Keluarga Pasien',
    });
  }

  private buildEducationRoom() {
    // 14. Ruang Edukasi Pasien (x: -8, z: 12)
    const eduBoard = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 0.08), new THREE.MeshStandardMaterial({ color: '#ffffff' }));
    eduBoard.position.set(-6.5, 2.0, 12);
    this.scene.add(eduBoard);
  }

  private buildCorridorsAndWayfinding() {
    // 15. Hospital Corridors with ceiling signage & lights
    const createSignBoard = (text: string, x: number, y: number, z: number, rotY: number = 0) => {
      const tex = createRoomSignTexture(text);
      const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.65), new THREE.MeshBasicMaterial({ map: tex }));
      signMesh.position.set(x, y, z);
      signMesh.rotation.y = rotY;
      this.scene.add(signMesh);
    };

    // Signs at corridor intersections
    createSignBoard('IGD & RESUSITASI ➔', -6, 3.2, -4, Math.PI * 0.5);
    createSignBoard('FARMASI & OBAT ➔', -6, 3.2, 4, Math.PI * 0.5);
    createSignBoard('⮜ RAWAT INAP MELATI', 6, 3.2, -4, -Math.PI * 0.5);
    createSignBoard('⮜ LABORATORIUM RS', 6, 3.2, 4, -Math.PI * 0.5);
  }
}
