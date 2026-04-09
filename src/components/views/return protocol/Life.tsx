import React, { useState } from "react";
import Pagination from "@/components/views components/machine/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import LifeDetail from "./returnLife/LifeDetail";
import LifeItemDetail from "./returnLife/LifeItemDetail";


// ==========================================
// Folder Icon Component (Custom SVG)
// ==========================================
const FolderIcon = () => (
  <svg 
    width="48" 
    height="48" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-800 group-hover:scale-110 transition-transform duration-300"
  >
    {/* Folder Body */}
    <path 
      d="M4 10V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V9C20 7.89543 19.1046 7 18 7H11L9 5H6C4.89543 5 4 5.89543 4 7V10Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinejoin="round"
    />
    {/* Inner Folder Line */}
    <path 
      d="M4 10H20" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinejoin="round"
    />
  </svg>
);

// ==========================================
// Folder Card Component
// ==========================================
interface FolderItem {
  id: string;
  date: string;
  count: number;
}

const FolderCard: React.FC<{ item: FolderItem; onClick: () => void }> = ({ item, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group flex items-center gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all cursor-pointer animate-in fade-in zoom-in duration-300"
    >
      <div className="flex-shrink-0">
        <FolderIcon />
      </div>
      <div className="text-[15px] font-bold text-gray-900 tracking-tight">
        {item.date} <span className="text-gray-400 font-medium ml-1">({item.count})</span>
      </div>

    </div>
  );
};

// ==========================================
// Main Life Component
// ==========================================
const Life: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  // Route Detection
  const pathParts = location.pathname.split("/").filter(Boolean);
  // Path segments: ["return-protocol", "return-life", "<folderId>", "<itemId>"]
  const folderId = pathParts.length >= 3 ? pathParts[2] : null;
  const itemId = pathParts.length >= 4 ? pathParts[3] : null;

  const isOverview = pathParts.length === 2; // /return-protocol/return-life

  // Generate Dummy Data (Increased to support 24 items per page)
  const generateData = (): FolderItem[] => {
    const data: FolderItem[] = [];
    for (let i = 1; i <= 60; i++) {
        const day = (i % 28) + 1;
        const month = (Math.floor(i / 28) % 12) + 1;
        const year = 2027;
        data.push({
            id: i.toString(),
            date: `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`,
            count: (i % 5) + 1
        });
    }
    return data;
  };

  const allFolders = generateData();
  const totalPages = Math.ceil(allFolders.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return allFolders.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFolderClick = (id: string) => {
    navigate(`/return-protocol/return-life/${id}`);
    setCurrentPage(1);
  };

  const handleItemClick = (fId: string, iId: string) => {
    navigate(`/return-protocol/return-life/${fId}/${iId}`);
  };

  const selectedFolder = allFolders.find(f => f.id === folderId);

  return (
    <div className="flex flex-col min-h-screen w-full p-7 sm:p-10 border bg-white border-gray-300 rounded-md shadow-sm">
      {itemId ? (
        <LifeItemDetail 
          id={itemId} 
          onBack={() => navigate(`/return-protocol/return-life/${folderId}`)} 
        />
      ) : folderId && selectedFolder ? (
        <LifeDetail 
          folderData={selectedFolder} 
          onBack={() => navigate("/return-protocol/return-life")} 
          onItemClick={(iId) => handleItemClick(folderId, iId)}
        />
      ) : (
        <>
          {/* Standardized Main Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Return Life Overview</h2>
            
            <button className="text-blue-600 font-bold text-[11px] uppercase tracking-widest hover:underline transition-all">
              Aufklappen
            </button>
          </div>

          <hr className="border-gray-200 mb-8" />


          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {getCurrentPageItems().map((folder) => (
              <FolderCard 
                key={folder.id} 
                item={folder} 
                onClick={() => handleFolderClick(folder.id)} 
              />
            ))}
          </div>

          {/* No Data State (Fallback) */}
          {allFolders.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <p className="text-gray-400 font-medium">No folders found</p>
            </div>
          )}

          {/* Pagination Footer */}
          <div className="mt-auto pt-12 flex justify-center w-full">
            {allFolders.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Life;
