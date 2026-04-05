import React, { useState, lazy, Suspense } from "react";
import { ChevronDown, ChevronUp, Link, Printer, Lock, RotateCcw } from "lucide-react";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";

// Lazy load the tab contents
const ProtocolTab = lazy(() => import("./tankLogDetails/ProtocolTab"));
const LinkTab = lazy(() => import("./tankLogDetails/LinkTab"));
const SecurityTab = lazy(() => import("./tankLogDetails/SecurityTab"));

interface TankLogDetailProps {
  id: string;
  onBack: () => void;
}

const TankLogDetail: React.FC<TankLogDetailProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("Rücknahmeprotokoll");

  const tabs = [
    { id: "Rücknahmeprotokoll", label: "Rücknahmeprotokoll", icon: null },
    { id: "Link", label: null, icon: <Link size={15} /> },
    { id: "Security", label: null, icon: <Lock size={15} /> },
  ];

  return (
    <div className="flex flex-col w-full h-full min-h-screen gap-6">
      {/* Back button */}
      <div className="flex items-center -ml-1">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[15px] font-extrabold text-[#111827] hover:text-orange-600 transition-all group"
        >
          <img src="/back.svg" alt="Back" className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="mb-0.5">Back</span>
        </button>
      </div>

      {/* Container 1: Main Content */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm flex flex-col p-8 overflow-hidden">
        {/* Tab Header Row */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center h-[34px] px-4 rounded-md text-[11px] font-bold transition-all border whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[#FFF6ED] text-[#F39E20] border-[#FBD2A0]"
                    : "bg-white text-gray-400 border-gray-100 hover:bg-gray-50 hover:text-gray-600"
                }`}
              >
                {tab.icon ? (
                  <span className={activeTab === tab.id ? "text-orange-400 font-bold" : "text-gray-400"}>
                    {tab.icon}
                  </span>
                ) : tab.label}
              </button>
            ))}
          </div>

          <UniversalDropdown
            trigger={
              <button className="flex items-center gap-10 px-4 py-1.5 bg-white border border-gray-100 rounded-md text-[13px] font-medium text-gray-400 hover:border-gray-200 transition-all shadow-sm">
                Dokument.
                <ChevronDown size={14} className="text-gray-300" />
              </button>
            }
            align="right"
            className="bg-white border-gray-100 !py-0 !shadow-2xl !rounded-xl overflow-hidden"
          >
            <div className="flex flex-col min-w-[240px]">
              <div className="flex items-center justify-between px-5 py-3 bg-gray-50/50 border-b border-gray-100">
                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">- Aktionen -</span>
                <ChevronUp size={16} className="text-gray-400" />
              </div>
              <button className="flex items-center gap-3 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 w-full text-left">
                <Printer size={18} /> Drucken
              </button>
            </div>
          </UniversalDropdown>
        </div>

        {/* Tab content area */}
        <div className="w-full flex-1">
          <Suspense fallback={<div className="flex items-center justify-center p-20 text-gray-400 animate-pulse font-medium underline">Loading details...</div>}>
            {activeTab === "Rücknahmeprotokoll" && <ProtocolTab />}
            {activeTab === "Link" && <LinkTab />}
            {activeTab === "Security" && <SecurityTab />}
          </Suspense>
        </div>

        {/* Footer for upper container */}
        <div className="mt-8 text-right">
          <span className="text-[11px] font-bold text-[#FBD2A0] uppercase tracking-tight italic">
            Powered by Boels-Technikweb ®
          </span>
        </div>
      </div>

      {/* Container 2: Shared Maschinen Section */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm flex flex-col p-8 overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <div className="px-3 py-1 bg-[#FFF6ED] border border-[#FBD2A0] rounded-md shadow-sm">
             <span className="text-[11px] font-bold text-[#F39E20] capitalize">Maschinen (0)</span>
          </div>
          <button className="p-2 text-gray-900 font-bold hover:text-orange-500 transition-colors">
            <RotateCcw size={20} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center py-24 bg-white border border-gray-50 rounded-2xl shadow-inner">
           <h3 className="text-[2.75rem] font-bold text-gray-900 tracking-tight">No Data Found</h3>
        </div>

        <div className="mt-8 text-right opacity-70">
          <span className="text-[11px] font-bold text-[#FBD2A0] uppercase tracking-tight italic">
            Powered by Boels-Technikweb ®
          </span>
        </div>
      </div>
    </div>
  );
};

export default TankLogDetail;
