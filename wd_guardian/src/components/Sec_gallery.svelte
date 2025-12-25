<script>
  /*
   *@Overview 사진앨범
   *@History  2025-10-30 / 미친토끼 / 최초생성
  */
  import { onMount } from 'svelte';
  import wdImg1 from '../assets/img/wd_photo/wd_img_1.jpg';
  import wdImg2 from '../assets/img/wd_photo/wd_img_2.jpg';
  import wdImg3 from '../assets/img/wd_photo/wd_img_3.jpg';

  let swiperEl;
  let swiper;
  let isOpen = false;

  onMount(() => {
    swiper = new window.Swiper(swiperEl, {
      slidesPerView: 1,
      loop: true,

      pagination: {
        el: document.querySelector('.img-pagenation'),
        type: 'custom',
        renderCustom(swiper, current, total) {
          return `${current} / ${total}`;
        },
      },

      navigation: {
        nextEl: document.querySelector('.gal-pop-img-nav.right'),
        prevEl: document.querySelector('.gal-pop-img-nav.left'),
      },
    });
  });

  function openPopup(index) {
    isOpen = true;
    swiper.slideTo(index, 0);
  }

  function closePopup() {
    isOpen = false;
  }

</script>

<section class="sec sec-gal">


  <!-- GALLERY TITLE -->
  <div class="gal-title">
    <p>앨범</p>
  </div>
  <!-- GALLERY TITLE // -->


  <!-- GALLERY BLOCK -->
  <div class="gal-block">


    <!-- TOP-LEFT -->
    <div class="gal-box">


      <div class="gal-item">
        <img src={wdImg1}
        alt=""
        on:click={() => openPopup(0)}
        >
      </div>


    </div>
    <!-- TOP-LEFT // -->


    <!-- TOP-RIGHT -->
    <div class="gal-box">

      <div class="gal-item">
        <img src={wdImg2}
        alt=""
        on:click={() => openPopup(1)}
        >
      </div>

    </div>
    <!-- TOP-RIGHT // -->


    <!-- BOTTOM-LEFT -->
    <div class="gal-box">

      <div class="gal-item">
        <img src={wdImg3}
        alt=""
        on:click={() => openPopup(2)}
        >
      </div>

    </div>
    <!-- BOTTOM-LEFT // -->


    <!-- BOTTOM-RIGHT -->
    <div class="gal-box">

      <div class="gal-item">
        <img src={wdImg1}
        alt=""
        on:click={() => openPopup(3)}
        >
      </div>

    </div>
    <!-- BOTTOM-RIGHT // -->


  </div>
  <!-- GALLERY BLOCK // -->


  <!-- GALLERY POP PRIVIEW -->
  <div class="gal-pop-priview" class:is-open={isOpen}>

    <div class="img-pagenation"></div>
    <button type="button" 
            class="btn-pop-close"
            on:click={closePopup}
    >
      <i class="fa-solid fa-xmark"></i>
    </button>


    <div class="swiper gal-pop-block" bind:this={swiperEl}>

      <div class="swiper-wrapper gal-pop-img-wrap">
        <div class="swiper-slide gal-pop-img"><img src={wdImg1} alt=""></div>
        <div class="swiper-slide gal-pop-img"><img src={wdImg2} alt=""></div>
        <div class="swiper-slide gal-pop-img"><img src={wdImg3} alt=""></div>
        <div class="swiper-slide gal-pop-img"><img src={wdImg1} alt=""></div>
      </div>

      <!-- <div class="swiper-pagination"></div> -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->

      <button type="button" class="gal-pop-img-nav left" ><i class="fa-solid fa-angle-left"></i></button>
      <button type="button" class="gal-pop-img-nav right"><i class="fa-solid fa-chevron-right"></i></button>
    </div>


  </div>
  <!-- GALLERY POP PRIVIEW // -->



</section>



<style>
  section {
    
    padding: 0 5%;
    font-size: .875rem;
  }

  p { 
    margin: unset;
  }


  /* SECTION GALLERY */
  .sec-gal {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }


  /* GALLERY TITLE */
  .gal-title {
    margin-top: 42px;
    font-size: .875rem;
  }


  /* GALLERY BLOCK */
  .gal-block {
    width: 100%;
    display: grid;
    grid-template-columns:  1fr 1fr;
    gap: 6px;


    /* .gal-box {
      min-height: 215px;
    } */

    .gal-item {
      width: 100%;
      aspect-ratio: 3 / 4;   /* 👉 통일 */
      overflow: hidden;
      background: #f5f5f5;  /* 로딩 시 여백 방지 */

    }

    img {
      background-color: rgb(241, 241, 241);
      width: 100%;
      height: 100%;
      object-fit: cover;    /* 🔥 가로/세로 혼합의 핵심 */
      object-position: center;
      display: block;
      cursor: pointer;
    }

    
    
  }
  
      /* GALLERY POP PRIVIEW */
      .gal-pop-priview {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        /* transform: translate(-50%, -50%); */
        background: #000000d6;
        z-index: 9;
        opacity: 0;
        pointer-events: none;
        transition: opacity .2s ease;

        &.is-open {
          opacity: 1;
          pointer-events: auto;
        }

        .img-pagenation {
          color: #fff;
          text-align: center;
          margin-top: 12px;
        }

        .btn-pop-close {
          width: 30px;
          height: 30px;
          color: #fff;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 10px;
          right: 10px;
          outline: unset;
          box-shadow: unset;
          border: unset;
        }
  
  
        /* GAL POP BLOCK */
        .gal-pop-block {
          width: 94%;
          max-width: 450px;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: #f5f5f5;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
            cursor: pointer;
          }

        }

        .gal-pop-img-nav {

          width: 30px;
          height: 30px;
          z-index: 99999999;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          font-size: 18px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: unset;
          outline: unset;

          &.left  { left: 0; }
          &.right { right: 0; }
        }
  
      }

</style>