export const budgetTiers = [
  { id: 'budget', label: '가성비' },
  { id: 'standard', label: '스탠다드' },
  { id: 'premium', label: '프리미엄' },
  { id: 'custom', label: '직접입력' }
];

// UI 뼈대 데이터 (가격 정보는 priceFetcher.js에서 동적으로 가져와서 결합됩니다)
export const weddingTimeline = [
  {
    id: 'step-1',
    period: 'D-365',
    title: '웨딩홀 및 상견례',
    items: [
      {
        id: 'venue', // 이 ID로 priceDB['venue']의 값을 찾아옵니다.
        name: '웨딩홀 대관료',
        tooltips: {
          budget: '비수기/잔여타임 프로모션 적용 (무료)',
          standard: '일반 컨벤션 (API 연동 실시간 평균가)',
          premium: '5성급 호텔 (API 연동 실시간 평균가)'
        }
      },
      {
        id: 'sang-gyeon-rye',
        name: '상견례 (양가 식사)',
        tooltips: {
          budget: '인당 5만원대 깔끔한 한정식',
          standard: '인당 10만원대 고급 코스 요리',
          premium: '인당 20만원대 파인다이닝 프라이빗 룸'
        }
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
        tooltips: {
          budget: '토탈샵 가성비 패키지',
          standard: '인지도 높은 인기 브랜드 조합',
          premium: '하이엔드 드레스 및 유명 스튜디오'
        }
      },
      {
        id: 'snap',
        name: '본식 스냅 및 DVD',
        tooltips: {
          budget: '1인 작가 데이터형 스냅 + 가성비 DVD',
          standard: '2인 작가 앨범형 스냅 + 4K DVD',
          premium: '대표 지정 하이엔드 스냅 + 시네마틱 DVD'
        }
      }
    ]
  },
  {
    id: 'step-3',
    period: 'D-30',
    title: '신혼여행 (스위스 취리히 등)',
    items: [
      {
        id: 'flight',
        name: '항공권 (2인 왕복)',
        tooltips: {
          budget: '경유 1~2회 특가 항공권',
          standard: '국적기 직항 이코노미',
          premium: '국적기 직항 비즈니스석'
        }
      },
      {
        id: 'zurich-hotel',
        name: '취리히 숙박 및 교통권',
        tooltips: {
          budget: '비즈니스 호텔 1박 + 세이버 데이 패스',
          standard: '4성급 호텔 1박 + 스위스 트래블 패스',
          premium: '5성급 럭셔리 호텔 + 1등석 패스'
        }
      }
    ]
  }
];