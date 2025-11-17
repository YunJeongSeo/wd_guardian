<script>
  /*
   *@Overview 사진앨범
   *@History  2025-10-30 / 미친토끼 / 최초생성
  */
</script>

<section class="sec sec-gal">


  <!-- GALLERY TITLE -->
  <div class="gal-title">
    <p>앨범</p>
  </div>
  <!-- GALLERY TITLE // -->


  <!-- GALLERY BLOCK -->
  <div class="gal-block">


    <div class="gal-box"></div>
    <div class="gal-box"></div>
    <div class="gal-box"></div>
    <div class="gal-box"></div>


  </div>
  <!-- GALLERY BLOCK // -->


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


    .gal-box {
      min-height: 215px;
      border: 1px solid cornflowerblue;
    }
  }

</style>