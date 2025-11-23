<script>
  import { onMount } from 'svelte';

  let mapContainer;
  let map;
  let isLoading = true;
  let error = '';

  // 기본 좌표 (서울 시청)
  export let latitude = 37.5665;
  export let longitude = 126.9780;
  export let level = 3;

  onMount(() => {
    // 카카오맵 SDK 로딩 대기
    const initMap = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          try {
            const container = mapContainer;
            const options = {
              center: new window.kakao.maps.LatLng(latitude, longitude),
              level: level
            };

            map = new window.kakao.maps.Map(container, options);

            // 마커 생성
            const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
            const marker = new window.kakao.maps.Marker({
              position: markerPosition
            });
            marker.setMap(map);

            isLoading = false;
          } catch (e) {
            error = '지도 초기화 실패: ' + e.message;
            isLoading = false;
          }
        });
      } else {
        error = '카카오맵 SDK를 로드하지 못했습니다.';
        isLoading = false;
      }
    };

    // 스크립트 로딩 확인
    if (window.kakao && window.kakao.maps) {
      initMap();
    } else {
      // SDK가 아직 로드되지 않은 경우 대기
      const checkKakao = setInterval(() => {
        if (window.kakao && window.kakao.maps) {
          clearInterval(checkKakao);
          initMap();
        }
      }, 100);

      // 10초 후 타임아웃
      setTimeout(() => {
        clearInterval(checkKakao);
        if (!map) {
          error = '카카오맵 SDK 로딩 타임아웃';
          isLoading = false;
        }
      }, 10000);
    }
  });
</script>

{#if error}
  <div class="error">{error}</div>
{:else if isLoading}
  <div class="loading">지도를 로딩 중입니다...</div>
{/if}

<div class="map-container" bind:this={mapContainer}></div>

<style>
  .map-container {
    width: 100%;
    height: 500px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #ddd;
  }

  .loading, .error {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1.2rem;
  }

  .error {
    color: #d32f2f;
    background-color: #ffebee;
  }

  .loading {
    color: #1976d2;
    background-color: #e3f2fd;
  }
</style>
