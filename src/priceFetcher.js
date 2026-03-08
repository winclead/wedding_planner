// 외부 API 호출, 크롤링 데이터 연동, 내부 계산 로직을 담당하는 파일

// 1. [예시] 웨딩홀 대관료 평균가를 외부 API에서 가져오는 가상의 함수
const fetchVenuePricesFromAPI = async () => {
  // 실제로는 fetch('https://api.your-domain.com/venues') 등이 들어갑니다.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        budget: 0, 
        standard: 3500000, // 크롤링 결과로 기존 300만에서 350만으로 업데이트되었다고 가정
        premium: 12000000  // 호텔 물가 상승 반영
      });
    }, 500); // 네트워크 지연 시뮬레이션
  });
};

// 2. 전체 가격 판(DB)을 조립해서 반환하는 메인 함수
export const buildPriceDB = async () => {
  // 비동기로 웨딩홀 데이터 가져오기
  const venuePrices = await fetchVenuePricesFromAPI();

  // 다른 항목들은 크롤링 DB나 정적 파일에서 불러왔다고 가정하고 합칩니다.
  // 각 키(Key)값은 data.js에 있는 item.id와 정확히 일치해야 합니다.
  return {
    'venue': venuePrices,
    'sang-gyeon-rye': { budget: 300000, standard: 600000, premium: 1200000 },
    'sdm-package': { budget: 1500000, standard: 3000000, premium: 6000000 },
    'snap': { budget: 800000, standard: 1500000, premium: 3000000 },
    'flight': { budget: 2000000, standard: 3500000, premium: 8000000 },
    'zurich-hotel': { budget: 600000, standard: 1200000, premium: 2000000 },
  };
};