// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";


// const SearchGeneral = () => {
//   const [subgroup, setSubgroup] = useState("");
//   const [machineDescription, setMachineDescription] = useState("");
//   const [identifier, setIdentifier] = useState("");
//   const [serialNumber, setSerialNumber] = useState("");
//   const [machineNumberFrom, setMachineNumberFrom] = useState("");
//   const [machineNumberTo, setMachineNumberTo] = useState("");
//   const [lastChangeFrom, setLastChangeFrom] = useState("");
//   const [lastChangeTo, setLastChangeTo] = useState("");
//   const [deflated, setDeflated] = useState("");
//   const [levelWater, setLevelWater] = useState("");
//   const [fullTextSearch, setFullTextSearch] = useState("");
//   const [searchScope, setSearchScope] = useState("entry");

//   const handleSearch = () => {
//     console.log("Searching...");
//   };

//   const handleReset = () => {
//     setSubgroup("");
//     setMachineDescription("");
//     setIdentifier("");
//     setSerialNumber("");
//     setMachineNumberFrom("");
//     setMachineNumberTo("");
//     setLastChangeFrom("");
//     setLastChangeTo("");
//     setDeflated("");
//     setLevelWater("");
//     setFullTextSearch("");
//     setSearchScope("entry");
//   };

//   return (
//     <div className="flex flex-col w-full p-7 sm:p-8 border bg-white border-gray-300 rounded-md">
//       <h2 className="text-2xl font-bold mb-6">Search General</h2>

//       {/* Form Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {/* Left Column */}
//         <div className="space-y-4">
//           {/* Subgruppe */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Subgruppe:
//             </label>
//             <input
//               type="text"
//               placeholder="Example"
//               value={subgroup}
//               onChange={(e) => setSubgroup(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//           </div>

//           {/* Kennzeichen */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Kennzeichen:
//             </label>
//             <input
//               type="text"
//               placeholder="Example"
//               value={identifier}
//               onChange={(e) => setIdentifier(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//           </div>

//           {/* Maschine Nummer */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Maschine Nummer:
//             </label>
//             <div className="flex gap-2 items-center">
//               <input
//                 type="text"
//                 placeholder="e.g 7821454"
//                 value={machineNumberFrom}
//                 onChange={(e) => setMachineNumberFrom(e.target.value)}
//                 className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//               <span className="text-gray-600">bis</span>
//               <input
//                 type="text"
//                 placeholder="e.g 7821454"
//                 value={machineNumberTo}
//                 onChange={(e) => setMachineNumberTo(e.target.value)}
//                 className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//             </div>
//           </div>

//           {/* Deflated nach 350 */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Deflated nach 350:
//             </label>
//             <div className="relative">
//               <select
//                 value={deflated}
//                 onChange={(e) => setDeflated(e.target.value)}
//                 className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white"
//               >
//                 <option value="">Choose date</option>
//                 <option value="option1">Option 1</option>
//                 <option value="option2">Option 2</option>
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>
//           </div>

//           {/* Volltextsuche */}
//           {/* Volltextsuche */}
// <div className="flex flex-col space-y-2">
//   <label className="block text-sm font-medium text-gray-700">
//     Volltextsuche:
//   </label>

//   <div className="flex items-center gap-3">
//     {/* Input Field */}
//     <div className="flex-1 relative">
//       <input
//         type="text"
//         placeholder="Choose or type manually"
//         value={fullTextSearch}
//         onChange={(e) => setFullTextSearch(e.target.value)}
//         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
//       />
//     </div>

//     {/* Select Field */}
//     <div className="relative w-52">
//       <select
//         value={searchScope}
//         onChange={(e) => setSearchScope(e.target.value)}
//         className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-sm appearance-none"
//       >
//         <option value="entry">einen der Begriffe</option>
//         <option value="all">alle Begriffe</option>
//         <option value="exact">exakte Phrase</option>
//       </select>
//       <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//     </div>
//   </div>
// </div>

//         </div>

//         {/* Right Column */}
//         <div className="space-y-4">
//           {/* Maschinenbezeichnung */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Maschinenbezeichnung...:
//             </label>
//             <input
//               type="text"
//               placeholder="Example"
//               value={machineDescription}
//               onChange={(e) => setMachineDescription(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//           </div>

//           {/* Seriennummer */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Seriennummer:
//             </label>
//             <input
//               type="text"
//               placeholder="Example"
//               value={serialNumber}
//               onChange={(e) => setSerialNumber(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />
//           </div>

//           {/* Letzte Änderung */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Letzte Änderung
//             </label>
//             <div className="flex gap-2 items-center">
//   <div className="flex-1 relative">
//     <DatePicker
//       selected={lastChangeFrom ? new Date(lastChangeFrom) : null}
//       onChange={(date) => setLastChangeFrom(date?.toISOString().split("T")[0] || "")}
//       dateFormat="yyyy-MM-dd"
//       placeholderText="Choose date"
//       className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//       popperPlacement="bottom-start"
//     />
//   </div>

