import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import WorkLogCard from "@/components/views components/worklog/WorkLogCard";
import WorkLogDetails from "@/components/views components/worklog/WorkLogDetails";
import Pagination from "@/components/views components/machine/Pagination"; // ✅ import
import type { RootState } from "@/redux/store";
import type { WorkLog } from "@/components/views components/worklog/types";

const WorkLogOverview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useSelector((state: RootState) => state.search.term);

  const allWorkLog: WorkLog[] = [
    {
      id: "1",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Service Telematics!",
      serialNumber: "101695221907",
      purchaseDate: "04.11.2019",
      internalDepotDays: "26.09.2026",
      files: [
        {
          id: "1",
          date: "12/27/2021 09:32 AM",
          name: "Stomerzeugter.jpg",
          size: "178 KB",
          icon: "image",
        },
        {
          id: "2",
          date: "04/09/2025 11:59 AM",
          name: "Pruefbericht.pdf",
          size: "519 KB",
          icon: "pdf",
        },
      ],
      documents: [
        {
          id: "1",
          number: "SN 70326",
          name: "Startkoten eno Einsatz",
          supplier: "SK 3612 / 2",
          depot: "Depot 578",
          listPrice: "5.11 (€)",
          purchasePrice: "5.11 (€)",
          image: "/worklog.png",
        },
        {
          id: "2",
          number: "SN 70326",
          name: "Startkoten eno Einsatz",
          supplier: "SK 3612 / 2",
          depot: "Depot 578",
          listPrice: "5.11 (€)",
          purchasePrice: "5.11 (€)",
          image: "/worklog.png",
        },
        {
          id: "3",
          number: "SN 70326",
          name: "Startkoten eno Einsatz",
          supplier: "SK 3612 / 2",
          depot: "Depot 578",
          listPrice: "5.11 (€)",
          purchasePrice: "5.11 (€)",
          image: "/worklog.png",
        },
      ],
    },
    {
      id: "2",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Reparatur!",
      serialNumber: "101695221908",
      purchaseDate: "05.11.2019",
      internalDepotDays: "27.09.2026",
      documents: [],
      files: [],
    },
    {
      id: "3",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Reparatur!",
      documents: [],
      files: [],
    },
    {
      id: "4",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Check!",
      documents: [],
      files: [],
    },
    {
      id: "5",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Check!",
      documents: [],
      files: [],
    },
    {
      id: "6",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Check!",
      documents: [],
      files: [],
    },
    {
      id: "7",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Reparatur!",
      documents: [],
      files: [],
    },
    {
      id: "8",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Service Telematics!",
      documents: [],
      files: [],
    },
    {
      id: "9",
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Check!",
      documents: [],
      files: [],
    },
    {
      id: "10",
      date: "26.09.2025",
      machineTitle: "Test",
      boelsNumber: "172670375",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Service Telematics!",
      documents: [],
      files: [],
    },
    {
      id: "11", 
      date: "26.09.2025",
      machineTitle: "Bomag BPR 35/60 D/H Rüttelplatte 35 kN",
      boelsNumber: "00000",
      wert: 0.0,
      technician: "Helmuth",
      depot: "Depot 578",
      actionStatus: "Check!",
      documents: [],
      files: [],
    },
  ];

  // Filter worklogs based on searchTerm
  const filteredWorkLogs = allWorkLog.filter(
    (workLog) =>
      workLog.machineTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workLog.boelsNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workLog.technician.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workLog.depot.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workLog.actionStatus.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredWorkLogs.length / itemsPerPage);

  const getCurrentPageWorkLogs = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredWorkLogs.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setCurrentPage(1); // reset to first page on search
  }, [searchTerm]);

  // URL Routing
  const pathParts = location.pathname.split("/").filter(Boolean);
  const isOverview = location.pathname === "/work-log/worklog-overview";
  const detailId =
    pathParts.length === 3 && pathParts[1] === "worklog-overview"
      ? pathParts[2]
      : null;
  const selectedMachine = allWorkLog.find((m) => m.id === detailId);

  const handleCardClick = (workLog: WorkLog) => {
    navigate(`/work-log/worklog-overview/${workLog.id}`);
  };

  const handleBack = () => {
    navigate("/work-log/worklog-overview");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full p-4 sm:p-8 border bg-white border-gray-300 rounded-md">
      {isOverview ? (
        <>
          <h2 className="text-[1.75rem] font-bold mb-4 sm:mb-6 pb-4 border-b-2 border-gray-300">Overview</h2>

          <div className="bg-gray-50 rounded-md border border-gray-200">
            {/* Table Header */}
            {/* <div className="hidden sm:flex text-xs font-semibold text-gray-600 m-3">
              <div className="w-[60px] flex justify-center items-center px-4 py-2">
                Status
              </div>
              <div className="w-[80px] flex justify-center items-center px-4 py-2">
                Datum
              </div>
              <div className="flex-1 flex justify-start items-center px-4 py-2">
                Maschine / Beschreibung
              </div>
              <div className="w-[60px] flex justify-center items-center px-4 py-2 text-right">
                WERT
              </div>
              <div className="w-[160px] flex flex-col justify-center items-center px-4 py-2">
                Techniker / Depot
              </div>
              <div className="w-[160px] flex justify-center items-center px-4 py-2">
                Aktion
              </div>
            </div> */}

            {/* Card Rows */}
            <div className="flex flex-col overflow-hidden">
              {getCurrentPageWorkLogs().length > 0 ? (
                getCurrentPageWorkLogs().map((workLog) => (
                  <WorkLogCard
                    key={workLog.id}
                    item={workLog}
                    onClick={() => handleCardClick(workLog)}
                  />
                ))
              ) : (
                <p className="text-center py-6 text-gray-500">
                  No work logs found for "{searchTerm}"
                </p>
              )}
            </div>
          </div>

          {/* Pagination using imported component */}
          {filteredWorkLogs.length > itemsPerPage && (
            <div className="mt-4 w-full flex justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      ) : selectedMachine ? (
        <WorkLogDetails workLog={selectedMachine} onBack={handleBack} />
      ) : (
        <p className="text-center mt-10 text-gray-500">WorkLog not found</p>
      )}
    </div>
  );
};

export default WorkLogOverview;
