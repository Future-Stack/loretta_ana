import React, { useState, useEffect, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Check, Calendar } from "lucide-react";
import type { RootState } from "@/redux/store";
import Pagination from "@/components/views components/machine/Pagination";
import UniversalDropdown from "@/common/dropdown/UniversalDropdown";

const CheckListDetail = lazy(() => import("./CheckListDetail"));

// ==========================================
// Types
// ==========================================
type ChecklistItem = {
  id: string;
  subgroup: string;
  bezeichnung: string;
  todo: string;
  pruefdokument: string;
  pruefer1: string;
  pruefer2: string;
  serviceType: string;
  testcode: string;
};

// ==========================================
// TableHeader Component
// ==========================================
const TableHeader: React.FC = () => (
  <div className="grid grid-cols-[80px_1fr_1.5fr_1.2fr_1.5fr_1fr_2fr_1.2fr_2fr] gap-4 px-6 py-4 bg-gray-50/70 border-b border-gray-200 text-[13px] font-bold text-gray-400">
    <div className="flex justify-center"></div>
    <div>Subgruppe</div>
    <div>Bezeichnung</div>
    <div>To-Do</div>
    <div>Prüfdokument</div>
    <div>Prüfer1</div>
    <div>Prüfer2</div>
    <div className="text-green-600">Service Type</div>
    <div className="text-red-500">Testcode</div>
  </div>
);

// ==========================================
// ChecklistRow Component
// ==========================================
type ChecklistRowProps = {
  item: ChecklistItem;
  isSelected: boolean;
  onToggleSelect: () => void;
  onClick: () => void;
};

const ChecklistRow: React.FC<ChecklistRowProps> = ({ item, isSelected, onToggleSelect, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="grid grid-cols-[80px_1fr_1.5fr_1.2fr_1.5fr_1fr_2fr_1.2fr_2fr] gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50/40 transition-colors text-[14px] items-center cursor-pointer"
    >
      {/* Checkbox and Orange Calendar Icon */}
      <div className="flex items-center gap-3 justify-center" onClick={(e) => e.stopPropagation()}>
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
        <span className="text-[#ff7a30]" title="Details/Termine">
          <Calendar size={18} strokeWidth={2.5} />
        </span>
      </div>

      {/* Subgruppe */}
      <div className="text-green-600 font-bold">
        {item.subgroup}
      </div>

      {/* Bezeichnung */}
      <div className="text-blue-600 font-semibold leading-snug whitespace-pre-line">
        {item.bezeichnung}
      </div>

      {/* To-Do */}
      <div className="text-gray-800 font-medium">
        {item.todo}
      </div>

      {/* Prüfdokument */}
      <div className="text-blue-600 font-semibold">
        {item.pruefdokument}
      </div>

      {/* Prüfer1 */}
      <div className="text-gray-800 font-medium">
        {item.pruefer1}
      </div>

      {/* Prüfer2 */}
      <div className="text-gray-800 font-medium leading-tight whitespace-pre-line">
        {item.pruefer2}
      </div>

      {/* Service Type */}
      <div className="text-green-600 font-bold">
        {item.serviceType}
      </div>

      {/* Testcode */}
      <div className="text-[#ff5252] font-semibold leading-tight whitespace-pre-line">
        {item.testcode}
      </div>
    </div>
  );
};

