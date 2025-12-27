<script>
  /*
   *@Overview 마음전하기
   *@History  2025-10-30 / 미친토끼 / 최초생성
   */
  import { copyAccountInfo } from '../assets/common.js';

  let showGroomParents = false;
  let showBrideParents = false;

  // 계좌번호 복사 함수
  async function copyAccount(accountInfo) {
    await copyAccountInfo(accountInfo);
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

  // 부모님 계좌 정보
  const groomParentsAccounts = [
    {
      relation: '아버지',
      bank: '농협은행',
      number: '000-0000-0000-00',
      name: '태○○'
    },
    {
      relation: '어머니',
      bank: '농협은행',
      number: '000-0000-0000-00',
      name: '○○○'
    }
  ];

  const brideParentsAccounts = [
    {
      relation: '아버지',
      bank: '국민은행',
      number: '000-0000-0000-00',
      name: '전○○'
    },
    {
      relation: '어머니',
      bank: '국민은행',
      number: '000-0000-0000-00',
      name: '○○○'
    }
  ];
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
            onclick={() => copyAccount(groomAccount)}>
            복사하기
          </button>
          <button class="btn-card" disabled>CARD</button>
        </div>
      </div>
    </div>

    <!-- 신랑측 부모님 계좌 -->
    <div class="account-item parents-account">
      <button class="toggle-button" onclick={() => showGroomParents = !showGroomParents}>
        <span>신랑측 부모님 계좌번호</span>
        <span class="toggle-icon">{showGroomParents ? '−' : '+'}</span>
      </button>

      {#if showGroomParents}
        <div class="parents-list">
          {#each groomParentsAccounts as account}
            <div class="parent-account">
              <div class="account-info">
                <div class="account-details">
                  <p class="relation-label">{account.relation}</p>
                  <p class="bank-info">{account.bank} {account.number}</p>
                  <p class="account-name">{account.name}</p>
                </div>
                <div class="account-buttons">
                  <button
                    class="btn-copy"
                    onclick={() => copyAccount(account)}>
                    복사하기
                  </button>
                  <button class="btn-card" disabled>CARD</button>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {/if}
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
            onclick={() => copyAccount(brideAccount)}>
            복사하기
          </button>
          <button class="btn-card" disabled>CARD</button>
        </div>
      </div>
    </div>

    <!-- 신부측 부모님 계좌 -->
    <div class="account-item parents-account">
      <button class="toggle-button" onclick={() => showBrideParents = !showBrideParents}>
        <span>신부측 부모님 계좌번호</span>
        <span class="toggle-icon">{showBrideParents ? '−' : '+'}</span>
      </button>

      {#if showBrideParents}
        <div class="parents-list">
          {#each brideParentsAccounts as account}
            <div class="parent-account">
              <div class="account-info">
                <div class="account-details">
                  <p class="relation-label">{account.relation}</p>
                  <p class="bank-info">{account.bank} {account.number}</p>
                  <p class="account-name">{account.name}</p>
                </div>
                <div class="account-buttons">
                  <button
                    class="btn-copy"
                    onclick={() => copyAccount(account)}>
                    복사하기
                  </button>
                  <button class="btn-card" disabled>CARD</button>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>

    <div class="divider"></div>
  </div>
</section>

<style>
  .account-section {
    padding: 70px 20px;
    background-color: #fff;
  }

  .account-container {
    max-width: 420px;
    margin: 0 auto;
  }

  .account-title {
    font-size: .875rem;
    /* font-weight: 600; */
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
    margin: 26px 0 32px;
    padding: 0 10px;
  }

  .account-label {
    font-size: .875rem;
    /* font-weight: 600; */
    color: #333;
    margin-bottom: 15px;
  }

  .parents-account {
    margin: 20px 0;
  }

  .toggle-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    background: none;
    border: none;
    cursor: pointer;
    font-size: .875rem;
    color: #333;
    text-align: left;
  }

  .toggle-icon {
    font-size: 1.2rem;
    font-weight: 300;
    color: #666;
    transition: transform 0.2s ease;
  }

  .parents-list {
    margin-top: 15px;
    animation: slideDown 0.3s ease;
  }

  .parent-account {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;
  }

  .parent-account:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .relation-label {
    font-size: 0.75rem;
    color: #999;
    margin-bottom: 8px;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .account-info {
    display: flex;
    justify-content: space-between;
  }

  .account-details {
    flex: 1;
  }

  .bank-info {
    font-size: .875rem;
    color: #333;
    margin-bottom: 5px;
    /* font-weight: 500; */
  }

  .account-name {
    font-size: .875rem;
    color: #666;
  }

  .account-buttons {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .btn-copy, .btn-card {
    width: 55px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #cccccc;
    background-color: #f5f5f5;
    cursor: pointer;
    font-size: 0.625rem;
    font-weight: 500;
    transition: all 0.2s ease;
    box-sizing: border-box;
  }

  .btn-copy {
    background-color: #cccccc;
    color: #ffffff;
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


</style>