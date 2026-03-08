// 외부 API에서 동적으로 가격을 받아오는 시뮬레이션
const fetchVenuePricesFromAPI = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ budget: 0, standard: 3500000, premium: 12000000 });
    }, 400); 
  });
};

export const buildPriceDB = async () => {
  const venuePrices = await fetchVenuePricesFromAPI();

  return {
    // D-365
    'sang-gyeon-rye': { budget: 300000, standard: 600000, premium: 1200000 },
    'sang-gifts': { budget: 100000, standard: 200000, premium: 500000 },
    'venue-fee': venuePrices, // API 연동
    'venue-food': { budget: 10000000, standard: 15000000, premium: 25000000 }, // 하객 200명 기준 가정
    'snap-dvd': { budget: 800000, standard: 1500000, premium: 3000000 },
    
    // D-200
    'sdm-package': { budget: 1500000, standard: 3000000, premium: 6000000 },
    'dress-tour': { budget: 100000, standard: 500000, premium: 2000000 },
    'studio-helper': { budget: 200000, standard: 250000, premium: 350000 },
    'hair-change': { budget: 200000, standard: 300000, premium: 450000 },
    'studio-snacks': { budget: 50000, standard: 150000, premium: 300000 },
    'jeju-snap': { budget: 800000, standard: 1500000, premium: 3000000 },
    'jeju-travel': { budget: 500000, standard: 1000000, premium: 2000000 },

    // D-100
    'wedding-band': { budget: 500000, standard: 2000000, premium: 6000000 },
    'groom-suit': { budget: 500000, standard: 1000000, premium: 2500000 },
    'mom-hanbok': { budget: 400000, standard: 800000, premium: 1500000 },
    'dad-suit': { budget: 600000, standard: 1500000, premium: 3000000 },
    'family-suit': { budget: 200000, standard: 500000, premium: 1000000 },

    // D-60
    'skin-care': { budget: 500000, standard: 1500000, premium: 3000000 },
    'invitations': { budget: 100000, standard: 200000, premium: 400000 },
    'mobile-inv': { budget: 0, standard: 50000, premium: 150000 },
    'chung-mo': { budget: 500000, standard: 1500000, premium: 3000000 },
    'sub-party': { budget: 1000000, standard: 2000000, premium: 5000000 },

    // D-30
    'iphone-snap': { budget: 200000, standard: 350000, premium: 500000 },
    'wedding-helper': { budget: 250000, standard: 300000, premium: 400000 },
    'event-staff': { budget: 200000, standard: 400000, premium: 800000 },
    'guest-bus': { budget: 600000, standard: 1200000, premium: 2000000 },
    'guest-hotel': { budget: 200000, standard: 500000, premium: 1000000 },
    'return-gifts': { budget: 300000, standard: 600000, premium: 1500000 },
    'honey-flight': { budget: 2000000, standard: 3500000, premium: 8000000 },
    'honey-hotel': { budget: 1000000, standard: 2500000, premium: 5000000 },
    'honey-budget': { budget: 1500000, standard: 3000000, premium: 6000000 }
  };
};