export type Axis = "EI" | "SN" | "TF" | "JP";

export interface Question {
  id: number;
  axis: Axis;
  optionA: { text: string; pole: string };
  optionB: { text: string; pole: string };
}

export const questions: Question[] = [
  // E vs I
  {
    id: 1,
    axis: "EI",
    optionA: { text: "사람들과 어울리고 나면 에너지가 채워진다", pole: "E" },
    optionB: { text: "혼자만의 시간을 보내야 에너지가 채워진다", pole: "I" },
  },
  {
    id: 2,
    axis: "EI",
    optionA: { text: "처음 만난 사람과도 금방 말을 튼다", pole: "E" },
    optionB: { text: "낯선 사람 앞에서는 말수가 줄어든다", pole: "I" },
  },
  {
    id: 3,
    axis: "EI",
    optionA: { text: "생각을 말로 하면서 정리하는 편이다", pole: "E" },
    optionB: { text: "말하기 전에 머릿속으로 먼저 정리한다", pole: "I" },
  },
  {
    id: 4,
    axis: "EI",
    optionA: { text: "약속이 많은 주말이 즐겁다", pole: "E" },
    optionB: { text: "약속 없는 주말이 더 편하다", pole: "I" },
  },
  {
    id: 5,
    axis: "EI",
    optionA: { text: "모임에서 여러 사람과 두루 이야기한다", pole: "E" },
    optionB: { text: "모임에서 한두 명과 깊게 이야기한다", pole: "I" },
  },
  {
    id: 6,
    axis: "EI",
    optionA: { text: "회의에서 먼저 의견을 던지는 편이다", pole: "E" },
    optionB: { text: "회의에서 남의 말을 먼저 듣는 편이다", pole: "I" },
  },
  {
    id: 7,
    axis: "EI",
    optionA: { text: "팀으로 일할 때 더 몰입이 잘 된다", pole: "E" },
    optionB: { text: "혼자 집중할 때 더 몰입이 잘 된다", pole: "I" },
  },

  // S vs N
  {
    id: 8,
    axis: "SN",
    optionA: { text: "구체적인 사실과 경험을 신뢰한다", pole: "S" },
    optionB: { text: "가능성과 아이디어에 끌린다", pole: "N" },
  },
  {
    id: 9,
    axis: "SN",
    optionA: { text: "설명서를 순서대로 읽고 따라 한다", pole: "S" },
    optionB: { text: "일단 해보면서 감을 잡는다", pole: "N" },
  },
  {
    id: 10,
    axis: "SN",
    optionA: { text: "지금 눈앞의 현실적인 문제에 집중한다", pole: "S" },
    optionB: { text: "이게 미래에 어떤 의미일지 상상한다", pole: "N" },
  },
  {
    id: 11,
    axis: "SN",
    optionA: { text: "경험해본 방식이 가장 믿을 만하다", pole: "S" },
    optionB: { text: "새로운 방식을 시도해보고 싶다", pole: "N" },
  },
  {
    id: 12,
    axis: "SN",
    optionA: { text: "디테일을 하나하나 짚어가며 이해한다", pole: "S" },
    optionB: { text: "큰 그림과 패턴을 먼저 파악한다", pole: "N" },
  },
  {
    id: 13,
    axis: "SN",
    optionA: { text: "'있는 그대로'를 설명하는 게 편하다", pole: "S" },
    optionB: { text: "비유나 은유로 설명하는 게 편하다", pole: "N" },
  },
  {
    id: 14,
    axis: "SN",
    optionA: { text: "현실적이고 실용적이라는 말을 자주 듣는다", pole: "S" },
    optionB: { text: "엉뚱하고 창의적이라는 말을 자주 듣는다", pole: "N" },
  },

  // T vs F
  {
    id: 15,
    axis: "TF",
    optionA: { text: "결정할 때 논리와 원칙을 먼저 따진다", pole: "T" },
    optionB: { text: "결정할 때 사람들 마음을 먼저 헤아린다", pole: "F" },
  },
  {
    id: 16,
    axis: "TF",
    optionA: { text: "친구가 조언을 구하면 해결책부터 제시한다", pole: "T" },
    optionB: { text: "친구가 조언을 구하면 감정에 먼저 공감한다", pole: "F" },
  },
  {
    id: 17,
    axis: "TF",
    optionA: { text: "옳고 그름을 분명히 하는 게 중요하다", pole: "T" },
    optionB: { text: "관계가 상하지 않는 게 중요하다", pole: "F" },
  },
  {
    id: 18,
    axis: "TF",
    optionA: { text: "비판을 받아도 논리적이면 수긍한다", pole: "T" },
    optionB: { text: "논리적이어도 말투가 차가우면 서운하다", pole: "F" },
  },
  {
    id: 19,
    axis: "TF",
    optionA: { text: "'왜 그런 결정을 했는지' 근거가 궁금하다", pole: "T" },
    optionB: { text: "'그 결정으로 누가 힘들어질지'가 궁금하다", pole: "F" },
  },
  {
    id: 20,
    axis: "TF",
    optionA: { text: "냉정하다는 평가를 들어본 적 있다", pole: "T" },
    optionB: { text: "정 많다는 평가를 들어본 적 있다", pole: "F" },
  },
  {
    id: 21,
    axis: "TF",
    optionA: { text: "효율과 성과를 기준으로 판단한다", pole: "T" },
    optionB: { text: "배려와 화합을 기준으로 판단한다", pole: "F" },
  },

  // J vs P
  {
    id: 22,
    axis: "JP",
    optionA: { text: "여행 전에 일정을 미리 짜둬야 마음이 편하다", pole: "J" },
    optionB: { text: "여행은 즉흥적으로 다니는 게 더 재밌다", pole: "P" },
  },
  {
    id: 23,
    axis: "JP",
    optionA: { text: "할 일 목록을 만들고 하나씩 끝내야 개운하다", pole: "J" },
    optionB: { text: "마감 직전에 몰아서 해도 크게 상관없다", pole: "P" },
  },
  {
    id: 24,
    axis: "JP",
    optionA: { text: "계획이 틀어지면 스트레스를 받는다", pole: "J" },
    optionB: { text: "계획이 틀어져도 그때그때 맞춰간다", pole: "P" },
  },
  {
    id: 25,
    axis: "JP",
    optionA: { text: "결론을 빨리 내고 정리하는 게 편하다", pole: "J" },
    optionB: { text: "결론을 열어두고 계속 살펴보는 게 편하다", pole: "P" },
  },
  {
    id: 26,
    axis: "JP",
    optionA: { text: "정리정돈이 되어 있어야 집중이 된다", pole: "J" },
    optionB: { text: "약간 어수선해도 크게 신경 쓰이지 않는다", pole: "P" },
  },
  {
    id: 27,
    axis: "JP",
    optionA: { text: "마감 기한보다 미리 끝내는 걸 선호한다", pole: "J" },
    optionB: { text: "마감 기한에 맞춰 유연하게 조절한다", pole: "P" },
  },
  {
    id: 28,
    axis: "JP",
    optionA: { text: "규칙과 절차가 있으면 일이 수월하다", pole: "J" },
    optionB: { text: "규칙보다 상황에 맞춘 융통성이 좋다", pole: "P" },
  },
];
