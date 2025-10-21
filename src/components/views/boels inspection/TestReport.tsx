// import React, { useState, useEffect, lazy, Suspense } from "react";
// import { useSelector } from "react-redux";
// import type { RootState } from "@/redux/store";
// import ProtocolCard from "@/components/views components/boels-inspection/ProtocolCard";
// import ProtocolDetailMultiPat from "@/components/views components/boels-inspection/ProtocolDetailMultiPat";
// import ProtocolDetailBoelsInspection from "@/components/views components/boels-inspection/ProtocolDetailBoelsInsection";
// import type { InspectionProtocol } from "@/components/views components/boels-inspection/types";
// import { LinkIcon } from "lucide-react";

// // ✅ Lazy-load Pagination
// const Pagination = lazy(() =>
//   import("@/components/views components/machine/Pagination")
// );

// const TestReport: React.FC = () => {
//   const [selectedId, setSelectedId] = useState<string | null>(null);
//   const [activeTab, setActiveTab] = useState("Prüfprotokoll-MultiPat");

//   // ✅ Search term from Redux store (same as MachineOverview)
//   const searchTerm = useSelector((state: RootState) => state.search.term);

//   // ✅ Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   // ✅ Dummy data
  // const protocols: InspectionProtocol[] = [
  //   {
  //     id: "1",
  //     artikelnummer: "Artikelnummer",
  //     datum: "26.09.2025",
  //     maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
  //     deoPrüft: "26.09.2025",
  //     benutzer: "Jurick Ivan",
  //     depot: "Depot 578",
  //     status: "Visueller Prüfung",
  //     machineNummer: "101020296",
  //     machineDescription: "Thermobile IMA 61R Diesel Heater 61kW",
  //     zahlersstand: "120 BH",
  //     prueftAm: "23.04.2018",
  //     boelsDepot: "Depot 578",
  //     prueftVonHerr: "Bugar Peter",
  //     unterzeichner: "Peter Bugar",
  //     pruefungsart: "Visuelle Prüfung, Erdung Prüfung, Isolierung Test",
  //     schutzklasse: "I IP",
  //     elkHaelterung: "940 Watt",
  //     schutzleiterlaenge: "2,5 Meter",
  //     nenspannung: "230 Volt",
  //     messungen: {
  //       erdverbindung: "0,21",
  //       isolierung: ">99,99",
  //       subLeckstrom: "0,31",
  //       leckstrom: "0,10",
  //       leckstromValue: "0,22",
  //       lastLeckstrom: "0,03",
  //     },
  //     funktionsmessungen: {
  //       funktionsMessungen: "L1",
  //       spanningInVolt: "230",
  //       stromInAmpere: "16",
  //       leistungInWatt: "940",
  //       teststatus: "OK",
  //     },
  //     pruefprotokollDetails: {
  //       testcodes: "Test mit Multi Pat Kasten für 230V",
  //       bemerkung: "Gerät ist in Ordnung",
  //       sonstiges: "Keine Mängel",
  //       gerate_status: "In Ordnung",
  //     },
  //     funktionsprufung: {
  //       funktionsprufung: "In Ordnung",
  //       art_der_prufung: "MultiPat Prüfung",
  //       gerate_vermietereit: "Ja",
  //       nachster_prufung_am: "23.04.2019",
  //       status: "In Ordnung",
  //     },
  //   },
  //   {
  //     id: "2",
  //     artikelnummer: "Artikelnummer",
  //     datum: "26.09.2025",
  //     maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
  //     deoPrüft: "26.09.2025",
  //     benutzer: "Jurick Ivan",
  //     depot: "Depot 578",
  //     status: "Visueller Prüfung",
  //     machineNummer: "101020296",
  //   },
  //   {
  //     id: "3",
  //     artikelnummer: "Artikelnummer",
  //     datum: "26.09.2025",
  //     maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
  //     deoPrüft: "26.09.2025",
  //     machineNummer: "101020296",
  //     benutzer: "Jurick Ivan",
  //     depot: "Depot 578",
  //     status: "Boels Inspection",
  //   },
  //   {
  //     id: "4",
  //     artikelnummer: "Artikelnummer",
  //     datum: "26.09.2025",
  //     maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
  //     deoPrüft: "26.09.2025",
  //     benutzer: "Jurick Ivan",
  //     depot: "Depot 578",
  //     machineNummer: "101020296",
  //     status: "Visueller Prüfung",
  //   },
  //   {
  //     id: "5",
  //     artikelnummer: "Artikelnummer",
  //     datum: "26.09.2025",
  //     maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
  //     deoPrüft: "26.09.2025",
  //     benutzer: "Jurick Ivan",
  //     machineNummer: "101020296",
  //     depot: "Depot 578",
  //     status: "Visueller Prüfung",
  //   },
  //   {
  //     id: "6",
  //     artikelnummer: "Artikelnummer",
  //     datum: "26.09.2025",
  //     maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
  //     deoPrüft: "26.09.2025",
  //     machineNummer: "101020296",
  //     benutzer: "Jurick Ivan",
  //     depot: "Depot 578",
  //     status: "Visueller Prüfung",
  //   },
  //   {
  //     id: "7",
  //     artikelnummer: "Artikelnummer",
  //     datum: "26.09.2025",
  //     maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
  //     deoPrüft: "26.09.2025",
  //     benutzer: "Jurick Ivan",
  //     depot: "Depot 578",
  //     machineNummer: "101020296",
  //     status: "Visueller Prüfung",
  //   },
  //   {
  //     id: "8",
  //     artikelnummer: "Artikelnummer",
  //     datum: "26.09.2025",
  //     maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
  //     deoPrüft: "26.09.2025",
  //     machineNummer: "101020296",
  //     benutzer: "Jurick Ivan",
  //     depot: "Depot 578",
  //     status: "Visueller Prüfung",
  //   },
  //   {
  //     id: "9",
  //     artikelnummer: "Artikelnummer",
  //     datum: "26.09.2025",
  //     maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
  //     deoPrüft: "26.09.2025",
  //     benutzer: "Jurick Ivan",
  //     machineNummer: "101020296",
  //     depot: "Depot 578",
  //     status: "Visueller Prüfung",
  //   },
  //   {
  //     id: "10",
  //     artikelnummer: "Artikelnummer",
  //     datum: "26.09.2025",
  //     maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
  //     deoPrüft: "26.09.2025",
  //     machineNummer: "101020296",
  //     benutzer: "Jurick Ivan",
  //     depot: "Depot 578",
  //     status: "Visueller Prüfung",
  //   },
  //   {
  //     id: "11",
  //     artikelnummer: "Artikelnummer",
  //     datum: "26.09.2025",
  //     maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
  //     deoPrüft: "26.09.2025",
  //     benutzer: "Jurick Ivan",
  //     depot: "Depot 578",
  //     machineNummer: "101020296",
  //     status: "Visueller Prüfung",
  //   },
  //   {
  //     id: "12",
  //     artikelnummer: "Artikelnummer",
  //     datum: "26.09.2025",
  //     maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
  //     deoPrüft: "26.09.2025",
  //     machineNummer: "101020296",
  //     benutzer: "Jurick Ivan",
  //     depot: "Depot 578",
  //     status: "Visueller Prüfung",
  //   },
  // ];

