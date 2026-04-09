import React, { useState, useEffect, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle2, XCircle, RotateCcw, ChevronDown } from "lucide-react";
import type { RootState } from "@/redux/store";
import Pagination from "@/components/views components/machine/Pagination";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";

// Lazy load detail view
const ReturnProtocolDetail = lazy(() => import("./ReturnProtocolDetail"));

// ==========================================
// Types
// ==========================================
type ReturnStatus = 
  | "Nur Check !, Service fällig !" 
  | "Beschädigt !" 
  | "Vermietbereit !";

type ReturnItem = {
  id: string;
  date: string;
  number: string;
  description: string;
  location: string;
  counter: string;
  status: ReturnStatus;
  technician: string;
  isSuccess: boolean;
};

// ==========================================
// TableHeader Component
// ==========================================
const TableHeader: React.FC = () => (
  <div className="hidden xl:grid grid-cols-[50px_120px_120px_2fr_120px_100px_1fr_120px] gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-widest border-t border-gray-200">

    <div className="flex justify-center text-gray-400">#</div>
    <div>Datum</div>
    <div>Nummer</div>
    <div>Beschreibung</div>
    <div>Standort</div>
    <div>BH</div>
    <div>Gerät Status</div>
    <div className="text-right">Übernommen</div>
  </div>
);

// ==========================================
// ReturnRow Component (Reusable)
// ==========================================
type ReturnRowProps = {
  item: ReturnItem;
  onClick: () => void;
};

