import React from "react";
import { Copy } from "lucide-react";

const SecurityTab: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full">
       {/* Security Info Content */}
       <div className="p-0 space-y-4">
         <div className="flex items-center gap-2 text-[13px]">
           <span className="text-gray-300 font-medium whitespace-nowrap">Erstellt am:</span>
           <span className="text-gray-900 font-bold whitespace-nowrap tracking-tight">10/22/2025 11:45 (Test)</span>
         </div>
         
         <div className="flex items-center gap-2 text-[13px]">
           <span className="text-gray-300 font-medium whitespace-nowrap">Änderungs-Historie:</span>
           <span className="text-gray-900 font-bold whitespace-nowrap tracking-tight">10/22/2025 11:45 AM ( Test )</span>
           <button className="p-1 px-2.5 bg-gray-100 text-gray-400 hover:text-gray-600 rounded transition-colors ml-2 shadow-sm border border-gray-200">
              <Copy size={16} />
           </button>
         </div>
         
         <div className="flex items-center gap-2 text-[13px]">
            <span className="text-gray-300 font-medium whitespace-nowrap">Dokument gültig bis:</span>
            <span className="text-gray-900 font-bold whitespace-nowrap tracking-tight">01/15/2027</span>
         </div>

         <div className="pt-4 space-y-4">
            <div className="flex items-center gap-2 text-[13px]">
               <span className="text-gray-300 font-medium whitespace-nowrap">Bearbeitungsrecht für:</span>
               <span className="text-blue-600 font-bold whitespace-nowrap tracking-tight">Manager, Supervisor, test</span>
            </div>
            
            <div className="flex items-center gap-2 text-[13px]">
               <span className="text-gray-300 font-medium whitespace-nowrap">Lese-Freigabe für:</span>
               <span className="text-gray-900 font-bold whitespace-nowrap tracking-tight truncate max-w-[400px]">Benutzer mit Bearbeitungsrecht, Alle Autoren, Alle Leser</span>
               <button className="p-1 px-2.5 bg-gray-100 text-gray-400 hover:text-gray-600 rounded transition-colors ml-2 shadow-sm border border-gray-200">
                  <Copy size={16} />
               </button>
            </div>
         </div>
       </div>
    </div>
  );
};

export default SecurityTab;
