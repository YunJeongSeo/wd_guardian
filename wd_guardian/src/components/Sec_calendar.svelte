<script>
  /*
  *@Overview 달력 & D Day count
  *@History  2025-10-30 / 미친토끼 / 최초생성
  */
</script>

<section class="sec sec-cal">
  

  <!-- CALENDAR BLOCK -->
  <div class="cal-block">

    <h1>11월</h1>

  </div>
  <!-- CALENDAR BLOCK // -->


  <!-- DDAY BLOCK -->
  <div class="dday-block">

    <div class="flexrow">
      <span class="dday-groom">신랑</span>
      <span class="dday-icon" ><i class="fa-solid fa-heart"></i></span>
      <span class="dday-bride">신부</span>
    </div>

    <span>의 결혼식이&nbsp;</span>
    <span class="dday">00</span>
    <span>일&nbsp;남았습니다.</span>

  </div>
  <!-- DDAY BLOCK // -->


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


  /* SECTION CALENDAR */
  .sec-cal {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  /* CALENDAR block */
  .cal-block {
    margin-top: 74px;
  }


  /* DDAY BLOCK */
  .dday-block {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .875rem;
    color: #121212;
    margin-top: 40px;

    .dday-groom,
    .dday-bride {
      font-weight: bold;
    }

    .dday-icon {
      color: #FF8B6B;
    }

    .dday {
      color: #FFB041;
      font-weight: 600;
      text-decoration: underline;
    }
  }


</style>