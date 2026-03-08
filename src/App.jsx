import React, { useState, useEffect } from 'react';
import { weddingTimeline, budgetTiers } from './data';
import { buildPriceDB } from './api'; // 아까 바꾸신 이름 적용!

function App() {
  const [selections, setSelections] = useState({});
  const [priceDB, setPriceDB] = useState(null);

  useEffect(() => {
    const initApp = async () => {
      const fetchedDB = await buildPriceDB();
      setPriceDB(fetchedDB);

      // 초기 세팅: 기본적으로 '풀코스' 상태로 로드
      const initSels = {};
      weddingTimeline.forEach(step => {
        step.items.forEach(item => {
          initSels[item.id] = { tier: 'standard', customPrice: '', isExcluded: false };
        });
      });
      setSelections(initSels);
    };

    initApp();
  }, []);

  // ★ 추가된 기능: 풀코스 / 핵심 프리셋 적용
  const applyPreset = (presetType) => {
    setSelections(prev => {
      const next = { ...prev };
      weddingTimeline.forEach(step => {
        step.items.forEach(item => {
          if (presetType === 'full') {
            next[item.id].isExcluded = false; // 전부 포함
          } else if (presetType === 'essential') {
            next[item.id].isExcluded = !item.isEssential; // 필수가 아니면 제외(true)
          }
        });
      });
      return next;
    });
  };

  const handleTierChange = (itemId, tierId) => {
    setSelections(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], tier: tierId, isExcluded: false }
    }));
  };

  const handleCustomPriceChange = (itemId, value) => {
    const numericValue = value.replace(/[^0-9]/g, '');
    setSelections(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], customPrice: numericValue, isExcluded: false }
    }));
  };

  const toggleExclude = (itemId) => {
    setSelections(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], isExcluded: !prev[itemId].isExcluded }
    }));
  };

  const toggleCategoryExclude = (stepId, isCurrentlyIncluded) => {
    setSelections(prev => {
      const next = { ...prev };
      const step = weddingTimeline.find(s => s.id === stepId);
      const targetIsExcluded = isCurrentlyIncluded; 
      
      step.items.forEach(item => {
        next[item.id] = { ...next[item.id], isExcluded: targetIsExcluded };
      });
      return next;
    });
  };

  const handleBatchSelect = (stepId, tierId) => {
    setSelections(prev => {
      const next = { ...prev };
      const step = weddingTimeline.find(s => s.id === stepId);
      step.items.forEach(item => {
        if (!next[item.id].isExcluded) {
          next[item.id] = { ...next[item.id], tier: tierId };
        }
      });
      return next;
    });
  };

  if (!priceDB || Object.keys(selections).length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl text-indigo-600 font-bold animate-pulse">
          최신 예산 데이터를 불러오는 중입니다...
        </div>
      </div>
    );
  }

  const categoryTotals = weddingTimeline.map(step => {
    const stepTotal = step.items.reduce((sum, item) => {
      const sel = selections[item.id];
      if (sel.isExcluded) return sum; 
      if (sel.tier === 'custom') return sum + (parseInt(sel.customPrice) || 0);
      return sum + priceDB[item.id][sel.tier];
    }, 0);
    return { id: step.id, title: step.title, total: stepTotal };
  });

  const grandTotal = categoryTotals.reduce((sum, cat) => sum + cat.total, 0);

  return (
    <div className="min-h-screen bg-gray-100 font-sans pb-20">
      
      {/* 상단 헤더 & 프리셋 버튼 영역 */}
      <div className="bg-indigo-600 text-white p-5 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">웨딩 & 허니문 예산 플래너</h1>
            <p className="opacity-80 text-sm mt-1">항목별 예산을 관리하고 실시간으로 총액을 확인하세요.</p>
          </div>
          
          {/* ★ 프리셋 선택 버튼 */}
          <div className="flex bg-indigo-700 p-1 rounded-lg border border-indigo-500">
            <button 
              onClick={() => applyPreset('full')}
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-indigo-500 transition-colors"
            >
              ✨ 풀코스 (전체 선택)
            </button>
            <div className="w-px bg-indigo-500 mx-1"></div>
            <button 
              onClick={() => applyPreset('essential')}
              className="px-4 py-2 text-sm font-medium rounded-md hover:bg-indigo-500 transition-colors"
            >
              🎯 핵심만 (필수 항목)
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row gap-5 mt-4">
        
        {/* 왼쪽 리스트 영역 */}
        <div className="flex-1 space-y-4">
          {weddingTimeline.map((step) => {
            const isCategoryIncluded = step.items.some(item => !selections[item.id].isExcluded);

            return (
              <div key={step.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                
                <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gray-100 pb-2 mb-3 gap-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isCategoryIncluded}
                      onChange={() => toggleCategoryExclude(step.id, isCategoryIncluded)}
                      className="w-5 h-5 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer mr-3"
                    />
                    <span className={`text-lg font-bold mr-2 ${isCategoryIncluded ? 'text-indigo-600' : 'text-gray-400'}`}>
                      {step.period}
                    </span>
                    <h2 className={`text-base font-semibold ${isCategoryIncluded ? 'text-gray-800' : 'text-gray-400 line-through'}`}>
                      {step.title}
                    </h2>
                  </div>
                  
                  <div className={`flex gap-1.5 ${!isCategoryIncluded ? 'opacity-50 pointer-events-none' : ''}`}>
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

                <div className="space-y-2">
                  {step.items.map((item) => {
                    const sel = selections[item.id];
                    const isCustom = sel.tier === 'custom';
                    const currentPrice = sel.isExcluded ? 0 : (isCustom ? (parseInt(sel.customPrice) || 0) : priceDB[item.id][sel.tier]);

                    return (
                      <div 
                        key={item.id} 
                        className={`flex flex-col xl:flex-row xl:items-center justify-between gap-3 p-2.5 rounded border transition-colors ${
                          sel.isExcluded ? 'bg-gray-50 border-gray-100 opacity-60' : 'bg-white border-gray-200 hover:border-indigo-200 shadow-sm'
                        }`}
                      >
                        <div className="w-full xl:w-1/3 flex items-center">
                          <label className="flex items-center cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={!sel.isExcluded}
                              onChange={() => toggleExclude(item.id)}
                              className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
                            />
                            <span className={`ml-3 font-medium text-[14px] sm:text-[15px] transition-colors ${sel.isExcluded ? 'text-gray-400 line-through' : 'text-gray-700 group-hover:text-indigo-600'}`}>
                              {item.name}
                              {item.isEssential && <span className="ml-1.5 text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded-full align-middle">필수</span>}
                            </span>
                          </label>
                        </div>

                        <div className={`w-full xl:w-[40%] flex flex-wrap sm:flex-nowrap gap-1 ${sel.isExcluded ? 'pointer-events-none' : ''}`}>
                          {budgetTiers.map(tier => (
                            <button
                              key={tier.id}
                              onClick={() => handleTierChange(item.id, tier.id)}
                              className={`flex-1 min-w-[50px] whitespace-nowrap py-1.5 px-1 text-[13px] rounded transition-colors border ${
                                (!sel.isExcluded && sel.tier === tier.id)
                                  ? 'bg-indigo-600 text-white border-indigo-600 font-medium'
                                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                              }`}
                            >
                              {tier.label}
                            </button>
                          ))}
                        </div>

                        <div className="w-full xl:w-[25%] flex justify-end items-center">
                          {(!sel.isExcluded && isCustom) ? (
                            <div className="flex items-center w-full justify-end">
                              <input
                                type="text"
                                placeholder="금액 입력"
                                value={sel.customPrice ? Number(sel.customPrice).toLocaleString() : ''}
                                onChange={(e) => handleCustomPriceChange(item.id, e.target.value)}
                                className="w-[110px] text-right p-1.5 border border-indigo-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm font-medium"
                              />
                              <span className="ml-1 text-gray-600 text-sm">원</span>
                            </div>
                          ) : (
                            <div className={`text-[15px] sm:text-base font-bold ${sel.isExcluded ? 'text-gray-400' : 'text-gray-800'}`}>
                              {sel.isExcluded ? '제외됨' : `${currentPrice.toLocaleString()}원`}
                            </div>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* 오른쪽 고정형 요약 대시보드 */}
        <div className="w-full lg:w-72 relative">
          <div className="sticky top-4 bg-white rounded-lg shadow-sm border border-indigo-100 overflow-hidden">
            <div className="bg-indigo-50 p-4 border-b border-indigo-100">
              <h3 className="text-indigo-900 font-bold mb-1 text-sm">예상 총 예산</h3>
              <div className="text-2xl font-extrabold text-indigo-600">
                {grandTotal.toLocaleString()}<span className="text-base font-medium ml-1">원</span>
              </div>
            </div>
            
            <div className="p-4 bg-white">
              <ul className="space-y-3">
                {categoryTotals.map(cat => (
                  <li key={cat.id} className="flex justify-between items-center text-[13.5px]">
                    <span className="text-gray-600 truncate mr-2 font-medium">{cat.title}</span>
                    <span className="font-bold text-gray-800">{cat.total.toLocaleString()}원</span>
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