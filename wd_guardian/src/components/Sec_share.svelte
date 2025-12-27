<script>
  /*
   *@Overview 공유하기
   *@History  2025-10-30 / 미친토끼 / 최초생성
  */
  import { onMount } from 'svelte';
  import { copyToClipboard } from '../assets/common.js';

  let isKakaoReady = false;

  // 카카오 API 키 (실제 JavaScript 키로 변경하세요)
  const KAKAO_KEY = '42ee9c640f27e9f870151f580ea95845';

  onMount(() => {
    // 카카오 SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_KEY);
      isKakaoReady = true;
    } else if (window.Kakao && window.Kakao.isInitialized()) {
      isKakaoReady = true;
    } else {
      console.warn('⚠️ 카카오 SDK가 로드되지 않았습니다.');
    }
  });

  // 링크 복사 함수
  async function copyLink() {
    const url = window.location.href;
    await copyToClipboard(url, {
      successMessage: '링크가 복사되었습니다.',
      errorMessage: '링크 복사에 실패했습니다.',
      duration: 3000,
      showTooltip: true,
      onSuccess: null,
      onError: null
    });
  }

  // 카카오톡 공유하기 - 스크랩 메시지 사용
  function shareKakao() {
    if (!window.Kakao || !isKakaoReady) {
      alert('카카오톡 공유 기능을 사용할 수 없습니다.');
      return;
    }

    try {
      // 커스텀 템플릿을 사용하여 전문적인 카드 형식 공유
      window.Kakao.Share.sendScrap({
        requestUrl: window.location.href,
        templateId: 127211, // 커스텀 템플릿 ID 사용
        templateArgs: {
          // 템플릿에 전달할 인자들
          // 카카오톡 개발자 도구에서 따로 설정해둬서 필요없음
          // title: '태수호 💍 전혜선, 결혼합니다',
          // description: '2026년 02월 22일 일요일 오후 1시\nW웨딩 K웨딩홀'
        },
      });
    } catch (err) {
      console.error('카카오톡 공유 실패:', err);
      alert('카카오톡 공유에 실패했습니다.');
    }
  }
</script>

<section class="share-section">
  <div class="share-container">
    <!-- 장식 구분선 -->
    <div class="divider">
      <svg width="100%" height="20" viewBox="0 0 400 20" preserveAspectRatio="none">
        <line x1="0" y1="10" x2="180" y2="10" stroke="#ccc" stroke-width="1"/>
        <circle cx="195" cy="10" r="3" fill="#ccc"/>
        <circle cx="200" cy="10" r="3" fill="#ccc"/>
        <circle cx="205" cy="10" r="3" fill="#ccc"/>
        <line x1="220" y1="10" x2="400" y2="10" stroke="#ccc" stroke-width="1"/>
      </svg>
    </div>

    <div class="share-links">
      <!-- 카카오톡 공유 -->
      <button class="share-link kakao-link" onclick={shareKakao} disabled={!isKakaoReady}>
        <span class="icon">
          <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png" alt="카카오톡" class="kakao-icon" />
        </span>
        <span class="text">카카오톡으로 공유하기</span>
      </button>

      <!-- 링크 복사 -->
      <button class="share-link copy-link" onclick={copyLink}>
        <span class="icon">🔗</span>
        <span class="text">링크복사해서 공유하기</span>
      </button>
    </div>

  </div>
</section>

<style>
  .share-section {
    padding: 60px 20px;
    background-color: #fff;
  }

  .share-container {
    max-width: 420px;
    margin: 0 auto;
    text-align: center;
  }

  .divider {
    margin-bottom: 40px;
    opacity: 0.6;
  }

  .share-links {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .share-link {
    display: flex;
    align-items: center;
    gap: 12px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    color: #333;
    transition: all 0.2s ease;
    padding: 10px 20px;
    border-radius: 8px;
  }

  .share-link:hover:not(:disabled) {
    background-color: #f5f5f5;
    transform: translateX(5px);
  }

  .share-link:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .share-link .icon {
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kakao-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  .kakao-link .icon {
    color: #000;
  }

  .copy-link .icon {
    font-size: 1.2rem;
  }

  .share-link .text {
    font-weight: 500;
  }



  @media (max-width: 480px) {
    .share-link {
      font-size: 1rem;
    }

    .share-link .icon {
      font-size: 1.2rem;
    }
  }
</style>