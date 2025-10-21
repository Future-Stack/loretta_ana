import React, { useState, useEffect, Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link, ChevronDown } from "lucide-react";
import type { RootState } from "@/redux/store";
import Pagination from "@/components/views components/machine/Pagination";

// ==========================================
// Types
// ==========================================
export type ProtocolStatus = "Vorbereitet" | "In Bearbeitung" | "Abgeschlossen";

export type ProtocolCardItem = {
  id: string;
  boelsNr: string;
  mvNr: string;
  title: string;
  deliveryType: string;
  techniker: string;
  date: string;
  status: ProtocolStatus;
  images?: string[];
  technicalData?: {
    boelsNummer: string;
    subgruppe: string;
    mvNummer: string;
    stundenzahlerstand: string;
  };
  protocolInfo?: {
    techniker: string;
    fotografiertAm: string;
    letzterStatus: string;
  };
  files?: Array<{
    id: string;
    name: string;
    size: string;
    date: string;
    thumbnail: string;
  }>;
};

// ==========================================
// ProtocolCard Component
// ==========================================
type ProtocolCardProps = {
  item: ProtocolCardItem;
  onClick?: () => void;
};

const ProtocolCard: React.FC<ProtocolCardProps> = ({ item, onClick }) => {
  const statusColors = {
    "Vorbereitet": "bg-green-100 text-green-700 border-green-300",
    "In Bearbeitung": "bg-yellow-100 text-yellow-700 border-yellow-300",
    "Abgeschlossen": "bg-blue-100 text-blue-700 border-blue-300"
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg border border-gray-200 hover:border-orange-400 shadow-sm hover:shadow-md transition-all cursor-pointer p-4"
    >
      <div className="flex items-center gap-4">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
          <img src="/image 7.png" alt="Equipment" className="w-full h-full object-cover rounded" />
        </div>

        {/* Middle: Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <div className="text-sm font-semibold text-gray-900">
                {item.boelsNr}
                <span className="text-gray-500 ml-2">MV Nr: <span className="text-blue-600">{item.mvNr}</span></span>
              </div>
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <div className="text-red-600 font-medium">{item.deliveryType}</div>
            <div className="text-gray-600">
              <span className="font-medium">{item.techniker}</span>
              <span className="ml-2">am: {item.date}</span>
            </div>
          </div>
        </div>

        {/* Right: Status & Link */}
        <div className="flex flex-col items-end gap-2">
          <span className={`${statusColors[item.status]} px-3 py-1 rounded-full text-xs font-medium border whitespace-nowrap`}>
            {item.status}
          </span>
          <button 
            className="text-blue-600 hover:text-blue-700 p-1"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Link size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// ProtocolDetail Component
// ==========================================
interface ProtocolDetailProps {
  item: ProtocolCardItem;
  onBack: () => void;
}

const ProtocolDetail: React.FC<ProtocolDetailProps> = ({ item, onBack }) => {
  const [activeTab, setActiveTab] = useState<"Ausgabeprotokoll" | "Files">("Ausgabeprotokoll");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = item.images || ["/api/placeholder/800/600"];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors w-fit"
        >
          <img src="/back.svg" alt="Back" className="w-5 h-5 sm:w-6 sm:h-6" />
          Back
        </button>

        <button className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white w-full sm:w-auto focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-nowrap">
          Dokument <ChevronDown size={16} className="inline-block ml-1" />
        </button>
      </div>

      <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4">
        Ausgabeprotokoll: Depot {item.mvNr}
      </h2>
      <hr className="border-gray-300 mb-4 sm:mb-6" />

      {/* Tabs */}
      <div className="mb-4 sm:mb-6 -mx-3 sm:mx-0">
        <div className="overflow-x-auto px-3 sm:px-0">
          <div className="flex gap-2 pb-2 sm:pb-0 min-w-max sm:min-w-0 sm:flex-wrap">
            <button
              onClick={() => setActiveTab("Ausgabeprotokoll")}
              className={`px-3 py-2 text-sm rounded whitespace-nowrap transition-colors flex-shrink-0 ${
                activeTab === "Ausgabeprotokoll"
                  ? "bg-orange-100 text-orange-600 border border-orange-300"
                  : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-orange-50"
              }`}
            >
              Ausgabeprotokoll
            </button>
            <button
              onClick={() => setActiveTab("Files")}
              className={`px-3 py-2 text-sm rounded whitespace-nowrap transition-colors flex-shrink-0 flex items-center gap-1 ${
                activeTab === "Files"
                  ? "bg-orange-100 text-orange-600 border border-orange-300"
                  : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-orange-50"
              }`}
            >
              <Link size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {activeTab === "Ausgabeprotokoll" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Images */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="relative mb-4">
                <img 
                  src={images[currentImageIndex]} 
                  alt="Equipment" 
                  className="w-full h-96 object-cover rounded"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  Image {currentImageIndex + 1} of {images.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded border-2 ${
                      currentImageIndex === idx ? "border-orange-500" : "border-gray-300"
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover rounded" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className="space-y-6">
              {/* Technical Data */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-4">Technische Daten</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Boels Nummer:</span>
                    <span className="text-blue-600 font-semibold">{item.technicalData?.boelsNummer || "11991"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subgruppe:</span>
                    <span className="text-blue-600 font-semibold">{item.technicalData?.subgruppe || "11991"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">MV Nummer:</span>
                    <span className="text-orange-600 font-semibold">{item.technicalData?.mvNummer || "1060257993"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stundenzählerstand:</span>
                    <span className="font-semibold">{item.technicalData?.stundenzahlerstand || "0,0 BH"}</span>
                  </div>
                </div>
              </div>

              {/* Protocol Information */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-4">Protokoll Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Techniker:</span>
                    <span className="text-blue-600 font-semibold">{item.protocolInfo?.techniker || "Papaiim"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fotografiert am:</span>
                    <span className="font-semibold">{item.protocolInfo?.fotografiertAm || "22.01.2025"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Letzter Status:</span>
                    <span className="text-green-600 font-semibold">{item.protocolInfo?.letzterStatus || "Hergerichtet!"}</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-orange-500">
                Powered by Boels-Technikweb ®
              </div>
            </div>
          </div>
        ) : (
          /* Files Tab */
          <div className="bg-white rounded-lg border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left p-3 text-sm font-medium text-gray-600 w-12">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="text-left p-3 text-sm font-medium text-gray-600">Dateianhang:</th>
                  <th className="text-left p-3 text-sm font-medium text-gray-600">Files</th>
                  <th className="text-left p-3 text-sm font-medium text-gray-600">File Size</th>
                </tr>
              </thead>
              <tbody>
                {(item.files || []).map((file) => (
                  <tr key={file.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="p-3 text-sm">{file.date}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <img src={file.thumbnail} alt="" className="w-10 h-10 rounded object-cover" />
                        <span className="text-sm">{file.name}</span>
                      </div>
                    </td>
                    <td className="p-3 text-sm">{file.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// ProtocolOverview Component (Main)
// ==========================================
const ProtocolOverview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useSelector((state: RootState) => state.search.term);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const allItems: ProtocolCardItem[] = [
    {
      id: "1",
      boelsNr: "1960",
      mvNr: "1060",
      title: "Rollgerüst für 1 Person, MiTower",
      deliveryType: "Kunde-Selbstabholung!",
      techniker: "Kadlod",
      date: "17.03.2025",
      status: "Vorbereitet",
      images: ["/output1.png", "/output2.png", "/output3.png", "/output4.png"],
      technicalData: {
        boelsNummer: "11991",
        subgruppe: "11991",
        mvNummer: "1060257993",
        stundenzahlerstand: "0,0 BH"
      },
      protocolInfo: {
        techniker: "Papaiim",
        fotografiertAm: "22.01.2025",
        letzterStatus: "Hergerichtet!"
      },
      files: [
        {
          id: "1",
          name: "1060_20250122_083213.jpg",
          size: "178 KB",
          date: "12/27/2021 09:32 AM",
          thumbnail: "/output1.png"
        },
        {
          id: "2",
          name: "1060_20250122_083213.jpg",
          size: "519 KB",
          date: "04/09/2025 11:59 AM",
          thumbnail: "/output2.png"
        },
        {
          id: "3",
          name: "1060_20250122_083213.jpg",
          size: "519 KB",
          date: "04/09/2025 11:59 AM",
          thumbnail: "/output3.png"
        }
      ]
    },
    {
      id: "2",
      boelsNr: "1960",
      mvNr: "1061",
      title: "Rollgerüst für 1 Person, MiTower",
      deliveryType: "Kunde-Selbstabholung!",
      techniker: "Kadlod",
      date: "17.03.2025",
      status: "Vorbereitet",
      images: ["/output1.png", "/output2.png", "/output3.png"],
      technicalData: {
        boelsNummer: "11992",
        subgruppe: "11992",
        mvNummer: "1061257994",
        stundenzahlerstand: "5,2 BH"
      },
      protocolInfo: {
        techniker: "Schmidt",
        fotografiertAm: "23.01.2025",
        letzterStatus: "In Bearbeitung"
      },
      files: [
        {
          id: "1",
          name: "1061_20250123_091015.jpg",
          size: "245 KB",
          date: "01/15/2022 10:20 AM",
          thumbnail: "/image 7.png"
        },
        {
          id: "2",
          name: "1061_20250123_091016.jpg",
          size: "312 KB",
          date: "01/15/2022 10:21 AM",
          thumbnail: "/image 7.png"
        }
      ]
    },
    {
      id: "3",
      boelsNr: "1960",
      mvNr: "1062",
      title: "Rollgerüst für 1 Person, MiTower",
      deliveryType: "Kunde-Selbstabholung!",
      techniker: "Kadlod",
      date: "17.03.2025",
      status: "In Bearbeitung",
      images: ["/output1.png", "/output2.png"],
      technicalData: {
        boelsNummer: "11993",
        subgruppe: "11993",
        mvNummer: "1062257995",
        stundenzahlerstand: "12,5 BH"
      },
      protocolInfo: {
        techniker: "Mueller",
        fotografiertAm: "24.01.2025",
        letzterStatus: "Wartung erforderlich"
      }
    },
    {
      id: "4",
      boelsNr: "1960",
      mvNr: "1063",
      title: "Rollgerüst für 1 Person, MiTower",
      deliveryType: "Kunde-Selbstabholung!",
      techniker: "Kadlod",
      date: "17.03.2025",
      status: "Abgeschlossen",
      images: ["/output1.png", "/output2.png", "/output3.png", "/output4.png", "/output5.png"],
      technicalData: {
        boelsNummer: "11994",
        subgruppe: "11994",
        mvNummer: "1063257996",
        stundenzahlerstand: "8,3 BH"
      },
      protocolInfo: {
        techniker: "Weber",
        fotografiertAm: "25.01.2025",
        letzterStatus: "Abgeschlossen"
      }
    },
    {
      id: "5",
      boelsNr: "1960",
      mvNr: "1064",
      title: "Rollgerüst für 1 Person, MiTower",
      deliveryType: "Kunde-Selbstabholung!",
      techniker: "Kadlod",
      date: "17.03.2025",
      status: "Vorbereitet",
      images: ["/output1.png"],
      technicalData: {
        boelsNummer: "11995",
        subgruppe: "11995",
        mvNummer: "1064257997",
        stundenzahlerstand: "2,1 BH"
      },
      protocolInfo: {
        techniker: "Fischer",
        fotografiertAm: "26.01.2025",
        letzterStatus: "Bereit zur Ausgabe"
      }
    },
    {
      id: "6",
      boelsNr: "1960",
      mvNr: "1065",
      title: "Rollgerüst für 1 Person, MiTower",
      deliveryType: "Kunde-Selbstabholung!",
      techniker: "Schmidt",
      date: "18.03.2025",
      status: "In Bearbeitung",
      images: ["/output1.png", "/output2.png", "/output3.png"],
      technicalData: {
        boelsNummer: "11996",
        subgruppe: "11996",
        mvNummer: "1065257998",
        stundenzahlerstand: "15,7 BH"
      },
      protocolInfo: {
        techniker: "Becker",
        fotografiertAm: "27.01.2025",
        letzterStatus: "Prüfung läuft"
      }
    },
    {
      id: "7",
      boelsNr: "1961",
      mvNr: "1066",
      title: "Teleskoplader JCB 540-200",
      deliveryType: "Lieferung zum Kunden",
      techniker: "Mueller",
      date: "19.03.2025",
      status: "Abgeschlossen",
      images: ["/output1.png", "/output2.png"],
      technicalData: {
        boelsNummer: "11997",
        subgruppe: "11997",
        mvNummer: "1066257999",
        stundenzahlerstand: "45,8 BH"
      },
      protocolInfo: {
        techniker: "Hoffmann",
        fotografiertAm: "28.01.2025",
        letzterStatus: "Versandbereit"
      }
    },
    {
      id: "8",
      boelsNr: "1962",
      mvNr: "1067",
      title: "Minibagger Kubota KX080-4",
      deliveryType: "Kunde-Selbstabholung!",
      techniker: "Weber",
      date: "20.03.2025",
      status: "Vorbereitet",
      images: ["/output1.png", "/output2.png", "/output3.png", "/output4.png"],
      technicalData: {
        boelsNummer: "11998",
        subgruppe: "11998",
        mvNummer: "1067258000",
        stundenzahlerstand: "102,3 BH"
      },
      protocolInfo: {
        techniker: "Schneider",
        fotografiertAm: "29.01.2025",
        letzterStatus: "Einsatzbereit"
      }
    },
    {
      id: "9",
      boelsNr: "1963",
      mvNr: "1068",
      title: "Kompressor Atlas Copco XAS 185",
      deliveryType: "Lieferung zum Kunden",
      techniker: "Fischer",
      date: "21.03.2025",
      status: "In Bearbeitung",
      images: ["/output1.png", "/output2.png", "/output3.png"],
      technicalData: {
        boelsNummer: "11999",
        subgruppe: "11999",
        mvNummer: "1068258001",
        stundenzahlerstand: "67,9 BH"
      },
      protocolInfo: {
        techniker: "Richter",
        fotografiertAm: "30.01.2025",
        letzterStatus: "Überprüfung"
      }
    },
    {
      id: "10",
      boelsNr: "1964",
      mvNr: "1069",
      title: "Rüttelplatte Wacker DPU 6555",
      deliveryType: "Kunde-Selbstabholung!",
      techniker: "Becker",
      date: "22.03.2025",
      status: "Abgeschlossen",
      images: ["/output1.png", "/output2.png"],
      technicalData: {
        boelsNummer: "12000",
        subgruppe: "12000",
        mvNummer: "1069258002",
        stundenzahlerstand: "34,2 BH"
      },
      protocolInfo: {
        techniker: "Klein",
        fotografiertAm: "31.01.2025",
        letzterStatus: "Freigegeben"
      }
    }
  ];

  // Filter logic
  const filteredItems = allItems.filter(
    (item) =>
      item.boelsNr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mvNr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.techniker.toLowerCase().includes(searchTerm.toLowerCase())
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

  // Determine current view and selected item based on URL
  const pathParts = location.pathname.split("/").filter(Boolean);
  // Example: /output/output-overview/1 => ["output", "output-overview", "1"]
  
  const detailId = pathParts.length === 3 && pathParts[1] === "output-overview"
    ? pathParts[2]
    : null;
  
  const selectedItem = allItems.find((item) => item.id === detailId);

  const handleCardClick = (item: ProtocolCardItem) => {
    navigate(`/output/output-overview/${item.id}`);
  };

  const handleBack = () => {
    navigate("/output/output-overview");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-7 sm:p-8 border bg-white border-gray-300 rounded-md">
      <Suspense fallback={<div className="text-center py-10 text-gray-500">Loading...</div>}>
        {!detailId ? (
          <>
            {/* Overview Page */}
            <h2 className="text-[1.75rem] font-bold mb-6">Protocol Record</h2>
            <hr className="border-gray-300 mb-6" />

            <div className="flex flex-col w-full">
              {getCurrentPageItems().map((item, index) => (
                <React.Fragment key={item.id}>
                  <ProtocolCard
                    item={item}
                    onClick={() => handleCardClick(item)}
                  />
                  
                  {index < getCurrentPageItems().length - 1 && (
                    <hr className="border-gray-300 my-4" />
                  )}
                </React.Fragment>
              ))}

              {filteredItems.length === 0 && (
                <p className="text-gray-500 text-center py-6">
                  No protocols found for "{searchTerm}"
                </p>
              )}
            </div>

            {filteredItems.length > 0 && (
              <div className="mt-6 w-full flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        ) : selectedItem ? (
          /* Detail Page */
          <ProtocolDetail item={selectedItem} onBack={handleBack} />
        ) : (
          /* Not Found */
          <p className="text-center mt-10 text-gray-500">Protocol not found</p>
        )}
      </Suspense>
    </div>
  );
};

export default ProtocolOverview;