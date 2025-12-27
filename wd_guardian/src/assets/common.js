/*
 *@Overview 공통 유틸리티 함수들
 *@History  2025-12-28 / AI Assistant / 최초생성
 */

// 툴팁 스타일 추가
(function() {
  if (typeof document !== 'undefined' && !document.querySelector('#common-tooltip-styles')) {
    const style = document.createElement('style');
    style.id = 'common-tooltip-styles';
    style.textContent = `
      .common-tooltip {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }

      .common-tooltip.mobile {
        width: 80% !important;
        max-width: 400px !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
      }

    `;
    document.head.appendChild(style);
  }
})();

/**
 * 디바이스 타입을 감지하는 함수
 * @returns {string} 'mobile' | 'desktop'
 */
export function getDeviceType() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'mobile'
    : 'desktop';
}

/**
 * 화면에 툴팁을 표시하는 함수
 * @param {string} message - 표시할 메시지
 * @param {string} type - 메시지 타입 ('success' | 'error')
 * @param {number} duration - 표시 시간 (ms, 기본값: 3000)
 */
export function showTooltip(message, type = 'success', duration = 3000) {
  const deviceType = getDeviceType();

  // 기존 툴팁 제거
  const existingTooltip = document.querySelector('.common-tooltip');
  if (existingTooltip) {
    existingTooltip.remove();
  }

  // 툴팁 요소 생성 (모바일 스타일로 통일)
  const tooltip = document.createElement('div');
  tooltip.className = `common-tooltip ${type} mobile`;
  tooltip.textContent = message;

  // 툴팁 스타일 적용 (모바일 스타일 통일)
  const styles = {
    position: 'fixed',
    zIndex: '9999',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
    opacity: '0',
    transition: 'all 0.3s ease',
    pointerEvents: 'none',
    whiteSpace: 'nowrap',
    // 공통 스타일 (모바일 스타일)
    top: '-50px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    maxWidth: '400px',
    textAlign: 'center',
    backgroundColor: type === 'success' ? '#4CAF50' : '#F44336',
    color: 'white',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
  };

  Object.assign(tooltip.style, styles);

  // body에 추가
  document.body.appendChild(tooltip);

  // 애니메이션 시작 (모바일 스타일로 통일)
  requestAnimationFrame(() => {
    tooltip.style.opacity = '1';
    tooltip.style.top = '10px';
  });

  // 표시 시간 후 제거
  setTimeout(() => {
    tooltip.style.opacity = '0';
    tooltip.style.top = '-50px';

    setTimeout(() => {
      if (tooltip.parentNode) {
        tooltip.parentNode.removeChild(tooltip);
      }
    }, 300);
  }, duration);
}

/**
 * 클립보드에 텍스트를 복사하는 함수
 * @param {string} text - 복사할 텍스트
 * @param {Object} options - 옵션 객체
 * @param {string} options.successMessage - 성공 시 표시할 메시지 (기본값: '복사되었습니다.')
 * @param {string} options.errorMessage - 실패 시 표시할 메시지 (기본값: '복사에 실패했습니다.')
 * @param {number} options.duration - 메시지 표시 시간 (ms, 기본값: 3000)
 * @param {boolean} options.showTooltip - 툴팁 표시 여부 (기본값: true)
 * @param {Function} options.onSuccess - 성공 시 콜백 함수
 * @param {Function} options.onError - 실패 시 콜백 함수
 * @returns {Promise<boolean>} 복사 성공 여부
 */
export async function copyToClipboard(text, options = {
  successMessage: '복사되었습니다.',
  errorMessage: '복사에 실패했습니다.',
  duration: 3000,
  showTooltip: true,
  onSuccess: null,
  onError: null
}) {
  const {
    successMessage = '복사되었습니다.',
    errorMessage = '복사에 실패했습니다.',
    duration = 3000,
    showTooltip: shouldShowTooltip = true,
    onSuccess,
    onError
  } = options;

  // 클립보드 복사 함수 (모바일 호환성 고려)
  const copyText = async (textToCopy) => {
    // 최신 Clipboard API 시도 (PC, 모던 모바일)
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        return true;
      } catch (error) {
        console.warn('Clipboard API 실패, fallback 사용:', error);
      }
    }

    // Fallback: execCommand 사용 (구형 브라우저, 모바일 호환성)
    try {
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);

      if (successful) {
        return true;
      }
    } catch (error) {
      console.warn('execCommand fallback 실패:', error);
    }

    return false;
  };

  try {
    const success = await copyText(text);

    if (success) {
      // PC에서만 커스텀 툴팁 표시
      if (shouldShowTooltip && getDeviceType() === 'desktop') {
        showTooltip(successMessage, 'success', duration);
      }

      // 성공 콜백 실행
      if (typeof onSuccess === 'function') {
        onSuccess(successMessage, duration);
      }

      return true;
    } else {
      throw new Error('모든 복사 방법이 실패했습니다.');
    }
  } catch (error) {
    console.error('클립보드 복사 실패:', error);

    // PC에서만 커스텀 툴팁 표시
    if (shouldShowTooltip && getDeviceType() === 'desktop') {
      showTooltip(errorMessage, 'error', duration);
    }

    // 실패 콜백 실행
    if (typeof onError === 'function') {
      onError(errorMessage, duration);
    }

    return false;
  }
}

/**
 * 계좌번호 형식의 텍스트를 복사하는 함수
 * @param {Object} accountInfo - 계좌 정보 객체
 * @param {string} accountInfo.bank - 은행명
 * @param {string} accountInfo.number - 계좌번호
 * @param {string} accountInfo.name - 예금주명
 * @param {Object} options - 옵션 객체 (copyToClipboard와 동일)
 * @returns {Promise<boolean>} 복사 성공 여부
 */
export async function copyAccountInfo(accountInfo, options = {}) {
  const text = `${accountInfo.bank} ${accountInfo.number} ${accountInfo.name}`;
  return copyToClipboard(text, {
    successMessage: '계좌번호가 복사되었습니다.',
    errorMessage: '계좌번호 복사에 실패했습니다.',
    ...options
  });
}
