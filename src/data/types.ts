export type GroupKey = "NT" | "NF" | "SJ" | "SP";

export interface GroupInfo {
  key: GroupKey;
  label: string;
  colorLight: string;
  colorDark: string;
}

export const groups: Record<GroupKey, GroupInfo> = {
  NT: { key: "NT", label: "분석가", colorLight: "#4a3aa7", colorDark: "#9085e9" },
  NF: { key: "NF", label: "외교관", colorLight: "#1baf7a", colorDark: "#199e70" },
  SJ: { key: "SJ", label: "관리자", colorLight: "#2a78d6", colorDark: "#3987e5" },
  SP: { key: "SP", label: "탐험가", colorLight: "#eda100", colorDark: "#c98500" },
};

function groupOf(code: string): GroupKey {
  const hasN = code.includes("N");
  const hasT = code.includes("T");
  const hasJ = code.includes("J");
  if (hasN && hasT) return "NT";
  if (hasN && !hasT) return "NF";
  if (!hasN && hasJ) return "SJ";
  return "SP";
}

export interface TypeInfo {
  code: string;
  nickname: string;
  group: GroupKey;
  description: string;
  strengths: string[];
  growthTip: string;
  shineWhen: string;
}

const RAW: Record<string, Omit<TypeInfo, "code" | "group">> = {
  INTJ: {
    nickname: "전략가",
    description:
      "장기적인 그림을 그리고 그걸 향해 묵묵히 실행하는 유형. 남들이 놓치는 구조적 허점을 잘 짚어낸다.",
    strengths: ["독립적 사고", "장기 계획", "높은 기준"],
    growthTip: "완벽한 계획을 기다리다 시작이 늦어질 수 있어요. 60% 확신에서 일단 움직여보세요.",
    shineWhen: "복잡한 문제를 처음부터 다시 설계해야 할 때",
  },
  INTP: {
    nickname: "논리술사",
    description: "'왜 그렇게 되는지'가 궁금해서 파고드는 유형. 이론과 원리를 이해하는 데서 즐거움을 느낀다.",
    strengths: ["분석력", "호기심", "객관성"],
    growthTip: "생각이 너무 깊어지면 실행이 늦어져요. 작은 결과물부터 세상에 내보내보세요.",
    shineWhen: "정답이 정해지지 않은 문제를 탐구할 때",
  },
  ENTJ: {
    nickname: "지휘관",
    description: "목표를 정하면 사람과 자원을 조직해서 밀어붙이는 유형. 결단력 있는 리더십을 자연스럽게 발휘한다.",
    strengths: ["추진력", "결단력", "조직화"],
    growthTip: "속도를 늦추고 팀원의 감정적 신호에도 귀 기울이면 신뢰가 더 단단해져요.",
    shineWhen: "여러 사람을 이끌고 목표를 향해 나아갈 때",
  },
  ENTP: {
    nickname: "변론가",
    description: "새로운 아이디어를 던지고 토론하는 걸 즐기는 유형. 기존 방식에 '왜?'라고 묻는 걸 두려워하지 않는다.",
    strengths: ["발상 전환", "순발력", "설득력"],
    growthTip: "아이디어가 많을수록 마무리가 힘들어져요. 하나를 끝까지 완성해보는 연습이 필요해요.",
    shineWhen: "브레인스토밍하며 기존 틀을 깨야 할 때",
  },
  INFJ: {
    nickname: "옹호자",
    description: "사람과 의미를 깊이 들여다보는 유형. 조용하지만 확고한 신념을 가지고 움직인다.",
    strengths: ["통찰력", "공감", "신념"],
    growthTip: "타인을 챙기느라 스스로를 소진할 수 있어요. 내 감정을 먼저 돌보는 연습을 해보세요.",
    shineWhen: "누군가를 깊이 이해하고 도와야 할 때",
  },
  INFP: {
    nickname: "중재자",
    description: "자신의 가치관에 진심인 유형. 겉으로 조용해 보여도 내면에는 뚜렷한 이상을 품고 있다.",
    strengths: ["진정성", "상상력", "가치 중심"],
    growthTip: "이상과 현실의 간극에 좌절하기 쉬워요. 작은 실행 단위로 쪼개면 훨씬 수월해져요.",
    shineWhen: "의미 있는 일에 몰입할 때",
  },
  ENFJ: {
    nickname: "선도자",
    description: "사람들의 잠재력을 알아보고 이끌어주는 유형. 주변 분위기를 살피고 조율하는 데 능숙하다.",
    strengths: ["리더십", "공감", "동기부여"],
    growthTip: "다른 사람 기분을 살피느라 내 의견을 미루기 쉬워요. 필요할 땐 분명히 말해보세요.",
    shineWhen: "팀 전체를 같은 방향으로 이끌어야 할 때",
  },
  ENFP: {
    nickname: "활동가",
    description: "사람과 아이디어에 대한 호기심이 넘치는 유형. 에너지 넘치는 분위기로 주변을 즐겁게 만든다.",
    strengths: ["열정", "친화력", "창의성"],
    growthTip: "새로운 자극에 쉽게 옮겨가는 편이에요. 하나를 끝까지 붙잡는 루틴을 만들어보세요.",
    shineWhen: "새로운 사람·아이디어와 처음 마주할 때",
  },
  ISTJ: {
    nickname: "현실주의자",
    description: "약속과 원칙을 지키는 걸 중요하게 여기는 유형. 맡은 일은 끝까지 책임지고 완수한다.",
    strengths: ["책임감", "꼼꼼함", "일관성"],
    growthTip: "변화에 마음을 여는 데 시간이 걸려요. 새로운 방식도 한 번쯤 시도해보세요.",
    shineWhen: "정확성과 신뢰가 요구되는 일을 맡을 때",
  },
  ISFJ: {
    nickname: "수호자",
    description: "주변 사람을 조용히 챙기는 유형. 눈에 띄지 않아도 묵묵히 자기 역할을 해낸다.",
    strengths: ["세심함", "헌신", "안정감"],
    growthTip: "자기 필요는 뒤로 미루기 쉬워요. 가끔은 나부터 먼저 챙겨도 괜찮아요.",
    shineWhen: "누군가를 꾸준히 지원하고 챙길 때",
  },
  ESTJ: {
    nickname: "경영자",
    description: "체계를 세우고 일을 착착 진행시키는 유형. 명확한 기준과 절차를 좋아한다.",
    strengths: ["실행력", "체계성", "책임감"],
    growthTip: "정해진 방식을 고집하면 유연성이 떨어져요. 예외를 허용하는 여유도 필요해요.",
    shineWhen: "일정과 역할을 명확히 정리해야 할 때",
  },
  ESFJ: {
    nickname: "집정관",
    description: "주변 사람들의 필요를 잘 챙기는 유형. 조화로운 분위기를 만드는 데 앞장선다.",
    strengths: ["배려", "협조성", "사교성"],
    growthTip: "타인의 평가에 예민해지기 쉬워요. 모두를 만족시킬 수는 없다는 걸 받아들여보세요.",
    shineWhen: "여러 사람의 필요를 조율해야 할 때",
  },
  ISTP: {
    nickname: "장인",
    description: "직접 손으로 만지고 해결하는 걸 좋아하는 유형. 문제 앞에서 침착하게 원인을 찾아낸다.",
    strengths: ["문제 해결", "침착함", "실용성"],
    growthTip: "감정을 표현하는 데 서툰 편이에요. 가까운 사람에게는 마음을 조금 더 말로 표현해보세요.",
    shineWhen: "당장 눈앞의 문제를 고쳐야 할 때",
  },
  ISFP: {
    nickname: "모험가",
    description: "자기만의 감각과 취향이 뚜렷한 유형. 조용히 자신의 방식대로 세상을 느낀다.",
    strengths: ["감수성", "유연함", "심미안"],
    growthTip: "갈등을 피하려다 속마음을 삼키기 쉬워요. 불편한 것도 가끔은 말해도 괜찮아요.",
    shineWhen: "자신만의 방식으로 표현할 자유가 있을 때",
  },
  ESTP: {
    nickname: "사업가",
    description: "지금 이 순간에 몰입하는 행동파 유형. 위험을 감수하고서라도 일단 부딪혀본다.",
    strengths: ["순발력", "실행력", "적응력"],
    growthTip: "장기 계획을 세우는 걸 지루해하는 편이에요. 큰 목표 하나쯤은 적어두고 가끔 확인해보세요.",
    shineWhen: "즉각적인 판단과 행동이 필요할 때",
  },
  ESFP: {
    nickname: "연예인",
    description: "분위기를 살리는 걸 즐기는 유형. 주변 사람들과 함께 있을 때 가장 생기가 넘친다.",
    strengths: ["활력", "사교성", "현재 지향"],
    growthTip: "즉흥적인 선택이 계획을 흔들 수 있어요. 중요한 일은 미리 한 번 더 점검해보세요.",
    shineWhen: "사람들과 어울리며 분위기를 띄울 때",
  },
};

export const typeInfo: Record<string, TypeInfo> = Object.fromEntries(
  Object.entries(RAW).map(([code, info]) => [code, { code, group: groupOf(code), ...info }]),
);
