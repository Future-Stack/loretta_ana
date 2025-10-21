// import { Car } from "lucide-react";

const StorungseinsatzTable = () => {
//   const data = [
//     {
//       date: '02.06.2025',
//       number: 'H6070462',
//       description: 'GPS ausgebaut',
//       location: '1225 Wien',
//       status: 'Abgerechnet:',
//       action: 'Reparier!',
//       driver: 'Bocsar',
//       category: 'Kat.:',
//     },
//     {
//       date: '20.08.2022',
//       number: 'H6070462',
//       description: 'Batterie erneuert, statt 110A 95 A',
//       location: '2263 Dürnkrut',
//       status: 'Abgerechnet:',
//       action: 'Reparier!',
//       driver: 'Bocsar',
//       category: 'Kat.: Int',
//     },
//   ];

  return (
    <div className="w-full overflow-x-auto border border-gray-100 rounded">
      {/* <table className="min-w-full text-xs sm:text-sm bg-white">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Am:</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Nummer</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Beschreibung</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Ort</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Status</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Aktion</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Fahrer</th>
            <th className="text-left p-3 font-medium text-gray-700 whitespace-nowrap">Kategorie</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-gray-50 transition-colors"
            >
              <td className="p-3 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <Car size={16} className="text-gray-400" />
                  <span className="text-blue-600">{row.date}</span>
                </div>
              </td>
              <td className="p-3 text-red-500 font-medium whitespace-nowrap">{row.number}</td>
              <td className="p-3 min-w-[200px]">
                <div className="whitespace-pre-line">{row.description}</div>
              </td>
              <td className="p-3 text-blue-600 whitespace-nowrap">{row.location}</td>
              <td className="p-3 text-gray-700 whitespace-nowrap">{row.status}</td>
              <td className="p-3 text-green-600 font-medium whitespace-nowrap">{row.action}</td>
              <td className="p-3 text-blue-600 whitespace-nowrap">{row.driver}</td>
              <td className="p-3 text-gray-700 whitespace-nowrap">{row.category}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
        <div className="p-4 text-gray-500">Added after the full data access</div>
    </div>
  );
};

export default StorungseinsatzTable;