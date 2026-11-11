import * as THREE from 'three';
import { createFaceTexture } from './proceduralTextures';

export interface CharacterConfig {
  name: string;
  role: 'student_nurse' | 'doctor_male' | 'doctor_female' | 'nurse_female' | 'nurse_male' | 'pharmacist' | 'lab_tech' | 'patient_adult' | 'patient_elderly' | 'patient_child' | 'family';
  gender: 'female' | 'male';
  hasHijab: boolean;
  hijabColor?: string;
  scrubColor?: string;
  coatColor?: string;
  skinColor?: string;
  scale?: number;
}

export class CharacterModel {
  public group: THREE.Group;
  public headGroup: THREE.Group;
  public bodyGroup: THREE.Group;
  public leftArm: THREE.Group;
  public rightArm: THREE.Group;
  public leftLeg: THREE.Group;
  public rightLeg: THREE.Group;
  public stethoscope: THREE.Group | null = null;
  public mouthMesh: THREE.Mesh | null = null;
  public nameTagMesh: THREE.Mesh | null = null;

  private walkPhase: number = 0;
  private animState: 'idle' | 'walk' | 'run' | 'talk' | 'examine' = 'idle';
  private config: CharacterConfig;

  constructor(config: CharacterConfig) {
    this.config = config;
    this.group = new THREE.Group();
    this.group.name = config.name;

    const scale = config.scale || 1.0;
    this.group.scale.set(scale, scale, scale);

    const skinTone = config.skinColor || '#fed7aa';
    const scrubColor = config.scrubColor || '#0284c7'; // Medical cyan/blue
    const hijabColor = config.hijabColor || '#0f172a'; // Navy/dark default

    // Materials
    const skinMat = new THREE.MeshStandardMaterial({
      color: skinTone,
      roughness: 0.6,
      metalness: 0.05,
    });

    const scrubMat = new THREE.MeshStandardMaterial({
      color: scrubColor,
      roughness: 0.7,
      metalness: 0.0,
    });

    const shoeMat = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      roughness: 0.4,
      metalness: 0.1,
    });

    // 1. Root and Torso / Body Group
    this.bodyGroup = new THREE.Group();
    this.bodyGroup.position.y = 1.0; // Torso center height

    // Torso (Scrub Top)
    const torsoGeo = new THREE.BoxGeometry(0.68, 0.76, 0.42);
    const torsoMesh = new THREE.Mesh(torsoGeo, scrubMat);
    torsoMesh.castShadow = true;
    torsoMesh.receiveShadow = true;
    this.bodyGroup.add(torsoMesh);

    // Doctor Lab Coat overlay if role is doctor
    if (config.role === 'doctor_male' || config.role === 'doctor_female' || config.role === 'lab_tech') {
      const coatMat = new THREE.MeshStandardMaterial({
        color: '#f8fafc',
        roughness: 0.5,
        metalness: 0.05,
      });
      // Left and right coat lapels
      const lapelLeft = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.78, 0.44), coatMat);
      lapelLeft.position.set(-0.26, 0, 0.01);
      lapelLeft.castShadow = true;
      this.bodyGroup.add(lapelLeft);

      const lapelRight = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.78, 0.44), coatMat);
      lapelRight.position.set(0.26, 0, 0.01);
      lapelRight.castShadow = true;
      this.bodyGroup.add(lapelRight);

      // Coat back
      const coatBack = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.78, 0.1), coatMat);
      coatBack.position.set(0, 0, -0.18);
      this.bodyGroup.add(coatBack);
    }

    // Name Tag Badge on chest
    const tagCanvas = document.createElement('canvas');
    tagCanvas.width = 128;
    tagCanvas.height = 64;
    const tagCtx = tagCanvas.getContext('2d')!;
    tagCtx.fillStyle = '#ffffff';
    tagCtx.fillRect(0, 0, 128, 64);
    tagCtx.fillStyle = '#0284c7';
    tagCtx.fillRect(0, 0, 128, 16);
    tagCtx.fillStyle = '#0f172a';
    tagCtx.font = 'bold 20px sans-serif';
    tagCtx.textAlign = 'center';
    tagCtx.fillText(config.name.split(' ')[0] || 'NERS', 64, 45);
    const tagTex = new THREE.CanvasTexture(tagCanvas);
    tagTex.colorSpace = THREE.SRGBColorSpace;

    const tagGeo = new THREE.PlaneGeometry(0.22, 0.11);
    const tagMat = new THREE.MeshStandardMaterial({
      map: tagTex,
      roughness: 0.3,
      metalness: 0.2,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
    });
    this.nameTagMesh = new THREE.Mesh(tagGeo, tagMat);
    this.nameTagMesh.position.set(0.2, 0.18, 0.22);
    this.bodyGroup.add(this.nameTagMesh);

    // Stethoscope around neck
    if (config.role.includes('doctor') || config.role.includes('nurse')) {
      const stethMat = new THREE.MeshStandardMaterial({
        color: '#0284c7',
        roughness: 0.3,
        metalness: 0.6,
      });
      const stethTube = new THREE.Mesh(
        new THREE.TorusGeometry(0.24, 0.035, 8, 24, Math.PI * 1.1),
        stethMat
      );
      stethTube.rotation.x = Math.PI * 0.45;
      stethTube.position.set(0, 0.3, 0.08);
      this.bodyGroup.add(stethTube);

      // Chest piece
      const chestPiece = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 0.03, 16),
        new THREE.MeshStandardMaterial({ color: '#cbd5e1', metalness: 0.9, roughness: 0.2 })
      );
      chestPiece.rotation.x = Math.PI * 0.5;
      chestPiece.position.set(-0.1, -0.05, 0.23);
      this.bodyGroup.add(chestPiece);
    }

    // 2. Head Group (Funko / Cartoon big expressive head)
    this.headGroup = new THREE.Group();
    this.headGroup.position.y = 1.62;

    // Head base block/rounded cube
    const headGeo = new THREE.BoxGeometry(0.72, 0.66, 0.64);
    const headFaceTex = createFaceTexture('smile', true);

    // Multi-material for head: face on front (+Z), skin/hijab on others
    const headFaceMat = new THREE.MeshStandardMaterial({
      map: headFaceTex,
      roughness: 0.5,
      metalness: 0.05,
    });

    const headMatArray = [
      skinMat, // +X right
      skinMat, // -X left
      skinMat, // +Y top
      skinMat, // -Y bottom
      headFaceMat, // +Z front face
      skinMat, // -Z back
    ];
    const headMesh = new THREE.Mesh(headGeo, headMatArray);
    headMesh.castShadow = true;
    this.headGroup.add(headMesh);

    // 3. Hijab / Hair
    if (config.hasHijab) {
      const hijabMat = new THREE.MeshStandardMaterial({
        color: hijabColor,
        roughness: 0.75,
        metalness: 0.0,
      });

      // Hijab cowl covering top, sides, and back
      const hijabTop = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.22, 0.68), hijabMat);
      hijabTop.position.set(0, 0.26, 0.01);
      hijabTop.castShadow = true;
      this.headGroup.add(hijabTop);

      const hijabBack = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.68, 0.18), hijabMat);
      hijabBack.position.set(0, 0.02, -0.28);
      hijabBack.castShadow = true;
      this.headGroup.add(hijabBack);

      const hijabLeft = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.64, 0.66), hijabMat);
      hijabLeft.position.set(-0.35, 0.01, 0.02);
      this.headGroup.add(hijabLeft);

      const hijabRight = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.64, 0.66), hijabMat);
      hijabRight.position.set(0.35, 0.01, 0.02);
      this.headGroup.add(hijabRight);

      // Hijab drape over shoulders
      const drapeGeo = new THREE.CylinderGeometry(0.38, 0.48, 0.32, 16);
      const drapeMesh = new THREE.Mesh(drapeGeo, hijabMat);
      drapeMesh.position.set(0, -0.36, 0);
      drapeMesh.castShadow = true;
      this.headGroup.add(drapeMesh);
    } else {
      // Normal hair for male characters / non-hijab
      const hairMat = new THREE.MeshStandardMaterial({
        color: '#1e293b',
        roughness: 0.8,
      });
      const hairMesh = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.24, 0.68), hairMat);
      hairMesh.position.set(0, 0.26, 0.02);
      hairMesh.castShadow = true;
      this.headGroup.add(hairMesh);

      const hairBack = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.42, 0.16), hairMat);
      hairBack.position.set(0, 0.1, -0.28);
      this.headGroup.add(hairBack);
    }

    this.group.add(this.bodyGroup);
    this.group.add(this.headGroup);

    // 4. Arms
    // Left Arm
    this.leftArm = new THREE.Group();
    this.leftArm.position.set(-0.44, 1.3, 0);
    const armGeo = new THREE.BoxGeometry(0.2, 0.66, 0.22);
    // Pivot at shoulder (shift geometry downward)
    armGeo.translate(0, -0.26, 0);
    const leftArmMesh = new THREE.Mesh(armGeo, scrubMat);
    leftArmMesh.castShadow = true;
    this.leftArm.add(leftArmMesh);

    // Left hand
    const handGeo = new THREE.SphereGeometry(0.1, 12, 12);
    handGeo.translate(0, -0.56, 0);
    const leftHandMesh = new THREE.Mesh(handGeo, skinMat);
    this.leftArm.add(leftHandMesh);
    this.group.add(this.leftArm);

    // Right Arm
    this.rightArm = new THREE.Group();
    this.rightArm.position.set(0.44, 1.3, 0);
    const rightArmMesh = new THREE.Mesh(armGeo.clone(), scrubMat);
    rightArmMesh.castShadow = true;
    this.rightArm.add(rightArmMesh);

    const rightHandMesh = new THREE.Mesh(handGeo.clone(), skinMat);
    this.rightArm.add(rightHandMesh);

    // Add clipboard/chart on right hand for nurses/doctors
    if (config.role === 'student_nurse' || config.role.includes('nurse') || config.role.includes('doctor')) {
      const boardGeo = new THREE.BoxGeometry(0.24, 0.34, 0.03);
      const boardMat = new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.4 });
      const clipboard = new THREE.Mesh(boardGeo, boardMat);
      clipboard.position.set(0, -0.54, 0.12);
      clipboard.rotation.x = -Math.PI * 0.15;
      this.rightArm.add(clipboard);
    }
    this.group.add(this.rightArm);

    // 5. Legs
    // Left Leg
    this.leftLeg = new THREE.Group();
    this.leftLeg.position.set(-0.18, 0.68, 0);
    const legGeo = new THREE.BoxGeometry(0.24, 0.66, 0.26);
    legGeo.translate(0, -0.3, 0);
    const leftLegMesh = new THREE.Mesh(legGeo, scrubMat);
    leftLegMesh.castShadow = true;
    this.leftLeg.add(leftLegMesh);

    // Shoe
    const shoeGeo = new THREE.BoxGeometry(0.26, 0.14, 0.36);
    shoeGeo.translate(0, -0.62, 0.04);
    const leftShoe = new THREE.Mesh(shoeGeo, shoeMat);
    leftShoe.castShadow = true;
    this.leftLeg.add(leftShoe);
    this.group.add(this.leftLeg);

    // Right Leg
    this.rightLeg = new THREE.Group();
    this.rightLeg.position.set(0.18, 0.68, 0);
    const rightLegMesh = new THREE.Mesh(legGeo.clone(), scrubMat);
    rightLegMesh.castShadow = true;
    this.rightLeg.add(rightLegMesh);

    const rightShoe = new THREE.Mesh(shoeGeo.clone(), shoeMat);
    rightShoe.castShadow = true;
    this.rightLeg.add(rightShoe);
    this.group.add(this.rightLeg);

    // 6. Ground Shadow Disc
    const shadowGeo = new THREE.CircleGeometry(0.48, 24);
    shadowGeo.rotateX(-Math.PI * 0.5);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.position.y = 0.02;
    this.group.add(shadowMesh);
  }

  public updateScrubColors(hijabColor: string, scrubColor: string) {
    this.group.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
        // If material corresponds to scrub or hijab
        if (child.material.color.getHexString() === new THREE.Color(this.config.scrubColor || '#0284c7').getHexString()) {
          child.material.color.set(scrubColor);
        }
      }
    });
  }

  public setAnimationState(state: 'idle' | 'walk' | 'run' | 'talk' | 'examine') {
    this.animState = state;
  }

  public update(delta: number, speedRatio: number = 0) {
    this.walkPhase += delta * (this.animState === 'run' ? 14 : 9) * (speedRatio > 0 ? speedRatio : 1);

    if (this.animState === 'walk' || this.animState === 'run') {
      const swingMultiplier = this.animState === 'run' ? 0.75 : 0.5;
      const armMultiplier = this.animState === 'run' ? 0.85 : 0.45;

      // Leg swing (opposite phases)
      this.leftLeg.rotation.x = Math.sin(this.walkPhase) * swingMultiplier;
      this.rightLeg.rotation.x = -Math.sin(this.walkPhase) * swingMultiplier;

      // Arm swing (opposite to leg)
      this.leftArm.rotation.x = -Math.sin(this.walkPhase) * armMultiplier;
      this.rightArm.rotation.x = Math.sin(this.walkPhase) * armMultiplier;

      // Torso bobbing and slight tilt
      this.bodyGroup.position.y = 1.0 + Math.abs(Math.sin(this.walkPhase * 2)) * 0.05;
      this.headGroup.position.y = 1.62 + Math.abs(Math.sin(this.walkPhase * 2)) * 0.05;

      if (this.animState === 'run') {
        this.bodyGroup.rotation.x = 0.15; // Lean forward while running
        this.headGroup.rotation.x = -0.05;
      } else {
        this.bodyGroup.rotation.x = 0.04;
        this.headGroup.rotation.x = 0;
      }
    } else if (this.animState === 'talk') {
      // Talking animation: subtle nod and expressive right hand gesture
      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
      this.bodyGroup.position.y = 1.0;
      this.bodyGroup.rotation.x = 0;

      this.headGroup.rotation.x = Math.sin(this.walkPhase * 0.6) * 0.08;
      this.headGroup.rotation.y = Math.sin(this.walkPhase * 0.3) * 0.06;

      this.rightArm.rotation.x = -0.6 + Math.sin(this.walkPhase * 0.8) * 0.2;
      this.rightArm.rotation.z = -0.2 + Math.cos(this.walkPhase * 0.5) * 0.1;
      this.leftArm.rotation.x = Math.sin(this.walkPhase * 0.3) * 0.05;
    } else if (this.animState === 'examine') {
      // Examining patient: bends forward at waist and brings hands forward
      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;

      this.bodyGroup.rotation.x = 0.35; // Bend forward
      this.headGroup.position.set(0, 1.55, 0.18);
      this.headGroup.rotation.x = 0.45; // Look down at patient

      this.leftArm.rotation.x = -0.7;
      this.rightArm.rotation.x = -0.75;
    } else {
      // Idle breathing
      const breath = Math.sin(this.walkPhase * 0.3) * 0.015;
      this.bodyGroup.position.y = 1.0 + breath;
      this.headGroup.position.y = 1.62 + breath * 1.5;
      this.bodyGroup.rotation.x = 0;
      this.headGroup.rotation.x = 0;
      this.headGroup.rotation.y = Math.sin(this.walkPhase * 0.1) * 0.03;

      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
      this.leftArm.rotation.x = Math.sin(this.walkPhase * 0.2) * 0.04;
      this.rightArm.rotation.x = -Math.sin(this.walkPhase * 0.2) * 0.04;
    }
  }
}
