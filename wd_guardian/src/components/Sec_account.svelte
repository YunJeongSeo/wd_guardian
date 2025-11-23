<script>
  /*
   *@Overview 마음전하기
   *@History  2025-10-30 / 미친토끼 / 최초생성
  */

  let copyMessage = '';
  let copyTimeout;

  // 계좌번호 복사 함수
  async function copyAccount(bankInfo) {
    try {
      await navigator.clipboard.writeText(bankInfo);
      copyMessage = '계좌번호가 복사되었습니다!';

      clearTimeout(copyTimeout);
      copyTimeout = setTimeout(() => {
        copyMessage = '';
      }, 3000);
    } catch (err) {
      copyMessage = '복사에 실패했습니다.';
      console.error('계좌번호 복사 실패:', err);
    }
  }

  // 계좌 정보
  const groomAccount = {
    bank: '농협은행',
    number: '302-0940-3506-91',
    name: '태수호'
  };

  const brideAccount = {
    bank: '국민은행',
    number: '125002-04-335513',
    name: '전혜선'
  };
</script>

<section class="account-section">
  <div class="account-container">
    <h2 class="account-title">마음을 전하는 곳</h2>

    <div class="divider"></div>

    <!-- 신랑측 계좌 -->
    <div class="account-item">
      <h3 class="account-label">신랑측 계좌번호</h3>
      <div class="account-info">
        <div class="account-details">
          <p class="bank-info">{groomAccount.bank} {groomAccount.number}</p>
          <p class="account-name">{groomAccount.name}</p>
        </div>
        <div class="account-buttons">
          <button
            class="btn-copy"
            onclick={() => copyAccount(`${groomAccount.bank} ${groomAccount.number} ${groomAccount.name}`)}>
            복사하기
          </button>
          <button class="btn-card" disabled>CARD</button>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <!-- 신부측 계좌 -->
    <div class="account-item">
      <h3 class="account-label">신부측 계좌번호</h3>
      <div class="account-info">
        <div class="account-details">
          <p class="bank-info">{brideAccount.bank} {brideAccount.number}</p>
          <p class="account-name">{brideAccount.name}</p>
        </div>
        <div class="account-buttons">
          <button
            class="btn-copy"
            onclick={() => copyAccount(`${brideAccount.bank} ${brideAccount.number} ${brideAccount.name}`)}>
            복사하기
          </button>
          <button class="btn-card" disabled>CARD</button>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    {#if copyMessage}
      <div class="copy-message">
        {copyMessage}
      </div>
    {/if}
  </div>
</section>

<style>
  .account-section {
    padding: 60px 20px;
    background-color: #fff;
  }

  .account-container {
    max-width: 420px;
    margin: 0 auto;
  }

  .account-title {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    color: #333;
    margin-bottom: 40px;
  }

  .divider {
    height: 1px;
    background-color: #e0e0e0;
    margin: 30px 0;
  }

  .account-item {
    margin: 30px 0;
  }

  .account-label {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
  }

  .account-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }

  .account-details {
    flex: 1;
  }

  .bank-info {
    font-size: 1rem;
    color: #333;
    margin-bottom: 5px;
    font-weight: 500;
  }

  .account-name {
    font-size: 0.95rem;
    color: #666;
  }

  .account-buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .btn-copy, .btn-card {
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f5f5f5;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s ease;
    min-width: 80px;
  }

  .btn-copy {
    background-color: #f0f0f0;
    color: #333;
  }

  .btn-copy:hover {
    background-color: #e0e0e0;
  }

  .btn-card {
    background-color: #fff;
    color: #999;
    border-color: #ddd;
  }

  .btn-card:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .copy-message {
    margin-top: 20px;
    padding: 12px 20px;
    background-color: #e8f5e9;
    color: #2e7d32;
    border-radius: 8px;
    font-size: 0.95rem;
    text-align: center;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    .account-title {
      font-size: 1.3rem;
    }

    .account-info {
      flex-direction: column;
      align-items: flex-start;
    }

    .account-buttons {
      flex-direction: row;
      width: 100%;
    }

    .btn-copy, .btn-card {
      flex: 1;
    }
  }
</style>