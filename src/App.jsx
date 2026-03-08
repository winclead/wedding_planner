import React, { useState } from 'react';

const initialCategories = [
  {
    id: 'sang-gyeon-rye',
    title: '상견례',
    items: [
      {
        id: 'meal',
        name: '식사 비용 (양가 가족)',
        options: [
          { label: '제외', price: 0 },
          { label: '가성비 (일반 한정식)', price: 300000 },
          { label: '스탠다드 (고급 코스 요리)', price: 600000 },
          { label: '프리미엄 (호텔 파인다이닝)', price: 1200000 },
        ],
        selectedOptionIndex: 0,
      }
    ]
  },
  {
    id: 'honeymoon',
    title: '신혼여행 (스위스 취리히 등)',
    items: [
      {
        id: 'flight',
        name: '항공권 (2인)',
        options: [
          { label: '제외', price: 0 },
          { label: '가성비 (경유 1회)', price: 2000000 },
          { label: '스탠다드 (직항)', price: 3500000 },
          { label: '프리미엄 (비즈니스석)', price: 8000000 },
        ],
        selectedOptionIndex: 0,
      },
      {
        id: 'zurich-hotel',
        name: '취리히 1박 숙박',
        options: [
          { label: '제외', price: 0 },
          { label: '가성비 (비즈니스 호텔)', price: 250000 },
          { label: '스탠다드 (4성급 호텔)', price: 450000 },
          { label: '프리미엄 (5성급 럭셔리)', price: 800000 },
        ],
        selectedOptionIndex: 0,
      }
    ]
  }
];

function App() {
  const [categories, setCategories] = useState(initialCategories);

  const handleOptionSelect = (categoryId, itemId, optionIndex) => {
    const newCategories = categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          items: category.items.map(item => {
            if (item.id === itemId) {
              return { ...item, selectedOptionIndex: optionIndex };
            }
            return item;
          })
        };
      }
      return category;
    });
    setCategories(newCategories);
  };

  const totalBudget = categories.reduce((total, category) => {
    return total + category.items.reduce((itemTotal, item) => {
      return itemTotal + item.options[item.selectedOptionIndex].price;
    }, 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">웨딩 & 허니문 예산 플래너</h1>
        <p className="text-gray-500 mb-8">각 항목별로 원하는 수준을 선택해 예상 총비용을 확인해 보세요.</p>

        {categories.map((category) => (
          <div key={category.id} className="mb-8">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4 border-b pb-2">{category.title}</h2>
            <div className="space-y-6">
              {category.items.map((item) => (
                <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-md font-medium text-gray-700 mb-3">{item.name}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {item.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(category.id, item.id, index)}
                        className={`py-2 px-3 rounded-md text-sm transition-all border ${
                          item.selectedOptionIndex === index
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'
                        }`}
                      >
                        <div className="font-semibold mb-1">{option.label}</div>
                        <div className="text-xs opacity-80">
                          {option.price === 0 ? '선택 안 함' : `${(option.price).toLocaleString()}원`}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-10 bg-indigo-50 border border-indigo-100 rounded-xl p-6 text-center">
          <h2 className="text-lg text-indigo-800 mb-2">예상 총 결혼 비용</h2>
          <div className="text-4xl font-bold text-indigo-600">
            {totalBudget.toLocaleString()}원
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;