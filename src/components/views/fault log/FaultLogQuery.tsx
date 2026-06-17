import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";

const FaultLogQuery: React.FC = () => {
  const [formData, setFormData] = useState({
    techniker: "alle",
    reparaturstatus1: "alle",
    reparaturstatus2: "alle",
    reparaturstatus3: "alle",
    geratenummerVon: "",
    geratenummerBis: "",
    storungsdatumVon: "",
    storungsdatumBis: "",
    storungDepot: "",
    subgruppeVon: "",
    subgruppeBis: "",
    abgerechnet: "alle",
    freieSuchbegriffeType: "einen der Be riffe",
    freieSuchbegriffeValue: "",
  });

  const handleReset = () => {
    setFormData({
      techniker: "alle",
      reparaturstatus1: "alle",
      reparaturstatus2: "alle",
      reparaturstatus3: "alle",
      geratenummerVon: "",
      geratenummerBis: "",
      storungsdatumVon: "",
      storungsdatumBis: "",
      storungDepot: "",
      subgruppeVon: "",
      subgruppeBis: "",
      abgerechnet: "alle",
      freieSuchbegriffeType: "einen der Be riffe",
      freieSuchbegriffeValue: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const dropdownOptions = {
    techniker: ["alle", "Helmuth", "Robertb", "Test"],
    reparaturstatus: [
      "alle",
      "Provisorisch Rep.!",
      "Gerät Austauschen!",
      "Telefonisch erledigt !",
      "Repariert!",
      "Externe Reparatur erforderlich!",
      "Kunde nicht Anwesend!",
      "Gerat nicht Repariert!",
      "Kunde möchte austauschen !",
    ],
    abgerechnet: ["alle", "Abgerechnet: [F42]", "JA"],
    freieSuchbegriffe: ["einen der Be riffe", "alle Begriffe", "exakte Wortgruppe"],
  };

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
  }) => (
    <UniversalDropdown
      trigger={
        <div className={`flex items-center justify-between px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-400 group hover:border-gray-300 transition-all ${className}`}>
          <span className={value === "alle" ? "text-gray-400" : "text-gray-700 font-medium"}>{value}</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>
      }
      className="bg-white border-gray-100 !shadow-xl !rounded-lg overflow-hidden min-w-[180px]"
    >
      <div className="flex flex-col py-1">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleInputChange(field, opt)}
            className={`px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
              value === opt ? "text-orange-500 font-semibold bg-orange-50/30" : "text-gray-600"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </UniversalDropdown>
  );

  return (
    <div className="flex flex-col min-h-screen w-full p-7 sm:p-10 border bg-white border-gray-300 rounded-md shadow-sm">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-tight">Query</h2>
      <hr className="border-gray-200 mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 w-full">
        {/* Techniker & Reparaturstatus */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Techniker:</label>
          <RenderDropdown field="techniker" value={formData.techniker} options={dropdownOptions.techniker} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Reparaturstatus:</label>
          <div className="flex items-center gap-2 w-full">
            <div className="flex-1"><RenderDropdown field="reparaturstatus1" value={formData.reparaturstatus1} options={dropdownOptions.reparaturstatus} className="w-[140px]" /></div>
            <div className="flex-1"><RenderDropdown field="reparaturstatus2" value={formData.reparaturstatus2} options={["alle"]} className="w-[140px]" /></div>
            <div className="flex-1"><RenderDropdown field="reparaturstatus3" value={formData.reparaturstatus3} options={["alle"]} className="w-[140px]" /></div>
          </div>
        </div>

        {/* Gerätenummer & Störungsdatum */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Gerätenummer:</label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type here"
              value={formData.geratenummerVon}
              onChange={(e) => handleInputChange("geratenummerVon", e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all placeholder-gray-300 shadow-sm"
            />
            <span className="text-xs font-bold text-gray-500">bis</span>
            <input
              type="text"
              placeholder="Type here"
              value={formData.geratenummerBis}
              onChange={(e) => handleInputChange("geratenummerBis", e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all placeholder-gray-300 shadow-sm"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Störungsdatum /</label>
          <div className="flex items-center gap-3">
             <div className="flex-1 relative group">
                <input
                    type="date"
                    value={formData.storungsdatumVon}
                    onChange={(e) => handleInputChange("storungsdatumVon", e.target.value)}
                    className="w-full pl-3 pr-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all placeholder-gray-300 shadow-sm cursor-pointer"
                />
                {/* <Calendar size={16} className="absolute right-3 top-2.5 text-orange-500 group-hover:scale-110 transition-transform pointer-events-none" /> */}
             </div>
            <span className="text-xs font-bold text-gray-500">bis</span>
            <div className="flex-1 relative group">
                <input
                    type="date"
                    value={formData.storungsdatumBis}
                    onChange={(e) => handleInputChange("storungsdatumBis", e.target.value)}
                    className="w-full pl-3 pr-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all placeholder-gray-300 shadow-sm cursor-pointer"
                />
                {/* <Calendar size={16} className="absolute right-3 top-2.5 text-orange-500 group-hover:scale-110 transition-transform pointer-events-none" /> */}
             </div>
          </div>
        </div>

        {/* Störung von Depot & Subgruppe */}
        <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700">Störung von Depot:</label>
            <input
                type="text"
                placeholder="Type here"
                value={formData.storungDepot}
                onChange={(e) => handleInputChange("storungDepot", e.target.value)}
                className="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all placeholder-gray-300 shadow-sm"
            />
        </div>
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

        {/* Abgerechnet & Freie Suchbegriffe */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Abgerechnet:</label>
          <RenderDropdown field="abgerechnet" value={formData.abgerechnet} options={dropdownOptions.abgerechnet} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Freie Suchbegriffe:</label>
          <div className="flex items-center gap-3">
            <RenderDropdown field="freieSuchbegriffeType" value={formData.freieSuchbegriffeType} options={dropdownOptions.freieSuchbegriffe} className="w-[180px]" />
            <input
                type="text"
                placeholder="Type here"
                value={formData.freieSuchbegriffeValue}
                onChange={(e) => handleInputChange("freieSuchbegriffeValue", e.target.value)}
                className="flex-[2] px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all placeholder-gray-300 shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4 mt-16 pb-10">
        <button className="px-14 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all active:scale-95">
          Suchen
        </button>
        <button 
            onClick={handleReset}
            className="px-14 py-3 bg-white border-2 border-gray-400 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-all active:scale-95"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FaultLogQuery;
