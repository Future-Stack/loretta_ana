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
      thumbnail: "https://www.boels.com/content/dam/boels/pdf-icons/pdf-icon.png"
    }
  ];

  return (
    <div className="flex flex-col w-full h-full">
      {/* Attachments Table */}
      <div className="bg-white border-0 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-[40px_2fr_1fr_1fr] gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-widest">
           <div className="flex justify-center">
             <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
           </div>
           <div>Dateianhang:</div>
           <div className="text-center">Files</div>
           <div className="text-right">File Size</div>
        </div>

        {/* Table Content */}
        <div className="divide-y divide-gray-50">
          {attachments.map((file) => (
            <div key={file.id} className="grid grid-cols-[40px_2fr_1fr_1fr] gap-4 px-6 py-5 items-center hover:bg-gray-50/50 transition-colors">
              <div className="flex justify-center">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-400">{file.date}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-blue-600 hover:underline cursor-pointer">{file.fileName}</span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-16 h-12 bg-gray-50 border border-gray-100 rounded flex items-center justify-center overflow-hidden">
                  {file.fileType === "image" ? (
                    <img src={file.thumbnail} alt={file.fileName} className="w-full h-full object-cover" />
                  ) : (
                    <div className="p-1.5 grayscale opacity-80">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" className="w-8 h-8" alt="PDF icon" />
                    </div>
                  )}
                </div>
              </div>

              <div className="text-right text-sm font-bold text-gray-700">
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
