export type Axis = "EI" | "SN" | "TF" | "JP";

export interface LikertQuestion {
  id: number;
  axis: Axis;
  /** The pole this statement leans toward when the respondent agrees. */
  pole: string;
  text: string;
}

export const AXIS_POLES: Record<Axis, [string, string]> = {
  EI: ["E", "I"],
  SN: ["S", "N"],
  TF: ["T", "F"],
  JP: ["J", "P"],
};

export const questions: LikertQuestion[] = [
  // E / I
  { id: 1, axis: "EI", pole: "E", text: "사람들과 함께 있을 때 에너지가 채워지는 편이다." },
  { id: 2, axis: "EI", pole: "E", text: "처음 만난 사람과도 비교적 쉽게 대화를 시작한다." },
  { id: 3, axis: "EI", pole: "E", text: "여러 사람이 모이는 자리가 즐겁다." },
  { id: 4, axis: "EI", pole: "E", text: "생각을 말로 표현하면서 정리하는 편이다." },
  { id: 5, axis: "EI", pole: "E", text: "새로운 사람을 만나는 자리에 적극적으로 나서는 편이다." },
  { id: 6, axis: "EI", pole: "I", text: "혼자만의 시간을 보내야 재충전이 된다." },
  { id: 7, axis: "EI", pole: "I", text: "낯선 사람 앞에서는 말수가 줄어드는 편이다." },
  { id: 8, axis: "EI", pole: "I", text: "소수의 사람과 깊게 교류하는 걸 선호한다." },
  { id: 9, axis: "EI", pole: "I", text: "말하기 전에 생각을 먼저 정리하는 편이다." },
  { id: 10, axis: "EI", pole: "I", text: "시끌벅적한 모임보다 조용한 시간이 더 편하다." },

  // S / N
  { id: 11, axis: "SN", pole: "S", text: "구체적인 사실과 경험을 바탕으로 판단하는 편이다." },
  { id: 12, axis: "SN", pole: "S", text: "매뉴얼이나 정해진 절차를 따라가는 게 편하다." },
  { id: 13, axis: "SN", pole: "S", text: "지금 눈앞의 현실적인 문제에 집중하는 편이다." },
  { id: 14, axis: "SN", pole: "S", text: "이미 검증된 방식을 신뢰하는 편이다." },
  { id: 15, axis: "SN", pole: "S", text: "세부적인 디테일을 꼼꼼히 챙기는 편이다." },
  { id: 16, axis: "SN", pole: "N", text: "가능성과 새로운 아이디어에 자연스럽게 끌린다." },
  { id: 17, axis: "SN", pole: "N", text: "일단 시도해보면서 감을 잡는 걸 좋아한다." },
  { id: 18, axis: "SN", pole: "N", text: "이 일이 앞으로 어떤 의미가 될지 상상하곤 한다." },
  { id: 19, axis: "SN", pole: "N", text: "세부 사항보다 큰 그림과 패턴을 먼저 파악하려는 편이다." },
  { id: 20, axis: "SN", pole: "N", text: "새로운 방식을 시도하는 데 거부감이 없다." },

  // T / F
  { id: 21, axis: "TF", pole: "T", text: "결정을 내릴 때 논리와 원칙을 먼저 따지는 편이다." },
  { id: 22, axis: "TF", pole: "T", text: "옳고 그름을 분명히 하는 게 중요하다고 생각한다." },
  { id: 23, axis: "TF", pole: "T", text: "비판을 받아도 논리적으로 타당하면 수긍하는 편이다." },
  { id: 24, axis: "TF", pole: "T", text: "효율과 성과를 기준으로 판단하는 편이다." },
  { id: 25, axis: "TF", pole: "T", text: "감정보다 사실관계를 먼저 확인하는 편이다." },
  { id: 26, axis: "TF", pole: "F", text: "결정을 내릴 때 사람들의 마음을 먼저 헤아리는 편이다." },
  { id: 27, axis: "TF", pole: "F", text: "관계가 상하지 않는 것이 중요하다고 생각한다." },
  { id: 28, axis: "TF", pole: "F", text: "논리적이어도 말투가 차가우면 서운함을 느낀다." },
  { id: 29, axis: "TF", pole: "F", text: "배려와 화합을 기준으로 판단하는 편이다." },
  { id: 30, axis: "TF", pole: "F", text: "사실관계보다 그 사람의 감정을 먼저 살피는 편이다." },

  // J / P
  { id: 31, axis: "JP", pole: "J", text: "계획을 세우고 그대로 진행해야 마음이 편하다." },
  { id: 32, axis: "JP", pole: "J", text: "할 일 목록을 만들고 하나씩 끝내야 개운하다." },
  { id: 33, axis: "JP", pole: "J", text: "계획이 틀어지면 스트레스를 받는 편이다." },
  { id: 34, axis: "JP", pole: "J", text: "마감 기한보다 미리 끝내는 걸 선호한다." },
  { id: 35, axis: "JP", pole: "J", text: "정리정돈이 되어 있어야 집중이 잘 된다." },
  { id: 36, axis: "JP", pole: "P", text: "여행이나 일정은 즉흥적으로 정하는 게 더 재밌다." },
  { id: 37, axis: "JP", pole: "P", text: "마감 직전에 몰아서 처리해도 크게 상관없다." },
  { id: 38, axis: "JP", pole: "P", text: "계획이 틀어져도 그때그때 유연하게 맞춰간다." },
  { id: 39, axis: "JP", pole: "P", text: "규칙보다 상황에 맞춘 융통성을 선호한다." },
  { id: 40, axis: "JP", pole: "P", text: "다소 어수선해도 크게 신경 쓰이지 않는 편이다." },
];
