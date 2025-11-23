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
        TEL : <span class="hall-num-txt">051-551-9779</span>
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
    width: 100px;
    height: 100px;
    border: 1px solid salmon;
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