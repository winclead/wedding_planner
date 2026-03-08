import React, { useState } from 'react';

// D-Day 타임라인 기반 데이터 구조
const initialTimeline = [
  {
    id: 'd-365',
    period: 'D-365',
    title: '웨딩홀 및 상견례',
    items: [
      {
        id: 'venue',
        name: '웨딩홀 대관료',
        options: [
          { label: '제외', price: 0 },
          { label: '가성비', price: 0 }, // 비수기 무료 등
          { label: '스탠다드', price: 3000000 },
          { label: '프리미엄', price: 10000000 },
          { label: '직접입력', price: null }
        ],
        selectedOptionIndex: 2, // 기본값: 스탠다드
        customPrice: ''
      },
      {
        id: 'sang-gyeon-rye',
        name: '상견례 (양가 식사)',
        options: [
          { label: '제외', price: 0 },
          { label: '가성비', price: 300000 },
          { label: '스탠다드', price: 600000 },
          { label: '프리미엄', price: 1200000 },
          { label: '직접입력', price: null }
        ],
        selectedOptionIndex: 2,
        customPrice: ''
      }
    ]
  },
  {
    id: 'd-180',
    period: 'D-180',
    title: '스드메 & 촬영',
    items: [
      {
        id: 'sdm-package',
        name: '스드메 패키지',
        options: [
          { label: '제외', price: 0 },
          { label: '가성비', price: 1500000 },
          { label: '스탠다드', price: 3000000 },
          { label: '프리미엄', price: 6000000 },
          { label: '직접입력', price: null }
        ],
        selectedOptionIndex: 2,
        customPrice: ''
      },
      {
        id: 'snap',
        name: '본식 스냅 및 DVD',
        options: [
          { label: '제외', price: 0 },
          { label: '가성비', price: 800000 },
          { label: '스탠다드', price: 1500000 },
          { label: '프리미엄', price: 3000000 },
          { label: '직접입력', price: null }
        ],
        selectedOptionIndex: 2,
        customPrice: ''
      }
    ]
  },
  {
    id: 'd-30',
    period: 'D-30',
    title: '신혼여행 (예: 스위스 취리히 등)',
    items: [
      {
        id: 'flight',
        name: '항공권 (2인)',
        options: [
          { label: '제외', price: 0 },
          { label: '가성비', price: 2000000 },
          { label: '스탠다드', price: 3500000 },
          { label: '프리미엄', price: 8000000 },
          { label: '직접입력', price: null }
        ],
        selectedOptionIndex: 2,
        customPrice: ''
      },
      {
        id: 'accommodation',
        name: '숙박 (1박 평균)',
        options: [
          { label: '제외', price: 0 },
          { label: '가성비', price: 250000 },
          { label: '스탠다드', price: 450000 },
          { label: '프리미엄', price: 800000 },
          { label: '직접입력', price: null }
        ],
        selectedOptionIndex: 2,
        customPrice: ''
      }
    ]
  }
];

