import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

const FuelList: React.FC = () => {
  const [deviceNumberFrom, setDeviceNumberFrom] = useState("");
  const [deviceNumberTo, setDeviceNumberTo] = useState("");
  const [tankDateFrom, setTankDateFrom] = useState<Date | null>(null);
  const [tankDateTo, setTankDateTo] = useState<Date | null>(null);
  const [litersFrom, setLitersFrom] = useState("1");
  const [litersTo, setLitersTo] = useState("1000");
  const [boelsDepot, setBoelsDepot] = useState("");

  const handleSearch = () => {
    console.log("Searching...", {
      deviceNumberFrom,
      deviceNumberTo,
      tankDateFrom,
      tankDateTo,
      litersFrom,
      litersTo,
      boelsDepot,
    });
  };

  const handleReset = () => {
    setDeviceNumberFrom("");
    setDeviceNumberTo("");
    setTankDateFrom(null);
    setTankDateTo(null);
    setLitersFrom("1");
    setLitersTo("1000");
    setBoelsDepot("");
  };

  const CustomDateInput = React.forwardRef<HTMLDivElement, any>(({ value, onClick, placeholder }, ref) => (
    <div
      className="flex items-center justify-between w-full px-4 py-2 bg-gray-50/50 border border-transparent rounded-lg cursor-pointer group hover:bg-gray-100 transition-colors"
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
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Fuel list</h2>
      </div>

      <hr className="border-gray-100" />

      {/* Form Content */}
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {/* Gerätenummer */}
          <div className="space-y-2">
            <label className="block text-[13px] font-medium text-gray-400 uppercase tracking-widest mb-1">
              Gerätenummer:
            </label>

            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Type here"
                value={deviceNumberFrom}
                onChange={(e) => setDeviceNumberFrom(e.target.value)}
                className="flex-1 px-4 py-2 bg-gray-50/50 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all placeholder:text-gray-300"
              />
              <span className="text-sm font-medium text-gray-600">bis</span>
              <input
                type="text"
                placeholder="Type here"
                value={deviceNumberTo}
                onChange={(e) => setDeviceNumberTo(e.target.value)}
                className="flex-1 px-4 py-2 bg-gray-50/50 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Tankdatum */}
          <div className="space-y-2">
            <label className="block text-[13px] font-medium text-gray-400 uppercase tracking-widest mb-1">
              Tankdatum:
            </label>

            <div className="flex items-center gap-3">
              <div className="flex-1">
                <DatePicker
                  selected={tankDateFrom}
                  onChange={(date) => setTankDateFrom(date)}
                  customInput={<CustomDateInput placeholder="Choose date" />}
                  placeholderText="Choose date"
                  dateFormat="dd.MM.yyyy"
                  wrapperClassName="w-full"
                />
              </div>
              <span className="text-sm font-medium text-gray-600">bis</span>
              <div className="flex-1">
                <DatePicker
                  selected={tankDateTo}
                  onChange={(date) => setTankDateTo(date)}
                  customInput={<CustomDateInput placeholder="Choose date" />}
                  placeholderText="Choose date"
                  dateFormat="dd.MM.yyyy"
                  wrapperClassName="w-full"
                />
              </div>
            </div>
          </div>

          {/* Getankt Liter */}
          <div className="space-y-2">
            <label className="block text-[13px] font-medium text-gray-400 uppercase tracking-widest mb-1">
              Getankt Liter:
            </label>

            <div className="flex items-center gap-3">
              <input
                type="text"
                value={litersFrom}
                onChange={(e) => setLitersFrom(e.target.value)}
                className="flex-1 px-4 py-2 bg-gray-50/50 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all font-medium"
              />
              <span className="text-sm font-medium text-gray-600">bis</span>
              <input
                type="text"
                value={litersTo}
                onChange={(e) => setLitersTo(e.target.value)}
                className="flex-1 px-4 py-2 bg-gray-50/50 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all font-medium"
              />
            </div>
          </div>

          {/* Boels Depot */}
          <div className="space-y-2">
            <label className="block text-[13px] font-medium text-gray-400 uppercase tracking-widest mb-1">
              Boels Depot:
            </label>

            <input
              type="text"
              placeholder="Type here"
              value={boelsDepot}
              onChange={(e) => setBoelsDepot(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50/50 border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:bg-white transition-all placeholder:text-gray-300"
            />
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

export default FuelList;
