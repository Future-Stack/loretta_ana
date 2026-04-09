import React from "react";
import { Copy } from "lucide-react";

const SecurityTab: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full">
       {/* Security Info Content */}
       <div className="p-0 space-y-5">
          <div className="flex items-center gap-4 text-[13px]">
            <span className="text-gray-400 font-medium whitespace-nowrap min-w-[200px]">Erstellt am:</span>
            <span className="text-gray-900 font-bold whitespace-nowrap tracking-tight">10/22/2025 11:45 (Test)</span>
          </div>

          <div className="flex items-center gap-4 text-[13px]">
            <span className="text-gray-400 font-medium whitespace-nowrap min-w-[200px]">Änderungs-Historie:</span>
            <div className="flex items-center gap-4">
               <span className="text-gray-900 font-bold whitespace-nowrap tracking-tight">10/22/2025 11:45 AM ( Test )</span>
               <button className="flex items-center justify-center p-2 bg-gray-50 border border-gray-100 rounded-lg text-gray-300 hover:text-blue-500 hover:border-blue-200 transition-all shadow-sm active:scale-95">
                 <Copy size={16} />
               </button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[13px]">
             <span className="text-gray-400 font-medium whitespace-nowrap min-w-[200px]">Dokument gültig bis:</span>
             <span className="text-gray-900 font-bold whitespace-nowrap tracking-tight">01/15/2027</span>
          </div>

         <div className="pt-6 space-y-5">
             <div className="flex items-center gap-4 text-[13px]">
                <span className="text-gray-400 font-medium whitespace-nowrap min-w-[200px]">Bearbeitungsrecht für:</span>
                <span className="text-[#0067C0] font-bold whitespace-nowrap tracking-tight hover:underline cursor-pointer">Manager, Supervisor, test</span>
             </div>

             <div className="flex items-center gap-4 text-[13px]">
                <span className="text-gray-400 font-medium whitespace-nowrap min-w-[200px]">Lese-Freigabe für:</span>
                <div className="flex items-center gap-4">
                   <span className="text-gray-900 font-bold tracking-tight max-w-[500px]">Benutzer mit Bearbeitungsrecht, Alle Autoren, Alle Leser</span>
                   <button className="flex items-center justify-center p-2 bg-gray-50 border border-gray-100 rounded-lg text-gray-300 hover:text-blue-500 hover:border-blue-200 transition-all shadow-sm active:scale-95">
                     <Copy size={16} />
                   </button>
                </div>
             </div>
         </div>
       </div>
    </div>
  );
};

export default SecurityTab;
