<script>
  /*
  *@Overview 달력 & D Day count
  *@History  2025-10-30 / 미친토끼 / 최초생성
  *@Modified 2025-11-30 / 이상화  / D-Day 계산 기능 추가
  */

  // 결혼식 날짜: 2026년 02월 22일
  const weddingDate = new Date('2026-02-22');
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 시간을 00:00:00으로 설정하여 날짜 비교만 하도록

  // 남은 일수 계산
  const timeDiff = weddingDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // 음수 값 방지 (결혼식이 지났을 경우)
  const ddayCount = daysLeft >= 0 ? daysLeft : 0;
</script>

<section class="sec sec-cal">
  

  <!-- CALENDAR BLOCK -->
  <div class="cal-block">

    <h1>11월</h1>

  </div>
  <!-- CALENDAR BLOCK // -->


  <!-- DDAY BLOCK -->
  <div class="dday-block">

    <div class="flexrow white-nowrap">
      <span class="dday-groom">태수호</span>
      <span class="dday-icon" ><i class="fa-solid fa-heart"></i></span>
      <span class="dday-bride">전혜선</span>
    </div>

    <span>의 결혼식이&nbsp;</span>
    <span class="dday">{ddayCount}</span>
    <span>일&nbsp;남았습니다.</span>

  </div>
  <!-- DDAY BLOCK // -->


</section>


<style>
  section {
    
    padding: 0 5%;
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

    h1 {
      font-size: 1rem;
      font-weight: bold;
    }
    
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