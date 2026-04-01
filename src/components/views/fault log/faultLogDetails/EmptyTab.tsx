import React from "react";
import { RefreshCw } from "lucide-react";

const EmptyTab: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Upper No Data Section */}
      <div className="bg-white border border-gray-100 rounded-2xl p-16 shadow-sm flex items-center justify-center min-h-[200px]">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">No Data Found</h2>
      </div>
      
      <p className="text-right text-[10px] text-orange-600 font-medium italic">Powered by Boels-Technikweb ®</p>

      {/* Lower No Data Section (Machines) */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center">
            <span className="px-4 py-1.5 bg-orange-50 border border-orange-200 text-orange-600 rounded text-sm font-semibold shadow-sm">Maschinen (0)</span>
            <div className="flex-1"></div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <RefreshCw size={18} />
            </button>
        </div>
        
        <div className="bg-white border border-gray-100 rounded-2xl p-16 shadow-sm flex items-center justify-center min-h-[200px]">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">No Data Found</h2>
        </div>
        
        <p className="text-right text-[10px] text-orange-600 font-medium italic">Powered by Boels-Technikweb ®</p>
      </div>
    </div>
  );
};

export default EmptyTab;
