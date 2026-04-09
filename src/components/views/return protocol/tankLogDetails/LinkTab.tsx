import React from "react";

const LinkTab: React.FC = () => {
  const attachments = [
    {
      id: 1,
      date: "12/27/2021 09:32 AM",
      fileName: "Stromerzeuger.jpg",
      fileType: "image",
      size: "178 KB",
      thumbnail: "https://images.unsplash.com/photo-1621259182978-fbf9312269b8?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      date: "04/09/2025 11:59 AM",
      fileName: "Pruefprotokoll.pdf",
      fileType: "pdf",
      size: "519 KB",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
    }
  ];

  return (
    <div className="flex flex-col w-full h-full">
      {/* Attachments Table */}
      <div className="bg-white border-0 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-[60px_2fr_1fr_1fr] gap-4 px-6 py-4 bg-gray-50/50 border-b border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
           <div className="flex justify-center">
             <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
           </div>
           <div>Dateianhang:</div>
           <div className="text-center">Files</div>
           <div className="text-right">File Size</div>
        </div>


        {/* Table Content */}
        <div className="divide-y divide-gray-50">
          {attachments.map((file) => (
            <div key={file.id} className="grid grid-cols-[60px_2fr_1fr_1fr] gap-4 px-6 py-6 items-center hover:bg-gray-50/10 transition-colors">
              <div className="flex justify-center">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
              </div>
              
              <div className="flex items-center gap-20">
                <span className="text-[13px] font-bold text-[#111827] w-[200px] whitespace-nowrap">{file.date}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-bold text-[#0067C0] hover:underline hover:text-blue-700 cursor-pointer">{file.fileName}</span>
                </div>
              </div>


              <div className="flex justify-center">
                <div className="w-[70px] h-[55px] bg-[#fcfcfc] border border-gray-100 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                  <img src={file.thumbnail} alt={file.fileName} className={`w-full h-full object-cover ${file.fileType === 'pdf' ? 'p-3 grayscale' : ''}`} />
                </div>
              </div>

              <div className="text-right text-[13px] font-bold text-gray-700 tracking-tight">
                {file.size}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkTab;
