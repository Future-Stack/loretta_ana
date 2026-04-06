import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

// ==========================================
// Custom Dropdown Component
// ==========================================
interface Option {
  label: string;
  value: string;
  color?: string;
}

const CustomDropdown: React.FC<{
  label?: string;
  options: Option[];
  value: string;
  onSelect: (value: string) => void;
  placeholder?: string;
}> = ({ options, value, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2.5 bg-gray-50/50 border border-transparent rounded-lg cursor-pointer hover:bg-gray-100 transition-all text-sm font-medium text-gray-900 shadow-sm"
      >
        <span className={selectedOption?.color || "text-gray-900"}>
          {selectedOption?.label || placeholder || "Select..."}
        </span>
        {isOpen ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
      </div>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute z-20 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="py-2 max-h-64 overflow-y-auto scrollbar-hide">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => {
                    onSelect(option.value);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors hover:bg-gray-50 ${
                    option.color || "text-gray-900"
                  } ${value === option.value ? "bg-gray-50/80" : ""}`}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// ==========================================
// Main Return Component
// ==========================================
const Return: React.FC = () => {
  // Form State
  const [receivedBy, setReceivedBy] = useState("");
  const [receivedDateFrom, setReceivedDateFrom] = useState<Date | null>(null);
  const [receivedDateTo, setReceivedDateTo] = useState<Date | null>(null);
  const [deviceStatus, setDeviceStatus] = useState("alle");
  const [boelsDepot, setBoelsDepot] = useState("");
  const [boelsNumberFrom, setBoelsNumberFrom] = useState("");
  const [boelsNumberTo, setBoelsNumberTo] = useState("");
  const [fullTextSearchMode, setFullTextSearchMode] = useState("exakte Wortgruppe");
  const [fullTextSearch, setFullTextSearch] = useState("");

  const statusOptions: Option[] = [
    { label: "alle", value: "alle" },
    { label: "Nur Check !", value: "nur_check" },
    { label: "In Reparatur !", value: "in_reparatur", color: "text-blue-500" },
    { label: "Beschadigt !", value: "beschadigt", color: "text-yellow-600" },
    { label: "Ausgetauscht !", value: "ausgetauscht", color: "text-red-500" },
    { label: "Service fällig !", value: "service_fallig", color: "text-red-500" },
    { label: "Überprüf. fällig !", value: "uberprufung_fallig", color: "text-red-500" },
    { label: "Verrnietbereit !", value: "verrnietbereit", color: "text-red-500" },
  ];

  const searchModes: Option[] = [
    { label: "einen der Begriffe", value: "einen der Begriffe" },
    { label: "alle Begriffe", value: "alle Begriffe" },
    { label: "exakte Wortgruppe", value: "exakte Wortgruppe" },
  ];

  const handleSearch = () => {
    console.log("Searching Returns...", {
      receivedBy, receivedDateFrom, receivedDateTo, deviceStatus, boelsDepot, boelsNumberFrom, boelsNumberTo, fullTextSearchMode, fullTextSearch
    });
  };

  const handleReset = () => {
    setReceivedBy("");
    setReceivedDateFrom(null);
    setReceivedDateTo(null);
    setDeviceStatus("alle");
    setBoelsDepot("");
    setBoelsNumberFrom("");
    setBoelsNumberTo("");
    setFullTextSearchMode("exakte Wortgruppe");
    setFullTextSearch("");
  };

  const CustomDateInput = React.forwardRef<HTMLDivElement, any>(({ value, onClick, placeholder }, ref) => (
    <div
      className="flex items-center justify-between w-full px-4 py-2 bg-gray-50/50 border border-transparent rounded-lg cursor-pointer group hover:bg-gray-100 transition-colors shadow-sm"
      onClick={onClick}
      ref={ref}
    >
      <span className={`text-sm ${value ? "text-gray-900 font-medium" : "text-gray-400 font-normal"}`}>
        {value || placeholder}
      </span>
      <Calendar size={18} className="text-orange-500 group-hover:scale-110 transition-transform" />
    </div>
  ));

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-8 py-6">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Returns</h2>
      </div>
      <hr className="border-gray-100" />

      {/* Form Content */}
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          
          {/* Übernommen, Herr */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-900">
              Übernommen, Herr:
            </label>
            <input
              type="text"
              placeholder="Type here"
              value={receivedBy}
              onChange={(e) => setReceivedBy(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50/50 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all placeholder:text-gray-300 shadow-sm"
            />
          </div>

          {/* Übernommen am */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-900">
              Übernommen am:
            </label>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <DatePicker
                  selected={receivedDateFrom}
                  onChange={(date) => setReceivedDateFrom(date)}
                  customInput={<CustomDateInput placeholder="Choose date" />}
                  placeholderText="Choose date"
                  dateFormat="dd.MM.yyyy"
                  wrapperClassName="w-full"
                />
              </div>
              <span className="text-sm font-medium text-gray-600">bis</span>
              <div className="flex-1">
                <DatePicker
                  selected={receivedDateTo}
                  onChange={(date) => setReceivedDateTo(date)}
                  customInput={<CustomDateInput placeholder="Choose date" />}
                  placeholderText="Choose date"
                  dateFormat="dd.MM.yyyy"
                  wrapperClassName="w-full"
                />
              </div>
            </div>
          </div>

          {/* Gerät-Zustand */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-900">
              Gerät-Zustand:
            </label>
            <CustomDropdown
              options={statusOptions}
              value={deviceStatus}
              onSelect={setDeviceStatus}
            />
          </div>

          {/* Boels Depot */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-900">
              Boels Depot:
            </label>
            <input
              type="text"
              placeholder="Type here"
              value={boelsDepot}
              onChange={(e) => setBoelsDepot(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50/50 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all placeholder:text-gray-300 shadow-sm"
            />
          </div>

          {/* Boels-Nummer */}
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-bold text-gray-900">
              Boels-Nummer:
            </label>
            <div className="flex items-center gap-3 w-full">
              <input
                type="text"
                placeholder="Type here"
                value={boelsNumberFrom}
                onChange={(e) => setBoelsNumberFrom(e.target.value)}
                className="flex-1 px-4 py-2 bg-gray-50/50 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all placeholder:text-gray-300 shadow-sm"
              />
              <span className="text-sm font-medium text-gray-600">bis</span>
              <input
                type="text"
                placeholder="Type here"
                value={boelsNumberTo}
                onChange={(e) => setBoelsNumberTo(e.target.value)}
                className="flex-1 px-4 py-2 bg-gray-50/50 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all placeholder:text-gray-300 shadow-sm"
              />
            </div>
          </div>

          {/* Volltextsuche */}
          <div className="space-y-2 md:col-span-2">
             <label className="block text-sm font-bold text-gray-900">
              Volltextsuche:
            </label>
            <div className="flex flex-col md:flex-row items-center gap-3">
               <div className="w-full md:w-1/2">
                  <CustomDropdown
                    options={searchModes}
                    value={fullTextSearchMode}
                    onSelect={setFullTextSearchMode}
                  />
               </div>
               <input
                type="text"
                placeholder="Type here"
                value={fullTextSearch}
                onChange={(e) => setFullTextSearch(e.target.value)}
                className="w-full md:w-1/2 px-4 py-2 bg-gray-50/50 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all placeholder:text-gray-300 shadow-sm"
              />
            </div>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={handleSearch}
            className="px-10 py-2.5 bg-[#FF7A2D] text-white font-bold rounded-lg hover:bg-[#E66D29] transition-all shadow-sm active:scale-95"
          >
            Suchen
          </button>
          <button
            onClick={handleReset}
            className="px-10 py-2.5 bg-white border border-gray-300 text-gray-600 font-bold rounded-lg hover:bg-gray-50 transition-all shadow-sm active:scale-95"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Return;