//   // ✅ Apply search filter
//   const filteredProtocols = protocols.filter(
//     (protocol) =>
//       protocol.maschine?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       protocol.status?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       protocol.benutzer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       protocol.machineNummer?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredProtocols.length / itemsPerPage);

//   const getCurrentPageProtocols = () => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return filteredProtocols.slice(startIndex, endIndex);
//   };

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchTerm]);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const selectedProtocol = protocols.find((p) => p.id === selectedId);

//   // ✅ Detail View
//   if (selectedId && selectedProtocol) {
//     return (
//       <div className="w-full bg-white p-6 rounded-md border border-gray-300">
//         <button
//           onClick={() => {
//             setSelectedId(null);
//             setActiveTab("Prüfprotokoll-MultiPat");
//           }}
//           className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6"
//         >
//           <img src="/back.svg" alt="Back" className="w-5 h-5 sm:w-6 sm:h-6" />
//           Back
//         </button>

//         {/* Tabs */}
//         <div className="flex gap-2 mb-6">
//           <button
//             onClick={() => setActiveTab("Prüfprotokoll-MultiPat")}
//             className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
//               activeTab === "Prüfprotokoll-MultiPat"
//                 ? "bg-orange-100 text-orange-600 border border-orange-300"
//                 : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-orange-50"
//             }`}
//           >
//             Prüfprotokoll-MultiPat
//           </button>
//           <button
//             onClick={() => setActiveTab("Boels Inspection")}
//             className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
//               activeTab === "Boels Inspection"
//                 ? "bg-orange-100 text-orange-600 border border-orange-300"
//                 : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-orange-50"
//             }`}
//           >
//             Boels Inspection
//           </button>
//           <button
//             onClick={() => setActiveTab("file-link")}
//             className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
//               activeTab === "file-link"
//                 ? "bg-orange-100 text-orange-600 border border-orange-300"
//                 : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-orange-50"
//             }`}
//           >
//             <LinkIcon size={16} className="inline-block mr-1" />
//           </button>
//         </div>

