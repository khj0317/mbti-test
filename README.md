# MBTI 성격 유형 검사

28문항으로 클래식 MBTI 16유형을 진단하는 프론트엔드 전용 웹앱. 서버·DB·외부 API가 전혀 없어서 비용이 들지 않는다.

## 스택

- React + Vite + TypeScript
- 상태 관리 없이 `App.tsx`에서 화면 전환(home/quiz/result)만 로컬 state로 처리

## 구조

```
src/
  data/questions.ts   # 28문항 (E/I, S/N, T/F, J/P 각 7문항)
  data/types.ts       # 16유형 설명
  utils/scoring.ts    # 답변 -> 유형 계산
  components/
    Home.tsx
    Quiz.tsx
    Result.tsx
    AxisBar.tsx       # 축별 성향 비율 바
```

## 실행

```bash
npm install
npm run dev
```

## 결과 공유

별도 백엔드 없이 `navigator.clipboard`로 결과 텍스트 + 현재 URL을 복사하는 방식. 나중에 "친구가 평가하기" 기능을 추가하려면 결과를 저장할 백엔드가 필요함.
