import React, { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import SparePartCard from "@/components/views components/spareParts/SparePartCard";
import SparePartDetail from "@/components/views components/spareParts/SparePartDetail/SparePartDetail";
import type { SparePart } from "@/components/views components/spareParts/types";

// ✅ Lazy-load Pagination
const Pagination = lazy(() =>
  import("@/components/views components/machine/Pagination")
);

const SparePartsOverview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useSelector((state: RootState) => state.search.term);

  // ✅ Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const spareParts: SparePart[] = [
    {
      id: "1",
      nummer: "40635",
      bezeichnung: "Startkosten pro Einsatz",
      type: "Störungseinsatz",
      imageUrl: "/image 7.png",
      lagerort: "TD467-AT",
      lagerstand: "96",
      listenpreis: "103,00 (€)",
      einkaufspreis: "103,00 (€)",
      produktgruppe: "Störungseinsatz",
      etLieferanten: "40635",
      lieferant: "TD467-AT",
      herstellernummer: "40635",
    },
    {
      id: "2",
      nummer: "40635",
      bezeichnung: "Startkosten pro Einsatz",
      type: "Störungseinsatz",
      imageUrl: "/image 7.png",
      lagerort: "TD467-AT",
      lagerstand: "96",
      listenpreis: "103,00 (€)",
      einkaufspreis: "103,00 (€)",
      produktgruppe: "Störungseinsatz",
      etLieferanten: "40635",
      lieferant: "TD467-AT",
      herstellernummer: "40635",
    },
    {
      id: "3",
      nummer: "40635",
      bezeichnung: "Startkosten pro Einsatz",
      type: "Störungseinsatz",
      imageUrl: "/image 7.png",
      lagerort: "TD467-AT",
      lagerstand: "96",
      listenpreis: "103,00 (€)",
      einkaufspreis: "103,00 (€)",
      produktgruppe: "Störungseinsatz",
      etLieferanten: "40635",
      lieferant: "TD467-AT",
      herstellernummer: "40635",
    },
    {
      id: "4",
      nummer: "40635",
      bezeichnung: "Startkosten pro Einsatz",
      type: "Störungseinsatz",
      imageUrl: "/image 7.png",
      lagerort: "TD467-AT",
      lagerstand: "96",
      listenpreis: "103,00 (€)",
      einkaufspreis: "103,00 (€)",
      produktgruppe: "Störungseinsatz",
      etLieferanten: "40635",
      lieferant: "TD467-AT",
      herstellernummer: "40635",
    },
    {
      id: "5",
      nummer: "40635",
      bezeichnung: "Startkosten pro Einsatz",
      type: "Störungseinsatz",
      imageUrl: "/image 7.png",
      lagerort: "TD467-AT",
      lagerstand: "96",
      listenpreis: "103,00 (€)",
      einkaufspreis: "103,00 (€)",
      produktgruppe: "Störungseinsatz",
      etLieferanten: "40635",
      lieferant: "TD467-AT",
      herstellernummer: "40635",
    },
    {
      id: "6",
      nummer: "40635",
      bezeichnung: "Startkosten pro Einsatz",
      type: "Störungseinsatz",
      imageUrl: "/image 7.png",
      lagerort: "TD467-AT",
      lagerstand: "96",
      listenpreis: "103,00 (€)",
      einkaufspreis: "103,00 (€)",
      produktgruppe: "Störungseinsatz",
      etLieferanten: "40635",
      lieferant: "TD467-AT",
      herstellernummer: "40635",
    },
    {
      id: "7",
      nummer: "40635",
      bezeichnung: "Startkosten pro Einsatz",
      type: "Störungseinsatz",
      imageUrl: "/image 7.png",
      lagerort: "TD467-AT",
      lagerstand: "96",
      listenpreis: "103,00 (€)",
      einkaufspreis: "103,00 (€)",
      produktgruppe: "Störungseinsatz",
      etLieferanten: "40635",
      lieferant: "TD467-AT",
      herstellernummer: "40635",
    },
    {
      id: "8",
      nummer: "40635",
      bezeichnung: "Startkosten pro Einsatz",
      type: "Störungseinsatz",
      imageUrl: "/image 7.png",
      lagerort: "TD467-AT",
      lagerstand: "96",
      listenpreis: "103,00 (€)",
      einkaufspreis: "103,00 (€)",
      produktgruppe: "Störungseinsatz",
      etLieferanten: "40635",
      lieferant: "TD467-AT",
      herstellernummer: "40635",
    },
    {
      id: "9",
      nummer: "40635",
      bezeichnung: "Startkosten pro Einsatz",
      type: "Störungseinsatz",
      imageUrl: "/image 7.png",
      lagerort: "TD467-AT",
      lagerstand: "96",
      listenpreis: "103,00 (€)",
      einkaufspreis: "103,00 (€)",
      produktgruppe: "Störungseinsatz",
      etLieferanten: "40635",
      lieferant: "TD467-AT",
      herstellernummer: "40635",
    },
    {
      id: "10",
      nummer: "40635",
      bezeichnung: "Startkosten pro Einsatz",
      type: "Störungseinsatz",
      imageUrl: "/image 7.png",
      lagerort: "TD467-AT",
      lagerstand: "96",
      listenpreis: "103,00 (€)",
      einkaufspreis: "103,00 (€)",
      produktgruppe: "Störungseinsatz",
      etLieferanten: "40635",
      lieferant: "TD467-AT",
      herstellernummer: "40635",
    },
    {
      id: "11",
      nummer: "40635",
      bezeichnung: "Startkosten pro Einsatz",
      type: "Störungseinsatz",
      imageUrl: "/image 7.png",
      lagerort: "TD467-AT",
      lagerstand: "96",
      listenpreis: "103,00 (€)",
      einkaufspreis: "103,00 (€)",
      produktgruppe: "Störungseinsatz",
      etLieferanten: "40635",
      lieferant: "TD467-AT",
      herstellernummer: "40635",
    },
    {
      id: "12",
      nummer: "40635",
      bezeichnung: "Test",
      type: "Störungseinsatz",
      imageUrl: "/image 7.png",
      lagerort: "TD467-AT",
      lagerstand: "96",
      listenpreis: "103,00 (€)",
      einkaufspreis: "103,00 (€)",
      produktgruppe: "Störungseinsatz",
      etLieferanten: "40635",
      lieferant: "TD467-AT",
      herstellernummer: "40635",
    },
    {
      id: "13",
      nummer: "40635",
      bezeichnung: "search",
      type: "Störungseinsatz",
      imageUrl: "/image 7.png",
      lagerort: "TD467-AT",
      lagerstand: "96",
      listenpreis: "103,00 (€)",
      einkaufspreis: "103,00 (€)",
      produktgruppe: "Störungseinsatz",
      etLieferanten: "40635",
      lieferant: "TD467-AT",
      herstellernummer: "40635",
    },
    {
      id: "14",
      nummer: "00000",
      bezeichnung: "Startkosten pro Einsatz",
      type: "Störungseinsatz",
      imageUrl: "/image 7.png",
      lagerort: "TD467-AT",
      lagerstand: "96",
      listenpreis: "103,00 (€)",
      einkaufspreis: "103,00 (€)",
      produktgruppe: "Störungseinsatz",
      etLieferanten: "40635",
      lieferant: "TD467-AT",
      herstellernummer: "40635",
    },
  ];

  // ✅ Apply search filter
  const filteredParts = spareParts.filter(
    (part) =>
      part.nummer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.bezeichnung.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.lagerort.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredParts.length / itemsPerPage);

  const getCurrentPageParts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredParts.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // ✅ Detect detail view or overview from URL
  const pathParts = location.pathname.split("/").filter(Boolean);
  const isOverview = location.pathname === "/spare-parts/spare-overview";
  const detailId =
    pathParts.length === 3 && pathParts[1] === "spare-overview" ? pathParts[2] : null;
  const selectedPart = spareParts.find((p) => p.id === detailId);

  // ✅ Handlers
  const handleCardClick = (part: SparePart) => {
    navigate(`/spare-parts/spare-overview/${part.id}`);
  };

  const handleBack = () => {
    navigate("/spare-parts/spare-overview");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Render
  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-lg border border-gray-300 shadow-sm p-6">
        <Suspense fallback={<div className="text-center py-10 text-gray-500">Loading...</div>}>
          {isOverview ? (
            <>
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-300">
                <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
              </div>

              {/* Cards List */}
              <div className="grid gap-3 bg-gray-50 p-3 rounded-md">
                {getCurrentPageParts().length > 0 ? (
                  getCurrentPageParts().map((part) => (
                    <SparePartCard
                      key={part.id}
                      part={part}
                      onClick={() => handleCardClick(part)}
                    />
                  ))
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <p className="text-lg">No results found for "{searchTerm}"</p>
                    <p className="text-sm mt-2">Try adjusting your search terms</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {filteredParts.length > 0 && (
                <div className="mt-6 flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </>
          ) : selectedPart ? (
            <SparePartDetail part={selectedPart} onBack={handleBack} />
          ) : (
            <p className="text-center mt-10 text-gray-500">Spare part not found</p>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default SparePartsOverview; 