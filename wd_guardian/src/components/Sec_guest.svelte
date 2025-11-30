<script>
  /*
   *@Overview 방명록
   *@History  2025-10-30 / 미친토끼 / 최초생성
  */
  import { onMount } from 'svelte';

  // API 서버 URL
  const API_URL = '/api';

  let guestbookEntries = [];
  let currentPage = 1;
  let totalPages = 1;
  let totalCount = 0;
  let showWriteModal = false;
  let showDetailModal = false;
  let selectedEntry = null;
  let isLoading = false;

  // 작성 폼 데이터
  let formData = {
    name: '',
    password: '',
    message: ''
  };

  // 컴포넌트 마운트 시 방명록 목록 불러오기
  onMount(() => {
    fetchGuestbook();
  });

  // 방명록 목록 조회
  async function fetchGuestbook(page = 1) {
    try {
      isLoading = true;
      const response = await fetch(`${API_URL}/guestbook?page=${page}`);

      if (!response.ok) {
        throw new Error('방명록을 불러오는데 실패했습니다.');
      }

      const result = await response.json();
      guestbookEntries = result.data || [];
      currentPage = result.pagination?.page || 1;
      totalPages = result.pagination?.totalPages || 1;
      totalCount = result.pagination?.total || 0;
    } catch (error) {
      alert('방명록을 불러오는데 실패했습니다.');
    } finally {
      isLoading = false;
    }
  }

  // 방명록 삭제
  async function deleteEntry(id) {
    const password = prompt('비밀번호를 입력하세요:');

    if (!password) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/guestbook/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || '삭제에 실패했습니다.');
      }

      alert('방명록이 삭제되었습니다.');
      fetchGuestbook(currentPage);
    } catch (error) {
      console.error('방명록 삭제 실패:', error);
      alert(error.message);
    }
  }

  // 페이지 변경
  function changePage(page) {
    fetchGuestbook(page);
  }

  // 방명록 작성 모달 열기
  function openWriteModal() {
    showWriteModal = true;
  }

  // 방명록 작성 모달 닫기
  function closeWriteModal() {
    showWriteModal = false;
    // 폼 초기화
    formData = {
      name: '',
      password: '',
      message: ''
    };
  }

  // 방명록 상세보기 모달 열기
  function openDetailModal(entry) {
    selectedEntry = entry;
    showDetailModal = true;
  }

  // 방명록 상세보기 모달 닫기
  function closeDetailModal() {
    showDetailModal = false;
    selectedEntry = null;
  }

  // 방명록 작성 제출
  async function submitGuestbook() {
    // 유효성 검사
    if (!formData.name.trim()) {
      alert('이름을 입력해주세요.');
      return;
    }
    if (!formData.password.trim()) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    if (!formData.message.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    try {
      isLoading = true;
      const response = await fetch(`${API_URL}/guestbook`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          password: formData.password,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || '작성에 실패했습니다.');
      }

      alert('방명록이 작성되었습니다!');
      closeWriteModal();
      fetchGuestbook(1); // 첫 페이지로 이동하여 새 글 확인
    } catch (error) {
      console.error('방명록 작성 실패:', error);
      alert(error.message);
    } finally {
      isLoading = false;
    }
  }
</script>

