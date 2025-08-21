
// import day1Image from '../assets/images/dayy1.jpg';
// import day2Image from '../assets/images/dayy2.jpg';
// import day3Image from '../assets/images/dayy3.webp';
// import day4Image from '../assets/images/dayy4.jpg';
// import day5Image from '../assets/images/dayy5.webp';

// const DayPlanAndPricing = () => {
//   const days = [
//     {
//       day: "Day 01",
//       activities: [
//         "Airport Pick Up",
//         "Corbyn's Cove Beach",
//         "Cellular Jail Visit",
//         "Light and Sound Show at Cellular Jail"
//       ],
//     },
//     {
//       day: "Day 02",
//       activities: [
//         "Port Blair → Havelock in Cruise",
//         "Radhanagar Beach"
//       ],
//     },
//     {
//       day: "Day 03",
//       activities: [
//         "Elephanta Beach in Boat",
//         "Complimentary Snorkeling",
//         "Havelock → Neil in Cruise",
//         "Laxmanpur Beach"
//       ],
//     },
//     {
//       day: "Day 04",
//       activities: [
//         "Bharatpur Beach",
//         "Natural Rock Formation",
//         "Neil Island → Port Blair in Cruise"
//       ],
//     },
//     {
//       day: "Day 05",
//       activities: [
//         "Airport Drop"
//       ],
//     }
//   ];

//   const pricing = [
//     {
//       type: "Budget",
//       hotels: {
//         "Port Blair": "Islander Inn (Standard Room) or Similar",
//         "Havelock": "Radhakrishna Hotel (Standard A/c Room) or Similar",
//         "Neil Island": "Save Green Resort (Deluxe Room) or Similar"
//       },
//       price: "₹ 14,900",
//       button: "Book Budget Package",
//       color: "from-pink-100 to-pink-200"
//     },
//     {
//       type: "Standard",
//       hotels: {
//         "Port Blair": "Hotel Sweneha (Deluxe Room) / Hotel Driftwood (Deluxe Room) or Similar",
//         "Havelock": "Radhakrishna Resort / Shangrilas Beach Resort or Similar",
//         "Neil Island": "C S Empire / Laxmi Continental Resort or Similar"
//       },
//       price: "₹ 16,800",
//       button: "Book Standard Package",
//       color: "from-purple-100 to-purple-200"
//     },
//     {
//       type: "Deluxe",
//       hotels: {
//         "Port Blair": "Reef Atlantis / The Luxor / BayLeaf Inn or Similar",
//         "Havelock": "Haywizz / Aquays Hotels & Resorts or Similar",
//         "Neil Island": "Reef Valley Resort / Coral Garden Resort or Similar"
//       },
//       price: "₹ 19,800",
//       button: "Book Deluxe Package",
//       color: "from-rose-100 to-rose-200"
//     }
//   ];

//   return (
//     <div className="bg-white">
//       {/* ===== TRIP ITINERARY ===== */}
//       <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50">
//         <div className="max-w-6xl mx-auto mb-10 text-center">
//           <h2 className="text-3xl font-bold text-gray-800">Trip Itinerary</h2>
//         </div>

//         <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-5">
//           {days.map((day, index) => (
//             <div
//               key={index}
//               className="p-6 transition bg-white shadow-lg rounded-2xl hover:shadow-xl"
//             >
//               <h3 className="mb-4 text-xl font-bold text-gray-900">{day.day}</h3>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 {day.activities.map((activity, i) => (
//                   <li key={i} className="flex items-start gap-2">
//                     <svg
//                       className="flex-shrink-0 w-4 h-4 mt-1 text-pink-600"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>{activity}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ===== PRICING SECTION ===== */}
//       <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
//         <div className="px-6 mx-auto text-center max-w-8xl">
//           <h2 className="mb-4 text-3xl font-bold text-gray-800">Discover Andaman Packages</h2>
//           <p className="mb-12 text-gray-600">
//             Pricing – Give number of travellers you want to travel with and choose your preferred hotel options
//           </p>

//           <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
//             {pricing.map((pkg, index) => (
//               <div
//                 key={index}
//                 className={`rounded-2xl shadow-lg bg-gradient-to-b ${pkg.color} p-8 flex flex-col justify-between`}
//               >
//                 <div>
//                   <h3 className="mb-6 text-xl font-bold text-gray-900">{pkg.type} Hotels</h3>
//                   <div className="space-y-4 text-sm text-gray-800">
//                     {Object.entries(pkg.hotels).map(([location, hotel], i) => (
//                       <div key={i}>
//                         <p className="font-semibold">{location}</p>
//                         <p className="text-gray-700">{hotel}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="mt-8 text-center">
//                   <p className="text-2xl font-bold text-gray-900">{pkg.price}</p>
//                   <p className="text-sm text-gray-600">per person for 2 rooms</p>
//                   <button className="w-full py-3 mt-4 font-semibold text-white transition bg-black rounded-xl hover:bg-gray-800">
//                     {pkg.button}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DayPlanAndPricing;

