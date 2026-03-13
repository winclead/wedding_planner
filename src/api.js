// 외부 API에서 데이터를 가져오는 시뮬레이션 (추후 진짜 API나 크롤러 연결 가능)
const fetchDynamicPrices = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ 
      // 듀오 2026 예식홀 평균 1,460만원 반영 (대관료 300 + 식대 1160 배분)
      venueFee: { budget: 0, standard: 3000000, premium: 15000000 },
      venueFood: { budget: 8000000, standard: 11600000, premium: 30000000 }
    }), 400); 
  });
};

export const buildPriceDB = async () => {
  const dynamicPrices = await fetchDynamicPrices();

  return {
    // 🏠 D-365~ (신혼집/혼수 - 듀오 평균 주택 3.2억 / 혼수 1,445만 원)
    'house-deposit': { budget: 50000000, standard: 320000000, premium: 800000000 },
    'interior': { budget: 0, standard: 15000000, premium: 50000000 },
    'appliances': { budget: 5000000, standard: 9500000, premium: 25000000 }, // 혼수 1445만 중 가전 비중
    'furniture': { budget: 2000000, standard: 4950000, premium: 15000000 }, // 혼수 1445만 중 가구 비중

    // 🎀 D-365 (베뉴 및 상견례)
    'sang-gyeon-rye': { budget: 300000, standard: 600000, premium: 1500000 },
    'sang-gifts': { budget: 100000, standard: 200000, premium: 500000 },
    'venue-fee': dynamicPrices.venueFee,
    'venue-food': dynamicPrices.venueFood,
    'snap-dvd': { budget: 800000, standard: 1500000, premium: 3500000 },
    
    // 📸 D-200 (스드메 - 듀오 평균 471만 원 배분)
    'sdm-package': { budget: 1500000, standard: 3500000, premium: 8000000 }, // 스드메 기본
    'dress-tour': { budget: 100000, standard: 300000, premium: 1500000 }, // 피팅 및 추가금
    'studio-helper': { budget: 200000, standard: 250000, premium: 400000 },
    'hair-change': { budget: 0, standard: 300000, premium: 600000 }, // 헤어변형
    'studio-snacks': { budget: 50000, standard: 150000, premium: 300000 },
    'travel-snap': { budget: 300000, standard: 1000000, premium: 3000000 },
    'travel-expense': { budget: 300000, standard: 800000, premium: 2500000 },

    // 💍 D-100 (예물/예단 - 듀오 평균 예물 588만 원)
    'wedding-band': { budget: 500000, standard: 2500000, premium: 8000000 },
    'gift-money': { budget: 0, standard: 3380000, premium: 15000000 }, // 예물 총액 588만 원 맞춤
    'groom-suit': { budget: 500000, standard: 1200000, premium: 3000000 },
    'mom-hanbok': { budget: 400000, standard: 800000, premium: 2000000 },
    'dad-suit': { budget: 0, standard: 1000000, premium: 3000000 },
    'family-makeup': { budget: 200000, standard: 500000, premium: 1500000 },

    // 💌 D-60 (이벤트/청첩장)
    'propose': { budget: 100000, standard: 500000, premium: 3000000 },
    'bridal-shower': { budget: 100000, standard: 250000, premium: 1000000 },
    'skin-care': { budget: 300000, standard: 1500000, premium: 5000000 },
    'invitations': { budget: 100000, standard: 250000, premium: 600000 },
    'chung-mo': { budget: 500000, standard: 1500000, premium: 4000000 },
    'sub-party': { budget: 300000, standard: 1500000, premium: 5000000 },

    // ✈️ D-30 (신혼여행 - 듀오 평균 1,030만 원 배분)
    'bouquet': { budget: 100000, standard: 250000, premium: 800000 },
    'sub-snap': { budget: 0, standard: 350000, premium: 800000 },
    'wedding-helper': { budget: 250000, standard: 300000, premium: 500000 },
    'event-staff': { budget: 100000, standard: 400000, premium: 2000000 },
    'guest-bus': { budget: 0, standard: 1200000, premium: 3000000 },
    'return-gifts': { budget: 200000, standard: 600000, premium: 2000000 },
    'honey-flight': { budget: 1500000, standard: 3300000, premium: 10000000 }, // 신혼여행 비중 1
    'honey-hotel': { budget: 1000000, standard: 4000000, premium: 12000000 }, // 신혼여행 비중 2
    'honey-budget': { budget: 1000000, standard: 3000000, premium: 8000000 }  // 신혼여행 비중 3 (합계 1030만)
  };
};