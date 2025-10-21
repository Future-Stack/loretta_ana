import { useState, lazy, Suspense } from 'react';
import { RefreshCw } from 'lucide-react';

// ✅ Lazy load all table components
const ArbeitsauftragTable = lazy(() => import('./machineDetails/subTabs/ArbeitsauftragTable'));
const SchadensmeldungTable = lazy(() => import('./machineDetails/subTabs/SchadensmeldungTable'));
const StorungseinsatzTable = lazy(() => import('./machineDetails/subTabs/StorungseinsatzTable'));
const PrufungenInfoTable = lazy(() => import('./machineDetails/subTabs/PrufungenInfoTable'));
const AusgabeprotokollTable = lazy(() => import('./machineDetails/subTabs/AusgabeprotokollTable'));
const RucknahmeprotokollTable = lazy(() => import('./machineDetails/subTabs/RucknahmeprotokollTable'));
const WissensdatenbankTable = lazy(() => import('./machineDetails/subTabs/WissensdatenbankTable'));
const Störungsmeldungs = lazy(() => import('./machineDetails/subTabs/Störungsmeldungs-Depot'));

const ZugeordneteDokumenteSection = () => {
  const [activeSubTab, setActiveSubTab] = useState('Arbeitsauftrag');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const subTabs = [
    { name: 'Arbeitsauftrag', count: 5 },
    { name: 'Schadensmeldung', count: 3 },
    { name: 'Störungseinsatz', count: 4 },
    { name: 'Prüfungen Info', count: 1 },
    { name: 'Ausgabeprotokoll', count: 6 },
    { name: 'Rücknahmeprotokoll', count: 3 },
    { name: 'Wissensdatenbank', count: 1 },
    { name: 'Störungsmeldungs-Depot' },
  ];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setRefreshKey((prev) => prev + 1);
      setIsRefreshing(false);
    }, 500);
  };

  return (
    <div className="w-full">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-gray-900">
        Zugeordnete Dokumente
      </h3>

      <hr className="border-gray-300 mb-3 sm:mb-4" />

      {/* Sub Tabs */}
      <div className="mb-3 sm:mb-4 -mx-3 sm:mx-0">
        <div className="overflow-x-auto px-3 sm:px-0">
          <div className="flex gap-2 pb-2 sm:pb-0 min-w-max sm:min-w-0 sm:flex-wrap">
            {subTabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveSubTab(tab.name)}
                className={`px-3 py-2 text-sm whitespace-nowrap border rounded transition-colors flex-shrink-0 ${
                  activeSubTab === tab.name
                    ? 'bg-orange-100 text-orange-600 border-orange-200 font-medium'
                    : 'text-gray-700 bg-gray-100 border border-gray-200 hover:bg-orange-50'
                }`}
              >
                {tab.name} ({tab.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Refresh Button */}
      <div className="flex justify-end mb-3 sm:mb-4">
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
          title="Refresh"
        >
          <RefreshCw
            size={18}
            className={`text-gray-600 transition-transform ${isRefreshing ? 'animate-spin' : ''}`}
          />
        </button>
      </div>

      {/* ✅ Lazy-loaded Sub Tab Content */}
      <div className="w-full overflow-x-auto">
        <Suspense fallback={<div className="text-center py-8 text-gray-500">Loading...</div>}>
          {activeSubTab === 'Arbeitsauftrag' && <ArbeitsauftragTable key={`arbeitsauftrag-${refreshKey}`} />}
          {activeSubTab === 'Schadensmeldung' && <SchadensmeldungTable key={`schadensmeldung-${refreshKey}`} />}
          {activeSubTab === 'Störungseinsatz' && <StorungseinsatzTable key={`storungseinsatz-${refreshKey}`} />}
          {activeSubTab === 'Prüfungen Info' && <PrufungenInfoTable key={`prufungen-${refreshKey}`} />}
          {activeSubTab === 'Ausgabeprotokoll' && <AusgabeprotokollTable key={`ausgabeprotokoll-${refreshKey}`} />}
          {activeSubTab === 'Rücknahmeprotokoll' && <RucknahmeprotokollTable key={`rucknahmeprotokoll-${refreshKey}`} />}
          {activeSubTab === 'Wissensdatenbank' && <WissensdatenbankTable key={`wissensdatenbank-${refreshKey}`} />}
          {activeSubTab === 'Störungsmeldungs-Depot' && <Störungsmeldungs key={`storungmeldungs-${refreshKey}`} />}
        </Suspense>
      </div>
    </div>
  );
};

export default ZugeordneteDokumenteSection;
