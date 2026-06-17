import TeamDirectory from "../views/machines/TeamDirectory";
import TWManual from "../views components/machine/Left/TWManual";
import MachineOverview from "./machines/MachineOverview";
import Overdue from "./machines/Overdue";
import QRCode from "./machines/QRCode";
import SearchGeneral from "./machines/SearchGeneral";
import ProtocolOverview from "./outputlog/OutputOverview";
import ExpensesPage from "./outputlog/Expenses";
import FaultLogOverview from "./fault log/FaultLogOverview";
import QueryForm from "./spare parts/Query";
import WorklogQuery from "./work log/Query";
import BoelsInspectionQuery from "./boels inspection/Query";
import SparePartsOverview from "./spare parts/SparePartsOverview";
import WorkLogOverview from "./work log/WorkLogOverview";
import TestReport from "./boels inspection/TestReport";
import Warehouse578 from "./spare parts/Warehouse578";
import Warehouse1061 from "./spare parts/Warehouse1061";
import FaultLogQuery from "./fault log/FaultLogQuery";
import ReturnProtocolOverview from "./return protocol/ReturnProtocolOverview";
import TankLog from "./return protocol/TankLog";
import ReturnNewChanged from "./return protocol/ReturnNewChanged";
import FuelList from "./return protocol/FuelList";
import Return from "./return protocol/Return";
import Life from "./return protocol/Life";
import DamageReportOverview from "./damage report/DamageReportOverview";
import DamageReportQuery from "./damage report/Query";
import DamageReportEvaluation from "./damage report/Evaluation";
import CheckList from "./examination information/CheckList";
import ExaminationsSeek from "./examination information/Seek";


