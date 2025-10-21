// src/components/views components/spareParts/SparePartDetail/SparePartDetailInfo.tsx
import React from "react";
import type { SparePart } from "../types";

const SparePartDetailInfo: React.FC<{ part: SparePart }> = ({ part }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[350px]">
        {/* LEFT: Image (occupies full height, 1/3 width) */}
        <div className="flex justify-center items-center bg-white rounded-lg shadow-sm p-4">
          <img
            src="/spareP.png"
            alt={part.bezeichnung}
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* RIGHT: 2/3 width (split vertically into top + bottom) */}
        <div className="col-span-2 flex flex-col justify-between">
          {/* TOP: Product Info (half height) */}
          <div className="bg-white rounded-lg shadow-sm p-4 flex-1 mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {part.bezeichnung}
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Produktgruppe:</span>
                <span className="font-semibold text-right">
                  {part.produktgruppe || part.type}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Et-Lieferanten Nr.:</span>
                <span className="text-blue-600 font-semibold text-right">
                  {part.etLieferanten || part.nummer}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Lieferant:</span>
                <span className="font-semibold text-right">
                  {part.lieferant || part.lagerort}
                </span>
              </div>
            </div>
          </div>

          {/* BOTTOM: Pricing + Stock (half height) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            {/* Stock Info */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Herstellernummer:</span>
                  <span className="font-semibold text-right">
                    {part.herstellernummer || part.nummer}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lagerort:</span>
                  <span className="text-blue-600 font-semibold text-right">
                    {part.lagerort}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Lagerstand:</span>
                  <span className="text-green-600 font-bold text-lg text-right">
                    {part.lagerstand}
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing Info */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="text-sm space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Listenpreis pro Stk.:</span>
                  <span className="text-blue-600 font-bold text-lg">
                    {part.listenpreis}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Einkaufspreis pro Stk.:</span>
                  <span className="text-red-600 font-bold text-lg">
                    {part.einkaufspreis}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="text-xs text-orange-500 mt-4 text-right">
        Powered by Boels-Technikweb ®
      </div>
    </div>
  );
};

export default SparePartDetailInfo;
