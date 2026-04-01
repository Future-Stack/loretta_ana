import React from "react";
import { Copy, RefreshCw } from "lucide-react";

const HistoryTab: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* History Card */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Boels - Störungsformular</h3>
        
        <div className="space-y-4 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Erstellt am:</span>
            <span className="font-bold text-gray-900">10/15/2025 09:35 ( malins )</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Änderungs-Historie:</span>
            <span className="font-bold text-gray-900">10/15/2025 09:35 AM ( malins )</span>
            <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 bg-gray-100 rounded">
                <Copy size={14} />
            </button>
          </div>
          
          <div className="flex items-center gap-2 pt-2">
            <span className="text-gray-600">Bearbeitungsrecht für:</span>
            <span className="font-medium text-blue-600 hover:underline cursor-pointer">Manager, Supervisor, Alle Autoren</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Lese-Freigabe für:</span>
            <span className="font-bold text-gray-900">Benutzer mit Bearbeitungsrecht, Alle Autoren, Alle Leser</span>
            <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 bg-gray-100 rounded">
                <Copy size={14} />
            </button>
          </div>
          
          <div className="flex items-center gap-2 pt-2">
            <span className="text-gray-600">Autom. Bearbeitungsrecht:</span>
            <span className="font-bold text-gray-900">borsos</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Autom. Lese-Freigabe für:</span>
            <span className="font-bold text-gray-900">borsos</span>
          </div>
        </div>
      </div>

      {/* Signature Section */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Digitale Signatur:</h4>
        <div className="flex flex-col gap-4 border-t border-gray-50 pt-6 min-h-[140px] items-start justify-center relative">
            {/* Signature Placeholder/Image */}
            <div className="relative h-20 w-full max-w-[300px]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Foreman_Signature.png" alt="Signature" className="h-full object-contain filter contrast-125 brightness-90 hue-rotate-[200deg]" />
            </div>
            <div className="absolute right-0 bottom-0">
                <p className="text-[10px] text-orange-600 font-medium italic">Powered by Boels-Technikweb ®</p>
            </div>
        </div>
      </div>

      {/* Lower No Data Section (Machines) */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center">
            <span className="px-4 py-1.5 bg-orange-50 border border-orange-200 text-orange-600 rounded text-sm font-semibold shadow-sm">Maschinen (0)</span>
            <div className="flex-1"></div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <RefreshCw size={18} />
            </button>
        </div>
        
        <div className="bg-white border border-gray-100 rounded-2xl p-16 shadow-sm flex items-center justify-center min-h-[160px]">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">No Data Found</h2>
        </div>
        
        <p className="text-right text-[10px] text-orange-600 font-medium italic">Powered by Boels-Technikweb ®</p>
      </div>
    </div>
  );
};

export default HistoryTab;
