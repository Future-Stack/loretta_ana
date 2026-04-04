import React, { useState } from "react";

const ProtocolTab: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1579487785973-74d3ca7b1181?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=800"
  ];
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

  const attributeRows = [
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
  ];

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header Info Section */}
      <div className="space-y-4 mb-20">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[14px] font-bold text-gray-400">Boels-Nummer:</span>
          <span className="text-[15px] font-extrabold text-[#EB342D] tracking-tight">{detailData.boelsNumber}</span>
          <span className="text-[15px] font-extrabold text-[#0067C0] tracking-tight">{detailData.description}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-[14px] font-bold text-gray-400">Seriennummer:</span>
          <span className="text-[15px] font-extrabold text-[#111827] tracking-tight">{detailData.serialNumber}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-[14px] font-bold text-gray-400">Subgruppe:</span>
          <span className="text-[15px] font-extrabold text-[#009F4D] tracking-tight">{detailData.subGroup}</span>
        </div>
      </div>

      {/* Two Column Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start flex-1">
        {/* Left Column: Attributes */}
        <div className="flex flex-col border-t border-gray-50 pt-2">
          {attributeRows.map((row, i) => (
            <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors px-2 -mx-2 rounded-md">
              <span className="text-[13px] text-gray-300 font-extrabold whitespace-nowrap">{row.label}</span>
              <span className={`text-[13px] font-bold text-right tracking-tight ${row.valueClass}`}>{row.value}</span>
            </div>
          ))}
        </div>

        {/* Right Column: Gallery */}
        <div className="flex flex-col h-full bg-[#fcfcfc] rounded-2xl border border-gray-100 p-8 shadow-sm">
          <div className="flex-1 flex items-center justify-center mb-10 min-h-[340px]">
            <img 
              src={activeImage} 
              alt="Machine" 
              className="w-full max-w-[480px] h-auto object-contain transition-all duration-500 drop-shadow-2xl"
            />
          </div>

          <hr className="border-gray-200 mb-8 w-full" />

          <div className="flex items-center gap-4">
             {images.map((img, idx) => (
               <div 
                 key={idx}
                 onClick={() => setActiveImage(img)}
                 className={`w-[110px] h-[75px] rounded-lg border-2 overflow-hidden cursor-pointer shadow-md transition-all ${
                   activeImage === img ? "border-orange-400 scale-105" : "border-white hover:border-gray-300"
                 }`}
               >
                  <img src={img} className="w-full h-full object-cover" alt={`Thumb ${idx + 1}`} />
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolTab;
