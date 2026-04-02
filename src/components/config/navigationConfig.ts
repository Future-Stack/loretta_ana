export type ViewType =
  | "machines"
  | "output-log"
  | "spare-parts"
  | "work-log"
  | "boels-inspection"
  | "fault-log"
  | "return-protocol"
  | "priority-replist"
  | "damage-report"
  | "examinations-info"
  | "fault-report"
  | "preparation-protocol"
  | "fault-report-qr-code-documentation"
  | "documentation"
  | "acm-documentation"
  | "knowledge-base"
  | "test-report-pdf"
  | "tpg-test-report"
  | "fuel-extraction-internal";

export interface SidebarConfig {
  sections: {
    title: string;
    items: { label: string; view: string }[];
  }[];
}

const NAVIGATION_CONFIG: Record<ViewType, { label: string; sidebar: SidebarConfig }> = {
  "machines": {
    label: "Maschinendaten",
    sidebar: {
      sections: [
        {
          title: "Machines",
          items: [
            { label: "Overview", view: "machines-overview" },
            { label: "QR Code...", view: "machines-qrcode" },
            { label: "Create Machine", view: "machines-create" },
          ],
        },
        {
          title: "Seek",
          items: [
            { label: "Overdue", view: "machines-overdue" },
            { label: "Search General", view: "machines-search" },
          ],
        },
        {
          title: "Left",
          items: [
            { label: "TW Manual", view: "machines-manual" },
            { label: "TechnikerTeam-A1", view: "machines-team" },
            { label: "TW Access Data", view: "machines-access" },
            { label: "Issue Return", view: "machines-issue" },
            { label: "Trucklimit Boels", view: "machines-trucklimit" },
            { label: "Workshop Supplies", view: "machines-workshop" },
          ],
        },
        {
          title: "Personal",
          items: [{ label: "My Folder", view: "machines-folder" }],
        },
      ],
    },
  },
  "output-log": {
    label: "Output Log",
    sidebar: {
      sections: [
        {
          title: "Output protocol",
          items: [{ label: "Overview", view: "output-overview" }],
        },
        {
          title: "Seek",
          items: [{ label: "Expenses", view: "output-expenses" }],
        },
        {
          title: "Left",
          items: [
            { label: "Boels Home", view: "output-boels-home" },
            { label: "Boels Intranet", view: "output-boels-intranet" },
            { label: "HiFi Filter", view: "output-hifi-filter" },
          ],
        },
      ],
    },
  },
  "spare-parts": {
    label: "Spare Parts",
    sidebar: {
      sections: [
        {
          title: "Spare Parts",
          items: [
            { label: "Overview", view: "spare-overview" },
            { label: "Warehouse Depot 578", view: "spare-wh-depot-578" },
            { label: "Warehouse Depot 1061", view: "spare-wh-depot-1061" },
          ],
        },
        {
          title: "Seek",
          items: [{ label: "Query", view: "spare-query" }],
        },
        {
          title: "Left",
          items: [
            { label: "ET petrol engines", view: "spare-et-petrol-engines" },
            { label: "SF-Filter", view: "spare-sf-filter" },
            { label: "Kohler enginers", view: "spare-kohler-enginers" },
            { label: "HiFi Filter", view: "spare-hifi-filter" },
            { label: "SkyJack", view: "spare-skyjack" },
            { label: "Honda Engines", view: "spare-honda-engines" },
          ],
        },
      ],
    },
  },
  "work-log": {
    label: "Work log",
    sidebar: {
      sections: [
        {
          title: "Work log",
          items: [{ label: "Overview", view: "worklog-overview" }],
        },
        {
          title: "Seek",
          items: [{ label: "Query", view: "worklog-query" }],
        },
      ],
    },
  },
  "boels-inspection": {
    label: "Boels Inspection",
    sidebar: {
      sections: [
        {
          title: "View Titel",
          items: [{ label: "Test Report OVE/ONORM", view: "boels-test-report" }],
        },
        {
          title: "Seek",
          items: [{ label: "Query", view: "boels-query" }],
        },
        {
          title: "Left",
          items: [
            { label: "Boels Home", view: "boels-home" },
            { label: "Boels Intranet", view: "boels-intranet" },
            { label: "HiFi Filter", view: "boels-hifi-filter" },
          ],
        },
      ],
    },
  },
  "fault-log": {
    label: "Fault log",
    sidebar: {
      sections: [
        {
          title: "Views",
          items: [{ label: "Overview", view: "faultlog-overview" }],
        },
        {
          title: "Seek",
          items: [{ label: "Query", view: "faultlog-query" }],
        },
        {
          title: "Left",
          items: [
            { label: "Boels Home", view: "faultlog-boels-home" },
            { label: "Boels Intranet", view: "faultlog-boels-intranet" },
            { label: "HiFi Filter", view: "faultlog-hifi-filter" },
            { label: "Bomag", view: "faultlog-bomag" },
            { label: "SkyJack", view: "faultlog-skyjack" },
          ],
        },
      ],
    },
  },
  "return-protocol": {
    label: "Return protocol",
    sidebar: {
      sections: [
        {
          title: "Returns",
          items: [
            { label: "Overview", view: "return-overview" },
            { label: "Tank log", view: "return-tank-log" },
            { label: "New & changed", view: "return-new-changed" },
          ],
        },
        {
          title: "Seek",
          items: [
            { label: "Fuel list", view: "return-fuel-list" },
            { label: "Return", view: "return-return" },
          ],
        },
        {
          title: "Left",
          items: [
            { label: "Life", view: "return-life" },
            { label: "Output Return", view: "return-output-return" },
          ],
        },
        {
          title: "Statistics",
          items: [{ label: "Statistics", view: "return-statistics" }],
        },
        {
          title: "Application Builder",
          items: [{ label: "Application Builder", view: "return-application-builder" }],
        },
      ],
    },
  },
  "priority-replist": {
    label: "Priority & Replist",
    sidebar: {
      sections: [
        {
          title: "Views",
          items: [
            { label: "Priorities", view: "priority-priorities" },
            { label: "Repliste Wrokshop", view: "priority-repliste-workshop" },
            { label: "Live information board", view: "priority-live-info-board" },
          ],
        },
      ],
    },
  },
  "damage-report": {
    label: "Damage Report",
    sidebar: {
      sections: [
        {
          title: "Views",
          items: [{ label: "Overview", view: "damage-overview" }],
        },
        {
          title: "Seek",
          items: [
            { label: "Query", view: "damage-query" },
            { label: "Evaluation", view: "damage-evaluation" },
          ],
        },
        {
          title: "Workflow",
          items: [],
        },
        {
          title: "Left",
          items: [
            { label: "Boels Home", view: "damage-boels-home" },
            { label: "Boels Intranet", view: "damage-boels-intranet" },
            { label: "HiFi Filter", view: "damage-hifi-filter" },
            { label: "SkyJack", view: "damage-skyjack" },
          ],
        },
      ],
    },
  },
  "examinations-info": {
    label: "Examinations Information",
    sidebar: {
      sections: [
        {
          title: "Views",
          items: [{ label: "Checklist", view: "examinations-checklist" }],
        },
        {
          title: "Seek",
          items: [],
        },
      ],
    },
  },
  "fault-report": {
    label: "Fault Report",
    sidebar: {
      sections: [
        {
          title: "Disturbances-AT",
          items: [
            { label: "Overview", view: "faultreport-overview" },
            { label: "Customer contact", view: "faultreport-customer-contact" },
          ],
        },
        {
          title: "Seek",
          items: [{ label: "Direct search for picklist", view: "faultreport-picklist" }],
        },
        {
          title: "Left",
          items: [{ label: "Google Maps", view: "faultreport-google-maps" }],
        },
      ],
    },
  },
  "preparation-protocol": {
    label: "Preparation Protocol",
    sidebar: {
      sections: [
        {
          title: "Views",
          items: [
            { label: "Open", view: "preparation-open" },
            { label: "Completed", view: "preparation-completed" },
            { label: "Infoboard TV", view: "preparation-info-board-tv" },
          ],
        },
        {
          title: "Seek",
          items: [{ label: "Search", view: "preparation-search" }],
        },
      ],
    },
  },
  "fault-report-qr-code-documentation": {
    label: "Fault Report QR Code",
    sidebar: {
      sections: [
        {
          title: "Fault Message External",
          items: [{ label: "Overview", view: "faultqr-overview" }],
        },
        {
          title: "Seek",
          items: [{ label: "Search", view: "faultqr-search" }],
        },
      ],
    },
  },
  documentation: {
    label: "Documentation",
    sidebar: {
      sections: [
        {
          title: "Documentation",
          items: [
            { label: "By type", view: "doc-by-type" },
            { label: "According to assigned machine number", view: "doc-machine-number" },
          ],
        },
        {
          title: "Seek",
          items: [{ label: "Query", view: "doc-query" }],
        },
        {
          title: "Left",
          items: [{ label: "Public area", view: "doc-public-area" }],
        },
      ],
    },
  },
  "acm-documentation": {
    label: "ACM Documentation",
    sidebar: {
      sections: [
        {
          title: "Views",
          items: [{ label: "Overview", view: "acm-overview" }],
        },
      ],
    },
  },
  "knowledge-base": {
    label: "Knowledge Base",
    sidebar: {
      sections: [
        {
          title: "Views",
          items: [{ label: "By Subgroups", view: "knowledge-by-subgroups" }],
        },
        {
          title: "Personal",
          items: [{ label: "My Folder", view: "knowledge-my-folder" }],
        },
      ],
    },
  },
  "test-report-pdf": {
    label: "Test Report PDF",
    sidebar: {
      sections: [
        {
          title: "Views",
          items: [{ label: "Overview", view: "testpdf-overview" }],
        },
        {
          title: "Seek",
          items: [{ label: "Search for PDF", view: "testpdf-search-for-pdf" }],
        },
      ],
    },
  },
  "tpg-test-report": {
    label: "TPG Test Report",
    sidebar: {
      sections: [
        {
          title: "Views",
          items: [{ label: "Overviw TPG", view: "tpg-overview" }],
        },
        {
          title: "Seek",
          items: [],
        },
        {
          title: "Left",
          items: [{ label: "Public area", view: "tpg-public-area" }],
        },
      ],
    },
  },
  "fuel-extraction-internal": {
    label: "Fuel Extraction Internal",
    sidebar: {
      sections: [
        {
          title: "Gas Station Depot",
          items: [{ label: "Overview", view: "fuel-overview" }],
        },
        {
          title: "Left",
          items: [{ label: "Public area", view: "fuel-public-area" }],
        },
      ],
    },
  },
};

export default NAVIGATION_CONFIG;
