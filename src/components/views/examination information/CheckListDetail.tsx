import React, { useState } from "react";
import { Link2, Lock, ChevronDown, Copy } from "lucide-react";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";

interface CheckListDetailProps {
  id: string;
  onBack: () => void;
}

type TabType = "formular" | "link" | "security";

const CheckListDetail: React.FC<CheckListDetailProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<TabType>("formular");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("03/12/2026 07:57 AM ( malins )");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { id: "formular" as TabType, label: "PrüfListe nach Subgruppen", icon: null },
    { id: "link" as TabType, label: null, icon: <Link2 size={16} /> },
    { id: "security" as TabType, label: null, icon: <Lock size={16} /> },
  ];

  const getTabClass = (tabId: TabType) => {
    const baseClass = "flex items-center justify-center transition-all border whitespace-nowrap rounded-md font-semibold text-sm";
    const activeClass = "bg-[#fff2eb] text-[#ff7a30] border-[#ffa066]";
    const inactiveClass = "bg-[#f8f9fa] text-gray-400 border-gray-200 hover:bg-gray-100/50 hover:text-gray-600";
    const padding = tabId === "formular" ? "px-4 py-1.5" : "p-2.5";
    return `${baseClass} ${activeTab === tabId ? activeClass : inactiveClass} ${padding}`;
  };

  return (
    <div className="flex flex-col min-h-screen w-full text-gray-800 font-sans">
      {/* Header with Back button */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex flex-col gap-1">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-md font-bold text-gray-900 hover:text-orange-600 transition-all group cursor-pointer"
          >
            <img src="/back.svg" alt="Back" className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
        </div>
      </div>

      {/* Tabs & Dropdown Row */}
      <div className="flex items-center justify-between mb-6">
        {/* Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${getTabClass(tab.id)} cursor-pointer`}
            >
              {tab.icon ? tab.icon : tab.label}
            </button>
          ))}
        </div>

        {/* Dropdown */}
        <UniversalDropdown
          trigger={
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-800 hover:border-gray-400 transition-all cursor-pointer font-medium shadow-sm">
              Dokument
              <ChevronDown size={14} className="text-gray-500 ml-1" />
            </button>
          }
          align="right"
          className="bg-white border border-gray-200 !py-0 !shadow-2xl !rounded-md overflow-hidden min-w-[200px]"
        >
          <div className="flex flex-col py-0">
            {/* Header */}
            <div className="px-4 py-2 bg-gray-100 text-sm font-semibold text-gray-700 border-b border-gray-200">
              Dokument...
            </div>
            
            {/* Options Group 1 */}
            <button className="px-4 py-2 text-sm text-left hover:bg-gray-50 text-gray-700 w-full transition-colors cursor-pointer">
              Bearbeiten
            </button>
            <button className="px-4 py-2 text-sm text-left hover:bg-gray-50 text-gray-700 w-full transition-colors cursor-pointer">
              Drucken ...
            </button>
            <button className="px-4 py-2 text-sm text-left hover:bg-gray-50 text-gray-700 w-full transition-colors cursor-pointer">
              In neuem Tab öffnen
            </button>
            <button className="px-4 py-2 text-sm text-left text-gray-300 w-full transition-colors cursor-not-allowed" disabled>
              PDF erstellen
            </button>

            {/* Dashed Separator */}
            <div className="border-t border-dashed border-gray-300 my-1"></div>

            {/* Section Header */}
            <div className="px-4 py-1.5 text-sm font-bold text-gray-800">
              Löschen
            </div>
            <button className="px-8 py-2 text-sm text-left hover:bg-red-50 text-[#ff3b30] font-medium w-full transition-colors cursor-pointer">
              Dokument löschen
            </button>
          </div>
        </UniversalDropdown>
      </div>

      {/* Tab Contents */}
      <div className="mb-8 space-y-6">
        {activeTab === "formular" && (
          <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 space-y-4 text-[14px] animate-fade-in">
            {/* Table layout matching the screenshot */}
            <div className="divide-y divide-gray-100/60">
              <div className="grid grid-cols-[250px_1fr] py-3.5">
                <span className="text-gray-400 font-semibold">Subgruppe/Bezeichnung:</span>
                <span className="text-right font-bold">
                  <span className="text-[#ff6b6b] mr-2">14618</span>
                  <span className="text-blue-600">Kraftstofftank 3000l</span>
                </span>
              </div>

              <div className="grid grid-cols-[250px_1fr] py-3.5">
                <span className="text-gray-400 font-semibold">To Do:</span>
                <span className="text-right font-bold text-gray-800">Tankprüfung ADR</span>
              </div>

              <div className="grid grid-cols-[250px_1fr] py-3.5">
                <span className="text-gray-400 font-semibold">Prüfdokument:</span>
                <span className="text-right font-bold text-green-600">ADR-Prüfprotokoll</span>
              </div>

              <div className="grid grid-cols-[250px_1fr] py-3.5">
                <span className="text-gray-400 font-semibold">Prüfer 1:</span>
                <span className="text-right font-bold text-gray-800">Extern</span>
              </div>

              <div className="grid grid-cols-[250px_1fr] py-3.5">
                <span className="text-gray-400 font-semibold">Prüfer 2:</span>
                <span className="text-right font-bold text-gray-800">Fachkraft für ADR Prüfung (TPG, TÜV-Süd,...)</span>
              </div>

              <div className="grid grid-cols-[250px_1fr] py-3.5">
                <span className="text-gray-400 font-semibold">Service Type:</span>
                <span className="text-right font-bold text-green-600">ESC-912</span>
              </div>

              <div className="grid grid-cols-[250px_1fr] py-3.5">
                <span className="text-gray-400 font-semibold">Testcode:</span>
                <span className="text-right font-bold text-[#ff5252]">Safety Check Periodical Inspection</span>
              </div>

              <div className="grid grid-cols-[250px_1fr] py-3.5">
                <span className="text-gray-400 font-semibold">Prüftext:</span>
                <span className="text-right font-medium text-gray-800">Tankprüfung gemäß ADR durch "Prüfgesellschaft"</span>
              </div>

              <div className="grid grid-cols-[250px_1fr] py-3.5">
                <span className="text-gray-400 font-semibold">Aufkleber:</span>
                <span className="text-right font-bold text-blue-600">ADR Prüfung</span>
              </div>

              <div className="grid grid-cols-[250px_1fr] py-3.5">
                <span className="text-gray-400 font-semibold">Dokument senden an:</span>
                <span className="text-right font-bold text-blue-600">Inspection + Service-Vienna</span>
              </div>

              <div className="grid grid-cols-[250px_1fr] py-3.5">
                <span className="text-gray-400 font-semibold">Zu Beachten:</span>
                <span className="text-right font-semibold text-gray-800">x</span>
              </div>

              <div className="grid grid-cols-[250px_1fr] py-3.5">
                <span className="text-gray-400 font-semibold">Bemerkung:</span>
                <span className="text-right text-gray-500">-</span>
              </div>

              <div className="grid grid-cols-[250px_1fr] py-3.5">
                <span className="text-gray-400 font-semibold">Zusatzinfos TD:</span>
                <span className="text-right text-gray-500">-</span>
              </div>
            </div>

            <div className="text-[11px] text-orange-500 font-bold italic pt-4 text-right">
              Powered by Boels-Technikweb ®
            </div>
          </div>
        )}

        {activeTab === "link" && (
          <div className="space-y-6 animate-fade-in">
            {/* Main Content */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-20 flex flex-col items-center justify-center relative min-h-[200px]">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">No Data Found</h2>
              <div className="absolute bottom-4 right-6 text-[11px] text-orange-500 font-bold italic">
                Powered by Boels-Technikweb ®
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="space-y-6 animate-fade-in">
            {/* Main Content */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
              <div className="space-y-4 text-[14px]">
                <div className="grid grid-cols-[180px_1fr] gap-4">
                  <span className="text-gray-400 font-medium">Erstellt am:</span>
                  <span className="text-gray-800 font-semibold">03/12/2026 &nbsp;&nbsp; 07:57 &nbsp;&nbsp; ( malins )</span>
                </div>

                <div className="grid grid-cols-[180px_1fr] gap-4 items-center">
                  <span className="text-gray-400 font-medium">Änderungs-Historie:</span>
                  <span className="text-gray-800 font-semibold flex items-center gap-2">
                    03/12/2026 07:57 AM ( malins )
                    <button
                      onClick={handleCopy}
                      className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                      title="Copy history to clipboard"
                    >
                      <Copy size={14} />
                    </button>
                    {copied && <span className="text-[11px] text-green-500 font-bold">Copied!</span>}
                  </span>
                </div>

                <div className="grid grid-cols-[180px_1fr] gap-4">
                  <span className="text-gray-400 font-medium">Bearbeitungsrecht für:</span>
                  <span className="text-gray-800 font-semibold">Manager, Supervisor, malins</span>
                </div>

                <div className="grid grid-cols-[180px_1fr] gap-4">
                  <span className="text-gray-400 font-medium">Lese-Freigabe für:</span>
                  <span className="text-gray-800 font-semibold">
                    Benutzer mit Bearbeitungsrecht, Alle Autoren, Alle Leser
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckListDetail;
