<script>
  /*
   *@Overview 방명록
   *@History  2025-10-30 / 미친토끼 / 최초생성
  */
</script>

<section class="sec sec-guest">


  <!-- GUEST TITLE -->
  <div class="guest-tit">

    <h1>방명록</h1>

  </div>
  <!-- GUEST TITLE // -->


  <!-- GUEST CONT BLOCK -->
  <div class="guest-cont-block">


    <!-- GUEST LIST -->
    <ul class="guest-list">


      <!-- GUEST CARD -->
      <li class="guest-card">


        <!-- GUEST CONT -->
        <div class="guest-cont">

          <!-- GUEST -->
          <p class="guest">태수호</p>

          <!-- CONTENT -->
          <p class="cont">
            결혼을 선포합니다!!
          </p>
          
        </div>
        <!-- GUEST CONT // -->


        <!-- CLOSE BUTTON -->
        <button type="button" class="btn-guest-card">X</button>


      </li>
      <!-- GUEST CARD // -->


    </ul>
    <!-- GUEST LIST // -->


    <!-- GUEST LIST FOOTER -->
    <div class="guest-list-footer">


      <!-- GUEST LIST PAGENATION -->
      <ul class="guest-list-pagen">

        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>

      </ul>
      <!-- GUEST LIST PAGENATION // -->


      <!-- GUEST REG BUTTON -->
      <button type="button" class="btn-guest-reg">작성하기</button>


    </div>
    <!-- GUEST LIST FOOTER // -->


  </div>
  <!-- GUEST CONT BLOCK // -->

  
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


  /* GUEST TITLE */
  .guest-tit {
    margin-top: 50px;

    h1 {
      text-align: center;
      font-size: .875rem;
    }

  }



  /* GUEST CONT BLOCK */
  .guest-cont-block {
    display: flex;
    flex-direction: column;

    margin-top: 40px;
  }



  /* GUEST CARD */
  .guest-card {
    border-radius: 3px;
    border: 1px solid #D9D9D9;
    padding: 9px 16px 20px;
    position: relative;


    /* GUEST CONT */
    .guest-cont {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }


    /* CLOSE BUTTON */
    .btn-guest-card {
      position: absolute;
      background-color: transparent;
      position: absolute;
      top  : 12px;
      right: 12px;
      border: unset;
      outline: unset;
    }

  }


  /* GUEST LIST FOOTER */
  .guest-list-footer {
    display: flex;
    justify-content: space-between;


    /* GUEST LIST PAGENATION */
    .guest-list-pagen {
      display: flex;

    }


    /* GUEST REG BUTTON */
    .btn-guest-reg {
      display: flex;
      justify-content: center;
      align-items: center;
      border: unset;
      background-color: #D9D9D9;
      color: #fff;
      padding: 2px 10px;
    }

  }




</style>