//-----------------------
// import { useState } from "react";

// const DayPlanAndPricing = () => {
//   const [travellers, setTravellers] = useState("6+"); // default

//   const days = [
//     { day: "Day 01", activities: ["Airport Pick Up", "Corbyn's Cove Beach", "Cellular Jail Visit", "Light and Sound Show at Cellular Jail"] },
//     { day: "Day 02", activities: ["Port Blair → Havelock in Cruise", "Radhanagar Beach"] },
//     { day: "Day 03", activities: ["Elephanta Beach in Boat", "Complimentary Snorkeling", "Havelock → Neil in Cruise", "Laxmanpur Beach"] },
//     { day: "Day 04", activities: ["Bharatpur Beach", "Natural Rock Formation", "Neil Island → Port Blair in Cruise"] },
//     { day: "Day 05", activities: ["Airport Drop"] },
//   ];

//   // pricing table based on travellers count
//   const pricingData = {
//     "2": {
//       Budget: { price: "₹ 18,100", rooms: "1 room" },
//       Standard: { price: "₹ 20,200", rooms: "1 room" },
//       Deluxe: { price: "₹ 23,300", rooms: "1 room" },
//     },
//     "3": {
//       Budget: { price: "₹ 16,200", rooms: "1 room" },
//       Standard: { price: "₹ 18,100", rooms: "1 room" },
//       Deluxe: { price: "₹ 21,100", rooms: "1 room" },
//     },
//     "4": {
//       Budget: { price: "₹ 15,300", rooms: "2 rooms" },
//       Standard: { price: "₹ 17,400", rooms: "2 rooms" },
//       Deluxe: { price: "₹ 20,500", rooms: "2 rooms" },
//     },
//     "5": {
//       Budget: { price: "₹ 14,800", rooms: "2 rooms" },
//       Standard: { price: "₹ 16,800", rooms: "2 rooms" },
//       Deluxe: { price: "₹ 19,900", rooms: "2 rooms" },
//     },
//     "6+": {
//       Budget: { price: "₹ 14,900", rooms: "2 rooms" },
//       Standard: { price: "₹ 16,800", rooms: "2 rooms" },
//       Deluxe: { price: "₹ 19,800", rooms: "2 rooms" },
//     },
//   };

//   const hotels = {
//     Budget: {
//       "Port Blair": "Islander Inn (Standard Room) or Similar",
//       "Havelock": "Radhakrishna Hotel (Standard A/c Room) or Similar",
//       "Neil Island": "Save Green Resort (Deluxe Room) or Similar",
//     },
//     Standard: {
//       "Port Blair": "Hotel Sweneha (Deluxe Room) / Hotel Driftwood (Deluxe Room) or Similar",
//       "Havelock": "Radhakrishna Resort (Standard A/c Room) / Shangrilas Beach Resort (A/c Standard Cottage) or Similar",
//       "Neil Island": "C S Empire (Premium Room) / Laxmi Continental Resort (Standard Room) or Similar",
//     },
//     Deluxe: {
//       "Port Blair": "Reef Atlantis(A/c Deluxe Room) / The Luxor(Executive Room) / BayLeaf Inn(Standard Room) or Similar",
//       "Havelock": "Haywizz(Premium Room) / Aquays Hotels & Resorts(Havelock Plaza) or Similar",
//       "Neil Island": "Reef Valley Resort(A/c Deluxe Cottage) / Coral Garden Resort(Garden Suite) or Similar",
//     },
//   };

//   const packages = [
//     { type: "Budget", color: "from-pink-100 to-pink-200", button: "Book Budget Package" },
//     { type: "Standard", color: "from-purple-100 to-purple-200", button: "Book Standard Package" },
//     { type: "Deluxe", color: "from-rose-100 to-rose-200", button: "Book Deluxe Package" },
//   ];

//   return (
//     <div className="bg-white">
//       {/* ===== TRIP ITINERARY ===== */}
//       <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50">
//         <div className="max-w-6xl mx-auto mb-10 text-center">
//           <h2 className="text-3xl font-bold text-gray-800">Trip Itinerary</h2>
//         </div>

