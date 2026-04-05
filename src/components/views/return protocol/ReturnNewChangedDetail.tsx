import React, { useState } from "react";
import { ChevronDown, CheckCircle2, XCircle } from "lucide-react";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";
import Pagination from "@/components/views components/machine/Pagination";

interface ProtocolEntry {
  id: string;
  statusHeader: string;
  statusType: "NEU" | "GEÄNDERT";
  isSuccess: boolean;
  date: string;
  serial: string;
  description: string;
  location: string;
  bh: string;
  deviceStatus: string;
  deviceStatusColor: "red" | "green" | "blue";
  technician: string;
}

interface ReturnNewChangedDetailProps {
  folderName: string;
  onBack: () => void;
}

const MOCK_ENTRIES: ProtocolEntry[] = [
  {
    id: "1",
    statusHeader: "30.10.2025 12:52: NEU",
    statusType: "NEU",
    isSuccess: false,
    date: "30.10.2025",
    serial: "135100092",
    description: "JCB BSC-I Bagger 8,5T-PowerTilt",
    location: "Depot 397",
    bh: "560",
    deviceStatus: "Beschädigt !",
    deviceStatusColor: "red",
    technician: "Helmuth",
  },
  {
    id: "2",
    statusHeader: "30.10.2025 12:49: NEU",
    statusType: "NEU",
    isSuccess: false,
    date: "30.10.2025",
    serial: "116070462",
    description: "Atlas Copco QAS60 Stromerzeuger 60 kVA schallgedämpft",
    location: "Depot 397",
    bh: "250",
    deviceStatus: "Beschädigt !",
    deviceStatusColor: "red",
    technician: "Helmuth",
  },
  {
    id: "3",
    statusHeader: "30.10.2025 12:22: NEU",
    statusType: "NEU",
    isSuccess: false,
    date: "30.10.2025",
    serial: "133140121",
    description: "JLG Toucan IOE Teleskop-Arbeitsbühne 10m AH, elektro",
    location: "Depot 397",
    bh: "150",
    deviceStatus: "Nur Check Service fällig !",
    deviceStatusColor: "blue",
    technician: "Helmuth",
  },
  {
    id: "4",
    statusHeader: "23.10.2025 15:47: GEÄNDERT",
    statusType: "GEÄNDERT",
    isSuccess: true,
    date: "23.10.2025",
    serial: "133140121",
    description: "Dummy Maschine 5,5T Kurzheck - Kabine",
    location: "TD467-AT",
    bh: "520",
    deviceStatus: "Vermietbereit !",
    deviceStatusColor: "green",
    technician: "Test",
  },
  {
    id: "5",
    statusHeader: "22.10.2025 11:45: NEU",
    statusType: "NEU",
    isSuccess: false,
    date: "22.10.2025",
    serial: "135100092",
    description: "JLG 4013PS - Teleskop-stapler 4000kg 13m",
    location: "Depot xyz",
    bh: "250",
    deviceStatus: "Beschädigt !",
    deviceStatusColor: "red",
    technician: "Test User",
  },
  // Add more entries to test pagination
  ...Array.from({ length: 15 }).map((_, i) => ({
    id: `${i + 6}`,
    statusHeader: "20.10.2025 10:00: NEU",
    statusType: "NEU" as const,
    isSuccess: true,
    date: "20.10.2025",
    serial: "123456789",
    description: `Example Machine ${i + 1}`,
    location: "Depot 123",
    bh: "100",
    deviceStatus: "Vermietbereit !",
    deviceStatusColor: "green" as const,
    technician: "System",
  })),
];

