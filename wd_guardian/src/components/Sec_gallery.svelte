<script>
  /*
   *@Overview 사진앨범
   *@History  2025-10-30 / 미친토끼 / 최초생성
  */
  import wdImg1 from '../assets/img/wd_photo/wd_img_1.jpg';
  import wdImg2 from '../assets/img/wd_photo/wd_img_2.jpg';
  import wdImg3 from '../assets/img/wd_photo/wd_img_3.jpg';
  import wdImg4 from '../assets/img/wd_photo/wd_img_4.jpg';
  import wdImg5 from '../assets/img/wd_photo/wd_img_5.jpg';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function openPopup(index) {
    dispatch('openGallery', { index });
  }

</script>

<section class="sec sec-gal" data-aos="fade-up" data-aos-duration="1500">


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
        <img src={wdImg2}
        alt=""
        on:click={() => openPopup(1)}
        >
      </div>


    </div>
    <!-- TOP-LEFT // -->


    <!-- TOP-RIGHT -->
    <div class="gal-box">

      <div class="gal-item">
        <img src={wdImg3}
        alt=""
        on:click={() => openPopup(2)}
        >
      </div>

    </div>
    <!-- TOP-RIGHT // -->


    <!-- BOTTOM-LEFT -->
    <div class="gal-box">

      <div class="gal-item">
        <img src={wdImg4}
        alt=""
        on:click={() => openPopup(3)}
        >
      </div>

    </div>
    <!-- BOTTOM-LEFT // -->


    <!-- BOTTOM-RIGHT -->
    <div class="gal-box">

      <div class="gal-item">
        <img src={wdImg5}
        alt=""
        on:click={() => openPopup(4)}
        >
      </div>

    </div>
    <!-- BOTTOM-RIGHT // -->


  </div>
  <!-- GALLERY BLOCK // -->


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
      aspect-ratio: 2 / 3;   /* 👉 통일 */
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
  

</style>