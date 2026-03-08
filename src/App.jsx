import React, { useState } from 'react';
import { weddingTimeline, budgetTiers } from './data';

function App() {
  // 초기 상태 세팅 (isExcluded: 제외 여부 추가)
  const initialSelections = {};
  weddingTimeline.forEach(step => {
    step.items.forEach(item => {
      initialSelections[item.id] = { tier: 'standard', customPrice: '', isExcluded: false };
    });
  });

  const [selections, setSelections] = useState(initialSelections);

  // 티어(가성비, 스탠다드 등) 변경 핸들러
  const handleTierChange = (itemId, tierId) => {
    setSelections(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], tier: tierId, isExcluded: false }
    }));
  };

  // 직접입력 금액 콤마 처리 핸들러
  const handleCustomPriceChange = (itemId, value) => {
    // 숫자 이외의 문자 제거
    const numericValue = value.replace(/[^0-9]/g, '');
    setSelections(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], customPrice: numericValue, isExcluded: false }
    }));
  };

  // '제외' 체크박스 토글 핸들러
  const toggleExclude = (itemId) => {
    setSelections(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], isExcluded: !prev[itemId].isExcluded }
    }));
  };

  // 항목별 일괄 선택 (전체 가성비/스탠다드/프리미엄 클릭 시)
  const handleBatchSelect = (stepId, tierId) => {
    setSelections(prev => {
      const next = { ...prev };
      const step = weddingTimeline.find(s => s.id === stepId);
      step.items.forEach(item => {
        // 제외된 항목은 건드리지 않음
        if (!next[item.id].isExcluded) {
          next[item.id] = { ...next[item.id], tier: tierId };
        }
      });
      return next;
    });
  };

  // 합계 계산
  const categoryTotals = weddingTimeline.map(step => {
    const stepTotal = step.items.reduce((sum, item) => {
      const sel = selections[item.id];
      if (sel.isExcluded) return sum; // 제외 시 0원
      
      if (sel.tier === 'custom') {
        return sum + (parseInt(sel.customPrice) || 0);
      }
      return sum + item.prices[sel.tier];
    }, 0);
    return { id: step.id, title: step.title, total: stepTotal };
  });

  const grandTotal = categoryTotals.reduce((sum, cat) => sum + cat.total, 0);

  return (
    <div className="min-h-screen bg-gray-100 font-sans pb-20">
      <div className="bg-indigo-600 text-white p-5 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">웨딩 & 허니문 예산 플래너</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row gap-5 mt-4">
        
        {/* 메인 리스트 */}
        <div className="flex-1 space-y-4"> {/* 간격 촘촘하게 (space-y-6 -> 4) */}
          {weddingTimeline.map((step) => (
            <div key={step.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"> {/* 패딩 축소 */}
              
              {/* 카테고리 헤더 & 일괄 선택 버튼 */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gray-100 pb-2 mb-3 gap-2">
                <div className="flex items-end">
                  <span className="text-lg font-bold text-indigo-600 mr-2">{step.period}</span>
                  <h2 className="text-base font-semibold text-gray-800">{step.title}</h2>
                </div>
                <div className="flex gap-1.5">
                  <span className="text-xs text-gray-400 mr-1 self-center hidden sm:inline">일괄선택:</span>
                  {['budget', 'standard', 'premium'].map(tierId => (
                    <button
                      key={tierId}
                      onClick={() => handleBatchSelect(step.id, tierId)}
                      className="text-xs px-2 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-600 hover:text-indigo-700 rounded transition-colors"
                    >
                      {budgetTiers.find(t => t.id === tierId).label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 항목 리스트 */}
              <div className="space-y-2"> {/* 항목 간격 촘촘하게 */}
                {step.items.map((item) => {
                  const sel = selections[item.id];
                  const isCustom = sel.tier === 'custom';
                  const currentPrice = sel.isExcluded ? 0 : (isCustom ? (parseInt(sel.customPrice) || 0) : item.prices[sel.tier]);

                  return (
                    <div 
                      key={item.id} 
                      className={`flex flex-col xl:flex-row xl:items-center justify-between gap-3 p-2.5 rounded border transition-colors ${
                        sel.isExcluded ? 'bg-gray-50 border-gray-100 opacity-60' : 'bg-white border-gray-200 hover:border-indigo-200 shadow-sm'
                      }`}
                    >
                      
                      {/* 1. 체크박스 & 항목명 */}
                      <div className="w-full xl:w-1/4 flex items-center">
                        <label className="flex items-center cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={!sel.isExcluded}
                            onChange={() => toggleExclude(item.id)}
                            className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
                          />
                          <span className={`ml-3 font-medium text-sm transition-colors ${sel.isExcluded ? 'text-gray-400 line-through' : 'text-gray-700 group-hover:text-indigo-600'}`}>
                            {item.name}
                          </span>
                        </label>
                      </div>

                      {/* 2. 옵션 버튼 그룹 (가로 스크롤 제거, 마우스오버 툴팁) */}
                      <div className={`w-full xl:w-[45%] flex flex-wrap sm:flex-nowrap gap-1 ${sel.isExcluded ? 'pointer-events-none' : ''}`}>
                        {budgetTiers.map(tier => (
                          <div key={tier.id} className="relative flex-1 group">
                            <button
                              onClick={() => handleTierChange(item.id, tier.id)}
                              className={`w-full whitespace-nowrap py-1.5 px-1 text-[13px] rounded transition-colors border ${
                                (!sel.isExcluded && sel.tier === tier.id)
                                  ? 'bg-indigo-600 text-white border-indigo-600 font-medium'
                                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                              }`}
                            >
                              {tier.label}
                            </button>
                            
                            {/* 마우스오버 툴팁 (직접입력이 아닐 때만 표시) */}
                            {tier.id !== 'custom' && item.tooltips && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block w-max max-w-[200px] bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded shadow-lg z-10 break-words text-center pointer-events-none">
                                {item.tooltips[tier.id]}
                                {/* 툴팁 꼬리 */}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* 3. 가격 / 직접입력란 */}
                      <div className="w-full xl:w-[25%] flex justify-end items-center">
                        {(!sel.isExcluded && isCustom) ? (
                          <div className="flex items-center w-full justify-end">
                            <input
                              type="text"
                              placeholder="금액 입력"
                              // 콤마(,) 찍어서 보여주기
                              value={sel.customPrice ? Number(sel.customPrice).toLocaleString() : ''}
                              onChange={(e) => handleCustomPriceChange(item.id, e.target.value)}
                              className="w-[120px] text-right p-1.5 border border-indigo-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm font-medium"
                            />
                            <span className="ml-1.5 text-gray-600 text-sm">원</span>
                          </div>
                        ) : (
                          <div className={`text-base font-bold ${sel.isExcluded ? 'text-gray-400' : 'text-gray-800'}`}>
                            {sel.isExcluded ? '제외됨' : `${currentPrice.toLocaleString()}원`}
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

        {/* 오른쪽 고정 사이드바 */}
        <div className="w-full lg:w-72 relative">
          <div className="sticky top-4 bg-white rounded-lg shadow-sm border border-indigo-100 overflow-hidden">
            <div className="bg-indigo-50 p-4 border-b border-indigo-100">
              <h3 className="text-indigo-900 font-bold mb-1 text-sm">예상 총 예산</h3>
              <div className="text-2xl font-extrabold text-indigo-600">
                {grandTotal.toLocaleString()}<span className="text-base font-medium ml-1">원</span>
              </div>
            </div>
            
            <div className="p-4 bg-white">
              <ul className="space-y-2">
                {categoryTotals.map(cat => (
                  <li key={cat.id} className="flex justify-between items-center text-[13px]">
                    <span className="text-gray-600 truncate mr-2">{cat.title}</span>
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