//         {/* Tab Content */}
//         {activeTab === "Prüfprotokoll-MultiPat" && (
//           <ProtocolDetailMultiPat protocol={selectedProtocol} />
//         )}
//         {activeTab === "Boels Inspection" && (
//           <ProtocolDetailBoelsInspection protocol={selectedProtocol} />
//         )}
//         {activeTab === "file-link" && (
//           <div className="flex items-center">
//             <LinkIcon size={16} className="inline-block mr-1" />
//             <span className="text-sm text-gray-600">Datei-Link</span>
//           </div>
//         )}
//       </div>
//     );
//   }

//   // ✅ List View
//   return (
//     <div className="w-full bg-white p-8 border border-gray-300 rounded-md">
//       <h2 className="text-2xl font-bold text-gray-900 mb-2">
//         Prüfprotokoll nach OVE/ÖNORM für Gerät:
//       </h2>
//       <p className="text-sm text-gray-600 mb-6">
//         14672062 Thermobile IMA 61R Diesel Heater 61kW
//       </p>

//       <Suspense fallback={<div className="text-center py-10 text-gray-500">Loading...</div>}>
//         <div className="space-y-3 bg-gray-50 p-4 rounded-md border border-gray-200">
//           {getCurrentPageProtocols().map((protocol) => (
//             <ProtocolCard
//               key={protocol.id}
//               protocol={protocol}
//               onClick={() => setSelectedId(protocol.id)}
//             />
//           ))}

//           {filteredProtocols.length === 0 && (
//             <p className="text-center text-gray-500 py-6">
//               No results found for "{searchTerm}"
//             </p>
//           )}
//         </div>

//         {/* ✅ Pagination */}
//         {filteredProtocols.length > 0 && (
//           <div className="mt-6 flex justify-center">
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//             />
//           </div>
//         )}
//       </Suspense>
//     </div>
//   );
// };

// export default TestReport;


