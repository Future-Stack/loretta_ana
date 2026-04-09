import React from "react";
import { RotateCcw, Copy } from "lucide-react";

const SecurityTab: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Security Info Card */}
      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
        <div className="p-8 space-y-4">
          <div className="flex items-center gap-3 text-[13px]">
            <span className="text-gray-400 font-medium whitespace-nowrap min-w-[140px]">Erstellt am:</span>
            <span className="text-gray-900 font-bold whitespace-nowrap">10/30/2025 12:22 <span className="text-gray-400 font-medium ml-1"> ( HelmutH )</span></span>
          </div>

          
          <div className="flex items-center gap-3 text-[13px]">
            <span className="text-gray-400 font-medium whitespace-nowrap min-w-[140px]">Änderungs-Historie:</span>
            <div className="flex items-center gap-3">
              <span className="text-gray-900 font-bold whitespace-nowrap">10/30/2025 12:22 PM <span className="text-gray-400 font-medium ml-1"> ( HelmutH )</span></span>
              <button className="p-1 px-2.5 bg-gray-100 text-gray-400 hover:text-gray-600 rounded transition-colors shadow-sm border border-gray-200 active:scale-95">
                 <Copy size={14} />
              </button>
            </div>
          </div>

          
          <div className="flex items-center gap-2 text-sm">
             <span className="text-gray-500 font-medium whitespace-nowrap">Dokument gültig bis:</span>
             <span className="text-gray-900 font-bold whitespace-nowrap">01/23/2027</span>
          </div>

          <div className="pt-4 space-y-4">
             <div className="flex items-center gap-3 text-[13px]">
                <span className="text-gray-400 font-medium whitespace-nowrap min-w-[140px]">Bearbeitungsrecht:</span>
                <span className="text-blue-600 font-bold whitespace-nowrap hover:underline cursor-pointer">Manager, Supervisor, helmuth</span>
             </div>
             
             <div className="flex items-center gap-3 text-[13px]">
                <span className="text-gray-400 font-medium whitespace-nowrap min-w-[140px]">Lese-Freigabe für:</span>
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="text-gray-900 font-bold truncate max-w-[400px]">Benutzer mit Bearbeitungsrecht, Alle Autoren, Alle Leser</span>
                  <button className="p-1 px-2.5 bg-gray-100 text-gray-400 hover:text-gray-600 rounded transition-colors shadow-sm border border-gray-200 active:scale-95">
                     <Copy size={14} />
                  </button>
                </div>
             </div>
             
             <div className="flex items-center gap-3 text-[13px]">
                <span className="text-gray-400 font-medium whitespace-nowrap min-w-[140px]">Autom. Recht:</span>
                <span className="text-gray-900 font-bold whitespace-nowrap">depot 397</span>
             </div>
             
             <div className="flex items-center gap-3 text-[13px]">
                <span className="text-gray-400 font-medium whitespace-nowrap min-w-[140px]">Autom. Lese-Freigabe:</span>
                <span className="text-gray-900 font-bold whitespace-nowrap">borsos</span>
             </div>
          </div>

        </div>
        <div className="px-6 py-4 bg-gray-50/50 text-right border-t border-gray-50">
          <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest italic">
            Powered by Boels-Technikweb ®
          </span>
        </div>

      </div>

      {/* Machines Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="px-3 py-1 bg-orange-50 border border-orange-100 rounded-md shadow-sm">
             <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest">Maschinen (0)</span>
          </div>

          <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors">
            <RotateCcw size={18} />
          </button>
        </div>
        
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
          <div className="flex flex-col items-center justify-center py-20 px-4">
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

export default SecurityTab;
