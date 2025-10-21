// src/components/views components/spareParts/SparePartDetail/SparePartDetailFiles.tsx
import React from "react";
import type { SparePart } from "../types";

const SparePartDetailFiles: React.FC<{ part: SparePart }> = () => {
  const files = [
    {
      id: "1",
      date: "12/27/2021 09:32 AM",
      name: "1060_20250122_083213.jpg",
      size: "178 KB",
      thumbnail: "📷",
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left p-4 text-sm font-medium text-gray-600 w-12">
              <input type="checkbox" className="rounded border-gray-300" />
            </th>
            <th className="text-left p-4 text-sm font-medium text-gray-600">Dateianhang</th>
            <th className="text-left p-4 text-sm font-medium text-gray-600">Files</th>
            <th className="text-left p-4 text-sm font-medium text-gray-600">File Size</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
              <td className="p-4">
                <input type="checkbox" className="rounded border-gray-300" />
              </td>
              <td className="p-4 text-sm text-gray-700">{file.date}</td>
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-lg">
                    {file.thumbnail}
                  </div>
                  <span className="text-sm text-blue-600 font-semibold hover:underline cursor-pointer">
                    {file.name}
                  </span>
                </div>
              </td>
              <td className="p-4 text-sm text-gray-700">{file.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SparePartDetailFiles;
