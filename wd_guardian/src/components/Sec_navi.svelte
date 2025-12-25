<script>
  /*
   *@Overview 오시는길
   *@History  2025-10-30 / 미친토끼 / 최초생성
  */
  import KakaoMap from '../lib/KakaoMap.svelte';
  import tmapImg from '../assets/img/tmap.png';

  let startInput = '';
  let endInput = '부산광역시 연제구 거제 1동 76-2 국제빌딩 4층';
  let searchResults = [];
  let showResults = false;
  let isSearching = false;
  let ps;
  let searchTimeout;
  let selectedStartPlace = null;

  // 모바일 기기 감지 함수
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  // 카카오 장소 검색 초기화
  function initPlacesSearch() {
    if (typeof window.kakao !== 'undefined' && window.kakao.maps && window.kakao.maps.services) {
      ps = new window.kakao.maps.services.Places();
    }
  }

  // onMount에서 장소 검색 초기화
  import { onMount } from 'svelte';
  onMount(() => {
    // Kakao API가 로드될 때까지 대기
    const waitForKakao = () => {
      if (typeof window.kakao !== 'undefined' && window.kakao.maps) {
        initPlacesSearch();
        // Kakao SDK 초기화 (네비게이션 기능용)
        // if (typeof window.Kakao !== 'undefined' && !window.Kakao.isInitialized()) {
          // 실제 사용 시에는 발급받은 JavaScript 키를 입력해야 합니다
          window.Kakao.init('b4c22e568843a2f03fb73dcc28457cb4');
        // }
      } else {
        setTimeout(waitForKakao, 500);
      }
    };

    waitForKakao();
  });

  // 실시간 장소 검색 함수
  function onInputSearch(event) {
    const keyword = event.target.value.trim();

    // 이전 검색 취소
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // 입력값이 없으면 결과 숨김
    if (!keyword) {
      showResults = false;
      isSearching = false;
      searchResults = [];
      return;
    }

    if (!ps) {
      return;
    }

    // 검색 시작 표시
    isSearching = true;
    showResults = true;

    // 300ms 디바운싱
    searchTimeout = setTimeout(() => {
      ps.keywordSearch(keyword, placesSearchCB);
    }, 300);
  }

  // 검색 버튼 클릭 시 검색 함수
  function onSearchClick() {
    const keyword = startInput.trim();

    // 이전 검색 취소
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // 입력값이 없으면 결과 숨김
    if (!keyword) {
      showResults = false;
      isSearching = false;
      searchResults = [];
      return;
    }

    if (!ps) {
      return;
    }

    // 검색 시작 표시
    isSearching = true;
    showResults = true;
    searchResults = [];

    // 즉시 검색 실행
    ps.keywordSearch(keyword, placesSearchCB);
  }

  // 장소 검색 콜백
  function placesSearchCB(data, status) {
    isSearching = false; // 검색 완료

    if (status === window.kakao.maps.services.Status.OK) {
      searchResults = data;
      showResults = true;
    } else {
      searchResults = [];
      showResults = false;
    }
  }

  // 출발지 설정
  function setStartPlace(place) {
    selectedStartPlace = place;
    startInput = place.place_name;
    showResults = false;
    isSearching = false;
    searchResults = [];
  }


  // 길찾기 함수
  function findRoute() {
    if (!selectedStartPlace) {
      alert('출발지를 검색하여 선택해주세요.');
      return;
    }

    const startLat = selectedStartPlace.y;
    const startLng = selectedStartPlace.x;
    const startName = encodeURIComponent(selectedStartPlace.place_name);

    // 도착지 좌표 (웨딩홀)
    const endLat = 35.1867;
    const endLng = 129.0803;
    const endName = encodeURIComponent('부산광역시 연제구 거제 1동 76-2 국제빌딩 4층');

    // 모바일 기기에서는 카카오내비 앱 실행 시도
    if (isMobile() && typeof window.Kakao !== 'undefined' && window.Kakao.Navi) {
      try {
        // 도착지 좌표로 길찾기 (웨딩홀 좌표 사용)
        window.Kakao.Navi.start({
          name: '국제빌딩 4층',
          x: endLng,
          y: endLat,
          coordType: 'wgs84'
        });
      } catch (error) {
        // 카카오내비 앱이 설치되지 않은 경우 웹으로 이동
        const routeUrl = `https://map.kakao.com/link/from/${startName},${startLat},${startLng}/to/국제빌딩,${endLat},${endLng}`;
        window.open(routeUrl, '_blank');
      }
    } else {
      // 데스크톱이나 앱 미설치 시 웹으로 이동
      const routeUrl = `https://map.kakao.com/link/from/${startName},${startLat},${startLng}/to/국제빌딩,${endLat},${endLng}`;
      window.open(routeUrl, '_blank');
    }
  }

  // 카카오 네비 앱 실행 함수
  function openKakaoNavi() {
    // 도착지 좌표 (웨딩홀)
    const endLat = 35.1867;
    const endLng = 129.0803;

    // 모바일 기기에서 카카오네비 앱 실행
    if (isMobile() && typeof window.Kakao !== 'undefined' && window.Kakao.Navi) {
      try {
        window.Kakao.Navi.start({
          name: '국제빌딩 4층',
          x: endLng,
          y: endLat,
          coordType: 'wgs84'
        });
      } catch (error) {
        alert('카카오네비 앱을 설치해주세요.');
        // 카카오네비 설치 페이지로 이동
        window.open('https://play.google.com/store/apps/details?id=com.locnall.KimGiSa', '_blank');
      }
    } else if (!isMobile()) {
      alert('카카오네비는 모바일 앱에서만 사용할 수 있습니다.');
    } else {
      alert('카카오 SDK가 로드되지 않았습니다.');
    }
  }


  // T MAP 앱 실행 함수
  function openTMap() {
    const endLat = 35.1867; // 웨딩홀 위도
    const endLng = 129.0803; // 웨딩홀 경도
    const endName = '국제빌딩 4층';

    // 출발지가 선택된 경우 출발지 정보 포함
    let tmapDeepLink, tmapWebUrl;

    if (selectedStartPlace) {
      // 출발지가 선택된 경우: 출발지부터 도착지까지 경로
      const startLat = selectedStartPlace.y;
      const startLng = selectedStartPlace.x;
      const startName = selectedStartPlace.place_name;

      tmapDeepLink = `tmap://route?startx=${startLng}&starty=${startLat}&goalx=${endLng}&goaly=${endLat}&startname=${encodeURIComponent(startName)}&goalname=${encodeURIComponent(endName)}`;
      tmapWebUrl = `https://tmap.life/route?startx=${startLng}&starty=${startLat}&goalx=${endLng}&goaly=${endLat}&startname=${encodeURIComponent(startName)}&goalname=${encodeURIComponent(endName)}`;
    } else {
      // 출발지가 선택되지 않은 경우: 도착지만 지정 (앱에서 출발지 선택 또는 현재 위치 사용)
      tmapDeepLink = `tmap://route?goalx=${endLng}&goaly=${endLat}&goalname=${encodeURIComponent(endName)}`;
      tmapWebUrl = `https://tmap.life/route?goalx=${endLng}&goaly=${endLat}&goalname=${encodeURIComponent(endName)}`;
    }

    // 모바일 환경에서 T MAP 앱 실행 시도
    if (isMobile()) {
      // 먼저 앱 실행 시도
      window.location.href = tmapDeepLink;

      // 앱이 설치되어 있지 않은 경우 2초 후 웹으로 이동
      setTimeout(() => {
        // 사용자가 아직 페이지에 있고, 앱이 실행되지 않은 경우에만 웹 열기
        if (document.hasFocus() && document.visibilityState === 'visible') {
          window.open(tmapWebUrl, '_blank');
        }
      }, 2000);
    } else {
      // PC 환경에서는 웹으로 열기
      window.open(tmapWebUrl, '_blank');
    }
  }

