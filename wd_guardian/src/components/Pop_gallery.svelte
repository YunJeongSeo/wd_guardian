<script>
  /*
   *@Overview 사진앨범
   *@History  2025-10-30 / 미친토끼 / 최초생성
  */
  import wdImg1 from '../assets/img/wd_photo/wd_img_1.jpeg?format=webp&w=1200&quality=80';
  import wdImg2 from '../assets/img/wd_photo/wd_img_2.jpeg?format=webp&w=1200&quality=80';
  import wdImg3 from '../assets/img/wd_photo/wd_img_3.jpeg?format=webp&w=1200&quality=80';
  import wdImg4 from '../assets/img/wd_photo/wd_img_4.jpeg?format=webp&w=1200&quality=80';


  import { createEventDispatcher, onMount } from 'svelte';
  export let isOpen = false;
  export let index = 0;

  const dispatch = createEventDispatcher();
  let swiperEl;
  let swiper;
  let prevEl;
  let nextEl;

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

    // navigation: {
    //   nextEl: document.querySelector('.gal-pop-img-nav.right'),
    //   prevEl: document.querySelector('.gal-pop-img-nav.left'),
    // },
    navigation: {
      prevEl,
      nextEl,
    },
  });
});

  $: if (isOpen && swiper) {
    swiper.slideTo(index, 0);
  }

  function closePopup() {
    dispatch('close');
  }

</script>

  <!-- GALLERY POP PRIVIEW -->
  <div class="gal-pop-priview" class:is-open={isOpen}>


    <!-- GALLERY POP INNER -->
    <div class="gal-pop-inner">


      <div class="img-pagenation"></div>
      <button type="button" 
              class="btn-pop-close"
              on:click={closePopup}
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
  
  
      <div class="swiper gal-pop-block" bind:this={swiperEl}>
  
        <div class="swiper-wrapper gal-pop-img-wrap">
          <div class="swiper-slide gal-pop-img"><img src={wdImg1} alt="" loading="lazy"></div>
          <div class="swiper-slide gal-pop-img"><img src={wdImg2} alt="" loading="lazy"></div>
          <div class="swiper-slide gal-pop-img"><img src={wdImg3} alt="" loading="lazy"></div>
          <div class="swiper-slide gal-pop-img"><img src={wdImg4} alt="" loading="lazy"></div>
        </div>
  
        <!-- <div class="swiper-pagination"></div> -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
  
        <button bind:this={prevEl} class="gal-pop-img-nav left"><i class="fa-solid fa-angle-left"></i></button>
        <button bind:this={nextEl} class="gal-pop-img-nav right"><i class="fa-solid fa-chevron-right"></i></button>

        
      </div>
    
      
    </div>
    <!-- GALLERY POP INNER // -->


  </div>
  <!-- GALLERY POP PRIVIEW // -->


<style>
  
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

        .gal-pop-inner {
          width: 100%;
          height: 100%;
          position: relative;
          max-width: 420px;
          margin: 0 auto;
          padding-top: 12px;
        }


        .img-pagenation {
          color: #fff;
          text-align: center;
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
          width: 100%;
          max-width: 420px;
          aspect-ratio: 2 / 3;
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