import React, { useState } from "react";

const ProtocolTab: React.FC = () => {
  const images = ["/machine_1.png", "/machine_2.png"];
  const [activeImage, setActiveImage] = useState(images[0]);

  const detailData = {
    boelsNumber: "135100092",
    description: "JLG 4013PS - Teleskop-Stapler 4000kg 13m",
    serialNumber: "1160005174",
    subGroup: "13510",
    
    // Grid Details
    depot: "Depot XYZ",
    takenOn: "22.10.2025 um: 11:50",
    returnBy: "Kunde",
    meterReadingRec: "250 Std",
    condition: "Beschädigt !",
    validUntil: "02.06.2025",
    damageDescription: "Test Schaden",
    additionalEquipment: "GRL120, TL30,80, FP, DL",
    lastMvNumber: "-",
    costCenter: "Kd",
    accessoriesReturned: "SW-Stange fehlt !",
    keysReturned: "Ja, 2 Stk.",
    cleaningLevel: "0,75h",
    fuelAmount: "45 Liter",
    adBlueStatus: "Vollgetankt !",
    batteryLevel: "50%",
    takenByHerr: "Test_User",
    technician: "Test User"
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header Info Section (No border) */}
      <div className="space-y-4 mb-20">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[13px] font-semibold text-gray-400">Boels-Nummer:</span>
          <span className="text-[13px] font-bold text-[#EB342D]">{detailData.boelsNumber}</span>
          <span className="text-[14px] font-bold text-[#0067C0] ml-1">{detailData.description}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold text-gray-400">Seriennummer:</span>
          <span className="text-[13px] font-bold text-gray-900">{detailData.serialNumber}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold text-gray-400">Subgruppe:</span>
          <span className="text-[13px] font-bold text-[#009F4D]">{detailData.subGroup}</span>
        </div>
      </div>

      {/* Two Column Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start flex-1 min-h-[500px]">
        {/* Left Column: Attributes */}
        <div className="flex flex-col">
          {[
            { label: "Boels Depot:", value: detailData.depot, valueClass: "text-[#F39E20]" },
            { label: "Übernommen am:", value: detailData.takenOn, valueClass: "text-[#009F4D]" },
            { label: "Rückgabe durch:", value: detailData.returnBy, valueClass: "text-[#EB342D]" },
            { label: "Zählerstand Übernahme:", value: detailData.meterReadingRec, valueClass: "text-[#0067C0]" },
            { label: "Gerät-Zustand:", value: detailData.condition, valueClass: "text-[#EB342D]" },
            { label: "Überprüfung gültig bis:", value: detailData.validUntil, valueClass: "text-[#0067C0]" },
            { label: "Schadensbeschreibung:", value: detailData.damageDescription, valueClass: "text-[#EB342D]" },
            { label: "Zusatzausrüstung:", value: detailData.additionalEquipment, valueClass: "text-gray-900" },
            { label: "Letzte MV-Nummer:", value: detailData.lastMvNumber, valueClass: "text-gray-900" },
            { label: "Kostenstelle:", value: detailData.costCenter, valueClass: "text-[#EB342D]" },
            { label: "Zubehör retour :", value: detailData.accessoriesReturned, valueClass: "text-gray-900" },
            { label: "Gerätschlüssel Retour:", value: detailData.keysReturned, valueClass: "text-[#009F4D]" },
            { label: "Reinigungsstufe:", value: detailData.cleaningLevel, valueClass: "text-gray-900" },
            { label: "Kraftstoff / Nachgetankt:", value: detailData.fuelAmount, valueClass: "text-gray-900" },
            { label: "AdBlue / Nachgetankt:", value: detailData.adBlueStatus, valueClass: "text-[#0067C0]" },
            { label: "Elektrogerät-Batterieladezust.:", value: detailData.batteryLevel, valueClass: "text-[#0067C0]" },
            { label: "Übernommen, Herr:", value: detailData.takenByHerr, valueClass: "text-[#F39E20]" },
            { label: "Zuständiger Techniker:", value: detailData.technician, valueClass: "text-[#0067C0]" },
          ].map((row, i) => (
            <div key={i} className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0">
              <span className="text-[13px] text-gray-400 font-medium whitespace-nowrap">{row.label}</span>
              <span className={`text-[13px] font-bold text-right ${row.valueClass}`}>{row.value}</span>
            </div>
          ))}
        </div>

        {/* Right Column: Gallery */}
        <div className="flex flex-col h-full items-center lg:items-end">
          <div className="flex-1 flex items-center justify-center p-4">
            <img 
              src={activeImage} 
              alt="Machine" 
              className="w-full max-w-[500px] h-auto object-contain transition-all duration-300"
            />
          </div>

          <div className="w-full mt-8">
            <div className="h-px bg-gray-100 w-full mb-8" />
            <div className="flex items-center gap-3">
               <div 
                 onClick={() => setActiveImage(images[0])}
                 className={`w-[110px] h-[75px] rounded border overflow-hidden cursor-pointer shadow-sm transition-all border ${
                   activeImage === images[0] ? "border-[#F39E20]" : "border-gray-100"
                 }`}
               >
                  <img src={images[0]} className="w-full h-full object-cover" alt="Thumb 1" />
               </div>
               <div 
                 onClick={() => setActiveImage(images[1])}
                 className={`w-[110px] h-[75px] rounded border overflow-hidden cursor-pointer shadow-sm transition-all border ${
                   activeImage === images[1] ? "border-[#0067C0]" : "border-gray-100"
                 }`}
               >
                  <img src={images[1]} className="w-full h-full object-cover" alt="Thumb 2" />
               </div>
               <div className="w-[110px] h-[75px] rounded border-2 border-dashed border-blue-400/50 bg-gray-50/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolTab;
