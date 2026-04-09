import React from "react";
import { RotateCcw } from "lucide-react";

const LifeProtocolTab: React.FC = () => {
  const detailData = {
    boelsNumber: "135100092",
    description: "JLG 4013PS - Teleskop-stapler 4000kg 13m",
    serialNumber: "1160005174",
    subGroup: "13510",
    
    // Left Card
    depot: "Depot XYZ",
    takenOn: "22.10.2025 um: 11:50",
    returnBy: "Kunde",
    meterReadingRec: "250 Std",
    condition: "Beschädigt !",
    checkValidUntil: "02.06.2025",
    damageDescription: "Test Schaden",
    additionalEquipment: "GRL120, TL30,80, FP, DL",
    lastMvNumber: "-",
    costCenter: "Kd",
    accessoriesReturn: "SW-Stange fehlt !",
    deviceKeyReturn: "Ja, 2 Stk",
    cleaningLevel: "0,75h",
    fuelStatus: "45 Liter",
    adBlueStatus: "Vollgetankt !",
    batteryLevel: "50%",
    takenByHerr: "Test_User",
    technician: "Test User"
  };

  const images = [
    { id: 1, src: "/machine_1.png" },
    { id: 2, src: "/machine_2.png" },
  ];

  const [selectedImage, setSelectedImage] = React.useState(images[0]);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Upper Info Section */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <div className="space-y-3">
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

        </div>
      </div>

      {/* Main Grid: Details + Gallery */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
        {/* Left Column: Details List */}
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
          <div className="p-6 space-y-2.5 flex-grow">
            {[
              { label: "Boels Depot:", value: detailData.depot, valueClass: "text-orange-500" },
              { label: "Übernommen am:", value: detailData.takenOn, valueClass: "text-green-500" },
              { label: "Rückgabe durch:", value: detailData.returnBy, valueClass: "text-red-500" },
              { label: "Zählerstand Übernahme:", value: detailData.meterReadingRec, valueClass: "text-blue-500 font-bold" },
              { label: "Gerät-Zustand:", value: detailData.condition, valueClass: "text-red-500" },
              { label: "Überprüfung gültig bis:", value: detailData.checkValidUntil, valueClass: "text-blue-500 font-medium underline" },
              { label: "Schadensbeschreibung:", value: detailData.damageDescription, valueClass: "text-red-500 italic" },
              { label: "Zusatzausrüstung:", value: detailData.additionalEquipment, valueClass: "text-gray-900 font-medium" },
              { label: "Letzte MV-Nummer:", value: detailData.lastMvNumber, valueClass: "text-gray-500" },
              { label: "Kostenstelle:", value: detailData.costCenter, valueClass: "text-red-500 font-bold underline" },
              { label: "Zubehör retour :", value: detailData.accessoriesReturn, valueClass: "text-gray-900 font-semibold" },
              { label: "Gerätschlüssel Retour:", value: detailData.deviceKeyReturn, valueClass: "text-green-500 font-bold" },
              { label: "Reinigungsstufe:", value: detailData.cleaningLevel, valueClass: "text-gray-900" },
              { label: "Kraftstoff / Nachgetankt:", value: detailData.fuelStatus, valueClass: "text-gray-900 font-bold" },
              { label: "AdBlue / Nachgetankt:", value: detailData.adBlueStatus, valueClass: "text-blue-500 font-bold" },
              { label: "Elektrogerät-Batterieladezust.:", value: detailData.batteryLevel, valueClass: "text-blue-500 font-bold" },
              { label: "Übernommen, Herr:", value: detailData.takenByHerr, valueClass: "text-orange-500 font-bold" },
              { label: "Zuständiger Techniker:", value: detailData.technician, valueClass: "text-blue-500 font-bold underline" },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center text-[13px] border-b border-gray-50 pb-1.5 last:border-0 hover:bg-gray-50/50 transition-colors px-2 -mx-2 rounded-md">
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

        {/* Right Column: Image Gallery */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col items-center">
            {/* Main Preview */}
            <div className="w-full flex-grow flex items-center justify-center p-4 min-h-[400px]">
                <img 
                    src={selectedImage.src} 
                    alt="Machine Preview" 
                    className="max-w-full max-h-[450px] object-contain rounded-xl hover:scale-[1.02] transition-transform duration-500" 
                />
            </div>
            
            {/* Thumbnails Row */}
            <div className="flex items-center gap-4 mt-8 pb-4">
                {images.map((img) => (
                    <button
                        key={img.id}
                        onClick={() => setSelectedImage(img)}
                        className={`w-28 h-20 rounded-lg overflow-hidden border-2 transition-all p-1 ${
                            selectedImage.id === img.id ? "border-orange-500 shadow-lg scale-110" : "border-gray-100 hover:border-gray-200"
                        }`}
                    >
                        <img src={img.src} alt="Thumbnail" className="w-full h-full object-contain" />
                    </button>
                ))}
            </div>
            <hr className="w-full border-gray-100 my-4" />
        </div>
      </div>

      {/* Lower Section: Machines */}
      <div className="space-y-4 pt-10">
        <div className="flex items-center justify-between">
          <div className="px-4 py-1 bg-orange-50 border border-orange-100 rounded-md">
             <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest">Maschinen (0)</span>
          </div>

          <button className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition-all">
            <RotateCcw size={20} />
          </button>
        </div>
        
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <h3 className="text-5xl font-extrabold text-gray-900 tracking-tight">No Data Found</h3>
          </div>
          <div className="px-6 py-4 bg-gray-50/50 text-right border-t border-gray-50">
            <span className="text-[10px] font-extrabold text-orange-400 uppercase tracking-tight italic">
              Powered by Boels-Technikweb ®
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeProtocolTab;