const ReturnRow: React.FC<ReturnRowProps> = ({ item, onClick }) => {
  const getStatusColor = (status: ReturnStatus) => {
    switch (status) {
      case "Vermietbereit !":
        return "text-green-500";
      case "Beschädigt !":
        return "text-red-500";
      case "Nur Check !, Service fällig !":
        return "text-blue-500";
      default:
        return "text-gray-600";
    }
  };

  return (
    <>
      {/* Desktop Layout (xl and above) */}
      <div 
        onClick={onClick}
        className="hidden xl:grid grid-cols-[50px_120px_120px_2fr_120px_100px_1fr_120px] gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50/80 transition-all text-[13px] cursor-pointer items-center group overflow-hidden"
      >
        <div className="flex justify-center flex-shrink-0">
          {item.isSuccess ? (
            <CheckCircle2 size={18} className="text-green-500" />
          ) : (
            <XCircle size={18} className="text-red-500" />
          )}
        </div>

        <div className="text-gray-900 font-bold truncate">
          <span className="text-gray-400 font-medium mr-1 uppercase text-[10px] tracking-wider">Am:</span>
          <span className="text-blue-600">{item.date}</span>
        </div>

        <div className="text-red-500 font-bold font-mono truncate">
          {item.number}
        </div>

        <div className="text-gray-700 font-bold truncate pr-4" title={item.description}>
          {item.description}
        </div>

        <div className="text-blue-600 font-bold truncate">
          {item.location}
        </div>

        <div className="text-gray-900 font-bold">
           <span className="text-gray-400 font-medium mr-1 uppercase text-[10px] tracking-wider">BH:</span>
           <span className="text-blue-600">{item.counter}</span>
        </div>

        <div className={`font-bold text-[11px] uppercase tracking-tighter truncate ${getStatusColor(item.status)}`}>
           <div className="leading-tight">Gerät Status: {item.status.split(',')[0]}</div>
           {item.status.includes(',') && <div className="text-[9px] opacity-70 mt-0.5">{item.status.split(',')[1].trim()}</div>}
        </div>

        <div className="text-right truncate">
           <span className="text-gray-400 uppercase text-[10px] font-medium mr-1 tracking-wider">Übernommen:</span>
           <span className="text-blue-500 font-bold">{item.technician}</span>
        </div>
      </div>


      {/* Card Layout (below xl) */}
      <div 
        onClick={onClick}
        className="xl:hidden p-5 border-b border-gray-100 hover:bg-gray-100/50 transition-colors cursor-pointer relative space-y-4"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${item.isSuccess ? 'bg-green-50' : 'bg-red-50'}`}>
              {item.isSuccess ? (
                <CheckCircle2 size={18} className="text-green-500" />
              ) : (
                <XCircle size={18} className="text-red-500" />
              )}
            </div>
            <div>
              <div className="text-red-500 font-bold font-mono text-sm leading-tight">
                {item.number}
              </div>
              <div className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
                Am <span className="text-blue-600 font-bold">{item.date}</span>
              </div>
            </div>
          </div>
          <div className={`text-right font-bold text-[10px] ${getStatusColor(item.status)}`}>
             {item.status}
          </div>
        </div>

        <div className="bg-gray-50/50 p-3 rounded-lg border border-gray-100">
          <p className="text-gray-900 text-sm font-bold line-clamp-2 italic">
            {item.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-4 gap-x-2 pt-2">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Standort</span>
            <span className="text-blue-600 font-bold text-xs truncate">{item.location}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Counter (BH)</span>
            <span className="text-blue-500 font-bold text-xs truncate">{item.counter}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Techniker</span>
            <span className="text-blue-600 font-bold text-xs">{item.technician}</span>
          </div>
          <div className="flex flex-col text-right justify-center">
             <span className="text-xs text-blue-500 font-medium hover:underline">Details →</span>
          </div>
        </div>
      </div>
    </>
  );
};

// ==========================================
// Main ReturnProtocolOverview Component
// ==========================================
const ReturnProtocolOverview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useSelector((state: RootState) => state.search.term);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const allReturns: ReturnItem[] = [
    {
      id: "133140121",
      date: "30.10.2025",
      number: "133140121",
      description: "JLG Toucan IOE Teleskop-Arbeitsbühne 10m AH, elektro",
      location: "Depot 397",
      counter: "150",
      status: "Nur Check !, Service fällig !",
      technician: "Helmuth",
      isSuccess: false
    },
    {
      id: "131910051",
      date: "30.10.2025",
      number: "131910051",
      description: "JCa BSC-I Bagger 8,5T-PowerTi1t",
      location: "Depot 397",
      counter: "560",
      status: "Beschädigt !",
      technician: "Helmuth",
      isSuccess: false
    },
    {
      id: "116070462",
      date: "30.10.2025",
      number: "116070462",
      description: "Atlas Copco QAS60 Stromerzeuger 60 kVA schallgedämpft",
      location: "Depot 397",
      counter: "250",
      status: "Beschädigt !",
      technician: "Helmuth",
      isSuccess: false
    },
    {
      id: "123456789",
      date: "23.10.2025",
      number: "123456789",
      description: "Dummy Maschine 5,5T Kurzheck - Kabine",
      location: "TD467-AT",
      counter: "520",
      status: "Vermietbereit !",
      technician: "Test",
      isSuccess: true
    },
    {
      id: "135100092",
      date: "22.10.2025",
      number: "135100092",
      description: "JLG 4013PS - Teleskop-stapler 4000kg 13m",
      location: "Depot XYZ",
      counter: "250",
      status: "Beschädigt !",
      technician: "Test User",
      isSuccess: false
    },
    {
      id: "133140122",
      date: "21.10.2025",
      number: "133140122",
      description: "JLG Toucan IOE Teleskop-Arbeitsbühne (Backup)",
      location: "Depot 397",
      counter: "155",
      status: "Vermietbereit !",
      technician: "Helmuth",
      isSuccess: true
    },
    {
      id: "131910052",
      date: "20.10.2025",
      number: "131910052",
      description: "JCa BSC-I Bagger 8,5T",
      location: "Depot 101",
      counter: "580",
      status: "Nur Check !, Service fällig !",
      technician: "Helmuth",
      isSuccess: false
    },
    {
      id: "116070463",
      date: "19.10.2025",
      number: "116070463",
      description: "Atlas Copco Generator QAS60",
      location: "Depot 397",
      counter: "260",
      status: "Vermietbereit !",
      technician: "Test User",
      isSuccess: true
    },
    {
      id: "123456790",
      date: "18.10.2025",
      number: "123456790",
      description: "Dummy Maschine 2.0",
      location: "TD467-AT",
      counter: "540",
      status: "Beschädigt !",
      technician: "Test",
      isSuccess: false
    },
    {
      id: "135100093",
      date: "17.10.2025",
      number: "135100093",
      description: "JLG Teleskop-stapler Professional",
      location: "Depot XYZ",
      counter: "270",
      status: "Vermietbereit !",
      technician: "Helmuth",
      isSuccess: true
    },
    {
      id: "133140123",
      date: "16.10.2025",
      number: "133140123",
      description: "JLG Toucan Extended",
      location: "Depot 397",
      counter: "160",
      status: "Nur Check !, Service fällig !",
      technician: "Helmuth",
      isSuccess: false
    },
    {
      id: "131910053",
      date: "15.10.2025",
      number: "131910053",
      description: "Standard Bagger 5T",
      location: "Depot 101",
      counter: "600",
      status: "Vermietbereit !",
      technician: "Test User",
      isSuccess: true
    },
    {
      id: "116070464",
      date: "14.10.2025",
      number: "116070464",
      description: "Mobile Power Station 40kVA",
      location: "Depot 397",
      counter: "270",
      status: "Beschädigt !",
      technician: "Test",
      isSuccess: false
    },
    {
      id: "123456791",
      date: "13.10.2025",
      number: "123456791",
      description: "Universal Lifter X1",
      location: "TD467-AT",
      counter: "560",
      status: "Vermietbereit !",
      technician: "Helmuth",
      isSuccess: true
    },
    {
      id: "135100094",
      date: "12.10.2025",
      number: "135100094",
      description: "Heavy Duty Stapler",
      location: "Depot XYZ",
      counter: "280",
      status: "Nur Check !, Service fällig !",
      technician: "Test User",
      isSuccess: false
    }
  ];

  // Routing logic
  const pathParts = location.pathname.split("/").filter(Boolean);
  const isOverview = location.pathname === "/return-protocol/return-overview";
  const detailId = 
    pathParts.length === 3 && pathParts[1] === "return-overview"
      ? pathParts[2]
      : null;

  const handleRowClick = (item: ReturnItem) => {
    navigate(`/return-protocol/return-overview/${item.id}`);
  };

  const handleBack = () => {
    navigate("/return-protocol/return-overview");
  };

  // Filter logic
  const filteredReturns = allReturns.filter(
    (item) =>
      item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.technician.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredReturns.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredReturns.slice(startIndex, endIndex);
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
      <Suspense fallback={<div className="text-center py-10 text-gray-500 animate-pulse font-medium">Loading...</div>}>
        {isOverview ? (
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Return Protocol Overview</h2>

               
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
                    {/* Blue Header */}
                    <div className="flex items-center justify-between px-4 py-2.5 bg-blue-600 text-white mb-2">
                      <span className="text-sm font-bold">- Aktionen -</span>
                    </div>

                    {/* Group: Ansicht */}
                    <div className="px-4 py-1.5 text-sm font-bold text-gray-900">Ansicht...</div>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">100 Zeilen anzeigen</button>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">300 Zeilen anzeigen</button>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">900 Zeilen anzeigen</button>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors mb-2">Alle auswählen</button>

                    {/* Group: Gewähltes Dokument */}
                    <div className="px-4 py-1.5 text-sm font-bold text-gray-900 border-t border-gray-50 mt-1 pt-2">Gewähltes Dokument...</div>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">Bearbeiten</button>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors mb-2">Duplizieren</button>

                    {/* Group: Gewählte Dokumente */}
                    <div className="px-4 py-1.5 text-sm font-bold text-gray-900 border-t border-gray-50 mt-1 pt-2">Gewählte Dokumente...</div>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors text-red-500 font-medium">Löschen</button>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors mb-2">Auswahl aufheben</button>

                    {/* Group: Massenbearbeitung */}
                    <div className="px-4 py-1.5 text-sm font-bold text-gray-900 border-t border-gray-50 mt-1 pt-2">Massenbearbeitung...</div>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors mb-2">Massenbearbeitung</button>

                    {/* Group: Drucken */}
                    <div className="px-4 py-1.5 text-sm font-bold text-gray-900 border-t border-gray-50 mt-1 pt-2">Drucken...</div>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">Liste drucken</button>
                    <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">Nur Auswahl drucken</button>
                  </div>
                </UniversalDropdown>
            </div>
            
            <hr className="border-gray-200 mb-8" />

            {/* Results List */}
            <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden mb-6 shadow-sm">
              <TableHeader />
              <div className="divide-y divide-gray-100">
                {getCurrentPageItems().length > 0 ? (
                  getCurrentPageItems().map((item) => (
                    <ReturnRow 
                      key={item.id} 
                      item={item} 
                      onClick={() => handleRowClick(item)}
                    />
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 px-4">
                    <div className="p-4 bg-gray-50 rounded-full mb-4">
                      <RotateCcw size={32} className="text-gray-300 animate-spin-slow" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 ml-7">No Data Found</h3>
                    <p className="text-gray-400 mt-2 font-medium">Try adjusting your search criteria</p>
                  </div>
                )}
              </div>
            </div>

            {/* Pagination Wrapper with mt-auto */}
            <div className="mt-auto pt-6">
              {filteredReturns.length > 0 && (
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
          <ReturnProtocolDetail id={detailId || ""} onBack={handleBack} />
        )}
      </Suspense>
    </div>
  );
};

export default ReturnProtocolOverview;
