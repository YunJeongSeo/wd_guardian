import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

let bgmStarted = false;

// 사용자 인터랙션 후 BGM 시작
function startBGM() {
  if (bgmStarted) return;

  const bgm = document.getElementById('bgm');
  if (bgm) {
    bgm.muted = false;
    bgm.play().catch(err => console.log('BGM autoplay prevented:', err));
    bgmStarted = true;
  }
}

// 페이지의 첫 클릭/터치 시 BGM 재생
document.addEventListener('click', startBGM, { once: true });
document.addEventListener('touchstart', startBGM, { once: true });

// 음소거 버튼 이벤트
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn-mute-audio');
  const bgm = document.getElementById('bgm');

  if (btn && bgm) {
    btn.addEventListener('click', () => {
      const isMute = btn.classList.contains('mute');

      // 버튼 상태 토글
      btn.classList.toggle('mute', !isMute);
      btn.classList.toggle('unmute', isMute);
      btn.setAttribute('aria-pressed', String(!isMute));

      bgm.muted = isMute ? false : true;
    });
  }
});

export default app
