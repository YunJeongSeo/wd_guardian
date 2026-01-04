<script>
  /*
   *@Overview intro 화면
   *@History  2025-10-30 / 미친토끼 / 최초생성
  */
  import wdImg1 from '../assets/img/wd_photo/wd_img_1.jpg';
  import wdImg2 from '../assets/img/wd_photo/wd_img_2.jpg';
  import introDevImg from '../assets/img/sec_intro_dev.png';
  import introDevSvg from '../assets/img/sec_intro_dev.svg';
  import introFlowerImg from '../assets/img/sec_intro_flower.png';
  import introFlowerSvg from '../assets/img/sec_intro_flower.svg';
  import PetalFall from '../lib/PetalFall.svelte';

</script>

<section class="sec sec-intro">
  

  <!-- OPENING AREA -->
  <div class="intro-block op-area">


    <!-- HEAD TITLE -->
    <div class="head-tit" data-aos="fade-up" data-aos-duration="3000">

      <div class="tit-name groom">태수호</div>
      <div class="tit-name icon" ><i class="fa-solid fa-heart"></i></div>
      <div class="tit-name bride">전혜선</div>

    </div>
    <!-- HEAD TITLE // -->


    <!-- OP IMG -->
    <div class="op-img" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1000">

      <img src={wdImg1} alt="">
      <PetalFall />

    </div>
    <!-- OP IMG -->


    <!-- OP TEXT -->
    <div class="op-text" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1000">

      <p class='playfair-display-font'>Happy wedding day</p>
      <img src={introDevSvg} alt="">

    </div>
    <!-- OP TEXT // -->


  </div>
  <!-- OPENING AREA // -->
  

  <!-- OP CONT AREA -->
  <div class="intro-block opcont-area" data-aos="fade-up" data-aos-duration="1500">


    <!-- WD DATE CONT -->
    <div class="wd-date-cont">

      <p class="wd-date">2026년 02월 22일 일요일 오후 1시</p>
      <p class="wd-loca">W웨딩 K웨딩홀</p>
      
    </div>
    <!-- WD DATE CONT // -->



    <!-- THANKS TEXT CONT -->
    <div class="tk-text-cont">


      <!-- IMG -->
      <img src={introFlowerSvg} alt="">
      <!-- IMG -->


      <!-- THANKS TEXT -->
      <div class="tk-text">
        
        <p>처음의 설렘보다 익숙함을 소중히 할 수 있는</p>
        <p>사람을 만나 결혼을 하려 합니다</p>
        <p>바쁘신 가운데 두 사람의 앞날을</p>
        <p>가까이서 축복해 주시면 감사하겠습니다</p>
        
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
          
          <p class="dad">태진휘</p>
          <p class="div-icon"><i class="fa-solid fa-circle"></i></p>
          <p class="mom">하미숙</p>

        </div>
        <!-- 부모님 // -->

        <!-- 커플 -->
        <div class="coup">

          <p class="num">차남</p>
          <p class="you">태수호</p>

        </div>
        <!-- 커플 // -->


      </div>
      <!-- COUPLE INFO : GROOM // -->


      <!-- COUPLE INFO : BRIDE -->
      <div class="coup-info bride">

        <!-- 부모님 -->
        <div class="parnts">
          
          <p class="dad">전명진</p>
          <p class="div-icon"><i class="fa-solid fa-circle"></i></p>
          <p class="mom">유재임</p>

        </div>
        <!-- 부모님 // -->

        <!-- 커플 -->
        <div class="coup">

          <p class="num">차녀</p>
          <p class="you">전혜선</p>

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
    
    padding: 0 5%;
    font-size: .875rem;
  }

  p { 
    margin: unset;
  }
  
  .intro-block {
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
      font-size: 1.125rem;

      .icon { font-size: 10px ;}
    }


    /* OP IMG */
    .op-img {
      position: relative;
      width: 100%;
      /* height: 95.55vw; */
      height: 560px;
      aspect-ratio: 4 / 3;   /* 비율 자동 유지 */
      border-radius: 200px 200px 0 0;
      overflow: hidden;
      margin-top: 32px;

      img { 
        width: 100%;
        height: 100%;
        object-fit: cover;       /* 비율 유지 + 꽉 채움 */
        object-position: center; /* 중앙 기준으로 잘리게 */
      }
    }


    /* OP TEXT */
    .op-text {
      font-size: 32px;
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
      word-break: keep-all;
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
        word-break: keep-all;
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


  @keyframes fade-in-out {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }


</style>