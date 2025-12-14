<script>
  import { onMount } from 'svelte';

  const PETAL_MIN_SCALE = 0.3;
  const MELTING_SPEED = 1.15;
  // 부드러운 파스텔 핑크 꽃잎 색상 배열
  const PETAL_COLORS = ['#ffcce6', '#ffb3d9', '#ff99cc', '#ffb3e0', '#ffcce8', '#ffd6eb', '#ffe6f2'];
  const TARGET_FPS = 60;
  const MS_BETWEEN_FRAMES = 1000 / TARGET_FPS;

  // 다양한 꽃잎 모양 정의 (15가지)
  const PETAL_SHAPES = [
    // 모양 1: 기본 타원형
    "M50 8 C58 10, 68 18, 72 28 C75 36, 74 46, 70 56 C67 64, 62 72, 55 78 C52 82, 48 84, 45 85 C42 84, 38 82, 35 78 C28 72, 23 64, 20 56 C16 46, 15 36, 18 28 C22 18, 32 10, 42 8 C45 7, 47.5 7, 50 8 Z",
    // 모양 2: 더 길고 좁은 모양
    "M50 5 C56 8, 62 15, 66 25 C68 35, 67 45, 63 55 C60 65, 55 75, 50 82 C47 85, 45 86, 43 85 C40 84, 37 82, 34 78 C28 72, 24 64, 22 56 C20 46, 21 36, 24 28 C28 18, 36 10, 44 6 C46 5, 48 5, 50 5 Z",
    // 모양 3: 더 둥글고 부풀은 모양
    "M50 10 C60 12, 72 20, 76 32 C78 42, 75 52, 68 62 C63 70, 57 76, 50 80 C45 82, 42 83, 40 82 C37 81, 34 79, 32 75 C25 69, 20 61, 18 53 C16 43, 18 33, 23 25 C29 17, 38 12, 46 10 C48 9, 49 9, 50 10 Z",
    // 모양 4: 비대칭 왼쪽 기울기
    "M50 8 C55 10, 65 16, 70 26 C73 36, 72 46, 68 56 C65 66, 60 74, 53 80 C50 83, 47 84, 44 83 C41 82, 38 80, 35 76 C28 70, 23 62, 20 54 C17 44, 18 34, 22 26 C26 16, 34 10, 44 8 C46 7, 48 7, 50 8 Z",
    // 모양 5: 비대칭 오른쪽 기울기
    "M50 8 C57 10, 67 18, 72 28 C75 38, 73 48, 69 58 C66 68, 61 76, 54 82 C51 85, 48 86, 45 85 C42 84, 39 82, 36 78 C31 72, 26 64, 23 56 C20 46, 21 36, 25 28 C29 18, 37 10, 45 8 C47 7, 48.5 7, 50 8 Z",
    // 모양 6: 더 뾰족한 모양
    "M50 3 C54 6, 60 12, 65 22 C67 32, 66 42, 62 52 C59 62, 54 72, 48 80 C45 83, 43 84, 41 83 C39 82, 37 80, 35 76 C30 70, 26 62, 24 54 C22 44, 23 34, 27 26 C31 16, 38 8, 46 4 C47 3, 48.5 3, 50 3 Z",
    // 모양 7: 심장형 모양
    "M50 15 C60 8, 72 12, 78 25 C80 35, 77 45, 70 55 C65 65, 58 72, 50 78 C42 72, 35 65, 30 55 C23 45, 20 35, 22 25 C28 12, 40 8, 50 15 Z",
    // 모양 8: 물결 모양
    "M50 8 C58 12, 66 15, 72 25 C75 35, 73 45, 68 55 C63 62, 55 68, 50 72 C45 68, 37 62, 32 55 C27 45, 25 35, 28 25 C34 15, 42 12, 50 8 Z",
    // 모양 9: 별 모양 느낌
    "M50 5 C55 8, 62 12, 68 18 C72 25, 70 32, 65 38 C60 42, 55 45, 50 48 C45 45, 40 42, 35 38 C30 32, 28 25, 32 18 C38 12, 45 8, 50 5 Z",
    // 모양 10: 리본 모양
    "M50 10 C58 8, 68 12, 74 22 C76 32, 73 42, 66 50 C60 56, 52 60, 50 62 C48 60, 40 56, 34 50 C27 42, 24 32, 26 22 C32 12, 42 8, 50 10 Z",
    // 모양 11: 나비 날개 모양
    "M50 8 C56 10, 64 15, 70 25 C72 35, 69 45, 62 55 C57 62, 50 66, 50 68 C50 66, 43 62, 38 55 C31 45, 28 35, 30 25 C36 15, 44 10, 50 8 Z",
    // 모양 12: 잎사귀 모양
    "M50 5 C55 7, 62 10, 68 18 C70 28, 67 38, 60 48 C55 55, 48 60, 45 62 C40 58, 35 52, 32 44 C30 36, 32 26, 38 18 C44 10, 48 7, 50 5 Z",
    // 모양 13: 꽃잎 끝이 둥글게
    "M50 8 C58 10, 68 15, 74 25 C76 35, 74 45, 68 55 C62 62, 55 68, 50 70 C45 68, 38 62, 32 55 C26 45, 24 35, 26 25 C32 15, 42 10, 50 8 Z",
    // 모양 14: 더 넓은 모양
    "M50 12 C62 14, 76 22, 82 35 C84 45, 80 55, 72 65 C65 72, 57 76, 50 78 C43 76, 35 72, 28 65 C20 55, 16 45, 18 35 C24 22, 38 14, 50 12 Z",
    // 모양 15: 아기 꽃잎 모양
    "M50 15 C56 17, 64 20, 70 28 C72 36, 70 44, 64 52 C58 58, 52 62, 50 63 C48 62, 42 58, 36 52 C30 44, 28 36, 30 28 C36 20, 44 17, 50 15 Z"
  ];

  // 디바이스 타입에 따른 꽃잎 수 결정
  function getPetalsCount() {
    if (typeof window === 'undefined') return 50; // SSR 기본값

    // 모바일 감지: 화면 너비가 768px 이하이거나 터치 디바이스
    const isMobile = window.innerWidth <= 768 ||
                     ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    return isMobile ? 30 : 70; // 모바일: 30개, PC: 70개
  }

  const PETALS_COUNT = getPetalsCount();

  function randomPetalConfig(i) {
    const initialX = -20 + Math.random() * 120;
    return {
      scale: PETAL_MIN_SCALE + Math.random() * (1 - PETAL_MIN_SCALE),
      x: initialX,
      y: -100 + Math.random() * 200,
      rotation: Math.floor(Math.random() * 360), // 더 다양한 초기 회전 각도
      shape: Math.floor(Math.random() * PETAL_SHAPES.length), // 랜덤 모양 선택
      color: PETAL_COLORS[i % PETAL_COLORS.length],
      opacity: 0.999,
      // 각 꽃잎마다 고유한 물리 속성
      fallSpeed: 0.1 + Math.random() * 0.3, // 떨어지는 속도 더 다양화 (0.1 ~ 0.4)
      windSensitivity: 0.8 + Math.random() * 2.0, // 바람 민감도 증가 (0.8 ~ 2.8)
      rotationSpeed: 0, // 회전 속도 0으로 설정하여 회전하지 않음
      swayPhase: Math.random() * Math.PI * 2, // 좌우 흔들림 위상 (주요 흔들림)
      swayPhase2: Math.random() * Math.PI * 2, // 보조 흔들림 위상 (더 빠른 미세한 움직임)
      windPhase: Math.random() * Math.PI * 2, // 바람 위상
      horizontalDrift: (Math.random() - 0.5) * 0.08, // 기본 수평 이동 증가
      baseX: initialX, // 기준 X 위치 (흔들림 계산용)
    };
  }

  let petals = new Array(PETALS_COUNT)
    .fill()
    .map((_, i) => randomPetalConfig(i))
    .sort((a, b) => a.scale - b.scale);

  onMount(() => {
    let frame, lastTime;
    let globalTime = 0; // 전역 시간 (바람 효과용)

    function loop(timestamp) {
      frame = requestAnimationFrame(loop);

      const elapsed = timestamp - lastTime;
      lastTime = timestamp;
      globalTime += elapsed * 0.001; // 초 단위로 변환

      let framesCompleted = elapsed / MS_BETWEEN_FRAMES;

      if (isNaN(framesCompleted)) {
        framesCompleted = 1;
      }

      // 전역 바람 효과 (시간에 따라 변함)
      const windStrength = 0.04 + Math.sin(globalTime * 0.3) * 0.025; // 바람 강도 변화
      const windDirection = Math.sin(globalTime * 0.2) * 1.2; // 바람 방향 변화

      petals = petals.map((petal) => {
        if (petal.y >= 100) {
          petal.opacity = Math.pow(petal.opacity, MELTING_SPEED);
        } else {
          // 떨어지는 속도 (각 꽃잎마다 다름)
          petal.y += petal.fallSpeed * petal.scale * framesCompleted;

          // 바람 효과 계산
          const windPhase = petal.windPhase + globalTime * 0.5;
          const swayPhase = petal.swayPhase + globalTime * 0.6; // 주요 흔들림 (느린 파형)
          const swayPhase2 = petal.swayPhase2 + globalTime * 1.2; // 보조 흔들림 (빠른 미세한 움직임)

          // 다층 좌우 흔들림 효과 (여러 주파수 결합) - 강도 증가
          const mainSway = Math.sin(swayPhase) * 6.0 * petal.windSensitivity; // 주요 흔들림 강도 증가
          const subSway = Math.sin(swayPhase2) * 2.0 * petal.windSensitivity; // 미세한 흔들림 강도 증가
          const windSway = Math.cos(windPhase) * 4.0 * petal.windSensitivity; // 바람에 의한 흔들림 강도 증가
          const totalSway = mainSway + subSway + windSway;

          // 전역 바람 효과
          const globalWindEffect = windDirection * windStrength * petal.windSensitivity;

          // 기준 위치 업데이트 (기본 드리프트)
          petal.baseX += petal.horizontalDrift * framesCompleted;

          // 실제 X 위치 = 기준 위치 + 흔들림 효과
          petal.x = petal.baseX + totalSway + globalWindEffect * 20;

          // 바람에 따라 꽃잎이 기울어지는 효과 (흔들림 방향에 따라 회전)
          const tiltAngle = totalSway * 0.5; // 흔들림에 비례하여 기울기
          const rotationVariation = Math.sin(windPhase * 0.7) * 1.2; // 바람에 의한 회전 변화

          // 회전 효과 제거 - 각 꽃잎이 고정된 랜덤 회전 각도를 유지

          // 회전 각도 정규화 (0~360도 유지)
          if (petal.rotation >= 360) petal.rotation -= 360;
          if (petal.rotation < 0) petal.rotation += 360;

          // 위상 업데이트
          petal.swayPhase += 0.03 * framesCompleted;
          petal.swayPhase2 += 0.05 * framesCompleted;
          petal.windPhase += 0.02 * framesCompleted;
        }

        if (petal.opacity <= 0.02) {
          // 꽃잎 재생성 시 새로운 물리 속성과 모양 설정
          const newConfig = randomPetalConfig(Math.floor(Math.random() * PETALS_COUNT));
          petal.y = -20;
          const newX = -20 + Math.random() * 120;
          petal.x = newX;
          petal.baseX = newX;
          petal.opacity = 0.999;
          petal.shape = newConfig.shape;
          petal.fallSpeed = newConfig.fallSpeed;
          petal.windSensitivity = newConfig.windSensitivity;
          petal.rotation = newConfig.rotation; // 재생성 시 새로운 랜덤 회전 각도 적용
          petal.rotationSpeed = newConfig.rotationSpeed;
          petal.swayPhase = newConfig.swayPhase;
          petal.swayPhase2 = newConfig.swayPhase2;
          petal.windPhase = newConfig.windPhase;
          petal.horizontalDrift = newConfig.horizontalDrift;
        }
        return petal;
      });
    }

    loop();

    return () => cancelAnimationFrame(frame);
  });
