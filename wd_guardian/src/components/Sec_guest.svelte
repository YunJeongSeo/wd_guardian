<script>
  /*
   *@Overview 방명록
   *@History  2025-10-30 / 미친토끼 / 최초생성
  */

  // 더미 데이터 (나중에 DB에서 가져올 예정)
  let guestbookEntries = [
    { id: 1, name: '태수호', message: '결혼을 선포합니다!!!' },
    { id: 2, name: '태수호', message: '결혼을 선포합니다!!!' },
    { id: 3, name: '태수호', message: '결혼을 선포합니다!!!' },
    { id: 4, name: '태수호', message: '결혼을 선포합니다!!!' },
  ];

  let currentPage = 1;
  let totalPages = 4;
  let showWriteModal = false;

  // 방명록 삭제
  function deleteEntry(id) {
    if (confirm('방명록을 삭제하시겠습니까?')) {
      guestbookEntries = guestbookEntries.filter(entry => entry.id !== id);
    }
  }

  // 페이지 변경
  function changePage(page) {
    currentPage = page;
    // TODO: DB에서 해당 페이지 데이터 가져오기
  }

  // 방명록 작성 모달 열기
  function openWriteModal() {
    showWriteModal = true;
  }

  // 방명록 작성 모달 닫기
  function closeWriteModal() {
    showWriteModal = false;
  }
</script>

<section class="guest-section">
  <div class="guest-container">
    <h2 class="guest-title">방명록</h2>

    <!-- 방명록 리스트 -->
    <div class="guestbook-list">
      {#each guestbookEntries as entry (entry.id)}
        <div class="guestbook-card">
          <button class="btn-delete" onclick={() => deleteEntry(entry.id)}>
            ✕
          </button>
          <h3 class="entry-name">{entry.name}</h3>
          <p class="entry-message">{entry.message}</p>
        </div>
      {/each}
    </div>

    <!-- 페이지네이션 & 작성하기 버튼 -->
    <div class="bottom-controls">
      <div class="pagination">
        {#each Array(totalPages) as _, i}
          <button
            class="page-btn"
            class:active={currentPage === i + 1}
            onclick={() => changePage(i + 1)}>
            {i + 1}
          </button>
        {/each}
      </div>
      <button class="btn-write" onclick={openWriteModal}>
        작성하기
      </button>
    </div>
  </div>

  <!-- 작성 모달 (나중에 구현 예정) -->
  {#if showWriteModal}
    <div class="modal-overlay" onclick={closeWriteModal}>
      <div class="modal-content" onclick={(e) => e.stopPropagation()}>
        <h3>방명록 작성</h3>
        <p>작성 폼은 나중에 구현 예정입니다.</p>
        <button onclick={closeWriteModal}>닫기</button>
      </div>
    </div>
  {/if}
</section>

<style>
  .guest-section {
    padding: 60px 20px;
    background-color: #fff;
  }

  .guest-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .guest-title {
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    color: #333;
    margin-bottom: 50px;
  }

  .guestbook-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }

  .guestbook-card {
    position: relative;
    padding: 25px 30px;
    background-color: #fafafa;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    transition: box-shadow 0.2s ease;
  }

  .guestbook-card:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .btn-delete {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    color: #999;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 0.2s ease;
    line-height: 1;
  }

  .btn-delete:hover {
    color: #d32f2f;
  }

  .entry-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 12px;
  }

  .entry-message {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
  }

  .bottom-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
  }

  .pagination {
    display: flex;
    gap: 10px;
  }

  .page-btn {
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
    color: #999;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
  }

  .page-btn:hover {
    background-color: #f0f0f0;
    color: #333;
  }

  .page-btn.active {
    color: #333;
    font-weight: 600;
  }

  .btn-write {
    padding: 12px 30px;
    background-color: #d0d0d0;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-write:hover {
    background-color: #b0b0b0;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal-content {
    background-color: #fff;
    padding: 30px;
    border-radius: 12px;
    max-width: 500px;
    width: 90%;
  }

  @media (max-width: 480px) {
    .guest-title {
      font-size: 1.5rem;
    }

    .guestbook-card {
      padding: 20px;
    }

    .bottom-controls {
      flex-direction: column;
      gap: 20px;
    }

    .pagination {
      justify-content: center;
    }

    .btn-write {
      width: 100%;
    }
  }
</style>