//         <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-5">
//           {days.map((day, index) => (
//             <div key={index} className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl">
//               <h3 className="mb-4 text-xl font-bold text-gray-900">{day.day}</h3>
//               <ul className="space-y-2 text-sm text-gray-700">
//                 {day.activities.map((activity, i) => (
//                   <li key={i} className="flex items-start gap-2">
//                     <svg
//                       className="w-4 h-4 mt-1 text-pink-600"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span>{activity}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ===== PRICING SECTION ===== */}
//       <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
//         <div className="px-6 mx-auto text-center max-w-8xl">
//           <h2 className="mb-4 text-3xl font-bold text-gray-800">Discover Andaman Packages</h2>
//           {/*  */}

// <div className="flex flex-wrap items-center justify-start px-4 mb-6">
//   <p className="text-base text-gray-600">
//     <strong className="mr-4 text-xl ml-102">Pricing</strong>
//     Give number of travellers you want to travel with and choose your preferred hotel options
//   </p>


//   <div className="relative inline-block ml-3">
//   <select
//     value={travellers}
//     onChange={(e) => setTravellers(e.target.value)}
//     className="w-56 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-md appearance-none cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 focus:ring-4 focus:ring-pink-300 focus:outline-none"
//   >
//   <option value="2" className="text-black rounded-lg">2 Travellers</option>
//     <option value="3" className="text-black rounded-lg">3 Travellers</option>
//     <option value="4" className="text-black rounded-lg">4 Travellers</option>
//     <option value="5" className="text-black rounded-lg">5 Travellers</option>
//     <option value="6+" className="text-black rounded-lg">6+ Travellers</option>
//   </select>

//   {/* Custom arrow */}
//   <span className="absolute inset-y-0 flex items-center pointer-events-none right-4">
//     <svg
//       className="w-5 h-5 text-white"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//     </svg>
//   </span>
// </div>

// </div>


//           <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//             {packages.map((pkg, index) => {
//               const info = pricingData[travellers][pkg.type];
//               return (
//                 <div
//                   key={index}
//                   className={`rounded-2xl shadow-lg bg-gradient-to-b ${pkg.color} p-8 flex flex-col justify-between`}
//                 >
//                   <div>
//                     <h3 className="mb-6 text-xl font-bold text-gray-900">{pkg.type} Hotels</h3>
//                     <div className="space-y-4 text-sm text-gray-800">
//                       {Object.entries(hotels[pkg.type]).map(([location, hotel], i) => (
//                         <div key={i}>
//                           <p className="font-semibold">{location}</p>
//                           <p className="text-gray-700">{hotel}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mt-8 text-center">
//                     <p className="text-2xl font-bold text-gray-900">{info.price}</p>
//                     <p className="text-sm text-gray-600">per person for {info.rooms}</p>
//                     <button className="w-full py-3 mt-4 font-semibold text-white transition bg-black rounded-xl hover:bg-gray-800">
//                       {pkg.button}
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DayPlanAndPricing;
//------------------desktop+mobile------------

import { useState } from "react";

