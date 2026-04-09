import React from "react";
import { Copy } from "lucide-react";

const LifeSecurityTab: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Security Info Card */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden p-10">
        <div className="space-y-6 max-w-4xl">
           <div className="flex items-center gap-3">
              <span className="text-gray-400 font-medium w-40 text-[13px]">Erstellt am:</span>
              <span className="text-gray-900 font-bold text-[13px]">10/22/2025 11:45 (Test)</span>
           </div>


           <div className="flex items-center gap-3">
              <span className="text-gray-400 font-medium w-40 text-[13px]">Änderungs-Historie:</span>
              <div className="flex items-center gap-4">
                 <span className="text-gray-900 font-bold text-[13px]">10/22/2025 11:45 AM ( Test )</span>

                 <button className="p-1.5 bg-gray-50 border border-gray-200 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all shadow-sm">
                    <Copy size={14} />
                 </button>
              </div>
           </div>

           <div className="flex items-center gap-3">
              <span className="text-gray-400 font-medium w-40 text-[13px]">Dokument gültig bis:</span>
              <span className="text-gray-900 font-bold text-[13px]">01/15/2027</span>
           </div>

           <div className="flex items-center gap-3 mt-10">
              <span className="text-gray-400 font-medium w-40 text-[13px]">Bearbeitungsrecht für:</span>
              <span className="text-blue-500 font-bold hover:underline cursor-pointer text-[13px]">Manager, Supervisor, test</span>
           </div>

           <div className="flex items-center gap-3">
              <span className="text-gray-400 font-medium w-40 text-[13px]">Lese-Freigabe für:</span>
              <div className="flex items-center gap-4">
                 <span className="text-gray-900 font-bold text-[13px]">Benutzer mit Bearbeitungsrecht, Alle Autoren, Alle Leser</span>

                 <button className="p-1.5 bg-gray-50 border border-gray-200 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all shadow-sm">
                    <Copy size={14} />
                 </button>
              </div>
           </div>
        </div>

        <div className="mt-12 text-right">
            <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest italic">
              Powered by Boels-Technikweb ®
            </span>
        </div>

      </div>

       {/* Consistency Placeholder */}
       <div className="space-y-4 pt-10">
        <div className="flex items-center justify-between opacity-0 pointer-events-none">
           <div className="px-3 py-1 bg-orange-50 border border-orange-100 rounded-md"><span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest">Maschinen (0)</span></div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <h3 className="text-5xl font-extrabold text-gray-900 tracking-tight">No Data Found</h3>
          </div>
          <div className="px-6 py-4 bg-gray-50/50 text-right border-t border-gray-50">
            <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest italic">
              Powered by Boels-Technikweb ®
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LifeSecurityTab;
