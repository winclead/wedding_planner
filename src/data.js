// 옵션 종류와 식별자
export const budgetTiers = [
  { id: 'exclude', label: '제외' },
  { id: 'budget', label: '가성비' },
  { id: 'standard', label: '스탠다드' },
  { id: 'premium', label: '프리미엄' },
  { id: 'custom', label: '직접입력' }
];

// 타임라인 및 항목별 가격 DB
export const weddingTimeline = [
  {
    id: 'step-1',
    period: 'D-365',
    title: '웨딩홀 및 상견례',
    items: [
      {
        id: 'venue',
        name: '웨딩홀 대관료',
        prices: { exclude: 0, budget: 0, standard: 3000000, premium: 10000000 }
      },
      {
        id: 'sang-gyeon-rye',
        name: '상견례 (양가 식사)',
        prices: { exclude: 0, budget: 300000, standard: 600000, premium: 1200000 }
      }
    ]
  },
  {
    id: 'step-2',
    period: 'D-180',
    title: '스드메 & 본식 촬영',
    items: [
      {
        id: 'sdm-package',
        name: '스드메 패키지',
        prices: { exclude: 0, budget: 1500000, standard: 3000000, premium: 6000000 }
      },
      {
        id: 'snap',
        name: '본식 스냅 및 DVD',
        prices: { exclude: 0, budget: 800000, standard: 1500000, premium: 3000000 }
      }
    ]
  },
  {
    id: 'step-3',
    period: 'D-30',
    title: '신혼여행 (스위스 취리히)',
    items: [
      {
        id: 'flight',
        name: '항공권 (2인 직항/경유)',
        prices: { exclude: 0, budget: 2000000, standard: 3500000, premium: 8000000 }
      },
      {
        id: 'zurich-hotel',
        name: '취리히 숙박 및 트래블패스',
        prices: { exclude: 0, budget: 600000, standard: 1200000, premium: 2000000 }
      }
    ]
  }
];