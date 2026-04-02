import React, { useState, useEffect, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { Truck } from "lucide-react";
import type { RootState } from "@/redux/store";
import Pagination from "@/components/views components/machine/Pagination";

// Lazy load detail view
const FaultLogDetail = lazy(() => import("./FaultLogDetail"));

// ==========================================
// Types
// ==========================================
type ExpenseStatus = 
  | "Provisorisch Rep.!" 
  | "Telefonisch erledigt!" 
  | "Repariert !" 
  | "Gerät Austauschen !";

type ExpenseItem = {
  id: string;
  date: string;
  number: string;
  description: string;
  location: string;
  status: ExpenseStatus;
  bocsar: string;
  kst: string;
};

// ==========================================
// ExpenseRow Component (Reusable)
// ==========================================
// ==========================================
// TableHeader Component
// ==========================================
const TableHeader: React.FC = () => (
  <div className="hidden xl:grid grid-cols-[50px_repeat(6,1fr)_100px] gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
    <div className="flex justify-center text-gray-400">#</div>
    <div>Datum</div>
    <div>Nummer</div>
    <div>Beschreibung</div>
    <div>Standort</div>
    <div>Status</div>
    <div>Bocsar</div>
    <div className="text-right">Kst.</div>
  </div>
);

// ==========================================
// ExpenseRow Component (Reusable)
// ==========================================
type ExpenseRowProps = {
  item: ExpenseItem;
  onClick: () => void;
};

const ExpenseRow: React.FC<ExpenseRowProps> = ({ item, onClick }) => {
  const getStatusStyles = (status: ExpenseStatus) => {
    switch (status) {
      case "Provisorisch Rep.!":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Telefonisch erledigt!":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Repariert !":
        return "bg-green-100 text-green-700 border-green-200";
      case "Gerät Austauschen !":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <>
      {/* Desktop Layout (xl and above) */}
      <div 
        onClick={onClick}
        className="hidden xl:grid grid-cols-[50px_repeat(6,1fr)_100px] gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50/80 transition-all text-sm cursor-pointer items-center group overflow-hidden"
      >
        <div className="flex justify-center flex-shrink-0">
          <Truck size={18} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
        </div>

        <div className="text-gray-600 font-medium truncate">
          {item.date}
        </div>

        <div className="text-red-500 font-bold font-mono truncate">
          {item.number}
        </div>

        <div className="text-gray-700 truncate pr-4" title={item.description}>
          {item.description}
        </div>

        <div className="text-blue-600 font-semibold truncate">
          {item.location}
        </div>

        <div className="truncate">
          <span className={`px-3 py-1 rounded-full text-[11px] font-bold border inline-block whitespace-nowrap ${getStatusStyles(item.status)}`}>
            {item.status}
          </span>
        </div>

        <div className="text-blue-500 hover:underline cursor-pointer font-medium text-xs truncate">
          {item.bocsar}
        </div>

        <div className="text-green-600 font-bold font-mono text-xs text-right">
          {item.kst || "-"}
        </div>
      </div>

      {/* Card Layout (below xl) */}
      <div 
        onClick={onClick}
        className="xl:hidden p-5 border-b border-gray-100 hover:bg-gray-100/50 transition-colors cursor-pointer relative space-y-4"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-50 rounded-lg">
              <Truck size={20} className="text-orange-600" />
            </div>
            <div>
              <div className="text-red-500 font-bold font-mono text-sm leading-tight">
                {item.number}
              </div>
              <div className="text-[11px] text-gray-500 font-medium uppercase tracking-tight">
                Am {item.date}
              </div>
            </div>
          </div>
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border shadow-sm ${getStatusStyles(item.status)}`}>
            {item.status}
          </span>
        </div>

        <div className="bg-gray-50/50 p-3 rounded-lg border border-gray-100">
          <p className="text-gray-700 text-sm font-medium line-clamp-3">
            {item.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-4 gap-x-2 pt-2">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Standort</span>
            <span className="text-blue-600 font-bold text-xs truncate">{item.location}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Bocsar</span>
            <span className="text-blue-500 font-bold text-xs truncate">{item.bocsar}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Kostenstelle</span>
            <span className="text-green-600 font-bold text-xs">{item.kst || "-"}</span>
          </div>
          <div className="flex flex-col text-right justify-center">
             <span className="text-xs text-blue-500 font-medium hover:underline">Verfollständigen →</span>
          </div>
        </div>
      </div>
    </>
  );
};

// ==========================================
// Main FaultLogOverview Component
// ==========================================
const FaultLogOverview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useSelector((state: RootState) => state.search.term);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const allExpenses: ExpenseItem[] = [
    {
      id: "1",
      date: "02.06.2025",
      number: "116070462",
      description: "GPS ausgebaut",
      location: "1225 Wien",
      status: "Provisorisch Rep.!",
      bocsar: "Bocsar",
      kst: ""
    },
    {
      id: "2",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Telefonisch erledigt!",
      bocsar: "Bocsar",
      kst: "kd"
    },
    {
      id: "3",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "4",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "5",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Gerät Austauschen !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "6",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "7",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "8",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "9",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "10",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "11",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "12",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Gerät Austauschen !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "13",
      date: "02.06.2025",
      number: "116070462",
      description: "GPS ausgebaut",
      location: "1225 Wien",
      status: "Provisorisch Rep.!",
      bocsar: "Bocsar",
      kst: ""
    },
    {
      id: "14",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Gerät Austauschen !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "15",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Gerät Austauschen !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "16",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Gerät Austauschen !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "17",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Gerät Austauschen !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "18",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Gerät Austauschen !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "19",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "20",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    },
    {
      id: "21",
      date: "20.09.2022",
      number: "116070462",
      description: "Batterie erneuert, statt 110A 95 A",
      location: "2263 Dürnkrut",
      status: "Repariert !",
      bocsar: "Bocsar",
      kst: "int"
    }
  ];

  // Routing logic
  const pathParts = location.pathname.split("/").filter(Boolean);
  const isOverview = location.pathname === "/fault-log/faultlog-overview";
  const detailId = 
    pathParts.length === 3 && pathParts[1] === "faultlog-overview"
      ? pathParts[2]
      : null;

  const handleRowClick = (item: ExpenseItem) => {
    navigate(`/fault-log/faultlog-overview/${item.id}`);
  };

  const handleBack = () => {
    navigate("/fault-log/faultlog-overview");
  };

  // Filter logic
  const filteredExpenses = allExpenses.filter(
    (item) =>
      item.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.bocsar.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.kst.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredExpenses.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredExpenses.slice(startIndex, endIndex);
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
      <Suspense fallback={<div className="text-center py-10 text-gray-500 animate-pulse">Loading...</div>}>
        {isOverview ? (
          <>
            <h2 className="text-[1.75rem] font-bold mb-6">Fault Log Record</h2>
            <hr className="border-gray-300 mb-6" />

            {/* Results List */}
            <div className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden mb-6 shadow-sm">
              <TableHeader />
              <div className="divide-y divide-gray-100">
                {getCurrentPageItems().length > 0 ? (
                  getCurrentPageItems().map((expense) => (
                    <ExpenseRow 
                      key={expense.id} 
                      item={expense} 
                      onClick={() => handleRowClick(expense)}
                    />
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 px-4">
                    <div className="p-4 bg-gray-50 rounded-full mb-4">
                      <Truck size={32} className="text-gray-300" />
                    </div>
                    <p className="text-gray-500 font-medium text-center">
                      No fault logs found for <span className="text-gray-900">"{searchTerm}"</span>
                    </p>
                    <p className="text-sm text-gray-400 mt-1">
                      Try adjusting your search terms or filters.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Pagination */}
            {filteredExpenses.length > 0 && (
              <div className="w-full flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        ) : (
          <FaultLogDetail id={detailId || ""} onBack={handleBack} />
        )}
      </Suspense>
    </div>
  );
};

export default FaultLogOverview;