import React from "react";
import { FileText, RotateCcw } from "lucide-react";


const LifeLinkTab: React.FC = () => {
  const attachments = [
    {
      id: 1,
      date: "12/27/2021 09:32 AM",
      fileName: "Stromerzeuger.jpg",
      fileSize: "178 KB",
      icon: <img src="/machine_1.png" alt="thumb" className="w-10 h-8 object-cover rounded shadow-sm" />,

    },
    {
      id: 2,
      date: "04/09/2025 11:59 AM",
      fileName: "Pruefprotokoll.pdf",
      fileSize: "519 KB",
      icon: (
        <div className="bg-red-500 text-white flex flex-col items-center justify-center w-10 h-10 rounded shadow-sm text-[8px] font-bold p-0.5 relative">
           <FileText size={16} />
           <span className="mt-[-2px]">PDF</span>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Attachments Section */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-[60px_1fr_1fr_1fr] gap-4 px-8 py-5 text-sm font-bold text-gray-400 border-b border-gray-100 uppercase tracking-widest text-[11px]">
          <div></div>
          <div>Dateianhang:</div>
          <div className="text-center">Files</div>
          <div className="text-right">File Size</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-gray-50 bg-white">
          {attachments.map((file) => (
            <div key={file.id} className="grid grid-cols-[60px_1fr_1fr_1fr] gap-4 px-8 py-6 items-center hover:bg-gray-50/50 transition-colors group">
              <div className="flex justify-center">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500/20 transition-all cursor-pointer" />
              </div>
              <div className="text-sm font-bold text-gray-700">{file.date}</div>
              <div className="flex items-center justify-center gap-3">
                 {file.icon}
                 <span className="text-sm font-bold text-blue-500 underline cursor-pointer hover:text-blue-700 transition-colors">{file.fileName}</span>
              </div>
              <div className="text-sm font-bold text-gray-700 text-right">{file.fileSize}</div>
            </div>
          ))}
          {/* Empty Space Row to match visual */}
          <div className="h-4 bg-white"></div>
        </div>
        
        <div className="px-6 py-4 bg-gray-50/50 text-right border-t border-gray-50">
            <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest italic">
              Powered by Boels-Technikweb ®
            </span>
        </div>

      </div>

      {/* Same Machines Lower Section for consistency */}
       <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <div className="px-3 py-1 bg-orange-50 border border-orange-100 rounded-md">
             <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest">Maschinen (0)</span>
          </div>

          <div className="p-2 opacity-0"><RotateCcw size={20} /></div> {/* Invisible placeholder for alignment */}
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

export default LifeLinkTab;
