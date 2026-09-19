# MBTI 성격 유형 검사

40문항 5점 리커트 척도(매우 그렇지 않다 ~ 매우 그렇다)로 클래식 MBTI 16유형을 진단하는 웹앱. 서버 상태나 DB 없이 결과를 URL에 인코딩해서 공유하기 때문에 외부 비용이 전혀 들지 않는다.

## 스택

- Next.js (App Router) + TypeScript
- 서버 컴포넌트 위주 (`/`, `/result`), 퀴즈 진행만 클라이언트 컴포넌트 (`/quiz`)

## 구조

```
src/
  data/questions.ts   # 40문항 (E/I, S/N, T/F, J/P 각 10문항, 축마다 5+5 방향 균형)
  data/types.ts       # 16유형 설명 + 4개 기질 그룹(분석가/외교관/관리자/탐험가)
  lib/scoring.ts       # 리커트 응답 -> 유형 + 축별 퍼센트 계산
  components/
    LikertScale.tsx
    AxisBar.tsx
    GroupBadge.tsx
    ShareButton.tsx    # 클립보드 복사 (클라이언트 컴포넌트)
  app/
    page.tsx           # 홈
    quiz/page.tsx       # 퀴즈 (클라이언트, 완료 시 /result?type=...&ei=...로 이동)
    result/page.tsx     # 결과 (서버 컴포넌트, searchParams만으로 렌더링)
```

## 핵심 설계

- **채점**: 각 문항은 하나의 축(EI/SN/TF/JP)과 한쪽 극(pole)에 대한 진술이며, 축마다 절반은 A극, 절반은 B극으로 균형을 맞춰 묵인 편향(acquiescence bias)을 줄였다.
- **공유 가능한 결과 URL**: 퀴즈를 마치면 유형과 축별 퍼센트를 쿼리스트링(`/result?type=ESTJ&ei=88&sn=88&tf=88&jp=88`)에 담아 이동한다. `/result`는 서버 컴포넌트라 그 URL을 그대로 친구에게 보내면 별도 로그인이나 DB 없이 동일한 결과 화면을 볼 수 있다.

## 실행

```bash
npm install
npm run dev
```

## 검증

Playwright로 홈 → 40문항 응답(뒤로가기 포함) → 결과 → 공유 링크 재접속 → 잘못된 유형 파라미터 404까지 전체 플로우를 헤드리스 브라우저로 구동해 확인함.
