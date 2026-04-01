import React from "react";
import { MapPin, RefreshCw } from "lucide-react";

const StorungsformularTab: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Main Info Card */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Boels - Störungsformular</h3>
        
        <div className="space-y-4 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Mobile Techniker von:</span>
            <span className="font-bold text-gray-900">depot 043</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Boels Nummer:</span>
            <span className="font-bold text-red-600">180410192</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Gerätebezeichnung:</span>
            <span className="font-bold text-blue-600">Gerätebezeichnung:Gelenkteleskop-Arbeitsbühne 26,2m AH, Diesel</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Seriennummer:</span>
            <span className="font-bold text-orange-500">2101334</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Subgruppe:</span>
            <span className="font-bold text-green-600">18041</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Betriebsstunden Maschine:</span>
            <span className="font-bold text-gray-900">0,0 Std.</span>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-4">
          <div className="flex justify-between border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">Störungsdatum / Techniker:</span>
            <span className="text-sm font-medium text-blue-600">13.10.2025 <span className="hover:underline cursor-pointer transition-all">borsos</span></span>
          </div>
          <div className="flex justify-between border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">Störungsmeldung von:</span>
            <span className="text-sm font-medium text-gray-900">-</span>
          </div>
          <div className="flex justify-between border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">MV Nummer:</span>
            <span className="text-sm font-bold text-red-600">5780031480</span>
          </div>
          <div className="flex justify-between border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">Firma Name:</span>
            <span className="text-sm font-medium text-gray-900">Leyrer und Graf</span>
          </div>
          <div className="flex justify-between border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">Kontaktperson vor Ort:</span>
            <span className="text-sm font-medium text-gray-900">Hr. Gleichweit</span>
          </div>
          <div className="flex justify-between border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">Telefon Nummer:</span>
            <span className="text-sm font-medium text-gray-900">0664-88573667</span>
          </div>
          <div className="flex justify-between border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">Adresse / Einsatzort:</span>
            <span className="text-sm font-medium text-gray-900 text-right max-w-[200px]">Obere Grabengasse vis a vis der Feuerwehr</span>
          </div>
          <div className="flex justify-between border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">PLZ:</span>
            <span className="text-sm font-medium text-gray-900">2544</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-gray-500 text-sm">Google Maps:</span>
            <button className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 px-3 py-1 rounded-full">
              <MapPin size={14} className="text-red-500" />
              View Location
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-4">
          <div className="flex justify-between border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">Ort:</span>
            <span className="text-sm font-medium text-gray-900">Leobersdorf</span>
          </div>
          <div className="flex flex-col gap-1 border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">Ausfall Ursache:</span>
            <span className="text-sm font-medium text-gray-900 text-right">Der Bagger stirbt alle 1-2 Minuten ab. Fährt auf Böschung.</span>
          </div>
          <div className="flex flex-col gap-1 border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">Durchgeführte Arbeiten:</span>
            <span className="text-sm font-medium text-gray-900 text-right">HD Tank überfüllt wegen die große Steigung!!! Bitte bei nächstem Check absaugen</span>
          </div>
          <div className="flex justify-between border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">Reparaturstatus:</span>
            <span className="text-sm font-medium text-gray-900">-</span>
          </div>
          <div className="flex justify-between border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">Arbeitsstunden:</span>
            <span className="text-sm font-medium text-gray-900">1,0 Std.</span>
          </div>
          <div className="flex justify-between border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">Gefahrene Kilometer / Fahrzeit:</span>
            <span className="text-sm font-medium text-gray-900">46 km 0,5 Std.</span>
          </div>
          <div className="flex justify-between border-b border-gray-50 pb-2">
            <span className="text-gray-500 text-sm">Einsatz Beendet um:</span>
            <span className="text-sm font-bold text-blue-500">10:40</span>
          </div>
          <div className="flex justify-between pt-2">
            <span className="text-gray-500 text-sm">Kunde war Anwesend:</span>
            <span className="text-sm font-bold text-green-500">Ja</span>
          </div>
        </div>
      </div>

      <p className="text-right text-[10px] text-orange-600 font-medium italic">Powered by Boels-Technikweb ®</p>

      {/* Machines Section */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center">
            <span className="px-4 py-1.5 bg-orange-50 border border-orange-200 text-orange-600 rounded text-sm font-semibold shadow-sm">Maschinen (0)</span>
            <div className="flex-1"></div>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                <RefreshCw size={18} />
            </button>
        </div>
        
        <div className="bg-white border border-gray-100 rounded-2xl p-12 shadow-sm flex items-center justify-center min-h-[160px]">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">No Data Found</h2>
        </div>
        
        <p className="text-right text-[10px] text-orange-600 font-medium italic">Powered by Boels-Technikweb ®</p>
      </div>
    </div>
  );
};

export default StorungsformularTab;
