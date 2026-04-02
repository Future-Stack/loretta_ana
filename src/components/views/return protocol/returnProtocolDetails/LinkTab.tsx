import React from "react";
import { RotateCcw } from "lucide-react";

const LinkTab: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Upper Info Section - Empty */}
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

      {/* Machines Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="px-3 py-1 bg-orange-50 border border-orange-100 rounded-md">
             <span className="text-xs font-bold text-orange-600">Maschinen (0)</span>
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

export default LinkTab;
