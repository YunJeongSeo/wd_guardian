import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})
const bgm = document.getElementById('bgm');

document.addEventListener(
  'DOMContentLoaded',
  () => {
    bgm.muted = false;
  },
  { once: true }
);

const btn = document.querySelector('.btn-mute-audio');
btn.addEventListener('click', async () => {
  const isMute = btn.classList.contains('mute');

  // 버튼 상태 토글
  btn.classList.toggle('mute', !isMute);
  btn.classList.toggle('unmute', isMute);
  btn.setAttribute('aria-pressed', String(!isMute));

  isMute ? bgm.muted = false : bgm.muted = true;
});

export default app
