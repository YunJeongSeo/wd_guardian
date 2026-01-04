<script>
  /*
   *@Overview 오시는길
   *@History  2025-10-30 / 미친토끼 / 최초생성
   */
  import KakaoMap from '../lib/KakaoMap.svelte';
  import tmapImg from '../assets/img/tmap.png';
  import { copyToClipboard } from '../assets/common.js';


  // 모바일 기기 감지 함수
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  // OS 감지 함수
  function getMobileOS() {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) {
      return 'android';
    } else if (/iPad|iPhone|iPod/.test(ua)) {
      return 'ios';
    }
    return 'unknown';
  }

  // 주소 복사 함수
  async function copyAddress(address) {
    await copyToClipboard(address, {
      successMessage: '주소가 복사되었습니다.',
      errorMessage: '주소 복사에 실패했습니다.',
      duration: 3000,
      showTooltip: true,
      onSuccess: null,
      onError: null
    });
  }


  // onMount에서 Kakao SDK 초기화
  import { onMount } from 'svelte';
  onMount(() => {
    // Kakao SDK가 로드될 때까지 대기
    const waitForKakao = () => {
      if (typeof window.Kakao !== 'undefined' && !window.Kakao.isInitialized()) {
        // 실제 사용 시에는 발급받은 JavaScript 키를 입력해야 합니다
        window.Kakao.init('b4c22e568843a2f03fb73dcc28457cb4');
      } else {
        setTimeout(waitForKakao, 500);
      }
    };

    waitForKakao();
  });




  // 카카오 네비 앱 실행 함수
  function openKakaoNavi() {
    // 도착지 좌표 (웨딩홀)
    const endLat = 35.195691768631;
    const endLng = 129.079444414394;

    // 모바일 기기에서 카카오네비 앱 실행
    if (isMobile() && typeof window.Kakao !== 'undefined' && window.Kakao.Navi) {
      try {
        window.Kakao.Navi.share({
          name: 'W웨딩 K웨딩홀',
          x: endLng,
          y: endLat,
          coordType: 'wgs84'
        });
      } catch (error) {
        alert('카카오네비 앱을 설치해주세요.');
      }
    } else if (!isMobile()) {
      alert('내비게이션 연동은 모바일 환경에서만 이용할 수 있습니다.');
    } else {
      alert('카카오 SDK가 로드되지 않았습니다.');
    }
  }


  // T MAP 앱 실행 함수
  function openTMap() {
    const endLat = 35.195691768631; // 웨딩홀 위도
    const endLng = 129.079444414394; // 웨딩홀 경도
    const endName = 'W웨딩 K웨딩홀';
    const endAddr = '부산광역시 연제구 거제 1동 76-2 국제빌딩 4층';

    // 도착지만 지정 (앱에서 출발지 선택 또는 현재 위치 사용)
    const tmapDeepLink = `tmap://route?goalx=${endLng}&goaly=${endLat}&goalname=${encodeURIComponent(endName)}&goaladdr=${encodeURIComponent(endAddr)}`;
    const tmapWebUrl = `https://tmap.life/route?goalx=${endLng}&goaly=${endLat}&goalname=${encodeURIComponent(endName)}&goaladdr=${encodeURIComponent(endAddr)}`;

    // 모바일 환경에서 T MAP 앱 실행 시도
    if (isMobile()) {
      // 먼저 앱 실행 시도
      window.location.href = tmapDeepLink;

      // 앱이 설치되어 있지 않은 경우 2초 후 스토어로 이동
      setTimeout(() => {
        // 사용자가 아직 페이지에 있고, 앱이 실행되지 않은 경우에만 스토어 열기
        if (document.hasFocus() && document.visibilityState === 'visible') {
          const os = getMobileOS();
          let storeUrl;

          if (os === 'android') {
            // Google Play Store
            storeUrl = 'https://play.google.com/store/apps/details?id=com.skt.tmap.ku';
          } else if (os === 'ios') {
            // App Store
            storeUrl = 'https://apps.apple.com/app/t-map/id431589174';
          } else {
            // 알 수 없는 OS의 경우 웹으로 이동
            storeUrl = tmapWebUrl;
          }

          window.open(storeUrl, '_blank');
        }
      }, 2000);
    } else {
      // PC 환경에서는 모바일 환경에서만 사용 가능하다는 메시지 표시
      alert('내비게이션 연동은 모바일 환경에서만 이용할 수 있습니다.');
    }
  }

</script>

<section class="sec sec-navi" data-aos="fade-up" data-aos-duration="1500">


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
      <div class="hall-name">W웨딩 K웨딩홀 (국제빌딩 4층)</div>
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

                <p class="addr-info">부산광역시 연제구 거제 1동 76-2</p>
                <button type="button" class="btn-copy-addr" onclick={() => copyAddress('부산광역시 연제구 거제 1동 76-2 국제빌딩 4층')}>복사</button>

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

                <p class="addr-info">부산광역시 연제구 중앙대로 1217</p>
                <button type="button" class="btn-copy-addr" onclick={() => copyAddress('부산광역시 연제구 중앙대로 1217 국제빌딩 4층')}>복사</button>

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
        <KakaoMap address="부산광역시 연제구 거제 1동 76-2 국제빌딩 4층" latitude={35.195691768631} longitude={129.079444414394} level={3} />
      </div>

      <!-- 네비게이션 버튼 컨테이너 -->
      <div class="navi-container">
        <div class="button-container">
          <button onclick={openKakaoNavi} class="kakao-navi-btn">
            <img src="https://developers.kakao.com/assets/img/about/buttons/navi/kakaonavi_btn_medium.png" alt="카카오네비" class="kakao-navi-icon" />
            카카오내비
          </button>
          <button onclick={openTMap} class="tmap-btn">
            <img src={tmapImg} alt="T MAP" class="tmap-icon" />
            T MAP
          </button>
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
        gap: 5px;
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

  /* 네비게이션 버튼 컨테이너 */
  .navi-container {
    margin-top: 20px;
    display: flex;
    width: 100%;
  }




  .button-container {
    display: flex;
    width: 100%;
    gap: 8px;
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