import React from "react";
import { Link as LinkIcon } from "lucide-react";

// Types
export interface ProtocolCardItem {
  id: string;
  boelsNr: string;
  mvNr: string;
  deliveryType: string;
  technician: string;
  date: string;
  status: "vorbereitet" | "in_progress" | "completed";
}

// ProtocolCard Component
const ProtocolCard: React.FC<{
  item: ProtocolCardItem;
  onClick: () => void;
}> = ({ item, onClick }) => {


    
  const getStatusColor = (status: string) => {
    switch (status) {
      case "vorbereitet":
        return "bg-green-100 text-green-700";
      case "in_progress":
        return "bg-yellow-100 text-yellow-700";
      case "completed":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const statusLabel = {
    vorbereitet: "Vorbereitet!",
    in_progress: "In Progress",
    completed: "Completed",
  };

  return (
    <>
      {/* Desktop Layout (sm and above) */}
      <div
        onClick={onClick}
        className="cursor-pointer hidden sm:grid grid-cols-5 items-center gap-4 px-4 py-3 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors"
      >
        {/* Section 1: Icon + Boels NR / MV Nr */}
        <div className="flex items-center gap-3">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23FF8C00'/%3E%3C/svg%3E"
            alt=""
            className="w-10 h-10 rounded flex-shrink-0"
          />
          <div>
            <div className="text-sm font-bold text-gray-900">{item.boelsNr}</div>
            <div className="text-xs text-gray-500">MV Nr: {item.mvNr}</div>
          </div>
        </div>

        {/* Section 2: Delivery Type */}
        <div>
          <span className="text-red-600 font-semibold text-sm">
            {item.deliveryType}
          </span>
        </div>

        {/* Section 3: Techniker / Date */}
        <div>
          <div className="text-sm font-semibold text-gray-900">{item.technician}</div>
          <div className="text-xs text-gray-500">am: {item.date}</div>
        </div>

        {/* Section 4: Status */}
        <div>
          <span
            className={`px-3 py-1 rounded text-xs font-semibold inline-block ${getStatusColor(
              item.status
            )}`}
          >
            {statusLabel[item.status as keyof typeof statusLabel]}
          </span>
        </div>

        {/* Section 5: Link */}
        <div className="flex justify-center">
          <button className="p-2 text-blue-500 hover:text-blue-700 transition-colors">
            <LinkIcon size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Layout (below sm) */}
      <div
        onClick={onClick}
        className="sm:hidden p-3 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-colors cursor-pointer relative"
      >
        {/* Status Badge - Top Right */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-2 py-1 rounded text-xs font-semibold whitespace-nowrap ${getStatusColor(
              item.status
            )}`}
          >
            {statusLabel[item.status as keyof typeof statusLabel]}
          </span>
        </div>

        {/* Header Row: Equipment + Boels Nr */}
        <div className="flex items-center gap-2 mb-2">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23FF8C00'/%3E%3C/svg%3E"
            alt=""
            className="w-8 h-8 rounded flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-gray-900 truncate">
              {item.boelsNr}
            </div>
            <div className="text-xs text-gray-600 truncate">
              MV Nr: {item.mvNr}
            </div>
          </div>
          <button className="p-1.5 text-blue-500 hover:text-blue-700 transition-colors flex-shrink-0 -mr-1">
            <LinkIcon size={16} />
          </button>
        </div>

        {/* Delivery Type */}
        <div className="text-red-600 font-medium text-sm mb-2">
          {item.deliveryType}
        </div>

        {/* Techniker / Date */}
        <div className="text-xs">
          <div className="font-semibold text-gray-900">{item.technician}</div>
          <div className="text-gray-600">am: {item.date}</div>
        </div>
      </div>
    </>
  );
};

export default ProtocolCard;