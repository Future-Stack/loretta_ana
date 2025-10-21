// src/components/views components/spareParts/SparePartCard.tsx
import React from "react";
import type { SparePart } from "./types";

type SparePartCardProps = {
  part: SparePart;
  onClick: () => void;
};

const SparePartCard: React.FC<SparePartCardProps> = ({ part, onClick }) => {
  return (
    <div className="w-full"> {/* Ensure card container is full width */}
      <div
        onClick={onClick}
        className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md hover:border-orange-300 transition-all cursor-pointer bg-white w-full"
      >
        {/* Icon & Nummer */}
        <div className="flex items-center gap-2 min-w-[120px] flex-1">
          <img src={part.imageUrl} alt="" className="inline-block w-8 h-8" />
          <div>
            <div className="text-sm font-bold text-blue-600">{part.nummer}</div>
            <div className="text-xs text-gray-600">{part.bezeichnung}</div>
          </div>
        </div>

        {/* Type */}
        <div className="flex-1 text-center min-w-[150px]">
          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs font-medium">
            {part.type}
          </span>
        </div>

        {/* Lagerort / Lagerstand */}
        <div className="flex-1 text-center min-w-[120px]">
          <div className="text-sm font-semibold text-blue-600">{part.lagerort}</div>
          <div className="text-xs font-semibold text-green-600">{part.lagerstand}</div>
        </div>

        {/* Listenpreis / Einkaufspreis */}
        <div className="flex-1 text-right min-w-[120px]">
          <div className="text-sm font-semibold text-blue-600">{part.listenpreis}</div>
          <div className="text-sm font-semibold text-red-600">{part.einkaufspreis}</div>
        </div>
      </div>
    </div>
  );
};

export default SparePartCard;
