// import checkmarkImage from '../assets/images/inclusion.svg'; // Your image path

// import crossImage from '../assets/images/exclusion.svg'; // For exclusions if needed

// const InclusionsExclusions = () => {
//   const inclusions = [
//     "All sightseeing by personal AC & Sanitised Vehicle",
//     "Above mentioned hotels (subject to availability) or similar category",
//     "Daily breakfast at respective hotels from Day 2",
//     "Island transfers in base category cruise (Nautika/Green Ocean/Makruzz)",
//     "All entry tickets, ferry tickets and permit charges",
//     "Private cruise transfers between islands",
//     "Dedicated travel experts assistance in all major islands",
//     "24/7 on-call assistance throughout your trip",
//     "Personal Tour Manager as single point of contact",
//     "Field executive assistance at all entry/exit points",
//     "All dedicated AC vehicle charges (Ertiga/Dzire) as per itinerary",
//     "All applicable government taxes and service charges"
//   ];

//   const exclusions = [
//     "Vehicles not at disposal (only pickup/drop services)",
//     "Domestic/international flight fares",
//     "Personal expenses, room service, special orders",
//     "Alcoholic/non-alcoholic beverages",
//     "Extra excursions beyond suggested itinerary",
//     "Camera/video camera charges at monuments",
//     "Laundry, telephone calls, and other incidentals",
//     "Travel insurance and medical expenses",
//     "Any services not mentioned in inclusions"
//   ];

//   return (
//     <div className="mb-8 overflow-hidden bg-white rounded-lg shadow-md">
//       <div className="p-6 bg-pink-100">
//         <h2 className="text-2xl font-bold text-center text-black">What's Included & Excluded</h2>
//       </div>

//       {/* <div className="grid gap-8 p-6 ml-160 md:grid-cols-1 md:p-8"> */}

//       <div className="grid gap-8 p-6 ml-60 md:grid-cols-2 md:p-8">
        
        

        
//         {/* Inclusions */}
//         <div>
//           {/* <div className="flex items-center mb-6">
//             <div className="p-3 mr-4 bg-green-100 rounded-full">
//               <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-green-600">INCLUSIONS</h3>
//           </div> */}
//           <div className="flex items-center mb-6">
//             {/* <div className="p-3 mr-4 bg-green-100 rounded-full"> */}

//             <div className="p-3 mr-2">

//               <img 
//                 src={checkmarkImage} 
//                 alt="Included" 
//                 className="object-contain w-12 h-12" 
//               />
//             </div>
//             <h3 className="text-xl font-bold text-green-600">INCLUSIONS</h3>
//           </div>
          
//           <ul className="space-y-3">
//             {inclusions.map((item, index) => (
//               <li key={`inc-${index}`} className="flex items-start">
//                 <svg className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Exclusions */}
//         <div>
//           {/* <div className="flex items-center mb-6">
//             <div className="p-3 mr-4 bg-red-100 rounded-full">
//               <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-red-600">EXCLUSIONS</h3>
//           </div> */}
//           <div className="flex items-center mb-6">
//             {/* <div className="p-3 mr-4 bg-red-100 rounded-full"> */}
//             <div className="p-3 mr-2">

//               <img 
//                 src={crossImage} 
//                 alt="Excluded" 
//                 className="object-contain w-12 h-12" 
//               />
//             </div>
//             <h3 className="text-xl font-bold text-red-600">EXCLUSIONS</h3>
//           </div>
          
//           <ul className="space-y-3">
//             {exclusions.map((item, index) => (
//               <li key={`exc-${index}`} className="flex items-start">
//                 <svg className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InclusionsExclusions;

//--------------desktop+mobile----------------

import checkmarkImage from "../assets/images/inclusion.svg";
import crossImage from "../assets/images/exclusion.svg";

const InclusionsExclusions = () => {
  const inclusions = [
    "All sightseeing by personal AC & Sanitised Vehicle",
    "Above mentioned hotels (subject to availability) or similar category",
    "Daily breakfast at respective hotels from Day 2",
    "Island transfers in base category cruise (Nautika/Green Ocean/Makruzz)",
    "All entry tickets, ferry tickets and permit charges",
    "Private cruise transfers between islands",
    "Dedicated travel experts assistance in all major islands",
    "24/7 on-call assistance throughout your trip",
    "Personal Tour Manager as single point of contact",
    "Field executive assistance at all entry/exit points",
    "All dedicated AC vehicle charges (Ertiga/Dzire) as per itinerary",
    "All applicable government taxes and service charges",
  ];

  const exclusions = [
    "Vehicles not at disposal (only pickup/drop services)",
    "Domestic/international flight fares",
    "Personal expenses, room service, special orders",
    "Alcoholic/non-alcoholic beverages",
    "Extra excursions beyond suggested itinerary",
    "Camera/video camera charges at monuments",
    "Laundry, telephone calls, and other incidentals",
    "Travel insurance and medical expenses",
    "Any services not mentioned in inclusions",
  ];

  return (
    <div className="mb-8 overflow-hidden bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="p-6 bg-pink-100">
        <h2 className="text-xl font-bold text-center text-black md:text-2xl">
          What's Included & Excluded
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid gap-8 p-6 md:p-10 md:grid-cols-2">
        {/* Inclusions */}
        <div>
          <div className="flex items-center mb-6">
            <div className="p-2 mr-3">
              <img
                src={checkmarkImage}
                alt="Included"
                className="object-contain w-10 h-10 md:w-12 md:h-12"
              />
            </div>
            <h3 className="text-lg font-bold text-green-600 md:text-xl">
              INCLUSIONS
            </h3>
          </div>

          <ul className="space-y-3 text-sm md:text-base">
            {inclusions.map((item, index) => (
              <li key={`inc-${index}`} className="flex items-start">
                <svg
                  className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        <div>
          <div className="flex items-center mb-6">
            <div className="p-2 mr-3">
              <img
                src={crossImage}
                alt="Excluded"
                className="object-contain w-10 h-10 md:w-12 md:h-12"
              />
            </div>
            <h3 className="text-lg font-bold text-red-600 md:text-xl">
              EXCLUSIONS
            </h3>
          </div>

          <ul className="space-y-3 text-sm md:text-base">
            {exclusions.map((item, index) => (
              <li key={`exc-${index}`} className="flex items-start">
                <svg
                  className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InclusionsExclusions;