</script>

<div class="petalframe" aria-hidden="true">
  {#each petals as petal}
    <svg
      class="petal"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 140"
      style="opacity: {petal.opacity}; transform-origin: center; transform: translateX({petal.x - petal.baseX}px) rotate({petal.rotation}deg) scale({petal.scale}); left: {petal.baseX}%; top: calc({petal.y}% - {petal.scale * 2}rem); width: {petal.scale * 2}rem; height: {petal.scale * 2.8}rem;"
    >
      <defs>
        <!-- 그라데이션: 상단에 노란색 힌트, 중앙은 핑크, 하단은 반투명 -->
        <linearGradient id="petalGradient-{petal.color.replace('#', '')}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#fff9e6;stop-opacity:0.4" />
          <stop offset="15%" style="stop-color:{petal.color};stop-opacity:0.9" />
          <stop offset="50%" style="stop-color:{petal.color};stop-opacity:0.85" />
          <stop offset="100%" style="stop-color:{petal.color};stop-opacity:0.6" />
        </linearGradient>
        <!-- 방사형 그라데이션: 중심부 하이라이트 -->
        <radialGradient id="petalHighlight-{petal.color.replace('#', '')}" cx="50%" cy="30%" r="40%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:{petal.color};stop-opacity:0" />
        </radialGradient>
      </defs>
      <!-- 메인 꽃잎 형태: 랜덤하게 선택된 다양한 모양 -->
      <path d="{PETAL_SHAPES[petal.shape]}"
        fill="url(#petalGradient-{petal.color.replace('#', '')})"
      />
      <!-- 상단 오른쪽 노란색 힌트 -->
      <ellipse cx="65" cy="20" rx="8" ry="6"
        fill="#fff9e6"
        opacity="0.25"
        transform="rotate(-15 65 20)"
      />
      <!-- 중심부 하이라이트 -->
      <ellipse cx="50" cy="35" rx="25" ry="20"
        fill="url(#petalHighlight-{petal.color.replace('#', '')})"
      />
      <!-- 부드러운 가장자리 텍스처 (약간의 물결) -->
      <path d="{PETAL_SHAPES[petal.shape].split('Z')[0]}"
        fill="none"
        stroke="{petal.color}"
        stroke-width="0.3"
        opacity="0.15"
      />
    </svg>
  {/each}
</div>

<style>
  .petalframe {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 1000;
  }

  .petal {
    position: absolute;
    user-select: none;
    pointer-events: none;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
</style>