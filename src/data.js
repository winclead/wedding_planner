export const budgetTiers = [
  { id: 'budget', label: '가성비' },
  { id: 'standard', label: '스탠다드' },
  { id: 'premium', label: '프리미엄' },
  { id: 'custom', label: '직접입력' }
];

export const weddingTimeline = [
  {
    id: 'step-1',
    period: 'D-365',
    title: '베뉴 및 상견례',
    items: [
      { id: 'sang-gyeon-rye', name: '상견례 (식대 및 룸 대관)', isEssential: true },
      { id: 'sang-gifts', name: '상견례 양가 선물 (한우/도라지 등)', isEssential: false },
      { id: 'venue-fee', name: '웨딩홀 대관료 (꽃장식/연출 포함)', isEssential: true },
      { id: 'venue-food', name: '웨딩홀 식대 (보증인원 기준 총액)', isEssential: true },
      { id: 'snap-dvd', name: '본식 스냅 및 DVD 예약금', isEssential: true }
    ]
  },
  {
    id: 'step-2',
    period: 'D-200',
    title: '스드메 & 제주 스냅 (디테일)',
    items: [
      { id: 'sdm-package', name: '스드메 기본 패키지', isEssential: true },
      { id: 'dress-tour', name: '드레스 피팅비 및 프리미엄 업그레이드', isEssential: false },
      { id: 'studio-helper', name: '스튜디오 촬영 헬퍼 이모님', isEssential: true },
      { id: 'hair-change', name: '스튜디오 헤어변형 출장', isEssential: false },
      { id: 'studio-snacks', name: '스튜디오 커피배달/간식/다이소 소품', isEssential: false },
      { id: 'jeju-snap', name: '제주도 촬영 (스냅/드레스/헬퍼비)', isEssential: false },
      { id: 'jeju-travel', name: '제주도 일정 (항공/숙박/렌트)', isEssential: false }
    ]
  },
  {
    id: 'step-3',
    period: 'D-100',
    title: '예물 및 가족 예복',
    items: [
      { id: 'wedding-band', name: '웨딩 밴드 (반지)', isEssential: true },
      { id: 'groom-suit', name: '신랑 맞춤 예복 및 수제화', isEssential: true },
      { id: 'mom-hanbok', name: '양가 혼주 한복 (어머니)', isEssential: true },
      { id: 'dad-suit', name: '양가 혼주 정장 (아버지)', isEssential: false },
      { id: 'family-suit', name: '기타 가족 예복 (형제/자매/이모)', isEssential: false }
    ]
  },
  {
    id: 'step-4',
    period: 'D-60',
    title: '외모 관리 및 청첩장 모임',
    items: [
      { id: 'skin-care', name: '피부과 및 경락 (약손명가 등)', isEssential: false },
      { id: 'invitations', name: '종이 청첩장 및 식권 스탬프', isEssential: true },
      { id: 'mobile-inv', name: '모바일 청첩장 및 식전 영상', isEssential: true },
      { id: 'chung-mo', name: '청첩장 모임 식비 (신랑/신부 총합)', isEssential: true },
      { id: 'sub-party', name: '별도 피로연 (매드포갈릭/리샨 등 대관)', isEssential: false }
    ]
  },
  {
    id: 'step-5',
    period: 'D-30',
    title: '본식 당일 및 신혼여행',
    items: [
      { id: 'iphone-snap', name: '아이폰 스냅 (서브 스냅)', isEssential: false },
      { id: 'wedding-helper', name: '본식 당일 헬퍼 이모님', isEssential: true },
      { id: 'event-staff', name: '주례/사회/축가 사례금', isEssential: true },
      { id: 'guest-bus', name: '지방 하객 전세버스 및 간식', isEssential: false },
      { id: 'guest-hotel', name: '손님/친척 사전 호텔 예약 지원', isEssential: false },
      { id: 'return-gifts', name: '축의금 답례품 및 회사 돌림 선물', isEssential: false },
      { id: 'honey-flight', name: '신혼여행 항공권', isEssential: true },
      { id: 'honey-hotel', name: '신혼여행 숙박 및 교통(패스)', isEssential: true },
      { id: 'honey-budget', name: '신혼여행 체류 총경비', isEssential: true }
    ]
  }
];