const ViewRouter = ({ path }: { path: string }) => {
  if (path === "/login") return <p>Login View component</p>;

  const parts = path.split("/").filter(Boolean);
  if (parts.length >= 2) {
    const view = parts[1];
    switch (view) {
      // Machines
      case "machines-overview":
        return <MachineOverview />;
      case "machines-qrcode":
        return <QRCode />;
      case "machines-overdue":
        return <Overdue />;
      case "machines-search":
        return <SearchGeneral />;
      case "machines-manual":
        return <TWManual />;
      case "machines-team":
        return <TeamDirectory />;
      case "machines-access":
        return <p>Machine Access</p>;
      case "machines-issue":
        return <p>Machine Issue</p>;
      case "machines-trucklimit":
        return <p>Machine Trucklimit</p>;
      case "machines-workshop":
        return <p>Machine Workshop</p>;
      case "machines-folder":
        return <p>Machine Folder</p>;

      // Output Log
      case "output-overview":
        return <ProtocolOverview />;
      case "output-expenses":
        return <ExpensesPage />;
      case "output-boels-home":
        return <p>Output Boels Home</p>;
      case "output-boels-intranet":
        return <p>Output Boels Intranet</p>;
      case "output-hifi-filter":
        return <p>Output Hifi Filter</p>;

      // Spare Parts
      case "spare-overview":
        return <SparePartsOverview />;
      case "spare-wh-depot-578":
        return <Warehouse578 />;
      case "spare-wh-depot-1061":
        return <Warehouse1061 />;
      case "spare-query":
        return <QueryForm />;
      case "spare-et-petrol-engines":
        return <p>Spare ET Petrol Engines</p>;
      case "spare-sf-filter":
        return <p>Spare SF Filter</p>;
      case "spare-kohler-enginers":
        return <p>Spare Kohler Enginers</p>;
      case "spare-hifi-filter":
        return <p>Spare Hifi Filter</p>;
      case "spare-skyjack":
        return <p>Spare Skyjack</p>;
      case "spare-honda-engines":
        return <p>Spare Honda Engines</p>;

      // Work log
      case "worklog-overview":
        return <WorkLogOverview />;
      case "worklog-query":
        return <WorklogQuery />;

      // Boels Inspection
      case "boels-test-report":
        return <TestReport />;
      case "boels-query":
        return <BoelsInspectionQuery />;
      case "boels-home":
        return <p>Boels Home</p>;
      case "boels-intranet":
        return <p>Boels Intranet</p>;
      case "boels-hifi-filter":
        return <p>Boels Hifi Filter</p>;

      // Fault log
      case "faultlog-overview":
        return <FaultLogOverview />;
      case "faultlog-query":
        return <FaultLogQuery />;
      case "faultlog-boels-home":
        return <p>Faultlog Boels Home</p>;
      case "faultlog-boels-intranet":
        return <p>Faultlog Boels Intranet</p>;
      case "faultlog-hifi-filter":
        return <p>Faultlog Hifi Filter</p>;
      case "faultlog-bomag":
        return <p>Faultlog Bomag</p>;
      case "faultlog-skyjack":
        return <p>Faultlog Skyjack</p>;

      // Return protocol
      case "return-overview":
        return <ReturnProtocolOverview />;
      case "return-tank-log":
        return <TankLog />;
      case "return-new-changed":
        return <ReturnNewChanged />;
      case "return-fuel-list":
        return <FuelList />;
      case "return-return":
        return <Return />;
      case "return-life":
        return <Life />;

      case "return-output-return":
        return <p>Return Output Return</p>;
      case "return-statistics":
        return <p>Return Statistics</p>;
      case "return-application-builder":
        return <p>Return Application Builder</p>;

      // Priority & Replist
      case "priority-priorities":
        return <p>Priority Priorities</p>;
      case "priority-repliste-workshop":
        return <p>Priority Repliste Workshop</p>;
      case "priority-live-info-board":
        return <p>Priority Live Info Board</p>;

      // Damage Report
      case "damage-overview":
        return <DamageReportOverview />;
      case "damage-query":
        return <DamageReportQuery />;
      case "damage-evaluation":
        return <DamageReportEvaluation />;
      case "damage-boels-home":
        return <p>Damage Boels Home</p>;
      case "damage-boels-intranet":
        return <p>Damage Boels Intranet</p>;
      case "damage-hifi-filter":
        return <p>Damage Hifi Filter</p>;
      case "damage-skyjack":
        return <p>Damage Skyjack</p>;

      // Examinations Information
      case "examinations-checklist":
        return <CheckList />;
      case "examinations-seek":
        return <ExaminationsSeek />;

      // Fault Report
      case "faultreport-overview":
        return <p>Faultreport Overview</p>;
      case "faultreport-customer-contact":
        return <p>Faultreport Customer Contact</p>;
      case "faultreport-picklist":
        return <p>Faultreport Picklist</p>;
      case "faultreport-google-maps":
        return <p>Faultreport Google Maps</p>;

      // Preparation Protocol
      case "preparation-open":
        return <p>Preparation Open</p>;
      case "preparation-completed":
        return <p>Preparation Completed</p>;
      case "preparation-info-board-tv":
        return <p>Preparation Info Board TV</p>;
      case "preparation-search":
        return <p>Preparation Search</p>;

      // Fault Report QR Code Documentation
      case "faultqr-overview":
        return <p>Fault QR Overview</p>;
      case "faultqr-search":
        return <p>Fault QR Search</p>;

      // Documentation
      case "doc-by-type":
        return <p>Document by Type</p>;
      case "doc-machine-number":
        return <p>Document by Machine Number</p>;
      case "doc-query":
        return <p>Document by Query</p>;
      case "doc-public-area":
        return <p>Document by Public Area</p>;

      // ACM Documentation
      case "acm-overview":
        return <p>ACM Overview</p>;

      // Knowledge Base
      case "knowledge-by-subgroups":
        return <p>Knowledge by Subgroups</p>;
      case "knowledge-my-folder":
        return <p>Knowledge My Folder</p>;

      // Test Report PDF
      case "testpdf-overview":
        return <p>Test Report Overview</p>;
      case "testpdf-search-for-pdf":
        return <p>Test Report Search for PDF</p>;

      // TPG Test Report
      case "tpg-overview":
        return <p>TPG Overview</p>;
      case "tpg-public-area":
        return <p>TPG Public Area</p>;

      // Fuel Extraction Internal
      case "fuel-overview":
        return <p>Fuel Overview</p>;
      case "fuel-public-area":
        return <p>Fuel Public Area</p>;

      default:
        return <p>Default View component for {view}</p>;
    }
  }
  return <MachineOverview />;
};

export default ViewRouter;
