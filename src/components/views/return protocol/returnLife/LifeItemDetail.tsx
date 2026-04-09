import React, { useState, lazy, Suspense } from "react";
import { ChevronDown, Lock, Link as LinkIcon } from "lucide-react";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";

// Lazy load the sub-tabs
const LifeProtocolTab = lazy(() => import("./tabs/LifeProtocolTab"));
const LifeLinkTab = lazy(() => import("./tabs/LifeLinkTab"));
const LifeSecurityTab = lazy(() => import("./tabs/LifeSecurityTab"));

interface LifeItemDetailProps {
  id: string;
  onBack: () => void;
}

const LifeItemDetail: React.FC<LifeItemDetailProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("Rücknahmeprotokoll");

  const tabs = [
    { id: "Rücknahmeprotokoll", label: "Rücknahmeprotokoll", icon: null },
    { id: "Link", label: null, icon: <LinkIcon size={18} /> },
    { id: "Security", label: null, icon: <Lock size={18} /> },
  ];

  return (
    <div className="flex flex-col w-full animate-in slide-in-from-right-10 duration-500">
      {/* Header with Back button and Dropdown */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-orange-600 transition-all group"
        >
          <img src="/back.svg" alt="Back" className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <UniversalDropdown
          trigger={
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:border-gray-300 hover:shadow-md transition-all">
              Dokument.
              <ChevronDown size={18} />
            </button>
          }
          align="right"
          className="bg-white border-gray-100 !py-0 !shadow-2xl !rounded-2xl overflow-hidden"
        >
          <div className="flex flex-col min-w-[220px] pb-2">
            <div className="px-4 py-3 bg-gray-50/50 border-b border-gray-50 flex items-center justify-between mb-2">
               <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">- Aktionen -</span>
            </div>
            {["Bearbeiten", "Duplizieren", "Drucken", "PDF erstellen"].map((action) => (
               <button key={action} className="px-5 py-2.5 text-sm text-left font-medium text-gray-700 hover:bg-gray-50 transition-colors w-full">
                  {action}
               </button>
            ))}
          </div>
        </UniversalDropdown>
      </div>

      {/* Modern Tabs Switcher */}
      <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center px-6 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all shadow-sm border whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-orange-50 text-orange-600 border-orange-200 shadow-orange-100/50"
                : "bg-white text-gray-400 border-gray-100 hover:bg-gray-50 hover:text-gray-600"
            }`}
          >
            {tab.icon ? tab.icon : tab.label}
          </button>

        ))}
      </div>

      {/* Sub-Tab Content */}
      <div className="w-full">
        <Suspense fallback={<div className="flex items-center justify-center p-32 text-gray-400 animate-pulse font-bold text-lg tracking-widest">Loading details...</div>}>
          {activeTab === "Rücknahmeprotokoll" && <LifeProtocolTab />}
          {activeTab === "Link" && <LifeLinkTab />}
          {activeTab === "Security" && <LifeSecurityTab />}
        </Suspense>
      </div>
    </div>
  );
};

export default LifeItemDetail;
