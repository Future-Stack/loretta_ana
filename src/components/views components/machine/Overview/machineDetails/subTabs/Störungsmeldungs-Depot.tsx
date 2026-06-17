const StörungsmeldungsDepot = () => {
  const data = [
    {
      date: '08.03.2024',
      meldungNr: 'SM-2024-001',
      maschine: 'Atlas Copco QAS60',
      beschreibung: 'Überhitzung des Motors nach längerem Betrieb',
      status: 'Offen',
      priorität: 'Hoch',
      melder: 'muster',
    },
    {
      date: '15.03.2024',
      meldungNr: 'SM-2024-002',
      maschine: 'Kompressor K-200',
      beschreibung: 'Druckabfall im Hydrauliksystem festgestellt',
      status: 'In Bearbeitung',
      priorität: 'Mittel',
      melder: 'schulze',
    },
    {
      date: '22.03.2024',
      meldungNr: 'SM-2024-003',
      maschine: 'Pumpe P-45',
      beschreibung: 'Ungewöhnliche Geräusche beim Anlauf',
      status: 'Abgeschlossen',
      priorität: 'Niedrig',
      melder: 'malins',
    },
  ];

  const statusColor = (status: string) => {
    if (status === 'Offen') return 'text-red-600 bg-red-50';
    if (status === 'In Bearbeitung') return 'text-orange-600 bg-orange-50';
    return 'text-green-600 bg-green-50';
  };

  const prioritätColor = (priorität: string) => {
    if (priorität === 'Hoch') return 'text-red-600 font-semibold';
    if (priorität === 'Mittel') return 'text-orange-500 font-medium';
    return 'text-gray-500';
  };

  return (
    <div className="w-full overflow-x-auto border border-gray-100 rounded">
      <table className="min-w-full text-xs sm:text-sm bg-white">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Datum</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Meldung-Nr.</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Maschine</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Beschreibung</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Priorität</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Status</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Melder</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
              <td className="p-3 whitespace-nowrap text-gray-900">{row.date}</td>
              <td className="p-3 whitespace-nowrap text-blue-600 font-medium">{row.meldungNr}</td>
              <td className="p-3 whitespace-nowrap text-gray-900 min-w-[150px]">{row.maschine}</td>
              <td className="p-3 text-gray-700 min-w-[280px]">{row.beschreibung}</td>
              <td className={`p-3 whitespace-nowrap ${prioritätColor(row.priorität)}`}>{row.priorität}</td>
              <td className="p-3 whitespace-nowrap">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${statusColor(row.status)}`}>
                  {row.status}
                </span>
              </td>
              <td className="p-3 whitespace-nowrap text-blue-600">{row.melder}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StörungsmeldungsDepot;