//   <span className="text-gray-600">bis</span>

//   <div className="flex-1 relative">
//     <DatePicker
//       selected={lastChangeTo ? new Date(lastChangeTo) : null}
//       onChange={(date) => setLastChangeTo(date?.toISOString().split("T")[0] || "")}
//       dateFormat="yyyy-MM-dd"
//       placeholderText="Choose date"
//       className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//       popperPlacement="bottom-start"
//     />
//   </div>
// </div>

//           </div>

//           {/* achtkühlsys / Wasserableuch */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               achtkühlsys / Wasserableuch.:
//             </label>
//             <div className="relative">
//               <select
//                 value={levelWater}
//                 onChange={(e) => setLevelWater(e.target.value)}
//                 className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white"
//               >
//                 <option value="">Choose date</option>
//                 <option value="option1">Option 1</option>
//                 <option value="option2">Option 2</option>
//               </select>
//               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-3 justify-center">
//         <button
//           onClick={handleSearch}
//           className="px-8 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium"
//         >
//           Suchen
//         </button>
//         <button
//           onClick={handleReset}
//           className="px-8 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchGeneral;


import { useState } from "react";
import { ChevronDown } from "lucide-react";

const SearchGeneral = () => {
  const [subgroup, setSubgroup] = useState("");
  const [machineDescription, setMachineDescription] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [machineNumberFrom, setMachineNumberFrom] = useState("");
  const [machineNumberTo, setMachineNumberTo] = useState("");
  const [lastChangeFrom, setLastChangeFrom] = useState("");
  const [lastChangeTo, setLastChangeTo] = useState("");
  const [deflated, setDeflated] = useState("");
  const [levelWater, setLevelWater] = useState("");
  const [fullTextSearch, setFullTextSearch] = useState("");
  const [searchScope, setSearchScope] = useState("entry");

  const handleSearch = () => {
    console.log("Searching...");
  };

  const handleReset = () => {
    setSubgroup("");
    setMachineDescription("");
    setIdentifier("");
    setSerialNumber("");
    setMachineNumberFrom("");
    setMachineNumberTo("");
    setLastChangeFrom("");
    setLastChangeTo("");
    setDeflated("");
    setLevelWater("");
    setFullTextSearch("");
    setSearchScope("entry");
  };

  return (
    <div className="flex flex-col w-full p-7 sm:p-8 border bg-white border-gray-300 rounded-md">
      <h2 className="text-2xl font-bold mb-6">Search General</h2>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Subgruppe */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subgruppe:
            </label>
            <input
              type="text"
              placeholder="Example"
              value={subgroup}
              onChange={(e) => setSubgroup(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Kennzeichen */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kennzeichen:
            </label>
            <input
              type="text"
              placeholder="Example"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Maschine Nummer */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maschine Nummer:
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="e.g 7821454"
                value={machineNumberFrom}
                onChange={(e) => setMachineNumberFrom(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <span className="text-gray-600">bis</span>
              <input
                type="text"
                placeholder="e.g 7821454"
                value={machineNumberTo}
                onChange={(e) => setMachineNumberTo(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Deflated nach 350 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deflated nach 350:
            </label>
            <div className="relative">
              <select
                value={deflated}
                onChange={(e) => setDeflated(e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white"
              >
                <option value="">Choose one</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Volltextsuche */}
          <div className="flex flex-col space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Volltextsuche:
            </label>
            <div className="flex items-center gap-3">
              {/* Input Field */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Choose or type manually"
                  value={fullTextSearch}
                  onChange={(e) => setFullTextSearch(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
              </div>

              {/* Select Field */}
              <div className="relative w-52">
                <select
                  value={searchScope}
                  onChange={(e) => setSearchScope(e.target.value)}
                  className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white text-sm appearance-none"
                >
                  <option value="entry">einen der Begriffe</option>
                  <option value="all">alle Begriffe</option>
                  <option value="exact">exakte Phrase</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Maschinenbezeichnung */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maschinenbezeichnung...:
            </label>
            <input
              type="text"
              placeholder="Example"
              value={machineDescription}
              onChange={(e) => setMachineDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Seriennummer */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Seriennummer:
            </label>
            <input
              type="text"
              placeholder="Example"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Letzte Änderung */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Letzte Änderung
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="date"
                value={lastChangeFrom}
                onChange={(e) => setLastChangeFrom(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              />
              <span className="text-gray-600">bis</span>
              <input
                type="date"
                value={lastChangeTo}
                onChange={(e) => setLastChangeTo(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              />
            </div>
          </div>

          {/* achtkühlsys / Wasserableuch */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              achtkühlsys / Wasserableuch.:
            </label>
            <div className="relative">
              <select
                value={levelWater}
                onChange={(e) => setLevelWater(e.target.value)}
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white"
              >
                <option value="">Choose one</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center">
        <button
          onClick={handleSearch}
          className="px-8 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors font-medium"
        >
          Suchen
        </button>
        <button
          onClick={handleReset}
          className="px-8 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default SearchGeneral;