</script>

<section class="sec sec-navi">


  <!-- NAV TITLE -->
  <div class="nav-tit">

    <h1>오시는길</h1>

  </div>
  <!-- NAV TITLE -->


  <!-- NAV CONT BLOCK -->
  <div class="nav-cont-block">


    <!-- NAV INFO -->
    <div class="nav-info">


      <!-- WEDDING HALL NAME -->
      <div class="hall-name">W웨딩 K웨딩홀</div>
      <!-- WEDDING HALL NAME // -->


      <!-- WEDDING HALL ADDRESS -->
      <table class="wd-addr">


        <!-- COLGROUP -->
        <colgroup>

          <col width="55">

        </colgroup>
        <!-- COLGROUP // -->


        <!-- TBODY -->
        <tbody>


          <!-- TR -->
          <tr>
  
            <td class="cell-tit">도로명 : </td>
  
            <!-- CELL ADDRESS -->
            <td class="cell-addr">
  

              <!-- ADDRESS BOX -->
              <div class="addr-box">

                <p class="addr-info">부산광역시 연제구 거제 1동 76-2 국제빌딩 4층</p>
                <button type="button" class="btn-copy-addr">복사</button>

              </div>
              <!-- ADDRESS BOX // -->


            </td>
            <!-- CELL ADDRESS // -->
  

          </tr>
          <!-- TR // -->
  
  
          <!-- TR -->
          <tr>
  
            <td class="cell-tit">지번 : </td>
  
            <!-- CELL ADDRESS -->
            <td class="cell-addr">


              <!-- ADDRESS BOX -->
              <div class="addr-box">

                <p class="addr-info">부산광역시 연제구 중앙대로 1217 국제빌딩 4층</p>
                <button type="button" class="btn-copy-addr">복사</button>

              </div>
              <!-- ADDRESS BOX //-->


            </td>
            <!-- CELL ADDRESS // -->
             
            
          </tr>
          <!-- TR // -->
          

        </tbody>
        <!-- TBODY // -->


      </table>
      <!-- WEDDING HALL ADDRESS // -->


      <!-- WEDDING HALL NUMBER -->
      <div class="hall-num">
        TEL : <span class="hall-num-txt">051-551-9779</span>
      </div>
      <!-- WEDDING HALL NUMBER // -->


    </div>
    <!-- NAV INFO // -->


    <!-- MAP INFO -->
    <div class="map-info">



      <!-- MAP API -->
      <div class="map-api">
        <KakaoMap latitude={35.1867} longitude={129.0803} level={3} />
      </div>

      <!-- 길찾기 컨테이너 -->
      <div class="search-container">
        <div class="route-box">
          <div class="input-wrapper">
            <input
              type="text"
              bind:value={startInput}
              placeholder="출발지 검색"
              class="start-input"
            />
            <button on:click={onSearchClick} class="search-btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            {#if showResults}
              <div class="dropdown-results">
                {#if isSearching}
                  <div class="loading-item">
                    <i class="fa-solid fa-spinner fa-spin"></i>
                    검색 중...
                  </div>
                {:else if searchResults.length > 0}
                  {#each searchResults as place}
                    <div class="dropdown-item" on:click={() => setStartPlace(place)}>
                      <div class="place-name">{place.place_name}</div>
                      <div class="place-address">{place.address_name}</div>
                    </div>
                  {/each}
                {:else}
                  <div class="no-results-item">
                    검색 결과가 없습니다.
                  </div>
                {/if}
              </div>
            {/if}
          </div>
          <input type="text" bind:value={endInput} placeholder="도착지" disabled />
          <div class="button-container">
            <button on:click={findRoute} class="route-btn">길찾기</button>
            <button on:click={openKakaoNavi} class="kakao-navi-btn">
              <img src="https://developers.kakao.com/assets/img/about/buttons/navi/kakaonavi_btn_medium.png" alt="카카오네비" class="kakao-navi-icon" />
              카카오내비
            </button>
            <button on:click={openTMap} class="tmap-btn">
              <img src={tmapImg} alt="T MAP" class="tmap-icon" />
              T MAP
            </button>
          </div>
        </div>
      </div>


      <!-- TRANSPORT INFO -->
      <ul class="trans-info">

        
        <!-- TRANS SUBWAY -->
        <li class="trans-subway">

          <p class="trans-info-tit">지하철</p>
          <p class="trans-subway-info">
            1호선 교대역하차 5번출구 이용
          </p>

        </li>
        <!-- TRANS SUBWAY // -->


        <!-- TRANS BUS -->
        <li class="trans-bus">

          <p class="trans-info-tit">버스</p>
          <p class="trans-bus-info">
            2, 17, 2, 26, 27, 43, 52, 59, 61, 67, 81, 82, 85, 88, 101, 103, 134, 167
          </p>
          
        </li>
        <!-- TRANS BUS // -->


        <!-- TRANS ETC -->
        <li class="trans-etc">

          
          <p class="trans-info-tit">기타 교통정보</p>
          <p class="trans-etc-info">
            주차 안내 <br/>
            1.웨딩홀 주차장(DGB생명빌딩) <br/>
            (웨딩홀 이용시) 1시간 30분 무료 / <br/>
            (뷔페 이용시) 2시간 30분 무료 <br/>
            2.이근 주차장(부산주차장, 범일그린주차장) <br/>
            (웨딩홀 이용시) 1시간 무료 / (뷔페 이용시) 2시간 무료 
          </p>


        </li>
        <!-- TRANS ETC // -->



      </ul>
      <!-- TRANSPORT INFO // -->


    </div>
    <!-- MAP INFO // -->


  </div>
  <!-- NAV CONT BLOCK // -->


</section>




<style>
  section {
    
    padding: 0 5%;
    font-size: .875rem;
  }

  p { 
    margin: unset;
  }

  
  ul, li {
    margin: unset;
    padding: unset;
  }


  /* NAV TITLE */
  .nav-tit {
    margin-top: 50px;

    h1 {
      text-align: center;
      font-size: .875rem;
    }

  }


  /* NAV CONT BLOCK */
  .nav-cont-block {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 10px;
  }


  /* NAV INFO */
  .nav-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    /* WEDDING FALL NAME */
    .hall-name {
      font-size: 1.125rem;
      font-weight: 600;
      text-align: center;
    }

  }



  /* WEDDING HALL ADDRESS */
  .wd-addr {
    table-layout: fixed;
    margin-top: 7px;

    .cell-tit {
      white-space: nowrap;
      text-align: right;
    }


    /* CELL ADDRESS */
    .cell-addr {
      padding-left: 4px;

      /* ADDRESS BOX */
      .addr-box {
        display: flex;
        align-items: center;
        word-break: auto-phrase;
      }

      .btn-copy-addr {
        width: 25px;
        height: 15px;
        color: #ffffff;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        outline: unset;
        background-color: #D9D9D9;
        border: unset;
        white-space: nowrap;
      }

    }


  }


  /* WEDDING HALL NUMBER */
  .hall-num {
    margin-top: 20px;
  }



  /* MAP INFO */
  .map-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  /* MAP API */
  .map-api {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }

  /* 길찾기 컨테이너 */
  .search-container {
    margin-top: 20px;
    display: flex;
    width: 100%;
  }

  .input-wrapper {
    position: relative;
    display: flex;
  }

  .start-input {
    flex: 1;
    padding: 12px 15px;
    border: 1px solid #e8d5d5;
    border-radius: 25px 0 0 25px;
    border-right: none;
    font-size: 14px;
    color: #5a4a4a;
    transition: all 0.3s;
    outline: none;
  }

  .search-btn {
    width: 50px;
    border: 1px solid #e8d5d5;
    border-left: none;
    border-radius: 0 25px 25px 0;
    background: linear-gradient(135deg, #d4a5a5 0%, #c49595 100%);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    outline: none;
  }

  .search-btn:hover {
    background: linear-gradient(135deg, #c49595 0%, #b88585 100%);
  }

  .search-btn i {
    font-size: 14px;
  }

  .start-input:focus {
    outline: none;
    border-color: #d4a5a5;
    box-shadow: 0 0 0 2px rgba(212, 165, 165, 0.2);
  }

  .start-input::placeholder {
    color: #b8a5a5;
  }

  .dropdown-results {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #e8d5d5;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    margin-top: 2px;
    width: 100%;
  }

  .dropdown-item {
    padding: 12px 15px;
    cursor: pointer;
    border-bottom: 1px solid #f0e8e8;
    transition: all 0.2s;
  }

  .dropdown-item:hover {
    background-color: #fff8f0;
  }

  .dropdown-item:last-child {
    border-bottom: none;
  }

  .place-name {
    font-weight: 500;
    color: #5a4a4a;
    font-size: 14px;
    margin-bottom: 2px;
  }

  .place-address {
    font-size: 12px;
    color: #8b6f7e;
  }

  .loading-item {
    padding: 15px;
    text-align: center;
    color: #8b6f7e;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .loading-item i {
    color: #d4a5a5;
  }

  .no-results-item {
    padding: 15px;
    text-align: center;
    color: #8b6f7e;
    font-size: 14px;
  }

  .route-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .route-box input:not(:first-child) {
    padding: 12px 15px;
    border: 1px solid #e8d5d5;
    border-radius: 25px;
    font-size: 14px;
    color: #5a4a4a;
    background-color: #f8f5f0;
  }

  .route-box input::placeholder {
    color: #b8a5a5;
  }

  .button-container {
    display: flex;
    gap: 8px;
  }

  .route-btn {
    flex: 1;
    padding: 8px;
    background: linear-gradient(135deg, #d4a5a5 0%, #c49595 100%);
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 400;
    transition: all 0.3s;
  }

  .route-btn:hover {
    background: linear-gradient(135deg, #c49595 0%, #b88585 100%);
    transform: translateY(-1px);
  }

  .kakao-navi-btn {
    flex: 1;
    padding: 8px 12px;
    color: #000000;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 400;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .kakao-navi-btn:hover {
    background: linear-gradient(135deg, #FFE55C 0%, #FFD700 100%);
    transform: translateY(-1px);
  }

  .kakao-navi-icon {
    width: 30px;
    height: auto;
    border-radius: 10px;
    flex-shrink: 0;
  }

  .tmap-btn {
    flex: 1;
    padding: 8px 12px;
    color: #000000;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 400;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .tmap-btn:hover {
    background: linear-gradient(135deg, #42A5F5 0%, #2196F3 100%);
    transform: translateY(-1px);
  }

  .tmap-icon {
    width: 30px;
    height: auto;
    border-radius: 10px;
    flex-shrink: 0;
  }
  


  /* TRANSPORT INFO */
  .trans-info {
    width: 100%;
    margin-top: 32px;
    
    li {
      display: flex;
      flex-direction: column;
      gap: 3px;
      word-break: keep-all;
      &:not(:first-child) {
        margin-top: 20px;
      }
    }
  }
  



</style>  