<script>
  import { onMount } from 'svelte';

  let mapContainer;
  let map;
  let isLoading = true;
  let error = '';

  // 기본 좌표 (부산광역시 연제구 거제 1동 76-2 국제빌딩 4층)
  export let latitude = 35.195691768631;
  export let longitude = 129.079444414394;
  export let level = 3;
  export let address = "부산광역시 연제구 거제 1동 76-2 국제빌딩 4층";

  onMount(() => {
    // 카카오맵 SDK 로딩 대기
    const initMap = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          try {
            // 주소로 좌표 검색
            const geocoder = new window.kakao.maps.services.Geocoder();

            geocoder.addressSearch(address, function(result, status) {
              if (status === window.kakao.maps.services.Status.OK) {
                const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                const container = mapContainer;
                const options = {
                  center: coords,
                  level: level
                };

                map = new window.kakao.maps.Map(container, options);

                // 마커 생성
                const marker = new window.kakao.maps.Marker({
                  position: coords
                });
                marker.setMap(map);

                isLoading = false;
              } else {
                // 주소 검색 실패 시 기본 좌표 사용
                console.warn('주소 검색 실패, 기본 좌표 사용:', status);
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
              }
            });
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
      }, 500);

      setTimeout(() => {
        clearInterval(checkKakao);
        if (!map) {
          error = '카카오맵 SDK 로딩 타임아웃';
          isLoading = false;
        }
      }, 15000);
    }
  });
</script>

<div class="map-container" bind:this={mapContainer}>
  {#if isLoading}
    <div class="loading">지도를 불러오는 중...</div>
  {:else if error}
    <div class="error">{error}</div>
  {/if}
</div>

<style>
  .map-container {
    width: 100%;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #ddd;
  }

  .loading, .error {
    width: 100%;
    height: 400px;
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
