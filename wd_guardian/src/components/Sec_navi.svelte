<script>
  /*
   *@Overview 오시는길
   *@History  2025-10-30 / 미친토끼 / 최초생성
  */
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
        TEL : <span class="hall-num-txt">000-000-0000</span>
      </div>
      <!-- WEDDING HALL NUMBER // -->


    </div>
    <!-- NAV INFO // -->


    <!-- MAP INFO -->
    <div class="map-info">



      <!-- MAP API -->
      <div class="map-api"></div>


      <!-- TRANSPORT INFO -->
      <ul class="trans-info">

        
        <!-- TRANS SUBWAY -->
        <li class="trans-subway">

          <p class="trans-info-tit">지하철</p>
          <p class="trans-subway-info"></p>

        </li>
        <!-- TRANS SUBWAY // -->


        <!-- TRANS BUS -->
        <li class="trans-bus">

          <p class="trans-info-tit">버스</p>
          <p class="trans-bus-info"></p>
          
        </li>
        <!-- TRANS BUS // -->


        <!-- TRANS ETC -->
        <li class="trans-etc">

          
          <p class="trans-info-tit">기타 교통정보</p>
          <p class="trans-etc-info"></p>


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
    border: 1px solid red;
    padding: 0 36px;
    font-size: .875rem;
  }

  p { 
    margin: unset;
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
      }

    }


  }
  



</style>