function App() {
  const [timelineData, setTimelineData] = useState(initialTimeline);

  // 옵션(가성비, 스탠다드 등) 클릭 핸들러
  const handleOptionSelect = (stepId, itemId, optionIndex) => {
    const newData = timelineData.map(step => {
      if (step.id === stepId) {
        return {
          ...step,
          items: step.items.map(item => {
            if (item.id === itemId) {
              return { ...item, selectedOptionIndex: optionIndex };
            }
            return item;
          })
        };
      }
      return step;
    });
    setTimelineData(newData);
  };

  // 직접입력 금액 변경 핸들러
  const handleCustomPriceChange = (stepId, itemId, value) => {
    // 숫자만 입력되도록 필터링
    const numericValue = value.replace(/[^0-9]/g, '');
    const newData = timelineData.map(step => {
      if (step.id === stepId) {
        return {
          ...step,
          items: step.items.map(item => {
            if (item.id === itemId) {
              return { ...item, customPrice: numericValue };
            }
            return item;
          })
        };
      }
      return step;
    });
    setTimelineData(newData);
  };

  // 총 예산 계산 로직
  const totalBudget = timelineData.reduce((total, step) => {
    return total + step.items.reduce((itemTotal, item) => {
      const selectedOption = item.options[item.selectedOptionIndex];
      // 직접입력을 선택한 경우 (인덱스가 4일 때)
      if (selectedOption.label === '직접입력') {
        return itemTotal + (parseInt(item.customPrice) || 0);
      }
      // 그 외 옵션을 선택한 경우
      return itemTotal + selectedOption.price;
    }, 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* 상단 헤더 영역 */}
        <div className="bg-indigo-600 p-8 text-white text-center">
          <h1 className="text-3xl font-bold mb-2">웨딩 & 허니문 타임라인 예산 플래너</h1>
          <p className="opacity-90">결혼 준비 과정별로 예산을 슬림하게 체크해보세요.</p>
        </div>

        {/* 메인 콘텐츠 영역 (타임라인) */}
        <div className="p-6 md:p-10">
          <div className="space-y-12">
            {timelineData.map((step) => (
              <div key={step.id} className="relative">
                {/* 타임라인 디자인 요소 (왼쪽 선과 동그라미) */}
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 ml-4"></div>
                <div className="hidden md:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-indigo-100 border-4 border-white items-center justify-center -ml-[3px]">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                </div>

                <div className="md:ml-12">
                  <div className="flex items-end mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">{step.period}</h2>
                    <span className="ml-3 text-lg text-gray-500 pb-0.5">{step.title}</span>
                  </div>

                  <div className="space-y-4">
                    {step.items.map((item) => {
                      const isCustom = item.options[item.selectedOptionIndex].label === '직접입력';
                      const currentPrice = isCustom ? (parseInt(item.customPrice) || 0) : item.options[item.selectedOptionIndex].price;

                      return (
                        <div key={item.id} className="flex flex-col xl:flex-row items-start xl:items-center justify-between bg-gray-50 border border-gray-100 p-4 rounded-xl hover:border-indigo-200 transition-colors">
                          
                          {/* 항목 이름 */}
                          <div className="w-full xl:w-1/4 font-semibold text-gray-700 mb-3 xl:mb-0">
                            {item.name}
                          </div>

                          {/* 버튼 그룹 (슬림한 한 줄 UI) */}
                          <div className="w-full xl:w-1/2 flex flex-wrap gap-1 mb-3 xl:mb-0">
                            {item.options.map((option, index) => (
                              <button
                                key={index}
                                onClick={() => handleOptionSelect(step.id, item.id, index)}
                                className={`flex-1 py-1.5 px-2 text-sm rounded-lg transition-all ${
                                  item.selectedOptionIndex === index
                                    ? 'bg-indigo-600 text-white font-medium shadow-sm'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                                }`}
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>

                          {/* 금액 표시 및 직접 입력란 */}
                          <div className="w-full xl:w-1/4 xl:text-right flex justify-end items-center">
                            {isCustom ? (
                              <div className="flex items-center">
                                <input
                                  type="text"
                                  placeholder="금액 입력"
                                  value={item.customPrice}
                                  onChange={(e) => handleCustomPriceChange(step.id, item.id, e.target.value)}
                                  className="w-28 text-right p-1.5 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <span className="ml-2 text-gray-600 font-medium">원</span>
                              </div>
                            ) : (
                              <div className="text-lg font-bold text-gray-800">
                                {currentPrice === 0 ? '무료/제외' : `${currentPrice.toLocaleString()}원`}
                              </div>
                            )}
                          </div>

                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 총액 고정 바 */}
        <div className="bg-indigo-50 border-t border-indigo-100 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl text-indigo-900 font-medium mb-2 md:mb-0">
            예상 총 결혼 비용
          </div>
          <div className="text-4xl font-extrabold text-indigo-600 tracking-tight">
            {totalBudget.toLocaleString()} <span className="text-2xl font-bold">원</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;