import React, { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import ProtocolCard from "@/components/views components/boels-inspection/ProtocolCard";
import ProtocolDetailMultiPat from "@/components/views components/boels-inspection/ProtocolDetailMultiPat";
import ProtocolDetailBoelsInspection from "@/components/views components/boels-inspection/ProtocolDetailBoelsInsection";
import type { InspectionProtocol } from "@/components/views components/boels-inspection/types";
import { LinkIcon } from "lucide-react";

// ✅ Lazy-load Pagination
const Pagination = lazy(() =>
  import("@/components/views components/machine/Pagination")
);

const TestReport: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useSelector((state: RootState) => state.search.term);

  const [activeTab, setActiveTab] = useState("Prüfprotokoll-MultiPat");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // ✅ Dummy protocols
  const protocols: InspectionProtocol[] = [
    {
      id: "1",
      artikelnummer: "Artikelnummer",
      datum: "26.09.2025",
      maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      deoPrüft: "26.09.2025",
      benutzer: "Jurick Ivan",
      depot: "Depot 578",
      status: "Visueller Prüfung",
      machineNummer: "101020296",
      machineDescription: "Thermobile IMA 61R Diesel Heater 61kW",
      zahlersstand: "120 BH",
      prueftAm: "23.04.2018",
      boelsDepot: "Depot 578",
      prueftVonHerr: "Bugar Peter",
      unterzeichner: "Peter Bugar",
      pruefungsart: "Visuelle Prüfung, Erdung Prüfung, Isolierung Test",
      schutzklasse: "I IP",
      elkHaelterung: "940 Watt",
      schutzleiterlaenge: "2,5 Meter",
      nenspannung: "230 Volt",
      messungen: {
        erdverbindung: "0,21",
        isolierung: ">99,99",
        subLeckstrom: "0,31",
        leckstrom: "0,10",
        leckstromValue: "0,22",
        lastLeckstrom: "0,03",
      },
      funktionsmessungen: {
        funktionsMessungen: "L1",
        spanningInVolt: "230",
        stromInAmpere: "16",
        leistungInWatt: "940",
        teststatus: "OK",
      },
      pruefprotokollDetails: {
        testcodes: "Test mit Multi Pat Kasten für 230V",
        bemerkung: "Gerät ist in Ordnung",
        sonstiges: "Keine Mängel",
        gerate_status: "In Ordnung",
      },
      funktionsprufung: {
        funktionsprufung: "In Ordnung",
        art_der_prufung: "MultiPat Prüfung",
        gerate_vermietereit: "Ja",
        nachster_prufung_am: "23.04.2019",
        status: "In Ordnung",
      },
    },
    {
      id: "2",
      artikelnummer: "Artikelnummer",
      datum: "26.09.2025",
      maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      deoPrüft: "26.09.2025",
      benutzer: "Jurick Ivan",
      depot: "Depot 578",
      status: "Visueller Prüfung",
      machineNummer: "101020296",
    },
    {
      id: "3",
      artikelnummer: "Artikelnummer",
      datum: "26.09.2025",
      maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      deoPrüft: "26.09.2025",
      machineNummer: "101020296",
      benutzer: "Jurick Ivan",
      depot: "Depot 578",
      status: "Boels Inspection",
    },
    {
      id: "4",
      artikelnummer: "Artikelnummer",
      datum: "26.09.2025",
      maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      deoPrüft: "26.09.2025",
      benutzer: "Jurick Ivan",
      depot: "Depot 578",
      machineNummer: "101020296",
      status: "Visueller Prüfung",
    },
    {
      id: "5",
      artikelnummer: "Artikelnummer",
      datum: "26.09.2025",
      maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      deoPrüft: "26.09.2025",
      benutzer: "Jurick Ivan",
      machineNummer: "101020296",
      depot: "Depot 578",
      status: "Visueller Prüfung",
    },
    {
      id: "6",
      artikelnummer: "Artikelnummer",
      datum: "26.09.2025",
      maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      deoPrüft: "26.09.2025",
      machineNummer: "101020296",
      benutzer: "Jurick Ivan",
      depot: "Depot 578",
      status: "Visueller Prüfung",
    },
    {
      id: "7",
      artikelnummer: "Artikelnummer",
      datum: "26.09.2025",
      maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      deoPrüft: "26.09.2025",
      benutzer: "Jurick Ivan",
      depot: "Depot 578",
      machineNummer: "101020296",
      status: "Visueller Prüfung",
    },
    {
      id: "8",
      artikelnummer: "Artikelnummer",
      datum: "26.09.2025",
      maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      deoPrüft: "26.09.2025",
      machineNummer: "101020296",
      benutzer: "Jurick Ivan",
      depot: "Depot 578",
      status: "Visueller Prüfung",
    },
    {
      id: "9",
      artikelnummer: "Artikelnummer",
      datum: "26.09.2025",
      maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      deoPrüft: "26.09.2025",
      benutzer: "Jurick Ivan",
      machineNummer: "101020296",
      depot: "Depot 578",
      status: "Visueller Prüfung",
    },
    {
      id: "10",
      artikelnummer: "Artikelnummer",
      datum: "26.09.2025",
      maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      deoPrüft: "26.09.2025",
      machineNummer: "101020296",
      benutzer: "Jurick Ivan",
      depot: "Depot 578",
      status: "Visueller Prüfung",
    },
    {
      id: "11",
      artikelnummer: "Artikelnummer",
      datum: "26.09.2025",
      maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      deoPrüft: "26.09.2025",
      benutzer: "Jurick Ivan",
      depot: "Depot 578",
      machineNummer: "101020296",
      status: "Visueller Prüfung",
    },
    {
      id: "12",
      artikelnummer: "Artikelnummer",
      datum: "26.09.2025",
      maschine: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      deoPrüft: "26.09.2025",
      machineNummer: "101020296",
      benutzer: "Jurick Ivan",
      depot: "Depot 578",
      status: "Visueller Prüfung",
    },
  ];

  // ===============================
  // Recursive search for all fields
  // ===============================
  const objectContainsSearch = (obj: unknown, term: string): boolean => {
    if (obj === null || obj === undefined) return false;
    const lowerTerm = term.toLowerCase();

    // Direct primitive checks
    if (typeof obj === "string") {
      return obj.toLowerCase().includes(lowerTerm);
    }
    if (typeof obj === "number" || typeof obj === "boolean") {
      return String(obj).toLowerCase().includes(lowerTerm);
    }

    // Arrays: check any item
    if (Array.isArray(obj)) {
      return obj.some((item) => objectContainsSearch(item, lowerTerm));
    }

    // Objects: iterate keys safely
    if (typeof obj === "object") {
      const record = obj as Record<string, unknown>;
      for (const key in record) {
        if (!Object.prototype.hasOwnProperty.call(record, key)) continue;
        const value = record[key];
        if (objectContainsSearch(value, lowerTerm)) {
          return true;
        }
      }
    }

    return false;
  };

  const filteredProtocols = protocols.filter(
    (protocol) => objectContainsSearch(protocol, searchTerm)
  );

  const totalPages = Math.ceil(filteredProtocols.length / itemsPerPage);

  const getCurrentPageProtocols = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProtocols.slice(startIndex, startIndex + itemsPerPage);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ===============================
  // Routing-based selection
  // ===============================
  const pathParts = location.pathname.split("/").filter(Boolean);
  const isOverview = location.pathname === "/boels-inspection/boels-test-report";
  const detailId =
    pathParts.length === 3 && pathParts[1] === "boels-test-report"
      ? pathParts[2]
      : null;
  const selectedProtocol = protocols.find((p) => p.id === detailId);

  const handleCardClick = (protocol: InspectionProtocol) => {
    navigate(`/boels-inspection/boels-test-report/${protocol.id}`);
  };

  const handleBack = () => {
    navigate("/boels-inspection/boels-test-report");
    setActiveTab("Prüfprotokoll-MultiPat");
  };

  // ===============================
  // Detail view
  // ===============================
  if (!isOverview && selectedProtocol) {
    return (
      <div className="w-full bg-white p-6 rounded-md border border-gray-300">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6"
        >
          <img src="/back.svg" alt="Back" className="w-5 h-5 sm:w-6 sm:h-6" />
          Back
        </button>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("Prüfprotokoll-MultiPat")}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              activeTab === "Prüfprotokoll-MultiPat"
                ? "bg-orange-100 text-orange-600 border border-orange-300"
                : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-orange-50"
            }`}
          >
            Prüfprotokoll-MultiPat
          </button>
          <button
            onClick={() => setActiveTab("Boels Inspection")}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              activeTab === "Boels Inspection"
                ? "bg-orange-100 text-orange-600 border border-orange-300"
                : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-orange-50"
            }`}
          >
            Boels Inspection
          </button>
          <button
            onClick={() => setActiveTab("file-link")}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              activeTab === "file-link"
                ? "bg-orange-100 text-orange-600 border border-orange-300"
                : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-orange-50"
            }`}
          >
            <LinkIcon size={16} className="inline-block mr-1" />
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "Prüfprotokoll-MultiPat" && (
          <ProtocolDetailMultiPat protocol={selectedProtocol} />
        )}
        {activeTab === "Boels Inspection" && (
          <ProtocolDetailBoelsInspection protocol={selectedProtocol} />
        )}
        {activeTab === "file-link" && (
          <div className="flex items-center">
            <LinkIcon size={16} className="inline-block mr-1" />
            <span className="text-sm text-gray-600">Datei-Link</span>
          </div>
        )}
      </div>
    );
  }

  // ===============================
  // Overview / List view
  // ===============================
  return (
    <div className="w-full bg-white p-8 border border-gray-300 rounded-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Prüfprotokoll nach OVE/ÖNORM für Gerät:
      </h2>
      <p className="text-sm text-gray-600 mb-6 pb-4 border-b-2 border-gray-300">
        14672062 Thermobile IMA 61R Diesel Heater 61kW
      </p>

      <Suspense fallback={<div className="text-center py-10 text-gray-500">Loading...</div>}>
        <div className="space-y-3 bg-gray-50 p-4 rounded-md border border-gray-200">
          {getCurrentPageProtocols().map((protocol) => (
            <ProtocolCard
              key={protocol.id}
              protocol={protocol}
              onClick={() => handleCardClick(protocol)}
            />
          ))}

          {filteredProtocols.length === 0 && (
            <p className="text-center text-gray-500 py-6">
              No results found for "{searchTerm}"
            </p>
          )}
        </div>

        {/* Pagination */}
        {filteredProtocols.length > 0 && (
          <div className="mt-6 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default TestReport;