<section class="guest-section">
  <div class="guest-container">
    <h2 class="guest-title">방명록</h2>

    <!-- 방명록 리스트 -->
    <div class="guestbook-list">
      {#if isLoading}
        <div class="loading-message">로딩 중...</div>
      {:else if guestbookEntries.length === 0}
        <div class="empty-message">작성된 방명록이 없습니다.</div>
      {:else}
        {#each guestbookEntries as entry (entry.id)}
          <div class="guestbook-card" onclick={() => openDetailModal(entry)}>
            <button class="btn-delete" onclick={(e) => { e.stopPropagation(); deleteEntry(entry.id); }} aria-label="삭제">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <h3 class="entry-name">{entry.name}</h3>
            <p class="entry-message">{entry.message}</p>
          </div>
        {/each}
      {/if}
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

  <!-- 상세보기 모달 -->
  {#if showDetailModal && selectedEntry}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="modal-overlay" onclick={closeDetailModal}>
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div class="modal-content" onclick={(e) => e.stopPropagation()}>
        <div class="detail-content">
          <p class="detail-message">{selectedEntry.message}</p>
        </div>

        <button class="btn-close-detail" onclick={closeDetailModal}>
          닫기
        </button>
      </div>
    </div>
  {/if}

  <!-- 작성 모달 -->
  {#if showWriteModal}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="modal-overlay" onclick={closeWriteModal}>
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div class="modal-content" onclick={(e) => e.stopPropagation()}>
        <h3 class="modal-title">방명록 작성</h3>

        <form class="guestbook-form" onsubmit={(e) => { e.preventDefault(); submitGuestbook(); }}>
          <div class="form-group">
            <label for="name">이름</label>
            <input
              id="name"
              type="text"
              bind:value={formData.name}
              placeholder="이름을 입력하세요"
              maxlength="20"
            />
          </div>

          <div class="form-group">
            <label for="password">비밀번호</label>
            <input
              id="password"
              type="password"
              bind:value={formData.password}
              placeholder="비밀번호를 입력하세요"
              maxlength="20"
            />
            <small class="form-help">방명록 삭제 시 사용됩니다.</small>
          </div>

          <div class="form-group">
            <label for="message">내용</label>
            <textarea
              id="message"
              bind:value={formData.message}
              placeholder="축하 메시지를 남겨주세요"
              rows="4"
              maxlength="200"
            ></textarea>
            <small class="form-help">{formData.message.length} / 200</small>
          </div>

          <div class="modal-buttons">
            <button type="button" class="btn-cancel" onclick={closeWriteModal}>
              취소
            </button>
            <button type="submit" class="btn-submit">
              작성하기
            </button>
          </div>
        </form>
      </div>
    </div>
  {/if}
</section>

<style>
  .guest-section {
    padding: 0 20px 60px;
    background-color: #fff;
  }

  .guest-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .guest-title {
    font-size: .875rem;
    font-weight: 600;
    text-align: center;
    color: #333;
    margin-bottom: 40px;
  }

  .guestbook-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* margin-bottom: 40px; */
  }

  .guestbook-card {
    position: relative;
    padding: 12px 14px;
    /* background-color: #fafafa; */
    border: 1px solid #D9D9D9;
    border-radius: 3px;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .guestbook-card:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: #fafafa;
  }

  .btn-delete {
    width: 14px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 12px;
    right: 14px;
    border: none;
    background: none;
    color: #999;
    cursor: pointer;
    transition: color 0.2s ease;
    padding: unset;
    outline: unset;
    box-sizing: border-box;
}


  .entry-name {
    font-size: .875rem;
    /* font-weight: 600; */
    color: #333;
    margin-bottom: unset;
  }
  
  .entry-message {
    font-size: .75rem;
    color: #555;
    margin-bottom: unset;
    line-height: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .loading-message,
  .empty-message {
    text-align: center;
    padding: 40px 20px;
    color: #999;
    font-size: 0.95rem;
  }

  .bottom-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .pagination {
    display: flex;
    /* gap: 10px; */
  }

  .page-btn {
    width: 26px;
    border: none;
    background-color: transparent;
    color: #BCBCBC;
    font-size: .875rem;
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
    width: 78px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C6C6C6;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: .875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    outline: unset;
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
    animation: fadeIn 0.2s ease;
  }

  .modal-content {
    background-color: #fff;
    padding: 24px;
    border-radius: 10px;
    max-width: 420px;
    width: 90%;
    animation: slideUp 0.3s ease;
  }

  .modal-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }

  .guestbook-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .form-group label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #333;
  }

  .form-group input,
  .form-group textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 0.875rem;
    font-family: inherit;
    transition: border-color 0.2s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #4a90e2;
  }

  .form-group textarea {
    resize: vertical;
    min-height: 80px;
  }

  .form-help {
    font-size: 0.8rem;
    color: #999;
  }

  .modal-buttons {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  .btn-cancel,
  .btn-submit {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-cancel {
    background-color: #f5f5f5;
    color: #666;
  }

  .btn-cancel:hover {
    background-color: #e0e0e0;
  }

  .btn-submit {
    background-color: #4a90e2;
    color: #fff;
  }

  .btn-submit:hover {
    background-color: #357abd;
  }

  .detail-content {
    padding: 10px 0;
  }

  .detail-message {
    font-size: 0.95rem;
    color: #333;
    white-space: pre-wrap;
    line-height: 1.8;
    margin: 0;
    min-height: 100px;
  }

  .btn-close-detail {
    width: 100%;
    padding: 12px;
    margin-top: 20px;
    background-color: #f5f5f5;
    color: #666;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .btn-close-detail:hover {
    background-color: #e0e0e0;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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