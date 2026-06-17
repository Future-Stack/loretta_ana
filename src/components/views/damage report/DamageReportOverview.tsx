import React, { useState, useEffect, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Check } from "lucide-react";
import type { RootState } from "@/redux/store";
import Pagination from "@/components/views components/machine/Pagination";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";

const DamageReportDetail = lazy(() => import("./DamageReportDetail"));

// ==========================================
// Types
// ==========================================
type RepairStatus = "Offene Kalkulation !" | "Abgeschlossen !";
type BillingStatus = "-" | "Ja, Insp" | "Ja, MV";

type DamageItem = {
  id: string;
  calcDate: string;
  artText: string;
  boelsNumber: string;
  description: string;
  costCenter: string;
  listPrice: string;
  repairStatus: RepairStatus;
  billed: BillingStatus;
  calcSum: string;
};

// ==========================================
// TableHeader Component
// ==========================================
const TableHeader: React.FC = () => (
  <div className="grid grid-cols-[50px_1.2fr_1.2fr_2.5fr_1fr_1.5fr_1.8fr_1.2fr_1.2fr] gap-4 px-6 py-4 bg-gray-50/70 border-b border-gray-200 text-[13px] font-bold text-gray-400">
    <div className="flex justify-center"></div>
    <div>Kalk.Datum</div>
    <div>Boels-Nummer</div>
    <div>Schadensbeschreibung</div>
    <div>Kostenstelle</div>
    <div>ET-Listenpreis gesamt</div>
    <div>Reparaturstatus</div>
    <div>Abgerechnet</div>
    <div className="text-right">Kalk. Summe</div>
  </div>
);

// ==========================================
// DamageRow Component
// ==========================================
type DamageRowProps = {
  item: DamageItem;
  isSelected: boolean;
  onToggleSelect: () => void;
  onClick: () => void;
};

const DamageRow: React.FC<DamageRowProps> = ({ item, isSelected, onToggleSelect, onClick }) => {
  const getRepairStatusColor = (status: RepairStatus) => {
    switch (status) {
      case "Abgeschlossen !":
        return "text-green-600";
      case "Offene Kalkulation !":
      default:
        return "text-red-500";
    }
  };

  const getBilledColor = (billed: BillingStatus) => {
    if (billed.startsWith("Ja")) {
      return "text-green-600";
    }
    return "text-gray-500";
  };

  return (
    <div 
      onClick={onClick}
      className="grid grid-cols-[50px_1.2fr_1.2fr_2.5fr_1fr_1.5fr_1.8fr_1.2fr_1.2fr] gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50/40 transition-colors text-[14px] items-center cursor-pointer"
    >
      {/* Checkbox */}
      <div className="flex justify-center" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onToggleSelect}
          className={`w-[18px] h-[18px] rounded border flex items-center justify-center transition-all ${
            isSelected
              ? "bg-gray-100 border-gray-400 text-gray-600"
              : "bg-white border-gray-300 text-transparent hover:border-gray-400"
          }`}
        >
          <Check size={12} strokeWidth={3} className={isSelected ? "opacity-100" : "opacity-0"} />
        </button>
      </div>

      {/* Kalk.Datum */}
      <div className="font-semibold whitespace-nowrap">
        <span className="text-blue-600 font-bold mr-1">{item.calcDate}</span>
        <span className="text-gray-500 font-medium">{item.artText}</span>
      </div>

      {/* Boels-Nummer */}
      <div className="text-red-500 font-bold font-mono">
        {item.boelsNumber}
      </div>

      {/* Schadensbeschreibung */}
      <div className="text-blue-600 font-semibold whitespace-pre-line leading-snug">
        {item.description}
      </div>

      {/* Kostenstelle */}
      <div className="text-[#ff6b6b] font-bold">
        {item.costCenter}
      </div>

      {/* ET-Listenpreis gesamt */}
      <div className="text-blue-600 font-bold">
        {item.listPrice}
      </div>

      {/* Reparaturstatus */}
      <div className={`font-bold ${getRepairStatusColor(item.repairStatus)}`}>
        {item.repairStatus}
      </div>

      {/* Abgerechnet */}
      <div className={`font-semibold ${getBilledColor(item.billed)}`}>
        {item.billed}
      </div>

      {/* Kalk. Summe */}
      <div className="text-right text-blue-600 font-bold">
        {item.calcSum}
      </div>
    </div>
  );
};

