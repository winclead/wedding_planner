export const budgetTiers = [
  { id: 'budget', label: '가성비' },
  { id: 'standard', label: '스탠다드' },
  { id: 'premium', label: '프리미엄' },
  { id: 'custom', label: '직접입력' }
];

export const weddingTimeline = [
  {
    id: 'step-0',
    period: 'D-365~',
    title: '신혼집 및 혼수 (가전/가구)',
    items: [
      { 
        id: 'house-deposit', name: '신혼집 보증금/매매금', isEssential: true,
        tooltips: { budget: '전세자금대출 활용 (소형)', standard: '아파트 전세 보증금', premium: '자가 매매 또는 프리미엄 전세' }
      },
      { 
        id: 'interior', name: '인테리어 및 도배/장판', isEssential: false,
        tooltips: { budget: '셀프 도배/장판 및 최소 수리', standard: '부분 리모델링 (욕실/주방)', premium: '올 리모델링 (턴키)' }
      },
      { 
        id: 'appliances', name: '대형/소형 가전 졸업', isEssential: true,
        tooltips: { budget: '필수 가전 위주 오픈점 혜택', standard: '백화점 브랜드 풀패키지', premium: '하이엔드 프리미엄 라인' }
      },
      { 
        id: 'furniture', name: '가구 및 침구류 세팅', isEssential: true,
        tooltips: { budget: '이케아/온라인 브랜드 조합', standard: '중견 브랜드 세트 맞춤', premium: '수입 명품 가구 및 호텔 베딩' }
      }
    ]
  },
  {
    id: 'step-1',
    period: 'D-365',
    title: '베뉴 및 상견례',
    items: [
      { 
        id: 'sang-gyeon-rye', name: '상견례 (식대 및 룸 대관)', isEssential: true,
        tooltips: { budget: '인당 5만원대 깔끔한 한정식', standard: '인당 10만원대 고급 코스 요리', premium: '인당 20만원대 파인다이닝' }
      },
      { 
        id: 'sang-gifts', name: '상견례 양가 부모님 선물', isEssential: false,
        tooltips: { budget: '가벼운 화과자/디저트 세트', standard: '도라지 정과 또는 난 화분', premium: '고급 한우 세트 및 명주' }
      },
      { 
        id: 'venue-fee', name: '웨딩홀 대관료 (꽃장식 등 포함)', isEssential: true,
        tooltips: { budget: '비수기/잔여타임 프로모션 (무료)', standard: '일반 컨벤션 토요일 피크타임', premium: '5성급 호텔 동시예식' }
      },
      { 
        id: 'venue-food', name: '웨딩홀 식대 (보증인원 기준)', isEssential: true,
        tooltips: { budget: '식대 5만원대 뷔페', standard: '식대 7~8만원대 뷔페/한상차림', premium: '식대 15만원 이상 호텔 코스' }
      },
      { 
        id: 'snap-dvd', name: '본식 스냅 및 영상(DVD)', isEssential: true,
        tooltips: { budget: '1인 작가 데이터형 + 가성비 영상', standard: '2인 작가 화보형 + 4K 영상', premium: '대표 지정 하이엔드 + 시네마틱' }
      }
    ]
  },
  {
    id: 'step-2',
    period: 'D-200',
    title: '스드메 & 야외 스냅 (디테일)',
    items: [
      { 
        id: 'sdm-package', name: '스드메 기본 패키지', isEssential: true,
        tooltips: { budget: '토탈샵 가성비 패키지', standard: '인지도 높은 인기 브랜드 조합', premium: '하이엔드 드레스 및 유명 스튜디오' }
      },
      { 
        id: 'dress-tour', name: '드레스 피팅비 및 추가 업그레이드', isEssential: false,
        tooltips: { budget: '지정 혜택으로 추가금 방어', standard: '블랙라벨 등급 업그레이드', premium: '프리미엄 라벨 및 추가 피팅' }
      },
      { 
        id: 'studio-helper', name: '스튜디오 촬영 헬퍼 이모님', isEssential: true,
        tooltips: { budget: '기본 시간 (4시간) 수고비', standard: '시간 연장 및 야간 촬영 추가금', premium: '헤어 전담 헬퍼 및 출장비 추가' }
      },
      { 
        id: 'hair-change', name: '스튜디오 헤어변형 출장', isEssential: false,
        tooltips: { budget: '지인 찬스 또는 이모님 기본 변형', standard: '전문가 3시간 (2~3회 변형)', premium: '풀타임 동행 및 생화 장식 추가' }
      },
      { 
        id: 'studio-snacks', name: '촬영 간식 및 보조 소품', isEssential: false,
        tooltips: { budget: '간단한 초콜릿/음료 직접 준비', standard: '스태프용 샌드위치/커피 배달', premium: '고급 도시락 세팅 및 생화 부케 추가' }
      },
      { 
        id: 'travel-snap', name: '야외/여행지 스냅 촬영비', isEssential: false,
        tooltips: { budget: '1시간 데이트 스냅 (의상 자가)', standard: '반나절 스냅 + 헤어메이크업 제휴', premium: '종일 촬영 + 프리미엄 드레스 대여' }
      },
      { 
        id: 'travel-expense', name: '야외 촬영 체류비 (교통/숙박)', isEssential: false,
        tooltips: { budget: '게스트하우스 및 대중교통', standard: '비즈니스 호텔 및 렌터카', premium: '고급 리조트 및 항공권' }
      }
    ]
  },
  {
    id: 'step-3',
    period: 'D-100',
    title: '예물, 예단 & 가족 세팅',
    items: [
      { 
        id: 'wedding-band', name: '웨딩 밴드 (결혼 반지)', isEssential: true,
        tooltips: { budget: '종로 귀금속 상가 가성비 링', standard: '청담 디자이너 브랜드', premium: '백화점 명품 하이주얼리' }
      },
      { 
        id: 'gift-money', name: '꾸밈비 및 예물 (시계/가방 등)', isEssential: false,
        tooltips: { budget: '생략 또는 소액 현금 교환', standard: '데일리 명품 가방/시계 1점씩', premium: '하이엔드 명품 예물 세트' }
      },
      { 
        id: 'groom-suit', name: '신랑 맞춤 예복 및 수제화', isEssential: true,
        tooltips: { budget: '기성복 구매 또는 대여', standard: '국내/이태리 원단 맞춤 정장', premium: '영국 프리미엄 원단 비스포크' }
      },
      { 
        id: 'mom-hanbok', name: '양가 혼주 한복 (어머니)', isEssential: true,
        tooltips: { budget: '가성비 기성 한복 대여', standard: '고급 실크 맞춤 대여', premium: '최고급 원단 개인 맞춤 제작' }
      },
      { 
        id: 'dad-suit', name: '양가 혼주 정장 (아버지)', isEssential: false,
        tooltips: { budget: '기존 정장 활용 또는 타이만 구매', standard: '기성복 브랜드 정장 구매', premium: '고급 맞춤 정장 제작' }
      },
      { 
        id: 'family-makeup', name: '혼주 헤어/메이크업', isEssential: true,
        tooltips: { budget: '동네 미용실 이용', standard: '웨딩홀 연계 샵 진행 (양가)', premium: '청담동 유명 샵 별도 진행' }
      }
    ]
  },
  {
    id: 'step-4',
    period: 'D-60',
    title: '이벤트, 미용 & 청첩장 모임',
    items: [
      { 
        id: 'propose', name: '프로포즈 및 답프로포즈 이벤트', isEssential: false,
        tooltips: { budget: '소박한 홈파티 및 편지', standard: '분위기 좋은 레스토랑 코스', premium: '호텔 룸 대관 및 꽃장식 이벤트' }
      },
      { 
        id: 'bridal-shower', name: '브라이덜 샤워 (파티룸 등)', isEssential: false,
        tooltips: { budget: '지인집 홈파티 및 풍선 세팅', standard: '일반 파티룸 대관 및 케이크', premium: '호텔 스위트룸 1박 파티' }
      },
      { 
        id: 'skin-care', name: '웨딩 케어 (피부/경락/에스테틱)', isEssential: false,
        tooltips: { budget: '홈케어 위주 및 1회성 관리', standard: '전문 에스테틱 10회권 패키지', premium: '피부과 시술 및 전신 프리미엄 관리' }
      },
      { 
        id: 'invitations', name: '종이 청첩장 및 식권 인쇄', isEssential: true,
        tooltips: { budget: '기본 템플릿 소량 인쇄', standard: '인기 브랜드 디자인 청첩장', premium: '커스텀 디자인 및 실링왁스 포장' }
      },
      { 
        id: 'chung-mo', name: '청첩장 모임 식비 (신랑/신부)', isEssential: true,
        tooltips: { budget: '가벼운 런치/치맥 모임 위주', standard: '인당 3~5만원대 깔끔한 식당', premium: '고급 파인다이닝 및 오마카세 대접' }
      },
      { 
        id: 'sub-party', name: '별도 피로연 (대관 및 식대)', isEssential: false,
        tooltips: { budget: '동네 호프집 가벼운 뒤풀이', standard: '레스토랑/중식당 룸 대관 식사', premium: '호텔 연회장 별도 대관 피로연' }
      }
    ]
  },
  {
    id: 'step-5',
    period: 'D-30',
    title: '본식 당일 및 신혼여행',
    items: [
      { 
        id: 'bouquet', name: '본식 부케 및 코사지', isEssential: true,
        tooltips: { budget: '스드메 패키지 기본 부케', standard: '지정 플라워샵 수입 생화 부케', premium: '유명 플로리스트 커스텀 부케' }
      },
      { 
        id: 'sub-snap', name: '서브 스냅 (아이폰/서브캠)', isEssential: false,
        tooltips: { budget: '지인 찬스 (무료)', standard: '1인 전문 아이폰 스냅 업체', premium: '2인 작가 다각도 촬영' }
      },
      { 
        id: 'wedding-helper', name: '본식 당일 헬퍼 이모님', isEssential: true,
        tooltips: { budget: '기본 수고비', standard: '지방 예식 출장비 추가', premium: '수석 헬퍼 지정 및 폐백 추가금' }
      },
      { 
        id: 'event-staff', name: '사회/축가/주례/가방순이 사례금', isEssential: true,
        tooltips: { budget: '친한 지인 무료 진행', standard: '지인 감사 상품권/현금 지급', premium: '전문 아나운서/가수 섭외' }
      },
      { 
        id: 'guest-bus', name: '지방 하객 버스 대절 및 간식', isEssential: false,
        tooltips: { budget: '대중교통 교통비 현금 지급', standard: '일반 45인승 전세버스 1대', premium: '28인승 우등버스 및 고급 간식' }
      },
      { 
        id: 'return-gifts', name: '축의금 답례품 및 회사 선물', isEssential: false,
        tooltips: { budget: '가벼운 쿠키/호두과자', standard: '고급 소금/꿀/디저트 세트', premium: '프리미엄 와인/홍삼 세트' }
      },
      { 
        id: 'honey-flight', name: '신혼여행 항공권', isEssential: true,
        tooltips: { budget: '동남아시아/일본 특가 이코노미', standard: '유럽/미주 국적기 직항 이코노미', premium: '장거리 노선 직항 비즈니스석' }
      },
      { 
        id: 'honey-hotel', name: '신혼여행 숙박 및 패스권', isEssential: true,
        tooltips: { budget: '가성비 비즈니스/에어비앤비', standard: '4성급 유명 리조트/호텔', premium: '최고급 풀빌라 및 5성급 스위트룸' }
      },
      { 
        id: 'honey-budget', name: '신혼여행 체류 총경비', isEssential: true,
        tooltips: { budget: '현지 대중교통 및 식비 절약', standard: '여유로운 식사 및 데이 투어', premium: '파인다이닝 및 럭셔리 액티비티' }
      }
    ]
  }
];