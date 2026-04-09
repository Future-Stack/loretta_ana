import React from "react";
import { RotateCcw } from "lucide-react";

const ProtocolTab: React.FC = () => {
  const detailData = {
    boelsNumber: "133140121",
    description: "JLG Toucan IOE Teleskop-Arbeitsbühne 10m AH, elektro",
    serialNumber: "A300036802",
    subGroup: "13314",
    meterReadingOut: "466 Bh",
    
    // Left Card
    depot: "Depot 397",
    takenOn: "30.10.2025 um: 12:25",
    returnBy: "Kunde",
    meterReadingRec: "150 Std",
    condition: "Nur Check !, Service fällig !",
    
    // Right Card
    lastMvNumber: "306",
    keysReturned: "Ja, 2 Stk",
    fuelStatus: "Vollgetankt !",
    adBlueStatus: "Vollgetankt !",
    batteryLevel: "50%",
    takenByHerr: "Test_Helmut",
    technician: "HelmutH"
  };

  return (
    <div className="space-y-6">
      {/* Upper Info Section */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[13px] font-medium text-gray-400">Boels-Nummer:</span>
            <span className="text-[13px] font-bold text-red-500">{detailData.boelsNumber}</span>
            <span className="text-[13px] font-bold text-blue-600">{detailData.description}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-medium text-gray-400">Seriennummer:</span>
            <span className="text-[13px] font-bold text-gray-900">{detailData.serialNumber}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-medium text-gray-400">Subgruppe:</span>
            <span className="text-[13px] font-bold text-green-500">{detailData.subGroup}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-medium text-gray-400">Zählerstand Ausgabe:</span>
            <span className="text-[13px] font-bold text-blue-600">{detailData.meterReadingOut}</span>
          </div>

        </div>
      </div>

      {/* Grid of details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col">
          <div className="p-6 space-y-3 flex-grow">
            {[
              { label: "Boels Depot:", value: detailData.depot, valueClass: "text-orange-500" },
              { label: "Übernommen am:", value: detailData.takenOn, valueClass: "text-green-500" },
              { label: "Rückgabe durch:", value: detailData.returnBy, valueClass: "text-red-500" },
              { label: "Zählerstand Übernahme:", value: detailData.meterReadingRec, valueClass: "text-blue-500" },
              { label: "Gerät-Zustand:", value: detailData.condition, valueClass: "text-red-500" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center text-[13px] border-b border-gray-50 pb-2.5 last:border-0 hover:bg-gray-50/50 transition-colors px-2 -mx-2 rounded-md">
                <span className="text-gray-400 font-medium">{row.label}</span>
                <span className={`font-bold ${row.valueClass}`}>{row.value}</span>
              </div>
            ))}

          </div>
          <div className="px-6 py-3 bg-gray-50/50 text-right">
            <span className="text-[10px] font-bold text-orange-400 uppercase tracking-tight italic">
              Powered by Boels-Technikweb ®
            </span>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm flex flex-col">
          <div className="p-6 space-y-3 flex-grow">
            {[
              { label: "Letzte MV-Nummer:", value: detailData.lastMvNumber, valueClass: "text-blue-500" },
              { label: "Geräteschlüssel Retour:", value: detailData.keysReturned, valueClass: "text-gray-900" },
              { label: "Kraftstoff / Nachgetankt:", value: detailData.fuelStatus, valueClass: "text-gray-900" },
              { label: "AdBlue / Nachgetankt:", value: detailData.adBlueStatus, valueClass: "text-gray-900" },
              { label: "Elektrogerät-Batterieladezust.:", value: detailData.batteryLevel, valueClass: "text-blue-600" },
              { label: "Übernommen, Herr:", value: detailData.takenByHerr, valueClass: "text-orange-500" },
              { label: "Zuständiger Techniker:", value: detailData.technician, valueClass: "text-blue-500" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center text-[13px] border-b border-gray-50 pb-2.5 last:border-0 hover:bg-gray-50/50 transition-colors px-2 -mx-2 rounded-md">
                <span className="text-gray-400 font-medium">{row.label}</span>
                <span className={`font-bold ${row.valueClass}`}>{row.value}</span>
              </div>
            ))}

          </div>
          <div className="px-6 py-3 bg-gray-50/50 text-right">
            <span className="text-[10px] font-bold text-orange-400 uppercase tracking-tight italic">
              Powered by Boels-Technikweb ®
            </span>
          </div>
        </div>
      </div>

      {/* Machines Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="px-3 py-1 bg-orange-50 border border-orange-100 rounded-md">
             <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest">Maschinen (0)</span>
          </div>

          <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
            <RotateCcw size={18} />
          </button>
        </div>
        
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <h3 className="text-4xl font-bold text-gray-900">No Data Found</h3>
          </div>
          <div className="px-6 py-3 bg-gray-50/50 text-right border-t border-gray-50">
            <span className="text-[10px] font-bold text-orange-400 uppercase tracking-tight italic">
              Powered by Boels-Technikweb ®
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolTab;
