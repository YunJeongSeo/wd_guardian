<script>
  /*
  *@Overview 달력 & D Day count
  *@History  2025-10-30 / 미친토끼 / 최초생성
  *@Modified 2025-11-30 / 이상화  / D-Day 계산 기능 추가
  */
  import { onMount, onDestroy } from 'svelte';

  // 결혼식 날짜: 2026년 02월 22일 14:00
  const weddingDate = new Date('2026-02-22T14:00:00');

  // 실시간 카운트다운
  let countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  let interval;

  // 카운트다운 계산 함수
  function updateCountdown() {
    const now = new Date();
    const timeDiff = weddingDate.getTime() - now.getTime();

    if (timeDiff > 0) {
      countdown.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      countdown.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      countdown.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      countdown.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    } else {
      countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  // 2월 캘린더 생성
  function generateCalendar() {
    const year = 2026;
    const month = 1; // 0-based (1 = 2월)

    // 해당 월의 첫날과 마지막 날
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // 첫날의 요일 (0 = 일요일)
    const startDayOfWeek = firstDay.getDay();

    // 마지막 날짜
    const totalDays = lastDay.getDate();

    // 캘린더 배열 생성
    const calendar = [];
    let week = [];

    // 빈 칸 채우기 (월의 시작 전)
    for (let i = 0; i < startDayOfWeek; i++) {
      week.push(null);
    }

    // 날짜 채우기
    for (let day = 1; day <= totalDays; day++) {
      const dayOfWeek = (startDayOfWeek + day - 1) % 7;
      week.push({
        day,
        isSunday: dayOfWeek === 0,
        isWeddingDay: day === 22
      });

      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    }

    // 마지막 주의 빈 칸 채우기
    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null);
      }
      calendar.push(week);
    }

    return calendar;
  }

  const calendar = generateCalendar();
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

  onMount(() => {
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
  });

  onDestroy(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
</script>

<section class="sec sec-cal" data-aos="fade-up" data-aos-duration="1500">

  <!-- CALENDAR BLOCK -->
  <div class="cal-block">
    <h1>2월</h1>

    <div class="calendar">
      <!-- 요일 헤더 -->
      <div class="weekdays">
        {#each weekdays as day, i}
          <div class="weekday" class:sunday={i === 0}>{day}</div>
        {/each}
      </div>

      <!-- 날짜 -->
      <div class="dates">
        {#each calendar as week}
          {#each week as date}
            {#if date}
              <div
                class="date"
                class:sunday={date.isSunday}
                class:wedding-day={date.isWeddingDay}
              >
                {date.day}
              </div>
            {:else}
              <div class="date empty"></div>
            {/if}
          {/each}
        {/each}
      </div>
    </div>
  </div>
  <!-- CALENDAR BLOCK // -->

  <!-- COUNTDOWN TIMER -->
  <div class="countdown-timer">
    <div class="timer-box">
      <div class="timer-value">{countdown.days}</div>
      <div class="timer-label">DAYS</div>
    </div>
    <div class="timer-separator">:</div>
    <div class="timer-box">
      <div class="timer-value">{countdown.hours}</div>
      <div class="timer-label">HOUR</div>
    </div>
    <div class="timer-separator">:</div>
    <div class="timer-box">
      <div class="timer-value">{countdown.minutes}</div>
      <div class="timer-label">MIN</div>
    </div>
    <div class="timer-separator">:</div>
    <div class="timer-box">
      <div class="timer-value">{countdown.seconds}</div>
      <div class="timer-label">SEC</div>
    </div>
  </div>
  <!-- COUNTDOWN TIMER // -->
  <!-- DDAY BLOCK -->
  <div class="dday-block">
    <div class="flexrow white-nowrap">
      <span class="dday-groom">태수호</span>
      <span class="dday-icon"><i class="fa-solid fa-heart"></i></span>
      <span class="dday-bride">전혜선</span>
    </div>
    <span>의 결혼식이&nbsp;</span>
    <span class="dday">{countdown.days}</span>
    <span>일&nbsp;남았습니다</span>
  </div>
  <!-- DDAY BLOCK // -->
</section>


<style>
  section {
    padding: 0 5%;
    font-size: .875rem;
  }

  /* SECTION CALENDAR */
  .sec-cal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 60px;
  }

  /* DDAY BLOCK */
  .dday-block {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .875rem;
    color: #121212;
    margin-top: 40px;
  }

  .dday-groom,
  .dday-bride {
    font-weight: bold;
  }

  .dday-icon {
    color: #FF8B6B;
    font-size: 10px;
  }

  .dday {
    color: #FFB041;
    font-weight: 600;
    text-decoration: underline;
  }

  /* CALENDAR block */
  .cal-block {
    margin-top: 40px;
    width: 100%;
    max-width: 400px;
  }

  .cal-block h1 {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #121212;
  }

  .calendar {
    /* background-color: #FAFAFA; */
    padding: 20px;
    border-radius: 8px;
  }

  .weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
    margin-bottom: 12px;
  }

  .weekday {
    text-align: center;
    font-size: .875rem;
    color: #666;
    font-weight: 500;
  }

  .weekday.sunday {
    color: #FF8B6B;
  }

  .dates {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 8px;
  }

  .date {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .875rem;
    color: #333;
    border-radius: 50%;
    transition: all 0.2s ease;
  }

  .date.empty {
    visibility: hidden;
  }

  .date.sunday {
    color: #FF8B6B;
  }

  .date.wedding-day {
    background-color: #FF8B6B;
    color: #fff;
    font-weight: 600;
  }

  /* COUNTDOWN TIMER */
  .countdown-timer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
  }

  .timer-box {
    background-color: #fdece5;
    padding: 16px 20px;
    border-radius: 6px;
    text-align: center;
    min-width: 70px;
  }

  .timer-value {
    font-size: 1.5rem;
    font-weight: 500;
    color: #998181;
    margin-bottom: 4px;
  }

  .timer-label {
    font-size: .75rem;
    color: #C6C6C6;
    font-weight: 400;
  }

  .timer-separator {
    font-size: 1.5rem;
    color: #c6c6c6;
    font-weight: 300;
  }

  @media (max-width: 480px) {
    .timer-box {
      padding: 12px 14px;
      min-width: 60px;
    }

    .timer-value {
      font-size: 1.25rem;
    }

    .timer-label {
      font-size: .7rem;
    }

    .timer-separator {
      font-size: 1.25rem;
    }
    .border-bottom {
      border-bottom: 1px solid #C6C6C6;
    }
  }
</style>