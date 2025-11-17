<script>
  import KakaoMap from './lib/KakaoMap.svelte'
</script>

<main>
  <h1>WD Guardian - Kakao Map</h1>

  <div class="map-wrapper">
    <KakaoMap latitude={37.5665} longitude={126.9780} level={3} />
  </div>
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .map-wrapper {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
