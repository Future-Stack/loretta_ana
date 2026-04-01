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
type ExpenseRowProps = {
  item: ExpenseItem;
  onClick: () => void;
};

const ExpenseRow: React.FC<ExpenseRowProps> = ({ item, onClick }) => {
  const getStatusColor = (status: ExpenseStatus) => {
    switch (status) {
      case "Provisorisch Rep.!":
        return "text-yellow-600";
      case "Telefonisch erledigt!":
        return "text-blue-600";
      case "Repariert !":
        return "text-green-600";
      case "Gerät Austauschen !":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div 
      onClick={onClick}
      className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 hover:bg-gray-50 transition-colors text-sm cursor-pointer"
    >
      {/* Truck Icon */}
      <div className="flex-shrink-0">
        <Truck size={18} className="text-gray-700" />
      </div>

      {/* Date */}
      <div className="flex-shrink-0 w-20">
        <span className="text-gray-700">Am: </span>
        <span className="text-blue-600 font-medium">{item.date}</span>
      </div>

      {/* Number */}
      <div className="flex-shrink-0 w-24">
        <span className="text-red-600 font-medium">{item.number}</span>
      </div>

      {/* Description */}
      <div className="flex-1 min-w-0">
        <span className="text-gray-700">{item.description}</span>
      </div>

      {/* Location */}
      <div className="flex-shrink-0 w-28">
        <span className="text-blue-600 font-medium">{item.location}</span>
      </div>

      {/* Status Label */}
      <div className="flex-shrink-0">
        <span className="text-gray-700">Abgerechnet:</span>
      </div>

      {/* Status Value */}
      <div className="flex-shrink-0 w-40">
        <span className={`font-semibold ${getStatusColor(item.status)}`}>
          {item.status}
        </span>
      </div>

      {/* Bocsar */}
      <div className="flex-shrink-0 w-16">
        <span className="text-blue-600 font-medium cursor-pointer hover:underline">
          {item.bocsar}
        </span>
      </div>

      {/* Kst */}
      <div className="flex-shrink-0 w-20">
        <span className="text-gray-700">Kst.: </span>
        <span className="text-green-600 font-medium">{item.kst}</span>
      </div>
    </div>
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
            <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden mb-6 shadow-sm">
              {getCurrentPageItems().length > 0 ? (
                getCurrentPageItems().map((expense) => (
                  <ExpenseRow 
                    key={expense.id} 
                    item={expense} 
                    onClick={() => handleRowClick(expense)}
                  />
                ))
              ) : (
                <p className="text-gray-500 text-center py-6">
                  No fault logs found for "{searchTerm}"
                </p>
              )}
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