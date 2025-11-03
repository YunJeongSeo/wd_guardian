<script>
  /*
   *@Overview intro 화면
   *@History  2025-10-30 / 미친토끼 / 최초생성
  */
</script>

<section class="sec sec-intro">
  

  <!-- OPENING AREA -->
  <div class="intro-block op-area">


    <!-- HEAD TITLE -->
    <div class="head-tit">

      <div class="tit-name groom">신랑</div>
      <div class="tit-name icon"><i class="fa-solid fa-heart"></i></div>
      <div class="tit-name bride">신부</div>

    </div>
    <!-- HEAD TITLE // -->


    <!-- OP IMG -->
    <div class="op-img">

      <img src="" alt="">

    </div>
    <!-- OP IMG -->


    <!-- OP TEXT -->
    <div class="op-text">
      
      <p>Happy wedding day</p>
      <img src="" alt="">
      
    </div>
    <!-- OP TEXT // -->


  </div>
  <!-- OPENING AREA // -->
  

  <!-- OP CONT AREA -->
  <div class="intro-block opcont-area">


    <!-- WD DATE CONT -->
    <div class="wd-date-cont">

      <p class="wd-date">0000년 00월 00일 0요일 오전 00시 00분</p>
      <p class="wd-loca">우리 컨벤션 웨딩홀</p>
      
    </div>
    <!-- WD DATE CONT // -->



    <!-- THANKS TEXT CONT -->
    <div class="tk-text-cont">


      <!-- IMG -->
      <img src="" alt="">
      <!-- IMG -->


      <!-- THANKS TEXT -->
      <div class="tk-text">
        
        <p>처음의 설렘보다 익숙함을 소중히 할 수 있는</p>
        <p>사람을 만나 결혼을 하려 합니다.</p>
        <p>바쁘신 가운데 두 사람의 앞날을</p>
        <p>가까이서 축복해 주시면 감사하겠습니다.</p>
        
      </div>
      <!-- THANKS TEXT // -->


    </div>
    <!-- THANKS TEXT CONT // -->


    <!-- COUPLE INFO CONT -->
    <div class="couple-info-cont">


      <!-- COUPLE INFO : GROOM -->
      <div class="coup-info groom">

        <!-- 부모님 -->
        <div class="parnts">
          
          <p class="dad">김아빠</p>
          <p class="div-icon"><i class="fa-solid fa-circle"></i></p>
          <p class="mom">이엄마</p>

        </div>
        <!-- 부모님 // -->

        <!-- 커플 -->
        <div class="coup">

          <p class="num">일번</p>
          <p class="you">신랑님</p>

        </div>
        <!-- 커플 // -->


      </div>
      <!-- COUPLE INFO : GROOM // -->


      <!-- COUPLE INFO : BRIDE -->
      <div class="coup-info bride">

        <!-- 부모님 -->
        <div class="parnts">
          
          <p class="dad">박아빠</p>
          <p class="div-icon"><i class="fa-solid fa-circle"></i></p>
          <p class="mom">최엄마</p>

        </div>
        <!-- 부모님 // -->

        <!-- 커플 -->
        <div class="coup">

          <p class="num">삼번</p>
          <p class="you">신부님</p>

        </div>
        <!-- 커플 // -->


      </div>
      <!-- COUPLE INFO : BRIDE // -->


    </div>
    <!-- COUPLE INFO CONT // -->


  </div>
  <!-- OP CONT AREA // -->
  
  
</section>


<style>
  section {
    border: 1px solid red;
    padding: 0 36px;
    font-size: .875rem;
  }

  p { 
    margin: unset;
  }
  
  .intro-block {
    border: 1px solid blue;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  /* OPENING AREA */
  .op-area {
    
    /* HEAD TITLE */
    .head-tit {
      display: flex;
      align-items: center;
      gap: 4px;
    }


    /* OP IMG */
    .op-img {
      border: 1px solid slategrey;
      width: 100%;
      height: 95.55vw;
      max-height: 430px;
      border-radius: 52.45% 52.45% 0 0;
      overflow: hidden;
      margin-top: 32px;

      img { width: 100%; }
    }


    /* OP TEXT */
    .op-text {
      font-size: 8.88vw;
      letter-spacing: -1px;
      text-align: center;
      margin-top: 26px;

      img {
        width: 100%;
        margin-top: 26px;
      }

    }


  }
  /* OPENING AREA // */



  /* OP CONT AREA */
  .opcont-area {
    margin-top: 38px;

    /* WD DATE CONT */
    .wd-date-cont {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }


    /* THANKS TEXT CONT */
    .tk-text-cont {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 32px;

      
      /* THANKS TEXT */
      .tk-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 30px;
      }

    }


    /* COUPLE INFO CONT */
    .couple-info-cont {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      margin-top: 70px;


      /* COUPLE INFO */
      .coup-info {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .parnts {
        display: flex;
        align-items: center;
        gap: 4px;
        font-weight: bold;

        .div-icon { font-size: 4px; }
      }


      .coup {
        display: flex;
        align-items: center;
        gap: 4px;
        .num { font-size: 10px; }
        .you { font-weight: bold; }
      }

    }


  }
  /* OP CONT AREA // */


</style>