// ==========================================
// Main DamageReportOverview Component
// ==========================================
const DamageReportOverview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useSelector((state: RootState) => state.search.term);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const initialItems: DamageItem[] = [
    {
      id: "131900141",
      calcDate: "12.3.2026",
      artText: "Art.",
      boelsNumber: "131900141",
      description: "Test",
      costCenter: "Kd",
      listPrice: "77,50 €",
      repairStatus: "Offene Kalkulation !",
      billed: "-",
      calcSum: "1.178,00 €"
    },
    {
      id: "124180462",
      calcDate: "12.3.2026",
      artText: "Art.",
      boelsNumber: "124180462",
      description: "asfrhgjzhuk",
      costCenter: "Kd",
      listPrice: "77,50 €",
      repairStatus: "Offene Kalkulation !",
      billed: "-",
      calcSum: "408,00 €"
    },
    {
      id: "120980918",
      calcDate: "12.3.2026",
      artText: "Art.",
      boelsNumber: "120980918",
      description: "fdgdgd",
      costCenter: "Kd",
      listPrice: "77,50 €",
      repairStatus: "Offene Kalkulation !",
      billed: "-",
      calcSum: "518,00 €"
    },
    {
      id: "131900141-2",
      calcDate: "12.3.2026",
      artText: "Art.",
      boelsNumber: "131900141",
      description: "Test",
      costCenter: "Kd",
      listPrice: "77,50 €",
      repairStatus: "Offene Kalkulation !",
      billed: "-",
      calcSum: "387,00 €"
    },
    {
      id: "131900141-3",
      calcDate: "12.3.2026",
      artText: "Art.",
      boelsNumber: "131900141",
      description: "Test",
      costCenter: "Kd",
      listPrice: "77,50 €",
      repairStatus: "Offene Kalkulation !",
      billed: "-",
      calcSum: "1.321,00 €"
    },
    {
      id: "131900141-4",
      calcDate: "12.3.2026",
      artText: "Art.",
      boelsNumber: "131900141",
      description: "Test",
      costCenter: "Kd",
      listPrice: "77,50 €",
      repairStatus: "Offene Kalkulation !",
      billed: "-",
      calcSum: "1.321,00 €"
    },
    {
      id: "131900141-5",
      calcDate: "12.3.2026",
      artText: "Art.",
      boelsNumber: "131900141",
      description: "Test",
      costCenter: "Kd",
      listPrice: "77,50 €",
      repairStatus: "Offene Kalkulation !",
      billed: "-",
      calcSum: "1.321,00 €"
    },
    {
      id: "131900141-6",
      calcDate: "12.3.2026",
      artText: "Art.",
      boelsNumber: "131900141",
      description: "Test",
      costCenter: "Kd",
      listPrice: "77,50 €",
      repairStatus: "Abgeschlossen !",
      billed: "Ja, Insp",
      calcSum: "1.321,00 €"
    },
    {
      id: "131900141-7",
      calcDate: "12.3.2026",
      artText: "Art.",
      boelsNumber: "131900141",
      description: "Hintere Lampe Erneuert,\nHintere Scheibe\nbeschädigt",
      costCenter: "Kd",
      listPrice: "00 €",
      repairStatus: "Abgeschlossen !",
      billed: "Ja, MV",
      calcSum: "00 €"
    },
    // Page 2 dummy items
    {
      id: "131900142",
      calcDate: "13.3.2026",
      artText: "Art.",
      boelsNumber: "131900142",
      description: "Bremse defekt",
      costCenter: "Kd",
      listPrice: "120,00 €",
      repairStatus: "Offene Kalkulation !",
      billed: "-",
      calcSum: "2.450,00 €"
    },
    {
      id: "124180463",
      calcDate: "14.3.2026",
      artText: "Art.",
      boelsNumber: "124180463",
      description: "Spiegel gebrochen",
      costCenter: "Kd",
      listPrice: "45,00 €",
      repairStatus: "Abgeschlossen !",
      billed: "Ja, Insp",
      calcSum: "150,00 €"
    },
    {
      id: "120980919",
      calcDate: "15.3.2026",
      artText: "Art.",
      boelsNumber: "120980919",
      description: "Hydraulikschlauch undicht",
      costCenter: "Kd",
      listPrice: "210,00 €",
      repairStatus: "Offene Kalkulation !",
      billed: "-",
      calcSum: "890,00 €"
    },
    {
      id: "131900143",
      calcDate: "16.3.2026",
      artText: "Art.",
      boelsNumber: "131900143",
      description: "Reifen platt",
      costCenter: "Kd",
      listPrice: "180,00 €",
      repairStatus: "Abgeschlossen !",
      billed: "Ja, MV",
      calcSum: "320,00 €"
    },
    {
      id: "131900144",
      calcDate: "17.3.2026",
      artText: "Art.",
      boelsNumber: "131900144",
      description: "Lichtmaschine defekt",
      costCenter: "Kd",
      listPrice: "350,00 €",
      repairStatus: "Offene Kalkulation !",
      billed: "-",
      calcSum: "950,00 €"
    }
  ];

  const [selectedIds, setSelectedIds] = useState<string[]>(initialItems.map(item => item.id));

  const toggleSelect = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Routing logic
  const pathParts = location.pathname.split("/").filter(Boolean);
  const isOverview = location.pathname === "/damage-report/damage-overview";
  const detailId = 
    pathParts.length === 3 && pathParts[1] === "damage-overview"
      ? pathParts[2]
      : null;

  const handleRowClick = (item: DamageItem) => {
    // Strip suffix if any for routing clean Boels number
    const targetId = item.boelsNumber;
    navigate(`/damage-report/damage-overview/${targetId}`);
  };

  const handleBack = () => {
    navigate("/damage-report/damage-overview");
  };

  // Filter logic
  const filteredItems = initialItems.filter(
    (item) =>
      item.calcDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.boelsNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.costCenter.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.repairStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.billed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Suspense fallback={<div className="text-center py-10 text-gray-500 animate-pulse font-medium">Loading...</div>}>
      {isOverview ? (
        <div className="flex flex-col min-h-screen w-full p-7 sm:p-8 bg-white border border-gray-300 rounded-md">
          <div className="flex-1 flex flex-col">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Damage Report Overview</h2>

              <UniversalDropdown
                trigger={
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-gray-300 transition-all shadow-sm">
                    - Aktionen -
                    <ChevronDown size={16} />
                  </button>
                }
                align="right"
                className="bg-white border-gray-100 !py-0 !shadow-2xl !rounded-xl overflow-hidden"
              >
                <div className="flex flex-col min-w-[260px] pb-2">
                  {/* Blue Header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-blue-600 text-white mb-2">
                    <span className="text-sm font-bold">- Aktionen -</span>
                  </div>

                  {/* Group: Ansicht */}
                  <div className="px-4 py-1.5 text-sm font-bold text-gray-900">Ansicht...</div>
                  <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">100 Zeilen anzeigen</button>
                  <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">300 Zeilen anzeigen</button>
                  <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">900 Zeilen anzeigen</button>
                  <button 
                    onClick={() => setSelectedIds(initialItems.map(item => item.id))}
                    className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors mb-2"
                  >
                    Alle auswählen
                  </button>

                  {/* Group: Gewähltes Dokument */}
                  <div className="px-4 py-1.5 text-sm font-bold text-gray-900 border-t border-gray-50 mt-1 pt-2">Gewähltes Dokument...</div>
                  <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors">Bearbeiten</button>
                  <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors mb-2">Duplizieren</button>

                  {/* Group: Gewählte Dokumente */}
                  <div className="px-4 py-1.5 text-sm font-bold text-gray-900 border-t border-gray-50 mt-1 pt-2">Gewählte Dokumente...</div>
                  <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors text-red-500 font-medium">Löschen</button>
                  <button 
                    onClick={() => setSelectedIds([])}
                    className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors mb-2"
                  >
                    Auswahl aufheben
                  </button>
                </div>
              </UniversalDropdown>
            </div>

            <hr className="border-gray-200 mb-8" />

            {/* Table/Card Container */}
            <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6 shadow-sm">
              <TableHeader />
              <div className="divide-y divide-gray-100">
                {getCurrentPageItems().length > 0 ? (
                  getCurrentPageItems().map((item) => (
                    <DamageRow
                      key={item.id}
                      item={item}
                      isSelected={selectedIds.includes(item.id)}
                      onToggleSelect={() => toggleSelect(item.id)}
                      onClick={() => handleRowClick(item)}
                    />
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 px-4">
                    <h3 className="text-xl font-bold text-gray-900">Keine Daten gefunden</h3>
                    <p className="text-gray-400 mt-2">Versuchen Sie es mit anderen Suchkriterien.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Pagination Container */}
            <div className="mt-auto pt-6">
              {filteredItems.length > 0 && (
                <div className="w-full flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <DamageReportDetail id={detailId || ""} onBack={handleBack} />
      )}
    </Suspense>
  );
};

export default DamageReportOverview;
