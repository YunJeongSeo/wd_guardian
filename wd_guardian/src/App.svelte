<script>

  import SecIntor    from './components/Sec_intro.svelte';    /* intor */
  import SecCalendar from './components/Sec_calendar.svelte'; /* 달력 & D Day */
  import SecGallery  from './components/Sec_gallery.svelte';  /* 앨범 */
  import SecNavi     from './components/Sec_navi.svelte';     /* 오시는 길 */
  import SecAccount  from './components/Sec_account.svelte';  /* 마음전하기 */
  import SecGuest    from './components/Sec_guest.svelte';    /* 방명록 */
  import SecShare    from './components/Sec_share.svelte';    /* 공유하기 */

  import PopGallery  from './components/Pop_gallery.svelte';  /* 앨범 :: 팝업 */

  import { onMount } from 'svelte';

  onMount(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
      });
    }
  });


  let popupOpen = false;
  let popupIndex = 0;

  function openGallery(e) {
    popupIndex = e.detail.index;
    popupOpen = true;
  }

  function closeGallery() {
    popupOpen = false;
  }

    // Ctrl + 마우스 휠 확대 방지
  window.addEventListener('wheel', function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  }, { passive: false });

  // Ctrl + + / - 확대 방지
  window.addEventListener('keydown', function (e) {
    if (
      e.ctrlKey &&
      (e.key === '+' || e.key === '-' || e.key === '=')
    ) {
      e.preventDefault();
    }
  }); 
</script>

<main class='wrap'>

  <PopGallery
    isOpen={popupOpen}
    index={popupIndex}
    on:close={closeGallery}
  />

  <SecIntor />
  <SecCalendar />
  <SecGallery on:openGallery={openGallery} />
  <SecNavi />
  <SecAccount />
  <SecGuest />
  <SecShare />

</main>

<style global>

  main.wrap {
    /* background-color: lightgray; */
    width: 100%;
    height: 100%;
    max-width: 420px;
    margin: 0 auto;
    padding: 60px 0;
    background-color: #fff;
    font-family: Pretendard;
    font-weight: 400;
    box-shadow: 0 0 75px -11px #f1f1f1;
    position: relative;
  }



</style>