// ==========================================
// Main Checklist Component
// ==========================================
const CheckList: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useSelector((state: RootState) => state.search.term);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const initialItems: ChecklistItem[] = [
    {
      id: "14618",
      subgroup: "14618",
      bezeichnung: "Kraftstofftank\n3000l",
      todo: "Tankprüfung ADR",
      pruefdokument: "ADR-Prüfprotokoll",
      pruefer1: "Extern",
      pruefer2: "Fachkraft für ADR\nPrüfung (TPG, TÜV-S...)",
      serviceType: "ESC-912",
      testcode: "Safety Check Periodical\nInspection"
    },
    {
      id: "14618-2",
      subgroup: "14618",
      bezeichnung: "Kraftstofftank\n3000l",
      todo: "Tankprüfung ADR",
      pruefdokument: "ADR-Prüfprotokoll",
      pruefer1: "Extern",
      pruefer2: "Fachkraft für ADR\nPrüfung (TPG, TÜV-S...)",
      serviceType: "ESC-912",
      testcode: "Safety Check Periodical\nInspection"
    },
    {
      id: "14618-3",
      subgroup: "14618",
      bezeichnung: "Kraftstofftank\n3000l",
      todo: "Tankprüfung ADR",
      pruefdokument: "ADR-Prüfprotokoll",
      pruefer1: "Extern",
      pruefer2: "Fachkraft für ADR\nPrüfung (TPG, TÜV-S...)",
      serviceType: "ESC-912",
      testcode: "Safety Check Periodical\nInspection"
    },
    {
      id: "14618-4",
      subgroup: "14618",
      bezeichnung: "Kraftstofftank\n3000l",
      todo: "Tankprüfung ADR",
      pruefdokument: "ADR-Prüfprotokoll",
      pruefer1: "Extern",
      pruefer2: "Fachkraft für ADR\nPrüfung (TPG, TÜV-S...)",
      serviceType: "ESC-912",
      testcode: "Safety Check Periodical\nInspection"
    },
    {
      id: "14618-5",
      subgroup: "14618",
      bezeichnung: "Kraftstofftank\n3000l",
      todo: "Tankprüfung ADR",
      pruefdokument: "ADR-Prüfprotokoll",
      pruefer1: "Extern",
      pruefer2: "Fachkraft für ADR\nPrüfung (TPG, TÜV-S...)",
      serviceType: "ESC-912",
      testcode: "Safety Check Periodical\nInspection"
    },
    {
      id: "14618-6",
      subgroup: "14618",
      bezeichnung: "Kraftstofftank\n3000l",
      todo: "Tankprüfung ADR",
      pruefdokument: "ADR-Prüfprotokoll",
      pruefer1: "Extern",
      pruefer2: "Fachkraft für ADR\nPrüfung (TPG, TÜV-S...)",
      serviceType: "ESC-912",
      testcode: "Safety Check Periodical\nInspection"
    },
    {
      id: "14618-7",
      subgroup: "14618",
      bezeichnung: "Kraftstofftank\n3000l",
      todo: "Tankprüfung ADR",
      pruefdokument: "ADR-Prüfprotokoll",
      pruefer1: "Extern",
      pruefer2: "Fachkraft für ADR\nPrüfung (TPG, TÜV-S...)",
      serviceType: "ESC-912",
      testcode: "Safety Check Periodical\nInspection"
    },
    {
      id: "14618-8",
      subgroup: "14618",
      bezeichnung: "Kraftstofftank\n3000l",
      todo: "Tankprüfung ADR",
      pruefdokument: "ADR-Prüfprotokoll",
      pruefer1: "Extern",
      pruefer2: "Fachkraft für ADR\nPrüfung (TPG, TÜV-S...)",
      serviceType: "ESC-912",
      testcode: "Safety Check Periodical\nInspection"
    },
    {
      id: "14618-9",
      subgroup: "14618",
      bezeichnung: "Kraftstofftank\n3000l",
      todo: "Tankprüfung ADR",
      pruefdokument: "ADR-Prüfprotokoll",
      pruefer1: "Extern",
      pruefer2: "Fachkraft für ADR\nPrüfung (TPG, TÜV-S...)",
      serviceType: "ESC-912",
      testcode: "Safety Check Periodical\nInspection"
    },
    // Page 2 dummy items
    {
      id: "12345",
      subgroup: "12345",
      bezeichnung: "Raupenbagger 15t",
      todo: "Sicherheitsprüfung TÜV",
      pruefdokument: "TÜV-Prüfprotokoll",
      pruefer1: "Extern",
      pruefer2: "Fachkraft für Baumaschinen",
      serviceType: "ESC-815",
      testcode: "Safety Check Annual"
    },
    {
      id: "12345-2",
      subgroup: "12345",
      bezeichnung: "Raupenbagger 15t",
      todo: "Sicherheitsprüfung TÜV",
      pruefdokument: "TÜV-Prüfprotokoll",
      pruefer1: "Extern",
      pruefer2: "Fachkraft für Baumaschinen",
      serviceType: "ESC-815",
      testcode: "Safety Check Annual"
    },
    {
      id: "12345-3",
      subgroup: "12345",
      bezeichnung: "Raupenbagger 15t",
      todo: "Sicherheitsprüfung TÜV",
      pruefdokument: "TÜV-Prüfprotokoll",
      pruefer1: "Extern",
      pruefer2: "Fachkraft für Baumaschinen",
      serviceType: "ESC-815",
      testcode: "Safety Check Annual"
    },
    {
      id: "12345-4",
      subgroup: "12345",
      bezeichnung: "Raupenbagger 15t",
      todo: "Sicherheitsprüfung TÜV",
      pruefdokument: "TÜV-Prüfprotokoll",
      pruefer1: "Extern",
      pruefer2: "Fachkraft für Baumaschinen",
      serviceType: "ESC-815",
      testcode: "Safety Check Annual"
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
  const isOverview = location.pathname === "/examinations-info/examinations-checklist";
  const detailId = 
    pathParts.length === 3 && pathParts[1] === "examinations-checklist"
      ? pathParts[2]
      : null;

  const handleRowClick = (item: ChecklistItem) => {
    navigate(`/examinations-info/examinations-checklist/${item.subgroup}`);
  };

  const handleBack = () => {
    navigate("/examinations-info/examinations-checklist");
  };

  // Filter logic
  const filteredItems = initialItems.filter(
    (item) =>
      item.subgroup.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.bezeichnung.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.todo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pruefdokument.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pruefer1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.pruefer2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.testcode.toLowerCase().includes(searchTerm.toLowerCase())
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
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Examinations Checklist</h2>

              <UniversalDropdown
                trigger={
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-gray-300 transition-all shadow-sm cursor-pointer">
                    - Aktionen -
                    <ChevronDown size={16} />
                  </button>
                }
                align="right"
                className="bg-white border-gray-100 !py-0 !shadow-2xl !rounded-xl overflow-hidden"
              >
                <div className="flex flex-col min-w-[260px] pb-2">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-blue-600 text-white mb-2">
                    <span className="text-sm font-bold">- Aktionen -</span>
                  </div>
                  <div className="px-4 py-1.5 text-sm font-bold text-gray-900">Ansicht...</div>
                  <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors cursor-pointer">100 Zeilen anzeigen</button>
                  <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors cursor-pointer">300 Zeilen anzeigen</button>
                  <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors cursor-pointer">900 Zeilen anzeigen</button>
                  <button 
                    onClick={() => setSelectedIds(initialItems.map(item => item.id))}
                    className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors mb-2 cursor-pointer"
                  >
                    Alle auswählen
                  </button>
                  <div className="px-4 py-1.5 text-sm font-bold text-gray-900 border-t border-gray-50 mt-1 pt-2">Gewähltes Dokument...</div>
                  <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors cursor-pointer">Bearbeiten</button>
                  <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors mb-2 cursor-pointer">Duplizieren</button>
                  <div className="px-4 py-1.5 text-sm font-bold text-gray-900 border-t border-gray-50 mt-1 pt-2">Gewählte Dokumente...</div>
                  <button className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors text-red-500 font-medium cursor-pointer">Löschen</button>
                  <button 
                    onClick={() => setSelectedIds([])}
                    className="px-8 py-1.5 text-sm text-gray-700 hover:bg-gray-50 w-full text-left transition-colors mb-2 cursor-pointer"
                  >
                    Auswahl aufheben
                  </button>
                </div>
              </UniversalDropdown>
            </div>

            <hr className="border-gray-200 mb-8" />

            {/* Table Container */}
            <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6 shadow-sm">
              <TableHeader />
              <div className="divide-y divide-gray-100">
                {getCurrentPageItems().length > 0 ? (
                  getCurrentPageItems().map((item) => (
                    <ChecklistRow
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
        <CheckListDetail id={detailId || ""} onBack={handleBack} />
      )}
    </Suspense>
  );
};

export default CheckList;
