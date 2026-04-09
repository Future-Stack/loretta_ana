import React, { useState, useEffect, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { RotateCcw, ChevronDown } from "lucide-react";
import type { RootState } from "@/redux/store";
import Pagination from "@/components/views components/machine/Pagination";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";

// Lazy load detail view
const TankLogDetail = lazy(() => import("./TankLogDetail"));

// ==========================================
// Types
// ==========================================
type TankLogItem = {
  id: string;
  date: string;
  number: string;
  description: string;
  liter: string;
  refueledBy: string;
};

// ==========================================
// TableHeader Component
// ==========================================
const TableHeader: React.FC = () => (
  <div className="hidden xl:grid grid-cols-[1fr_1fr_2fr_1fr_1fr] gap-4 px-10 py-5 bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 border-t border-gray-200 uppercase tracking-widest">

    <div>Datum</div>
    <div>Nummer</div>
    <div>Beschreibung</div>
    <div className="text-center">Liter</div>
    <div className="text-right">Übernommen</div>
  </div>
);

// ==========================================
// TankLogRow Component (Reusable)
// ==========================================
type TankLogRowProps = {
  item: TankLogItem;
  onClick: () => void;
};

const TankLogRow: React.FC<TankLogRowProps> = ({ item, onClick }) => {
  return (
    <>
      {/* Desktop Layout */}
      <div 
        onClick={onClick}
        className="hidden xl:grid grid-cols-[1fr_1fr_2fr_1fr_1fr] gap-4 px-10 py-5 border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer items-center text-sm font-medium"
      >
        <div className="text-gray-900 whitespace-nowrap">
          <span className="text-gray-400 font-medium mr-2">Am:</span>
          <span className="text-blue-600 font-bold tracking-tight">{item.date}</span>
        </div>

        <div className="text-red-500 font-bold font-mono tracking-tight">
          {item.number}
        </div>

        <div className="text-gray-700 truncate" title={item.description}>
          {item.description}
        </div>

        <div className="text-center">
           <span className="text-gray-400 mr-2 uppercase text-[10px] font-bold tracking-wider">Liter:</span>
           <span className="text-blue-600 font-bold">{item.liter}</span>
        </div>

        <div className="text-right whitespace-nowrap">
           <span className="text-gray-400 mr-2 uppercase text-[10px] font-bold tracking-wider">Getankt:</span>
           <span className="text-blue-500 font-bold">{item.refueledBy}</span>
        </div>
      </div>

      {/* Card Layout (below xl) */}
      <div 
        onClick={onClick}
        className="xl:hidden p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer space-y-4"
      >
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
             <div className="text-red-500 font-bold font-mono text-base tracking-tight">
                {item.number}
             </div>
             <div className="text-[11px] text-gray-500 font-medium uppercase tracking-widest">
                Übernommen am <span className="text-blue-600 font-bold">{item.date}</span>
             </div>
          </div>
          <div className="bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 flex flex-col items-center">
             <span className="text-[9px] text-blue-400 font-bold uppercase">Liter</span>
             <span className="text-sm font-bold text-blue-600">{item.liter}</span>
          </div>
        </div>

        <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-100">
          <p className="text-gray-900 text-sm font-semibold leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
               {item.refueledBy.charAt(0)}
            </div>
            <div className="flex flex-col">
               <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Refueled By</span>
               <span className="text-xs font-bold text-blue-500">{item.refueledBy}</span>
            </div>
          </div>
          <span className="text-xs text-blue-500 font-medium underline">View Details →</span>
        </div>
      </div>
    </>
  );
};

// ==========================================
// Main TankLog Component
// ==========================================
const TankLog: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useSelector((state: RootState) => state.search.term);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const mockData: TankLogItem[] = Array.from({ length: 25 }, (_, i) => ({
    id: `${135100092 + i}`,
    date: "22.10.2025",
    number: `${135100092 + i}`,
    description: "JLG 4013PS - Teleskop-stapler 4000kg 13m",
    liter: "45",
    refueledBy: "Test User"
  }));

  // Routing logic
  const pathParts = location.pathname.split("/").filter(Boolean);
  const isOverview = location.pathname === "/return-protocol/return-tank-log";
  const detailId = 
    pathParts.length === 3 && pathParts[1] === "return-tank-log"
      ? pathParts[2]
      : null;

  const handleRowClick = (item: TankLogItem) => {
    navigate(`/return-protocol/return-tank-log/${item.id}`);
  };

  const handleBack = () => {
    navigate("/return-protocol/return-tank-log");
  };

  // Filter logic
  const filteredItems = mockData.filter(
    (item) =>
      item.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.refueledBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-8 sm:p-10 border bg-white border-gray-300 rounded-md shadow-sm">
      <Suspense fallback={<div className="text-center py-24 text-gray-400 animate-pulse font-bold text-lg underline">Loading Tank Log...</div>}>
        {isOverview ? (
          <div className="flex-1 flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Return Tank Log Overview</h2>

               
               <UniversalDropdown
                  trigger={
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-500 hover:border-gray-400 hover:text-gray-900 transition-all shadow-sm">
                      - Aktionen -
                      <ChevronDown size={18} />
                    </button>
                  }
                  align="right"
                  className="bg-white border-gray-100 !py-0 !shadow-2xl !rounded-2xl overflow-hidden"
                >
                  <div className="flex flex-col min-w-[280px] pb-3 bg-white">
                    <div className="flex items-center justify-between px-5 py-3.5 bg-blue-600 text-white shadow-md">
                      <span className="text-sm font-extrabold uppercase tracking-widest">- Aktionen -</span>
                    </div>

                    <div className="px-5 py-2 mt-4 text-[11px] font-extrabold text-gray-400 uppercase tracking-widest">Ansicht...</div>
                    <button className="px-10 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">100 Zeilen anzeigen</button>
                    <button className="px-10 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 w-full text-left transition-colors font-mono">Alle auswählen</button>

                    <div className="px-5 py-2 mt-4 text-[11px] font-extrabold text-gray-400 uppercase tracking-widest border-t border-gray-50 pt-4">Gewähltes Dokument...</div>
                    <button className="px-10 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">Bearbeiten</button>
                    <button className="px-10 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">Duplizieren</button>

                    <div className="px-5 py-2 mt-4 text-[11px] font-extrabold text-gray-400 uppercase tracking-widest border-t border-gray-50 pt-4">Drucken...</div>
                    <button className="px-10 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">Liste drucken</button>
                  </div>
                </UniversalDropdown>
            </div>
            
            <hr className="border-gray-200 mb-10" />

            {/* Results Table */}
            <div className={`w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg mb-8 ${filteredItems.length === 0 ? 'flex-1' : ''}`}>
              <TableHeader />
              <div className="divide-y divide-gray-100 h-full">
                {getCurrentPageItems().length > 0 ? (
                  getCurrentPageItems().map((item) => (
                    <TankLogRow 
                      key={item.id} 
                      item={item} 
                      onClick={() => handleRowClick(item)}
                    />
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-32 px-4 h-full">
                    <div className="p-6 bg-gray-50 rounded-full mb-6 ring-8 ring-gray-50/50">
                      <RotateCcw size={48} className="text-gray-300 animate-spin-slow" />
                    </div>
                    <h3 className="text-5xl font-black text-gray-900 tracking-tighter italic">No Data Found</h3>
                    <p className="text-gray-400 mt-4 font-bold text-lg">Try adjusting your search criteria</p>
                  </div>
                )}
              </div>
            </div>

            {/* Pagination Component */}
            <div className="mt-auto py-8">
              {filteredItems.length > 0 && (
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
        ) : (
          <div className="flex-1 overflow-visible">
             <TankLogDetail id={detailId || ""} onBack={handleBack} />
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default TankLog;
