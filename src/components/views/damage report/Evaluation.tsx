import React, { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";

const DamageReportEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    techniker: "",
    reparaturdatumVon: "",
    reparaturdatumBis: "",
    reparaturstatus: "alle",
    schadenAbgerechnet: "alle",
    suchbegriffValue: "",
    suchbegriffType: "alle Begriffe"
  });

  const handleReset = () => {
    setFormData({
      techniker: "",
      reparaturdatumVon: "",
      reparaturdatumBis: "",
      reparaturstatus: "alle",
      schadenAbgerechnet: "alle",
      suchbegriffValue: "",
      suchbegriffType: "alle Begriffe"
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
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-tight">Evaluation</h2>
      <hr className="border-gray-200 mb-10" />

      {/* Grid Layout matching the image exactly */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 w-full">
        {/* Zuständiger Techniker & Reparaturdatum */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Zuständiger Techniker:</label>
          <input
            type="text"
            value={formData.techniker}
            onChange={(e) => handleInputChange("techniker", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Reparaturdatum:</label>
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
                value={formData.reparaturdatumVon}
                onChange={(e) => handleInputChange("reparaturdatumVon", e.target.value)}
                className="w-full pl-3 pr-8 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all shadow-sm cursor-pointer hide-native-date"
              />
              <Calendar size={14} className="absolute right-3 top-3 text-[#ff7a30] pointer-events-none" />
            </div>
            <span className="text-xs font-bold text-gray-500">bis</span>
            <div className="flex-1 relative group">
              <input
                type="date"
                value={formData.reparaturdatumBis}
                onChange={(e) => handleInputChange("reparaturdatumBis", e.target.value)}
                className="w-full pl-3 pr-8 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all shadow-sm cursor-pointer hide-native-date"
              />
              <Calendar size={14} className="absolute right-3 top-3 text-[#ff7a30] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Reparaturstatus & Schaden Abgerechnet */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Reparaturstatus:</label>
          <RenderDropdown field="reparaturstatus" value={formData.reparaturstatus} options={dropdownOptions.reparaturstatus} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Schaden Abgerechnet:</label>
          <RenderDropdown field="schadenAbgerechnet" value={formData.schadenAbgerechnet} options={dropdownOptions.schadenAbgerechnet} />
        </div>

        {/* Suchbegriff: Input on left, Dropdown on right */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Suchbegriff:</label>
          <input
            type="text"
            placeholder="Type here"
            value={formData.suchbegriffValue}
            onChange={(e) => handleInputChange("suchbegriffValue", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all placeholder-gray-300 shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2 justify-end">
          <RenderDropdown field="suchbegriffType" value={formData.suchbegriffType} options={dropdownOptions.suchbegriffType} />
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

export default DamageReportEvaluation;
