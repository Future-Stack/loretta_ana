// src/components/views components/spareParts/SparePartDetail/SparePartDetail.tsx
import React, { useState } from "react";
import type { SparePart } from "../types";
import SparePartDetailInfo from "./SparePartDetailInfo";
import SparePartDetailFiles from "./SparePartDetailFiles";

const SparePartDetail: React.FC<{ part: SparePart; onBack: () => void }> = ({ part, onBack }) => {
  const [activeTab, setActiveTab] = useState("Ersatzteil-Information");

  return (
    <div className="w-full bg-white p-6 rounded-lg">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <img src="/back.svg" alt="Back" className="w-6 h-6" />
        Back
      </button>

      <div className="flex gap-2 mb-8">
        {["Ersatzteil-Information", ""].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-orange-100 text-orange-600 border border-orange-300 shadow-sm"
                : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-orange-50"
            }`}
          >
            {tab === "" && (
              <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            )}
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Ersatzteil-Information" && <SparePartDetailInfo part={part} />}
      {activeTab === "" && <SparePartDetailFiles part={part} />}
    </div>
  );
};

export default SparePartDetail;
