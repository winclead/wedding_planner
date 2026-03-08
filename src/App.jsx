import React, { useState } from 'react';
import { weddingTimeline, budgetTiers } from './data';

function App() {
  // 초기 상태 세팅 (모든 항목을 'standard'로 기본 선택)
  const initialSelections = {};
  weddingTimeline.forEach(step => {
    step.items.forEach(item => {
      initialSelections[item.id] = { tier: 'standard', customPrice: '' };
    });
  });

  const [selections, setSelections] = useState(initialSelections);

  // 옵션(티어) 변경 핸들러
  const handleTierChange = (itemId, tierId) => {
    setSelections(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], tier: tierId }
    }));
  };

  // 직접 입력 금액 변경 핸들러
  const handleCustomPriceChange = (itemId, value) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setSelections(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], customPrice: numericValue }
    }));
  };

  // 카테고리별 합계 및 총액 계산 로직
  const categoryTotals = weddingTimeline.map(step => {
    const stepTotal = step.items.reduce((sum, item) => {
      const sel = selections[item.id];
      if (sel.tier === 'custom') {
        return sum + (parseInt(sel.customPrice) || 0);
      }
      return sum + item.prices[sel.tier];
    }, 0);
    return { id: step.id, title: step.title, total: stepTotal };
  });

  const grandTotal = categoryTotals.reduce((sum, cat) => sum + cat.total, 0);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* 상단 헤더 */}
      <div className="bg-indigo-600 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">웨딩 & 허니문 예산 플래너</h1>
          <p className="opacity-80 text-sm mt-1">항목별 예산을 관리하고 실시간으로 총액을 확인하세요.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 md:p-6 flex flex-col lg:flex-row gap-6">
        
        {/* 왼쪽 메인 콘텐츠 (타임라인 리스트) */}
        <div className="flex-1 space-y-6">
          {weddingTimeline.map((step) => (
            <div key={step.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6">
              <div className="flex items-end border-b border-gray-100 pb-3 mb-4">
                <span className="text-xl font-bold text-indigo-600 mr-2">{step.period}</span>
                <h2 className="text-lg font-semibold text-gray-800">{step.title}</h2>
              </div>

              <div className="space-y-4">
                {step.items.map((item) => {
                  const currentSelection = selections[item.id];
                  const isCustom = currentSelection.tier === 'custom';
                  const currentPrice = isCustom ? (parseInt(currentSelection.customPrice) || 0) : item.prices[currentSelection.tier];

                  return (
                    <div key={item.id} className="flex flex-col xl:flex-row xl:items-center justify-between gap-3 bg-gray-50 p-3 rounded-lg border border-transparent hover:border-indigo-100 transition-colors">
                      
                      {/* 항목명 */}
                      <div className="w-full xl:w-1/4 font-medium text-gray-700">
                        {item.name}
                      </div>

                      {/* 버튼 그룹 (스크롤/넘침 방지 및 한 줄 유지) */}
                      <div className="w-full xl:w-[45%] flex overflow-x-auto scrollbar-hide gap-1.5 pb-1 xl:pb-0">
                        {budgetTiers.map(tier => (
                          <button
                            key={tier.id}
                            onClick={() => handleTierChange(item.id, tier.id)}
                            // whitespace-nowrap으로 글씨가 절대 두 줄로 쪼개지지 않도록 강제합니다.
                            className={`flex-1 min-w-[60px] whitespace-nowrap py-1.5 px-2 text-[13px] sm:text-sm rounded-md transition-colors border ${
                              currentSelection.tier === tier.id
                                ? 'bg-indigo-600 text-white border-indigo-600 font-medium'
                                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            {tier.label}
                          </button>
                        ))}
                      </div>

                      {/* 가격 표시 / 입력란 */}
                      <div className="w-full xl:w-[30%] flex justify-end items-center">
                        {isCustom ? (
                          <div className="flex items-center w-full xl:justify-end">
                            <input
                              type="text"
                              placeholder="금액 입력"
                              value={currentSelection.customPrice}
                              onChange={(e) => handleCustomPriceChange(item.id, e.target.value)}
                              className="w-full max-w-[140px] text-right p-1.5 border border-indigo-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                            />
                            <span className="ml-1.5 text-gray-600 text-sm">원</span>
                          </div>
                        ) : (
                          <div className="text-base font-bold text-gray-800">
                            {currentPrice === 0 ? '제외됨' : `${currentPrice.toLocaleString()}원`}
                          </div>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 오른쪽 고정형 사이드바 (요약 대시보드) */}
        <div className="w-full lg:w-80 relative">
          <div className="sticky top-6 bg-white rounded-xl shadow-md border border-indigo-100 overflow-hidden">
            <div className="bg-indigo-50 p-5 border-b border-indigo-100">
              <h3 className="text-indigo-900 font-bold mb-1">예상 총 예산</h3>
              <div className="text-3xl font-extrabold text-indigo-600">
                {grandTotal.toLocaleString()}<span className="text-lg font-medium ml-1">원</span>
              </div>
            </div>
            
            <div className="p-5">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">항목별 요약</h4>
              <ul className="space-y-3">
                {categoryTotals.map(cat => (
                  <li key={cat.id} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{cat.title}</span>
                    <span className="font-semibold text-gray-800">{cat.total.toLocaleString()}원</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;