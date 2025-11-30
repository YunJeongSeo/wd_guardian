# 💍 WD Guardian (Wedding Guardian)

> 태수호 ♥ 전혜선 결혼식 초대장 웹사이트

[![Svelte](https://img.shields.io/badge/Svelte-5.43.0-orange)](https://svelte.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.12-646CFF)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.1-7952B3)](https://getbootstrap.com/)

## 📅 결혼식 정보

- **신랑**: 태수호
- **신부**: 전혜선
- **날짜**: 2026년 02월 22일 (일요일) 오후 1시
- **장소**: W웨딩 K웨딩홀

## ✨ 주요 기능

- 📅 **실시간 D-Day 카운터** - 결혼식까지 남은 일수를 자동 계산
- 🖼️ **갤러리** - 예비 부부의 소중한 추억 공유
- 📝 **방명록** - 축하 메시지 남기기
- 💰 **축의금 계좌 안내** - 편리한 계좌번호 복사 기능
- 📱 **소셜 공유** - 카카오톡으로 초대장 공유
- 📍 **네비게이션** - 부드러운 페이지 이동
- 🎨 **반응형 디자인** - 모바일 친화적 UI

## 🛠️ 기술 스택

### Frontend Framework
- **Svelte 5** - 현대적인 반응형 UI 프레임워크
- **Vite** - 빠른 개발 서버와 빌드 도구

### UI & 스타일링
- **Bootstrap 5** - 반응형 CSS 프레임워크
- **FontAwesome** - 아이콘 라이브러리
- **Google Fonts** - Playfair Display, Pretendard
- **AOS** - 스크롤 애니메이션 라이브러리

### 기능 라이브러리
- **Swiper** - 터치 슬라이더 컴포넌트
- **Kakao SDK** - 카카오톡 공유 기능
- **PrimeReact** - UI 컴포넌트 라이브러리

## 🚀 시작하기

### 사전 요구사항

- Node.js 18+
- npm 또는 yarn

### 설치 및 실행

```bash
# 프로젝트 클론
git clone https://github.com/YunJeongSeo/wd_guardian.git
cd wd_guardian

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173`으로 접속하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── Sec_intro.svelte      # 인트로 & 결혼식 정보
│   ├── Sec_calendar.svelte   # 달력 & D-Day 카운터
│   ├── Sec_gallery.svelte    # 사진 갤러리
│   ├── Sec_guest.svelte      # 방명록
│   ├── Sec_account.svelte    # 축의금 계좌 정보
│   ├── Sec_share.svelte      # 소셜 공유
│   └── Sec_navi.svelte       # 네비게이션
├── lib/
│   └── KakaoMap.svelte       # 카카오 지도 컴포넌트
├── assets/
│   ├── css/
│   │   └── common.css        # 공통 스타일
│   └── img/                  # 이미지 리소스
├── App.svelte                # 메인 앱 컴포넌트
└── main.js                   # 앱 진입점
```

## 🎯 개발 특징

- **컴포넌트 기반 아키텍처** - 재사용 가능한 모듈식 설계
- **모던 JavaScript** - ES6+ 문법 활용
- **반응형 웹 디자인** - 모바일 우선 접근
- **접근성 고려** - 시맨틱 HTML 및 ARIA 속성
- **성능 최적화** - Vite의 빠른 HMR 지원

## 📝 개발 노트

- 코드 라인 들여쓰기: 2칸 스페이스
- Svelte 컴포넌트는 `.svelte` 확장자 사용
- CSS는 컴포넌트 내 scoped 스타일링 우선
- 반응형 디자인을 위한 Bootstrap grid 시스템 활용

## 🤝 기여하기

이 프로젝트는 결혼식 초대장으로 특별히 제작되었으나, 템플릿으로 활용 가능합니다.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 제공됩니다.

## 🙏 감사의 말

이 웹사이트를 방문해주셔서 감사합니다. 태수호 ♥ 전혜선의 새로운 시작을 축하해주세요! 🎉