const DayPlanAndPricing = () => {
  const [travellers, setTravellers] = useState("6+"); // default

  const days = [
    { day: "Day 01", activities: ["Airport Pick Up", "Corbyn's Cove Beach", "Cellular Jail Visit", "Light and Sound Show at Cellular Jail"] },
    { day: "Day 02", activities: ["Port Blair → Havelock in Cruise", "Radhanagar Beach"] },
    { day: "Day 03", activities: ["Elephanta Beach in Boat", "Complimentary Snorkeling", "Havelock → Neil in Cruise", "Laxmanpur Beach"] },
    { day: "Day 04", activities: ["Bharatpur Beach", "Natural Rock Formation", "Neil Island → Port Blair in Cruise"] },
    { day: "Day 05", activities: ["Airport Drop"] },
  ];

  // pricing table based on travellers count
  const pricingData = {
    "2": {
      Budget: { price: "₹ 18,100", rooms: "1 room" },
      Standard: { price: "₹ 20,200", rooms: "1 room" },
      Deluxe: { price: "₹ 23,300", rooms: "1 room" },
    },
    "3": {
      Budget: { price: "₹ 16,200", rooms: "1 room" },
      Standard: { price: "₹ 18,100", rooms: "1 room" },
      Deluxe: { price: "₹ 21,100", rooms: "1 room" },
    },
    "4": {
      Budget: { price: "₹ 15,300", rooms: "2 rooms" },
      Standard: { price: "₹ 17,400", rooms: "2 rooms" },
      Deluxe: { price: "₹ 20,500", rooms: "2 rooms" },
    },
    "5": {
      Budget: { price: "₹ 14,800", rooms: "2 rooms" },
      Standard: { price: "₹ 16,800", rooms: "2 rooms" },
      Deluxe: { price: "₹ 19,900", rooms: "2 rooms" },
    },
    "6+": {
      Budget: { price: "₹ 14,900", rooms: "2 rooms" },
      Standard: { price: "₹ 16,800", rooms: "2 rooms" },
      Deluxe: { price: "₹ 19,800", rooms: "2 rooms" },
    },
  };

  const hotels = {
    Budget: {
      "Port Blair": "Islander Inn (Standard Room) or Similar",
      "Havelock": "Radhakrishna Hotel (Standard A/c Room) or Similar",
      "Neil Island": "Save Green Resort (Deluxe Room) or Similar",
    },
    Standard: {
      "Port Blair": "Hotel Sweneha (Deluxe Room) / Hotel Driftwood (Deluxe Room) or Similar",
      "Havelock": "Radhakrishna Resort (Standard A/c Room) / Shangrilas Beach Resort (A/c Standard Cottage) or Similar",
      "Neil Island": "C S Empire (Premium Room) / Laxmi Continental Resort (Standard Room) or Similar",
    },
    Deluxe: {
      "Port Blair": "Reef Atlantis(A/c Deluxe Room) / The Luxor(Executive Room) / BayLeaf Inn(Standard Room) or Similar",
      "Havelock": "Haywizz(Premium Room) / Aquays Hotels & Resorts(Havelock Plaza) or Similar",
      "Neil Island": "Reef Valley Resort(A/c Deluxe Cottage) / Coral Garden Resort(Garden Suite) or Similar",
    },
  };

  const packages = [
    { type: "Budget", color: "from-pink-100 to-pink-200", button: "Book Budget Package" },
    { type: "Standard", color: "from-purple-100 to-purple-200", button: "Book Standard Package" },
    { type: "Deluxe", color: "from-rose-100 to-rose-200", button: "Book Deluxe Package" },
  ];

  return (
    <div className="bg-white">
      {/* ===== TRIP ITINERARY ===== */}
      <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Trip Itinerary</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-5">
          {days.map((day, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl">
              <h3 className="mb-4 text-xl font-bold text-gray-900">{day.day}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {day.activities.map((activity, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 mt-1 text-pink-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="px-6 mx-auto text-center max-w-7xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Discover Andaman Packages</h2>

          {/* Traveller Select */}
          <div className="flex flex-col items-center justify-between gap-4 mb-10 md:flex-row">
            <p className="text-base text-center text-gray-600 md:text-left">
              <strong className="mr-2 text-xl">Pricing:</strong>
              Choose travellers & preferred hotel options
            </p>

            <div className="relative w-full md:w-64">
              <select
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                className="w-full px-6 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-md appearance-none cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 focus:ring-4 focus:ring-pink-300 focus:outline-none"
              >
                <option value="2" className="text-black">2 Travellers</option>
                <option value="3" className="text-black">3 Travellers</option>
                <option value="4" className="text-black">4 Travellers</option>
                <option value="5" className="text-black">5 Travellers</option>
                <option value="6+" className="text-black">6+ Travellers</option>
              </select>

              {/* Custom arrow */}
              <span className="absolute inset-y-0 flex items-center pointer-events-none right-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {packages.map((pkg, index) => {
              const info = pricingData[travellers][pkg.type];
              return (
                <div
                  key={index}
                  className={`rounded-2xl shadow-lg bg-gradient-to-b ${pkg.color} p-8 flex flex-col justify-between`}
                >
                  <div>
                    <h3 className="mb-6 text-xl font-bold text-gray-900">{pkg.type} Hotels</h3>
                    <div className="space-y-4 text-sm text-gray-800">
                      {Object.entries(hotels[pkg.type]).map(([location, hotel], i) => (
                        <div key={i}>
                          <p className="font-semibold">{location}</p>
                          <p className="text-gray-700">{hotel}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-2xl font-bold text-gray-900">{info.price}</p>
                    <p className="text-sm text-gray-600">per person for {info.rooms}</p>
                    <button className="w-full py-3 mt-4 font-semibold text-white transition bg-black rounded-xl hover:bg-gray-800">
                      {pkg.button}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DayPlanAndPricing;


