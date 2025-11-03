<script>
  import SecIntor    from './components/Sec_intro.svelte';    /* intor */
  import SecCalendar from './components/Sec_calendar.svelte'; /* 달력 & D Day */
  import SecGallery  from './components/Sec_gallery.svelte';  /* 앨범 */
  import SecNavi     from './components/Sec_navi.svelte';     /* 오시는 길 */
  import SecAccount  from './components/Sec_account.svelte';  /* 마음전하기 */
  import SecGuest    from './components/Sec_guest.svelte';    /* 방명록 */
  import SecShare    from './components/Sec_share.svelte';    /* 공유하기 */
</script>

<main class='wrap'>

  <SecIntor />
  <SecCalendar />
  <SecGallery />
  <SecNavi />
  <SecAccount />
  <SecGuest />
  <SecShare />

</main>

<style global>
  main.wrap {
    background-color: lightgray;
    width: 100%;
    height: 100%;
    max-width: 420px;
    margin: 0 auto;
    padding: 60px 0;
  }
</style>
