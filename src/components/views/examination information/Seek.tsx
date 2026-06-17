import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";

const ExaminationsSeek: React.FC = () => {
  const [formData, setFormData] = useState({
    subgruppeVon: "",
    subgruppeBis: "",
    pruefer1: "",
    pruefer2: "",
    suchbegriffValue: "",
    suchbegriffType: "exakte Wortgruppe"
  });

  const handleReset = () => {
    setFormData({
      subgruppeVon: "",
      subgruppeBis: "",
      pruefer1: "",
      pruefer2: "",
      suchbegriffValue: "",
      suchbegriffType: "exakte Wortgruppe"
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const dropdownOptions = {
    suchbegriffType: ["einen der Begriffe", "alle Begriffe", "exakte Wortgruppe"]
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
  }) => {
    return (
      <UniversalDropdown
        trigger={
          <button className={`w-full flex items-center justify-between px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 hover:border-gray-300 transition-all cursor-pointer ${className}`}>
            <span className="font-semibold">{value}</span>
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
              className={`px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors text-gray-800 font-semibold cursor-pointer ${
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
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900 tracking-tight">Seek</h2>
      <hr className="border-gray-200 mb-10" />

      {/* Grid Layout matching the image exactly */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 w-full">
        {/* Subgruppe: Occupies full width */}
        <div className="flex flex-col gap-2 col-span-1 lg:col-span-2">
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

        {/* Prüfer-1 & Prüfer-2 */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Prüfer-1:</label>
          <input
            type="text"
            value={formData.pruefer1}
            onChange={(e) => handleInputChange("pruefer1", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all shadow-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Prüfer-2:</label>
          <input
            type="text"
            value={formData.pruefer2}
            onChange={(e) => handleInputChange("pruefer2", e.target.value)}
            className="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-orange-300 transition-all shadow-sm"
          />
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
        <button className="cursor-pointer px-14 py-2.5 bg-[#ff7a30] hover:bg-[#e06520] text-white font-bold rounded-md shadow-md hover:shadow-lg transition-all active:scale-95 text-sm">
          Suchen
        </button>
        <button 
          onClick={handleReset}
          className="cursor-pointer px-14 py-2.5 bg-white border border-gray-300 text-gray-700 font-bold rounded-md hover:bg-gray-50 transition-all active:scale-95 text-sm"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ExaminationsSeek;
