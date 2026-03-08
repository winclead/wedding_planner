const fetchVenuePricesFromAPI = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ budget: 0, standard: 3500000, premium: 12000000 }), 400); 
  });
};

export const buildPriceDB = async () => {
  const venuePrices = await fetchVenuePricesFromAPI();

  return {
    // D-365~ (신혼집/혼수)
    'house-deposit': { budget: 50000000, standard: 150000000, premium: 500000000 },
    'interior': { budget: 0, standard: 15000000, premium: 40000000 },
    'appliances': { budget: 5000000, standard: 12000000, premium: 25000000 },
    'furniture': { budget: 3000000, standard: 8000000, premium: 20000000 },

    // D-365
    'sang-gyeon-rye': { budget: 300000, standard: 600000, premium: 1200000 },
    'sang-gifts': { budget: 100000, standard: 200000, premium: 500000 },
    'venue-fee': venuePrices,
    'venue-food': { budget: 10000000, standard: 15000000, premium: 25000000 },
    'snap-dvd': { budget: 800000, standard: 1500000, premium: 3000000 },
    
    // D-200
    'sdm-package': { budget: 1500000, standard: 3000000, premium: 6000000 },
    'dress-tour': { budget: 100000, standard: 500000, premium: 2000000 },
    'studio-helper': { budget: 200000, standard: 250000, premium: 350000 },
    'hair-change': { budget: 0, standard: 300000, premium: 450000 },
    'studio-snacks': { budget: 50000, standard: 150000, premium: 300000 },
    'travel-snap': { budget: 300000, standard: 1000000, premium: 2500000 },
    'travel-expense': { budget: 300000, standard: 800000, premium: 2000000 },

    // D-100
    'wedding-band': { budget: 500000, standard: 2000000, premium: 6000000 },
    'gift-money': { budget: 0, standard: 5000000, premium: 15000000 },
    'groom-suit': { budget: 500000, standard: 1000000, premium: 2500000 },
    'mom-hanbok': { budget: 400000, standard: 800000, premium: 1500000 },
    'dad-suit': { budget: 0, standard: 1000000, premium: 2500000 },
    'family-makeup': { budget: 200000, standard: 500000, premium: 1000000 },

    // D-60
    'propose': { budget: 100000, standard: 500000, premium: 2000000 },
    'bridal-shower': { budget: 100000, standard: 250000, premium: 600000 },
    'skin-care': { budget: 300000, standard: 1500000, premium: 4000000 },
    'invitations': { budget: 100000, standard: 200000, premium: 400000 },
    'chung-mo': { budget: 500000, standard: 1500000, premium: 3000000 },
    'sub-party': { budget: 300000, standard: 1500000, premium: 4000000 },

    // D-30
    'bouquet': { budget: 100000, standard: 250000, premium: 500000 },
    'sub-snap': { budget: 0, standard: 350000, premium: 700000 },
    'wedding-helper': { budget: 250000, standard: 300000, premium: 450000 },
    'event-staff': { budget: 100000, standard: 400000, premium: 1500000 },
    'guest-bus': { budget: 0, standard: 1200000, premium: 2500000 },
    'return-gifts': { budget: 200000, standard: 600000, premium: 1500000 },
    'honey-flight': { budget: 1500000, standard: 3500000, premium: 8000000 },
    'honey-hotel': { budget: 1000000, standard: 2500000, premium: 6000000 },
    'honey-budget': { budget: 1000000, standard: 3000000, premium: 6000000 }
  };
};