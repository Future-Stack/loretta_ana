import React, { useState } from "react";
import { Link2, MessageSquare, Lock, RefreshCw, CheckCircle2, Copy } from "lucide-react";

interface DamageReportDetailProps {
  id: string;
  onBack: () => void;
}

type TabType = "formular" | "link" | "chat" | "security";

const DamageReportDetail: React.FC<DamageReportDetailProps> = ({ id, onBack }) => {
  const [activeTab, setActiveTab] = useState<TabType>("formular");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("03/12/2026 07:57 AM ( malins )");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const docsData = [
    {
      nummer: "ZW400",
      bezeichnung: "Spenglerarbeiten Pauschale",
      lieferant: "Werkstatt",
      lagerort: "TD467-AT",
      lagerstand: "89",
      listenpreis: "50,00 €",
      einkaufspreis: "50,00 €"
    },
    {
      nummer: "ZW105",
      bezeichnung: "Kleinmaterial Pauschale gr",
      lieferant: "Werkstatt",
      lagerort: "TD467-AT",
      lagerstand: "80",
      listenpreis: "27,50 €",
      einkaufspreis: "27,50 €"
    },
    {
      nummer: "AZ1013",
      bezeichnung: "Techniker 7,5 stunden",
      lieferant: "Arbeitszeit",
      lagerort: "TD467-AT",
      lagerstand: "99",
      listenpreis: "0,00 €",
      einkaufspreis: "0,00 €"
    },
    {
      nummer: "AZ1004",
      bezeichnung: "Techniker 2,5 stunden",
      lieferant: "Arbeitszeit",
      lagerort: "TD467-AT",
      lagerstand: "88",
      listenpreis: "0,00 €",
      einkaufspreis: "0,00 €"
    }
  ];

  const tabs = [
    { id: "formular" as TabType, label: "Scnadensformular", icon: null },
    { id: "link" as TabType, label: null, icon: <Link2 size={16} /> },
    { id: "chat" as TabType, label: null, icon: <MessageSquare size={16} /> },
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
            className="flex items-center gap-2 text-md font-bold text-gray-900 hover:text-orange-600 transition-all group"
          >
            <img src="/back.svg" alt="Back" className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1 scrollbar-none">
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

      {/* Tab Contents */}
      <div className="mb-8 space-y-6">
        {activeTab === "formular" && (
          <div className="space-y-6 animate-fade-in">
            {/* Header Card: Machine Name & Number */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                Kubota U56-5 Bagger 5,5t Kurzheck, PowerTilt
              </h1>
              <div className="mt-2 text-sm font-semibold">
                <span className="text-gray-400 mr-2">Boels Nummer:</span>
                <span className="text-[#ff6b6b] font-mono text-lg">{id || "131900141"}</span>
              </div>
            </div>

            {/* Grid 1: Maschinendaten & technical details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Maschinendaten Card */}
              <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
                <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Maschinendaten</h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-[14px]">
                  <div>
                    <div className="text-gray-400 font-medium">Boels Nummer:</div>
                    <div className="text-[#ff6b6b] font-bold mt-0.5">{id || "131900141"}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 font-medium">Seriennummer:</div>
                    <div className="text-gray-800 font-bold mt-0.5">KBCDZ5ZVP3B14097</div>
                  </div>
                  <div>
                    <div className="text-gray-400 font-medium">Subgruppe:</div>
                    <div className="text-green-600 font-bold mt-0.5">13190</div>
                  </div>
                  <div>
                    <div className="text-gray-400 font-medium">Betriebsstunden Maschine:</div>
                    <div className="text-gray-800 font-bold mt-0.5">5,0 Std.</div>
                  </div>
                </div>
              </div>

              {/* Technical Details Card */}
              <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 space-y-3 text-[14px] leading-relaxed">
                <div className="flex justify-between items-start">
                  <span className="text-gray-400 font-medium">Boels Depot:</span>
                  <span className="text-right">
                    <span className="text-blue-600 font-bold mr-2">TD467-AT</span>
                    <span className="text-green-600 font-bold">Savo Malinovic - Bearbeiter !</span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-medium">Kalkulationsdatum:</span>
                  <span className="text-gray-800 font-semibold">12.03.2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-medium">Reparaturdatum:</span>
                  <span className="text-gray-800 font-semibold">09.03.2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-medium">Schadensbeschreibung:</span>
                  <span className="text-gray-800 font-semibold text-right">test</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-medium">Durchgeführte Arbeiten:</span>
                  <span className="text-gray-800 font-semibold text-right">test</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-medium">Arbeitsstunden:</span>
                  <span className="text-right">
                    <span className="text-blue-600 font-bold mr-2">2,0 Std.</span>
                    <span className="text-green-600 font-semibold">0,0 Vorgabe Std.</span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-medium">Kostenstelle:</span>
                  <span className="text-[#ff6b6b] font-bold">Kd</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-medium">Reparaturstatus:</span>
                  <span className="text-red-500 font-bold">Offene Kalkulation !</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-medium">Zuständiger Techniker:</span>
                  <span className="text-blue-600 font-semibold">malins</span>
                </div>
              </div>
            </div>

            {/* Grid 2: Ersatzteile & Material & Summe */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Ersatzteile & Material Card */}
              <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 space-y-2 text-[14px]">
                <h3 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Ersatzteile & Material:</h3>
                <div className="text-gray-700">Kleinmaterial Pauschale gr.</div>
                <div className="text-gray-700">Spenglerarbeiten Pauschale</div>
                <div className="flex justify-between text-gray-700">
                  <span>Techniker 2,5 stunden</span>
                  <span className="font-semibold">27,50</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Techniker 7,5 stunden</span>
                  <span className="font-semibold">50,00</span>
                </div>
                <div className="text-gray-700 font-bold pt-2">4</div>
              </div>

              {/* Sums Section Card */}
              <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex flex-col justify-between text-[14px]">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-medium">ET-Listenpreis gesamt:</span>
                    <span className="text-gray-800 font-bold">77,50 €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-medium">Arbeitszeit gesamt:</span>
                    <span className="text-gray-800 font-bold">1.100,00 €</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-100">
                    <span className="text-gray-400 font-medium">Gesamtsumme:</span>
                    <span className="text-green-600 font-bold text-base">1.178,00 €</span>
                  </div>
                </div>
                <div className="text-[11px] text-orange-500 font-bold italic pt-6 text-right">
                  Powered by Boels-Technikweb ®
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "link" && (
          <div className="space-y-6 animate-fade-in">
            {/* Header Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                Kubota U56-5 Bagger 5,5t Kurzheck, PowerTilt
              </h1>
              <div className="mt-2 text-sm font-semibold">
                <span className="text-gray-400 mr-2">Boels Nummer:</span>
                <span className="text-[#ff6b6b] font-mono text-lg">{id || "131900141"}</span>
              </div>
            </div>
            {/* Main Content */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-20 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">No Data Found</h2>
            </div>
          </div>
        )}

        {activeTab === "chat" && (
          <div className="space-y-6 animate-fade-in">
            {/* Header Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                Kubota U56-5 Bagger 5,5t Kurzheck, PowerTilt
              </h1>
              <div className="mt-2 text-sm font-semibold">
                <span className="text-gray-400 mr-2">Boels Nummer:</span>
                <span className="text-[#ff6b6b] font-mono text-lg">{id || "131900141"}</span>
              </div>
            </div>
            {/* Main Content */}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 relative min-h-[200px] flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-lg font-bold text-gray-900">Workflow 1:</div>
                <div className="text-lg font-bold text-gray-900">Workflow 2:</div>
                <div className="text-lg font-bold text-gray-900">Workflow 3:</div>
              </div>
              <div className="text-[11px] text-orange-500 font-bold italic pt-6 text-right">
                Powered by Boels-Technikweb ®
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="space-y-6 animate-fade-in">
            {/* Header Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                Kubota U56-5 Bagger 5,5t Kurzheck, PowerTilt
              </h1>
              <div className="mt-2 text-sm font-semibold">
                <span className="text-gray-400 mr-2">Boels Nummer:</span>
                <span className="text-[#ff6b6b] font-mono text-lg">{id || "131900141"}</span>
              </div>
            </div>
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
                      className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600 transition-colors"
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

      {/* Zugeordnete Dokumente Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Zugeordnete Dokumente</h2>
          <button className="p-2 hover:bg-gray-200 bg-white border border-gray-200 rounded-lg text-gray-500 hover:text-gray-800 transition-all shadow-sm">
            <RefreshCw size={16} />
          </button>
        </div>

        {/* Sub tab */}
        <div className="flex">
          <span className="flex items-center justify-center px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest bg-orange-100 text-orange-600 border border-orange-200 shadow-sm whitespace-nowrap">
            Ersatzteile (4)
          </span>
        </div>

        {/* Documents Table */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="grid grid-cols-[60px_120px_2.5fr_1.2fr_1.5fr_1.5fr] gap-4 px-6 py-4 bg-gray-50/70 border-b border-gray-200 text-[13px] font-bold text-gray-400 uppercase tracking-wider">
            <div>Status</div>
            <div>Nummer</div>
            <div>Bezeichnung</div>
            <div>Lieferant</div>
            <div>Lagerort/Lagerstand</div>
            <div className="text-right">Listenpreis/Einkaufspreis</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-100">
            {docsData.map((doc) => {
              return (
                <div
                  key={doc.nummer}
                  className={`grid grid-cols-[60px_120px_2.5fr_1.2fr_1.5fr_1.5fr] gap-4 px-6 py-4 items-center text-[14px] cursor-pointer transition-all`}
                >
                  {/* Status Check Icon */}
                  <div className="flex justify-start">
                    <CheckCircle2 size={20} className="text-green-500" strokeWidth={2.5} />
                  </div>

                  {/* Nummer */}
                  <div className="text-blue-600 font-bold hover:underline">
                    {doc.nummer}
                  </div>

                  {/* Bezeichnung */}
                  <div className="text-gray-900 font-bold">
                    {doc.bezeichnung}
                  </div>

                  {/* Lieferant */}
                  <div className="text-blue-600 font-semibold">
                    {doc.lieferant}
                  </div>

                  {/* Lagerort / Lagerstand */}
                  <div className="font-semibold">
                    <div className="text-blue-600">{doc.lagerort}</div>
                    <div className="text-green-600 mt-0.5 text-xs">{doc.lagerstand}</div>
                  </div>

                  {/* Listenpreis / Einkaufspreis */}
                  <div className="text-right font-bold text-gray-800">
                    <div className="text-blue-600">{doc.listenpreis}</div>
                    <div className="text-red-500 mt-0.5 text-xs">{doc.einkaufspreis}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamageReportDetail;
