<script>
  /*
   *@Overview 마음전하기
   *@History  2025-10-30 / 미친토끼 / 최초생성
  */
</script>

<section class="sec sec-accnt">


  <!-- ACCOUNT TITLE -->
  <div class="accnt-tit">

    <h1>마음을 전하는 곳</h1>

  </div>
  <!-- ACCOUNT TITLE // -->


  <!-- ACCOUNT CONT BLOCK -->
  <div class="accnt-cont-block">


    <!-- ACCOUNT BOX -->
    <div class="accnt-box">


      <!-- ACCOUNT BOX TITLE -->
      <p class="accnt-box-tit">
        <span class="">신랑</span>측 계좌번호
      </p>
      <!-- ACCOUNT BOX TITLE // -->


      <!-- ACCOUNT BOX INFO -->
      <div class="accnt-box-info">


        <!-- LEFT -->
        <div class="left">


          <!-- ACCOUNT BANK -->
          <div class="accnt-bank">
            
            <p class="bank">농협은행</p>
            <span class="bank-num">302-0940-3506-90</span>
            
          </div>
          <!-- ACCOUNT BANK // -->

          <div class="whos">태수호</div>

        </div>
        <!-- LEFT // -->


        <!-- RIGHT -->
        <div class="right">

          <button type="button" class="btn-accnt copy">복사하기</button>
          <button type="button" class="btn-accnt">CARD</button>

        </div>
        <!-- RIGHT // -->


      </div>
      <!-- ACCOUNT BOX INFO // -->
       

    </div>
    <!-- ACCOUNT BOX // -->


    <!-- ACCOUNT BOX -->
    <div class="accnt-box">


      <!-- ACCOUNT BOX TITLE -->
      <p class="accnt-box-tit">
        <span class="">신부</span>측 계좌번호
      </p>
      <!-- ACCOUNT BOX TITLE // -->


      <!-- ACCOUNT BOX INFO -->
      <div class="accnt-box-info">


        <!-- LEFT -->
        <div class="left">


          <!-- ACCOUNT BANK -->
          <div class="accnt-bank">
            
            <p class="bank">국민은행</p>
            <span class="bank-num">125002-04-335513</span>
            
          </div>
          <!-- ACCOUNT BANK // -->

          <div class="whos">전혜선</div>

        </div>
        <!-- LEFT // -->


        <!-- RIGHT -->
        <div class="right">

          <button type="button" class="btn-accnt copy">복사하기</button>
          <button type="button" class="btn-accnt">CARD</button>

        </div>
        <!-- RIGHT // -->


      </div>
      <!-- ACCOUNT BOX INFO // -->
       

    </div>
    <!-- ACCOUNT BOX // -->



  </div>
  <!-- ACCOUNT CONT BLOCK // -->


</section>



<style>

  section {
    
    padding: 0 36px;
    font-size: .875rem;
  }

  p { 
    margin: unset;
  }

  
  ul, li {
    margin: unset;
    padding: unset;
  }


  /* ACCOUNT TITLE */
  .accnt-tit {
    margin-top: 50px;

    h1 {
      text-align: center;
      font-size: .875rem;
    }

  }


  /* ACCOUNT CONT BLOCK */
  .accnt-cont-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 38px;
  }


  /* ACCOUNT BOX */
  .accnt-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 26px 10px 32px;
    border-top   : 1px solid #d1d1d1;
    border-bottom: 1px solid #d1d1d1;

    &:nth-child(2) {
      border-top: unset;
    } 


    /* ACCOUNT BOX INFO */
    .accnt-box-info {
      width: 100%;
      display: flex;
      justify-content: space-between;

      /* LEFT */
      .left {

        .accnt-bank {
          display: flex;
          gap: 5px;
          line-height: 1.8;
        }

      }


      /* RIGHT */
      .right {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }

    }
    /* ACCOUNT BOX INFO // */



    /* BUTTON */
    .btn-accnt {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #cccccc;
      font-size: 10px;
      color: #cccccc;
      background-color: #fff;
      outline: unset;
      box-sizing: border-box;

      &.copy {
        color: #ffffff;
        background-color: #cccccc;
      }
    }
    

  }
  /* ACCOUNT BOX // */


</style>