import React, { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";

const DamageReportQuery: React.FC = () => {
  const [formData, setFormData] = useState({
    schadensBearbeiter: "",
    reparaturstatus: "alle",
    kalkulationsdatumVon: "",
    kalkulationsdatumBis: "",
    subgruppeVon: "",
    subgruppeBis: "",
    schadenAbgerechnet: "alle",
    mvNummer: "",
    letzteAenderung: "",
    boelsDepot: "",
    schadenssummeVon: "",
    schadenssummeBis: "",
    firmenname: "",
    suchbegriffValue: "",
    suchbegriffType: "exakte Wortgruppe"
  });

  const handleReset = () => {
    setFormData({
      schadensBearbeiter: "",
      reparaturstatus: "alle",
      kalkulationsdatumVon: "",
      kalkulationsdatumBis: "",
      subgruppeVon: "",
      subgruppeBis: "",
      schadenAbgerechnet: "alle",
      mvNummer: "",
      letzteAenderung: "",
      boelsDepot: "",
      schadenssummeVon: "",
      schadenssummeBis: "",
      firmenname: "",
      suchbegriffValue: "",
      suchbegriffType: "exakte Wortgruppe"
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const dropdownOptions = {
    reparaturstatus: ["alle", "Offene Kalkulation !", "Abgeschlossen !"],
    schadenAbgerechnet: ["alle", "Nein", "Ja", "Insp", "MV"],
    suchbegriffType: ["einen der Begriffe", "alle Begriffe", "exakte Wortgruppe"]
  };

  // Styled dropdown renderer to match dropdown options colors
  const RenderDropdown = ({ 
    field, 
    value, 
    options, 
    className = "" 
  }: { 
    field: string, 
    value: string, 
    options: string[], 
    className?: string 
  }) => {
    // Custom option text colors as shown in the screenshot
    const getOptionColorClass = (opt: string) => {
      if (opt === "Abgeschlossen !") return "text-[#d9383a] font-bold";
      if (opt === "Offene Kalkulation !") return "text-blue-600 font-medium";
      if (opt === "Ja") return "text-[#ff7a30] font-bold";
      if (opt === "Insp" || opt === "MV") return "text-green-600 font-bold";
      return "text-gray-800 font-medium";
    };

    return (
      <UniversalDropdown
        trigger={
          <button className={`w-full flex items-center justify-between px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 hover:border-gray-300 transition-all ${className}`}>
            <span className={value === "alle" ? "text-gray-400" : "font-medium"}>{value}</span>
            <ChevronDown size={14} className="text-gray-400" />
          </button>
        }
        className="bg-white border-gray-100 !shadow-xl !rounded-lg overflow-hidden min-w-[200px]"
      >
        <div className="flex flex-col py-1">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleInputChange(field, opt)}
              className={`px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors ${getOptionColorClass(opt)} ${
                value === opt ? "bg-blue-600 !text-white" : ""
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </UniversalDropdown>
    );
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-7 sm:p-10 bg-white border border-gray-200 rounded-2xl shadow-sm">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-tight">Query</h2>
      <hr className="border-gray-200 mb-10" />

      {/* Grid Layout matching the image exactly */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 w-full">
        {/* Schadens-Bearbeiter: Spans full width */}
        <div className="flex flex-col gap-2 col-span-1 lg:col-span-2">
          <label className="text-sm font-bold text-gray-700">Schadens-Bearbeiter:</label>
          <input
            type="text"
            value={formData.schadensBearbeiter}
            onChange={(e) => handleInputChange("schadensBearbeiter", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all shadow-sm"
          />
        </div>

        {/* Reparaturstatus & Kalkulationsdatum */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Reparaturstatus:</label>
          <RenderDropdown field="reparaturstatus" value={formData.reparaturstatus} options={dropdownOptions.reparaturstatus} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Kalkulationsdatum:</label>
          <div className="flex items-center gap-3">
            <style>{`
              .hide-native-date::-webkit-calendar-picker-indicator {
                background: transparent;
                bottom: 0;
                color: transparent;
                cursor: pointer;
                height: auto;
                left: 0;
                position: absolute;
                right: 0;
                top: 0;
                width: auto;
              }
            `}</style>
            <div className="flex-1 relative group">
              <input
                type="date"
                value={formData.kalkulationsdatumVon}
                onChange={(e) => handleInputChange("kalkulationsdatumVon", e.target.value)}
                className="w-full pl-3 pr-8 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all shadow-sm cursor-pointer hide-native-date"
              />
              <Calendar size={14} className="absolute right-3 top-3 text-[#ff7a30] pointer-events-none" />
            </div>
            <span className="text-xs font-bold text-gray-500">bis</span>
            <div className="flex-1 relative group">
              <input
                type="date"
                value={formData.kalkulationsdatumBis}
                onChange={(e) => handleInputChange("kalkulationsdatumBis", e.target.value)}
                className="w-full pl-3 pr-8 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all shadow-sm cursor-pointer hide-native-date"
              />
              <Calendar size={14} className="absolute right-3 top-3 text-[#ff7a30] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Subgruppe & Schaden Abgerechnet */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Subgruppe:</label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type here"
              value={formData.subgruppeVon}
              onChange={(e) => handleInputChange("subgruppeVon", e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all placeholder-gray-300 shadow-sm"
            />
            <span className="text-xs font-bold text-gray-500">bis</span>
            <input
              type="text"
              placeholder="Type here"
              value={formData.subgruppeBis}
              onChange={(e) => handleInputChange("subgruppeBis", e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all placeholder-gray-300 shadow-sm"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Schaden Abgerechnet:</label>
          <RenderDropdown field="schadenAbgerechnet" value={formData.schadenAbgerechnet} options={dropdownOptions.schadenAbgerechnet} />
        </div>

        {/* MV-Nummer & Letzte Änderung */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">MV-Nummer:</label>
          <input
            type="text"
            value={formData.mvNummer}
            onChange={(e) => handleInputChange("mvNummer", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Letzte Änderung durch [Benutzer]</label>
          <input
            type="text"
            value={formData.letzteAenderung}
            onChange={(e) => handleInputChange("letzteAenderung", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all shadow-sm"
          />
        </div>

        {/* Boels Depot & Schadenssumme */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Boels Depot:</label>
          <input
            type="text"
            value={formData.boelsDepot}
            onChange={(e) => handleInputChange("boelsDepot", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Schadenssumme:</label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type here"
              value={formData.schadenssummeVon}
              onChange={(e) => handleInputChange("schadenssummeVon", e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all placeholder-gray-300 shadow-sm"
            />
            <span className="text-xs font-bold text-gray-500">bis</span>
            <input
              type="text"
              placeholder="Type here"
              value={formData.schadenssummeBis}
              onChange={(e) => handleInputChange("schadenssummeBis", e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all placeholder-gray-300 shadow-sm"
            />
          </div>
        </div>

        {/* Firmaname & Suchbegriff */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Firmaname:</label>
          <input
            type="text"
            placeholder="Type here"
            value={formData.firmenname}
            onChange={(e) => handleInputChange("firmenname", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all placeholder-gray-300 shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Suchbegriff:</label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type here"
              value={formData.suchbegriffValue}
              onChange={(e) => handleInputChange("suchbegriffValue", e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all placeholder-gray-300 shadow-sm"
            />
            <div className="flex-1">
              <RenderDropdown field="suchbegriffType" value={formData.suchbegriffType} options={dropdownOptions.suchbegriffType} />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4 mt-12 pb-4">
        <button className="cursor-pointer px-14 py-2.5 bg-[#ff7a30] hover:bg-[#e06520] text-white font-bold rounded shadow-md hover:shadow-lg transition-all active:scale-95 text-sm">
          Suchen
        </button>
        <button 
          onClick={handleReset}
          className="cursor-pointer px-14 py-2.5 bg-white border border-gray-300 text-gray-700 font-bold rounded hover:bg-gray-50 transition-all active:scale-95 text-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default DamageReportQuery;
