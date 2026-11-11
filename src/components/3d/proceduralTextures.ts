import * as THREE from 'three';

/**
 * Procedural texture generators for Hospital 3D environment and cartoon characters.
 * Ensures 100% zero external file dependencies with crisp anisotropic rendering.
 */

export function createFloorTileTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  // Medical hospital vinyl / epoxy tile base
  ctx.fillStyle = '#f1f5f9';
  ctx.fillRect(0, 0, 512, 512);

  // Subtle clean grid pattern
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 4;
  ctx.strokeRect(0, 0, 512, 512);

  // Cross accent lines for 4 tiles
  ctx.beginPath();
  ctx.moveTo(256, 0);
  ctx.lineTo(256, 512);
  ctx.moveTo(0, 256);
  ctx.lineTo(512, 256);
  ctx.stroke();

  // Subtle gloss speckles
  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.fillRect(20, 20, 216, 216);
  ctx.fillRect(276, 276, 216, 216);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(16, 16);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createWoodFloorTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#d7b899';
  ctx.fillRect(0, 0, 256, 256);

  // Wood planks
  ctx.fillStyle = '#c5a07c';
  for (let i = 0; i < 4; i++) {
    ctx.fillRect(0, i * 64, 256, 60);
  }
  ctx.strokeStyle = '#936a46';
  ctx.lineWidth = 2;
  for (let i = 0; i <= 4; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * 64);
    ctx.lineTo(256, i * 64);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createFaceTexture(
  expression: 'neutral' | 'smile' | 'concerned' | 'pain' | 'talking' = 'smile',
  hasBlush: boolean = true
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  // Skin base
  ctx.fillStyle = '#fed7aa';
  ctx.fillRect(0, 0, 256, 256);

  // Big cute cartoon eyes (Funko / Roblox style)
  // Left eye
  ctx.fillStyle = '#1e293b';
  ctx.beginPath();
  ctx.arc(80, 115, 22, 0, Math.PI * 2);
  ctx.fill();

  // Right eye
  ctx.beginPath();
  ctx.arc(176, 115, 22, 0, Math.PI * 2);
  ctx.fill();

  // Eye highlights (white shine)
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(73, 107, 7, 0, Math.PI * 2);
  ctx.arc(87, 122, 3.5, 0, Math.PI * 2);
  ctx.arc(169, 107, 7, 0, Math.PI * 2);
  ctx.arc(183, 122, 3.5, 0, Math.PI * 2);
  ctx.fill();

  // Eyelashes
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(60, 98);
  ctx.lineTo(70, 93);
  ctx.moveTo(90, 93);
  ctx.lineTo(100, 98);
  ctx.moveTo(156, 98);
  ctx.lineTo(166, 93);
  ctx.moveTo(186, 93);
  ctx.lineTo(196, 98);
  ctx.stroke();

  // Cute eyebrows
  ctx.lineWidth = 4;
  ctx.beginPath();
  if (expression === 'concerned' || expression === 'pain') {
    // Inverted eyebrows (worried)
    ctx.moveTo(65, 85);
    ctx.quadraticCurveTo(80, 78, 100, 83);
    ctx.moveTo(156, 83);
    ctx.quadraticCurveTo(176, 78, 191, 85);
  } else {
    // Gentle curved eyebrows
    ctx.moveTo(65, 80);
    ctx.quadraticCurveTo(80, 73, 98, 80);
    ctx.moveTo(158, 80);
    ctx.quadraticCurveTo(176, 73, 191, 80);
  }
  ctx.stroke();

  // Blushing cheeks
  if (hasBlush) {
    ctx.fillStyle = 'rgba(244, 63, 94, 0.35)';
    ctx.beginPath();
    ctx.ellipse(65, 145, 16, 9, 0, 0, Math.PI * 2);
    ctx.ellipse(191, 145, 16, 9, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Mouth expressions
  ctx.strokeStyle = '#881337';
  ctx.lineWidth = 4;
  ctx.beginPath();
  if (expression === 'smile') {
    ctx.arc(128, 155, 18, 0.15 * Math.PI, 0.85 * Math.PI);
  } else if (expression === 'talking') {
    ctx.fillStyle = '#9f1239';
    ctx.ellipse(128, 165, 14, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(122, 158, 12, 4); // teeth
  } else if (expression === 'concerned') {
    ctx.moveTo(115, 170);
    ctx.quadraticCurveTo(128, 160, 141, 170);
  } else if (expression === 'pain') {
    ctx.fillStyle = '#881337';
    ctx.arc(128, 172, 15, 1.1 * Math.PI, 1.9 * Math.PI);
    ctx.stroke();
  } else {
    // Neutral
    ctx.moveTo(118, 168);
    ctx.lineTo(138, 168);
  }
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createMonitorTexture(
  bp: string = '120/80',
  hr: number = 75,
  spo2: number = 98,
  patientName: string = 'Pasien',
  isAlarm: boolean = false
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 340;
  const ctx = canvas.getContext('2d')!;

  // Screen frame
  ctx.fillStyle = isAlarm ? '#1e0505' : '#030712';
  ctx.fillRect(0, 0, 512, 340);

  // Top status bar
  ctx.fillStyle = isAlarm ? '#ef4444' : '#1e293b';
  ctx.fillRect(0, 0, 512, 40);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 18px sans-serif';
  ctx.fillText(`BED MONITOR: ${patientName.toUpperCase()}`, 16, 26);
  ctx.fillStyle = '#22c55e';
  ctx.font = 'bold 16px sans-serif';
  ctx.fillText('LEAD II  x1.0', 380, 26);

  // ECG Trace (Green wave)
  ctx.strokeStyle = '#22c55e';
  ctx.lineWidth = 3;
  ctx.beginPath();
  let x = 16;
  const yBase = 110;
  ctx.moveTo(x, yBase);
  for (let i = 0; i < 4; i++) {
    ctx.lineTo(x + 20, yBase);
    ctx.lineTo(x + 30, yBase - 8); // P wave
    ctx.lineTo(x + 40, yBase);
    ctx.lineTo(x + 46, yBase + 6); // Q
    ctx.lineTo(x + 52, yBase - 48); // R peak
    ctx.lineTo(x + 58, yBase + 16); // S
    ctx.lineTo(x + 64, yBase);
    ctx.lineTo(x + 80, yBase - 14); // T wave
    ctx.lineTo(x + 95, yBase);
    x += 95;
  }
  ctx.stroke();

  // SpO2 Plethysmograph (Cyan wave)
  ctx.strokeStyle = '#06b6d4';
  ctx.lineWidth = 3;
  ctx.beginPath();
  x = 16;
  const ySpO2 = 180;
  ctx.moveTo(x, ySpO2);
  for (let i = 0; i < 6; i++) {
    ctx.quadraticCurveTo(x + 15, ySpO2 - 25, x + 30, ySpO2 - 20);
    ctx.quadraticCurveTo(x + 45, ySpO2 - 8, x + 60, ySpO2);
    x += 60;
  }
  ctx.stroke();

  // Numerical parameters panel on right
  ctx.fillStyle = '#111827';
  ctx.fillRect(380, 48, 120, 280);

  // HR
  ctx.fillStyle = '#22c55e';
  ctx.font = '14px sans-serif';
  ctx.fillText('HR (bpm)', 390, 75);
  ctx.font = 'bold 36px monospace';
  ctx.fillText(String(hr), 390, 115);

  // SpO2
  ctx.fillStyle = '#06b6d4';
  ctx.font = '14px sans-serif';
  ctx.fillText('SpO2 (%)', 390, 155);
  ctx.font = 'bold 36px monospace';
  ctx.fillText(String(spo2), 390, 195);

  // NIBP
  ctx.fillStyle = isAlarm ? '#f87171' : '#f59e0b';
  ctx.font = '14px sans-serif';
  ctx.fillText('NIBP (mmHg)', 390, 235);
  ctx.font = 'bold 24px monospace';
  ctx.fillText(bp, 390, 270);

  // RR
  ctx.fillStyle = '#a855f7';
  ctx.font = '14px sans-serif';
  ctx.fillText('RR: 18 /min', 390, 310);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function createRoomSignTexture(roomName: string, iconSymbol: string = '🏥'): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;

  // Medical Blue sign board
  ctx.fillStyle = '#0284c7';
  ctx.fillRect(0, 0, 512, 128);

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 6;
  ctx.strokeRect(8, 8, 496, 112);

  // Icon symbol & text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 44px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`${iconSymbol} ${roomName.toUpperCase()}`, 256, 80);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
