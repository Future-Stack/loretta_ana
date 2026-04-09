import React, { useState, lazy, Suspense } from "react";
import { ChevronDown, ChevronUp, Link, FileText, Pencil, Printer, ExternalLink, FileCheck, Trash2, Lock } from "lucide-react";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";

// Lazy load the tab contents
const ProtocolTab = lazy(() => import("./returnProtocolDetails/ProtocolTab"));
const LinkTab = lazy(() => import("./returnProtocolDetails/LinkTab"));
const SecurityTab = lazy(() => import("./returnProtocolDetails/SecurityTab"));

interface ReturnProtocolDetailProps {
  id: string;
  onBack: () => void;
}

const ReturnProtocolDetail: React.FC<ReturnProtocolDetailProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState("Rücknahmeprotokoll");

  const tabs = [
    { id: "Rücknahmeprotokoll", label: "Rücknahmeprotokoll", icon: null },
    { id: "Link", label: null, icon: <Link size={18} /> },
    { id: "Security", label: null, icon: <Lock size={18} /> },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header with Back button and Dropdown */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col gap-1">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-orange-600 transition-all group"
          >
            <img src="/back.svg" alt="Back" className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
        </div>

        <div className="flex items-center gap-4">
          <UniversalDropdown
            trigger={
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:border-gray-300 transition-all">
                Dokument.
                <ChevronDown size={16} />
              </button>

            }
            align="right"
            className="bg-white border-gray-100 !py-0 !shadow-xl !rounded-xl overflow-hidden"
          >
            <div className="flex flex-col min-w-[240px]">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50/50 border-b border-gray-100 mb-1">
                <span className="text-sm font-medium text-gray-400">- Aktionen -</span>
                <ChevronUp size={16} className="text-gray-400" />
              </div>

              {/* Action items */}
              <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors w-full text-left">
                <FileText size={18} className="text-gray-700" />
                Dokument.
              </button>
              <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors w-full text-left">
                <Pencil size={18} className="text-gray-700" />
                Bearbeiten
              </button>
              <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors w-full text-left">
                <Printer size={18} className="text-gray-700" />
                Drucken
              </button>
              <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors w-full text-left">
                <ExternalLink size={18} className="text-gray-700" />
                In neuem Tab Öffnen
              </button>
              <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-300 transition-colors w-full text-left cursor-not-allowed">
                <FileText size={18} className="text-gray-300" />
                PDF erstellen
              </button>

              {/* Signature Section */}
              <div className="px-4 pt-3 pb-1">
                <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-tight">Dokument Signieren</span>
              </div>
              <div className="border-b border-gray-100 mx-4 mb-1"></div>
              <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors w-full text-left">
                <FileCheck size={18} className="text-gray-700" />
                Dokument digital unterschreiben
              </button>

              {/* Delete Section */}
              <div className="px-4 pt-3 pb-1">
                <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-tight">Löschen</span>
              </div>
              <div className="border-b border-gray-100 mx-4 mb-1"></div>
              <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors w-full text-left mb-1">
                <Trash2 size={18} className="text-red-500" />
                Dokument löschen
              </button>
            </div>
          </UniversalDropdown>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center justify-center px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all shadow-sm border whitespace-nowrap min-w-[40px] ${
              activeTab === tab.id
                ? "bg-orange-100 text-orange-600 border-orange-200"
                : "bg-white text-gray-400 border-gray-100 hover:bg-gray-50 hover:text-gray-600"
            }`}
          >
            {tab.icon ? tab.icon : tab.label}
          </button>

        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full">
        <Suspense fallback={<div className="flex items-center justify-center p-20 text-gray-400 animate-pulse font-medium">Loading details...</div>}>
          {activeTab === "Rücknahmeprotokoll" && <ProtocolTab />}
          {activeTab === "Link" && <LinkTab />}
          {activeTab === "Security" && <SecurityTab />}
        </Suspense>
      </div>
    </div>
  );
};

export default ReturnProtocolDetail;