const ReturnNewChangedDetail: React.FC<ReturnNewChangedDetailProps> = ({
  folderName,
  onBack,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Neu");
  const itemsPerPage = 6;

  const tabs = [
    { label: "Neu", count: 5 },
    { label: "Example", count: 2 },
    { label: "Example", count: 12 },
  ];

  const totalPages = Math.ceil(MOCK_ENTRIES.length / itemsPerPage);
  const currentItems = MOCK_ENTRIES.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col w-full animate-in fade-in duration-500">
      {/* Header / Back Button */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-orange-600 transition-all group"
        >
          <img src="/back.svg" alt="Back" className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </div>

      {/* Folder Selector Dropdown */}
      <div className="flex flex-col gap-2 mb-8">
        <span className="text-sm font-bold text-gray-700">Choose Folder:</span>
        <UniversalDropdown
          trigger={
            <button className="flex items-center justify-between w-full sm:w-[350px] px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-gray-300 transition-all shadow-sm">
              {folderName}
              <ChevronDown size={18} className="text-gray-400" />
            </button>
          }
          className="w-[350px] bg-white border-gray-100 shadow-xl rounded-xl"
        >
          <div className="flex flex-col py-1">
            <button className="px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left">Heute</button>
            <button className="px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left">Letzte 3 Tage</button>
            <button className="px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 text-left">Letzte 7 Tage</button>
          </div>
        </UniversalDropdown>
      </div>

      {/* Status Tabs */}
      <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2 scrollbar-none">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(tab.label)}
            className={`px-4 py-2 rounded-lg text-sm font-bold border transition-all whitespace-nowrap ${
              activeTab === tab.label && idx === 0
                ? "bg-orange-50 text-orange-600 border-orange-200"
                : "bg-gray-50 text-gray-400 border-gray-100 hover:bg-gray-100"
            }`}
          >
            {tab.label} ({tab.count + (idx === 2 ? 0 : 0)})
          </button>
        ))}
      </div>

      {/* Table Header (Desktop) */}
      <div className="hidden lg:grid grid-cols-[1fr_1fr_2.5fr_1fr_1.5fr_1.5fr_1fr] gap-4 px-6 mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
        <div>Status</div>
        <div>Datum</div>
        <div>Maschine / Beschreibung</div>
        <div>WERT</div>
        <div>Techniker / Depot</div>
        <div>Aktion</div>
      </div>

      {/* Table/List Content */}
      <div className="bg-gray-50/50 rounded-2xl p-2 sm:p-4 border border-gray-100">
        <div className="flex flex-col gap-4">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white border rounded-xl overflow-hidden transition-all hover:shadow-md ${
                item.statusType === "NEU" ? "border-orange-200 shadow-sm" : "border-gray-100"
              }`}
            >
              {/* Item Status Header */}
              <div className="px-4 py-1.5 border-b border-inherit">
                 <span className={`text-xs font-bold ${item.statusType === "GEÄNDERT" ? "text-red-500" : "text-green-600"}`}>
                    {item.statusHeader}
                 </span>
              </div>

              {/* Item Main Content */}
              <div className="p-4 sm:p-5 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                {/* Icon and Identification */}
                <div className="flex items-center gap-4 min-w-[200px]">
                  <div className="flex-shrink-0">
                    {item.isSuccess ? (
                      <CheckCircle2 size={22} className="text-green-500" />
                    ) : (
                      <XCircle size={22} className="text-red-500" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 text-[11px] font-bold uppercase text-gray-400">
                      Am: <span className="text-blue-600 ml-1">{item.date}</span>
                    </div>
                    <div className="text-red-500 font-bold font-mono text-base">
                      {item.serial}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Location & BH */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 min-w-[200px]">
                  <div className="text-blue-600 font-bold text-sm">
                    {item.location}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold uppercase text-gray-400">
                    BH: <span className="text-blue-600 text-sm ml-1">{item.bh}</span>
                  </div>
                </div>

                {/* Status Text */}
                <div className="min-w-[150px]">
                   <div className={`text-[11px] font-bold uppercase text-gray-400 mb-0.5`}>
                     Gerät Status:
                   </div>
                   <div className={`text-sm font-bold ${
                     item.deviceStatusColor === 'red' ? 'text-red-500' : 
                     item.deviceStatusColor === 'green' ? 'text-green-500' : 'text-blue-500'
                   }`}>
                     {item.deviceStatus}
                   </div>
                </div>

                {/* Technician */}
                <div className="min-w-[150px] lg:text-right">
                  <div className="text-[11px] font-bold uppercase text-gray-400 mb-0.5">
                    Übernommen:
                  </div>
                  <div className="text-blue-500 font-bold text-sm">
                    {item.technician}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-8 mb-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ReturnNewChangedDetail;
