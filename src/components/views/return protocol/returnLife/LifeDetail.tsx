import React, { useState } from "react";
import { XCircle, ChevronDown } from "lucide-react";
import Pagination from "@/components/views components/machine/Pagination";

interface LifeDetailProps {
  folderData: {
    id: string;
    date: string;
    count: number;
  };
  onBack: () => void;
  onItemClick: (id: string) => void;
}

interface DetailItem {
  id: string;
  statusIcon: "error" | "success";
  date: string;
  machineId: string;
  description: string;
  depot: string;
  bh: string;
  deviceStatus: string;
  technician: string;
}

const LifeDetail: React.FC<LifeDetailProps> = ({ folderData, onBack, onItemClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Dummy Detail Data
  const generateDetailData = (): DetailItem[] => {
    const data: DetailItem[] = [];
    for (let i = 1; i <= 35; i++) {
      data.push({
        id: i.toString(),
        statusIcon: i % 3 === 0 ? "success" : "error", // mostly errors as in image
        date: "22.10.2025",
        machineId: (135100090 + i).toString(),
        description: "JLG 4013PS - Teleskop-stapler 4000kg 13m",
        depot: "Depot XYZ",
        bh: (250 + i).toString(),
        deviceStatus: "Beschädigt !",
        technician: "Test User",
      });
    }
    return data;
  };

  const allItems = generateDetailData();
  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allItems.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-500">
      {/* Top Navigation Row */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-orange-600 transition-all group"
        >
          <img src="/back.svg" alt="Back" className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <button 
          onClick={onBack}
          className="text-red-500 font-bold hover:text-red-600 transition-colors text-sm"
        >
          Zuklappen
        </button>
      </div>

      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        {/* Choose Folder Selector */}
        <div className="mb-8 max-w-2xl">
          <label className="block text-sm font-bold text-gray-900 mb-3">Choose Folder:</label>
          <div className="relative group">
            <div className="w-full flex items-center justify-between px-5 py-3 bg-gray-50/50 border border-gray-100 rounded-xl cursor-pointer hover:bg-gray-100 transition-all shadow-sm">
                <span className="text-sm font-medium text-gray-700">{folderData.date} ({folderData.count})</span>
                <ChevronDown size={18} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
          </div>
        </div>

        {/* Results Table/List Content */}
        <div className="bg-gray-50/50 rounded-2xl border border-gray-100 overflow-hidden shadow-inner">
          {/* Table Header */}
          <div className="grid grid-cols-[1fr_1fr_2.5fr_1.5fr_1.5fr_1fr] gap-4 px-8 py-5 text-[11px] font-bold text-gray-400 border-b border-gray-100 uppercase tracking-widest border-t border-gray-200 bg-gray-50/50">
            <div>Status</div>
            <div>Datum</div>
            <div>Maschine / Beschreibung</div>
            <div className="flex justify-center">WERT</div>
            <div>Techniker / Depot</div>
            <div className="text-right">Aktion</div>
          </div>


          {/* List Items */}
          <div className="divide-y divide-gray-100 p-4 space-y-3">
            {getCurrentPageItems().map((item) => (
              <div 
                key={item.id}
                onClick={() => onItemClick(item.machineId)}
                className="grid grid-cols-[1fr_1fr_2.5fr_1.5fr_1.5fr_1fr] gap-4 bg-white border border-orange-200/50 rounded-xl px-6 py-5 items-center hover:shadow-md transition-shadow cursor-pointer group"
              >
                {/* Status Column */}
                <div className="flex items-center gap-3">
                   {item.statusIcon === "error" ? (
                      <XCircle size={24} className="text-red-500 fill-red-500/10" strokeWidth={2.5} />
                   ) : (
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                         <div className="w-2.5 h-2.5 rounded-full bg-white" />
                      </div>
                   )}
                   <span className="text-xs text-gray-500 font-medium">Am: <span className="text-blue-500 font-bold ml-1">{item.date}</span></span>
                </div>

                {/* Datum (Hidden in image but added for alignment to header) */}
                <div className="text-red-500 font-bold text-[13px] font-mono tracking-tight">
                    {item.machineId}
                </div>


                {/* Maschine / Beschreibung */}
                <div className="text-gray-700 text-[13px] font-bold leading-relaxed pr-4">
                  {item.description}
                </div>


                {/* WERT Column (Depot + BH) */}
                <div className="flex items-center justify-center gap-6 border-x border-gray-100 px-4">
                  <span className="text-blue-500 font-bold text-[13px] hover:underline transition-all">{item.depot}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">BH:</span>
                    <span className="text-blue-500 font-bold text-[13px]">{item.bh}</span>
                  </div>
                </div>


                {/* Techniker / Depot Column (Device Status + Technician) */}
                <div className="flex flex-col gap-1 pl-4 border-r border-gray-100">
                   <div className="text-[11px] text-gray-900 font-medium whitespace-nowrap">Gerät Status: <span className="text-red-500 font-bold ml-1">{item.deviceStatus}</span></div>
                   <div className="text-[11px] text-gray-900 font-medium whitespace-nowrap">Übernommen: <span className="text-blue-500 font-bold ml-1 cursor-pointer hover:underline">{item.technician}</span></div>
                </div>


                {/* Aktion Column */}
                <div className="text-right">
                   {/* Placeholder for Action icon if any */}
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer / Final Actions if any */}
        </div>

        {/* Pagination Wrapper */}
        <div className="mt-8 flex justify-center w-full">
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
      </div>
    </div>
  );
};

export default LifeDetail;
