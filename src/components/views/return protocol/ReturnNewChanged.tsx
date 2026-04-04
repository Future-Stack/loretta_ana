import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ChevronDown, Folder } from "lucide-react";
import type { RootState } from "@/redux/store";
import Pagination from "@/components/views components/machine/Pagination";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";

// ==========================================
// Types
// ==========================================
interface ReturnCardData {
  id: string;
  title: string;
  count: number;
  newCount: number;
  type: string;
}

// ==========================================
// Mock Data (24 items for pagination demo)
// ==========================================
const MOCK_DATA: ReturnCardData[] = [
  { id: "1", title: "Heute", count: 5, newCount: 5, type: "today" },
  { id: "2", title: "Letzte 3 Tage", count: 5, newCount: 5, type: "3days" },
  { id: "3", title: "Letzte 7 Tage", count: 5, newCount: 5, type: "7days" },
  { id: "4", title: "Letzte 30 Tage", count: 5, newCount: 5, type: "30days" },
  { id: "5", title: "Heute", count: 12, newCount: 2, type: "today" },
  { id: "6", title: "Letzte 3 Tage", count: 8, newCount: 3, type: "3days" },
  { id: "7", title: "Letzte 7 Tage", count: 15, newCount: 1, type: "7days" },
  { id: "8", title: "Letzte 30 Tage", count: 20, newCount: 4, type: "30days" },
  { id: "9", title: "Heute", count: 3, newCount: 0, type: "today" },
  { id: "10", title: "Letzte 3 Tage", count: 6, newCount: 6, type: "3days" },
  { id: "11", title: "Letzte 7 Tage", count: 9, newCount: 2, type: "7days" },
  { id: "12", title: "Letzte 30 Tage", count: 14, newCount: 5, type: "30days" },
  { id: "13", title: "Heute", count: 7, newCount: 7, type: "today" },
  { id: "14", title: "Letzte 3 Tage", count: 4, newCount: 1, type: "3days" },
  { id: "15", title: "Letzte 7 Tage", count: 18, newCount: 0, type: "7days" },
  { id: "16", title: "Letzte 30 Tage", count: 25, newCount: 8, type: "30days" },
  { id: "17", title: "Heute", count: 2, newCount: 2, type: "today" },
  { id: "18", title: "Letzte 3 Tage", count: 10, newCount: 4, type: "3days" },
  { id: "19", title: "Letzte 7 Tage", count: 12, newCount: 3, type: "7days" },
  { id: "20", title: "Letzte 30 Tage", count: 30, newCount: 10, type: "30days" },
  { id: "21", title: "Heute", count: 1, newCount: 1, type: "today" },
  { id: "22", title: "Letzte 3 Tage", count: 5, newCount: 2, type: "3days" },
  { id: "23", title: "Letzte 7 Tage", count: 7, newCount: 4, type: "7days" },
  { id: "24", title: "Letzte 30 Tage", count: 11, newCount: 6, type: "30days" },
];

// ==========================================
// ReturnCard Component
// ==========================================
const ReturnCard: React.FC<{ data: ReturnCardData }> = ({ data }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-6 group">
      {/* Container Icon & Title */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Custom SVG for the bucket icon from the image */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900">
                <path d="M5 10c0-2 2-3 2-3h10s2 1 2 3v2c0 2-2 4-5 4H10c-3 0-5-2-5-4v-2z" />
                <path d="M7 7V5c0-1 1-2 2-2h6c1 0 2 1 2 2v2" />
                <path d="M8 7h8" />
            </svg>
        </div>
        <h3 className="text-[1.1rem] font-bold text-gray-800">
          {data.title} ({data.count})
        </h3>
      </div>

      {/* New Badge Sub-card */}
      <div className="flex">
        <div className="bg-orange-50 px-3 py-2 rounded-lg flex flex-col gap-1 min-w-[80px]">
          <Folder size={18} className="text-gray-700" strokeWidth={2} />
          <span className="text-orange-600 font-bold text-xs">
            Neu ({data.newCount})
          </span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// Main ReturnNewChanged Component
// ==========================================
const ReturnNewChanged: React.FC = () => {
  const searchTerm = useSelector((state: RootState) => state.search.term);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter logic
  const filteredData = MOCK_DATA.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-7 sm:p-8 border bg-white border-gray-300 rounded-md">
       <div className="flex-1 flex flex-col">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[1.75rem] font-bold text-gray-900">Return Protocol New/Changed</h2>
            
            <UniversalDropdown
                trigger={
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-gray-300 transition-all shadow-sm">
                    - Aktionen -
                    <ChevronDown size={16} />
                </button>
                }
                align="right"
                className="bg-white border-gray-100 !py-0 !shadow-2xl !rounded-xl overflow-hidden"
            >
                <div className="flex flex-col min-w-[260px] pb-2">
                    <div className="flex items-center justify-between px-4 py-2.5 bg-blue-600 text-white mb-2">
                        <span className="text-sm font-bold">- Aktionen -</span>
                    </div>

                    <div className="px-4 py-1.5 text-sm font-bold text-gray-900">Ansicht...</div>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">Details anzeigen</button>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">Liste exportieren</button>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors mb-2">Alle auswählen</button>

                    <div className="px-4 py-1.5 text-sm font-bold text-gray-900 border-t border-gray-50 mt-1 pt-2">Drucken...</div>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">PDF exportieren</button>
                </div>
            </UniversalDropdown>
          </div>

          <hr className="border-gray-200 mb-8" />

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {getCurrentPageItems().length > 0 ? (
                getCurrentPageItems().map((item) => (
                    <ReturnCard key={item.id} data={item} />
                ))
            ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 px-4">
                    <h3 className="text-2xl font-bold text-gray-400">Keine Daten gefunden</h3>
                </div>
            )}
          </div>

          {/* Pagination Wrapper */}
          <div className="mt-auto pt-6">
            {filteredData.length > 0 && (
                <div className="w-full flex justify-center">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
          </div>
       </div>
    </div>
  );
};

export default ReturnNewChanged;
