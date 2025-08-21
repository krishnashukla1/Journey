// const Pricing = () => {
//   const hotelOptions = [
//     {
//       id: 1,
//       title: "BUDGET PACKAGE",
//       price: "₹14,900",
//       perPerson: "per person",
//       hotels: {
//         portBlair: "Islander Inn (Standard Room) or Similar",
//         havelock: "Radhakrishna Hotel (Standard AC Room) or Similar",
//         neilIsland: "Sea Green Resort (Deluxe Room) or Similar"
//       }
//     },
//     {
//       id: 2,
//       title: "STANDARD PACKAGE",
//       price: "₹16,800",
//       perPerson: "per person",
//       hotels: {
//         portBlair: "Hotel Swagat (Deluxe Room) / Hotel Driftwood (Deluxe Room) or Similar",
//         havelock: "Radhakrishna Resort (Standard AC Room) / SeaShell Beach Resort (AC Standard Cottage) or Similar",
//         neilIsland: "CS Empire (Premium Room) / Summer Sands Beach Resort (Standard Room) or Similar"
//       }
//     },
//     {
//       id: 3,
//       title: "DELUXE PACKAGE",
//       price: "₹19,800",
//       perPerson: "per person",
//       hotels: {
//         portBlair: "Reef Atlantis (AC Deluxe Room) / The Luxor (Executive Room) / Bay Leaf Inn (Standard Room) or Similar",
//         havelock: "Haywizz (Premium Room) / Aquays Hotels & Resorts (Havelock Plaza) or Similar",
//         neilIsland: "Reef Valley Resort (AC Deluxe Cottage) / Coral Reef Resort (Garden Suite) or Similar"
//       }
//     }
//   ];

//   return (
//     <div className="px-4 py-12 mx-auto max-w-7xl">
//       <div className="mb-8 overflow-hidden bg-white border border-gray-100 shadow-xl rounded-2xl">
//         <div className="p-8 text-center bg-blue-600">
//           <h2 className="text-3xl font-bold text-white">Discover Andaman Packages</h2>
//           <p className="mt-3 text-blue-100">Select your perfect island getaway</p>
//         </div>

//         <div className="p-6 md:p-8">
//           <h3 className="mb-6 text-xl font-bold">Pricing</h3>
//           <p className="mb-8">Give number of travellers you want to travel with and choose your preferred hotel options</p>

//           <div className="grid gap-8 md:grid-cols-3">
//             {hotelOptions.map((option) => (
//               <div key={option.id} className="p-6 transition-shadow border rounded-lg hover:shadow-lg">
//                 <h4 className="mb-4 text-xl font-bold">{option.title}</h4>
//                 <div className="p-4 mb-4 bg-gray-100 rounded-lg">
//                   <p className="text-3xl font-bold">{option.price}</p>
//                   <p className="text-gray-600">{option.perPerson}</p>
//                 </div>

//                 <div className="space-y-4">
//                   <div>
//                     <h5 className="font-semibold">Port Blair</h5>
//                     <p className="text-sm text-gray-600">{option.hotels.portBlair}</p>
//                   </div>
//                   <div>
//                     <h5 className="font-semibold">Havelock</h5>
//                     <p className="text-sm text-gray-600">{option.hotels.havelock}</p>
//                   </div>
//                   <div>
//                     <h5 className="font-semibold">Neil Island</h5>
//                     <p className="text-sm text-gray-600">{option.hotels.neilIsland}</p>
//                   </div>
//                 </div>

//                 <button className={`mt-6 w-full py-3 rounded-lg font-bold ${
//                   option.title === "STANDARD PACKAGE" 
//                     ? "bg-blue-600 text-white hover:bg-blue-700" 
//                     : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//                 }`}>
//                   {option.title === "STANDARD PACKAGE" ? "BOOK NOW" : "SELECT"}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;

//================

import budgetIcon from '../assets/images/cheap-2.png';
import standardIcon from '../assets/images/3-star-hotel.png';
import deluxeIcon from '../assets/images/5-star-hotel.png';

const Pricing = () => {
  const hotelOptions = [
    {
      id: 1,
      type: "budget",
      title: "BUDGET PACKAGE",
      icon: budgetIcon,
      price: "₹14,900",
      perPerson: "per person",
      features: [
        { text: "Basic accommodations", included: true },
        { text: "Standard amenities", included: true },
        { text: "Breakfast included", included: true },
        { text: "Island transfers", included: true },
        { text: "Private beach access", included: false }
      ],
      hotels: {
        portBlair: "Islander Inn (Standard Room) or Similar",
        havelock: "Radhakrishna Hotel (Standard AC Room) or Similar",
        neilIsland: "Sea Green Resort (Deluxe Room) or Similar"
      }
    },
    {
      id: 2,
      type: "standard",
      title: "STANDARD PACKAGE",
      icon: standardIcon,
      price: "₹16,800",
      perPerson: "per person",
      features: [
        { text: "Comfortable 3-star hotels", included: true },
        { text: "Better locations", included: true },
        { text: "Buffet breakfast", included: true },
        { text: "Sightseeing tours", included: true },
        { text: "Spa access", included: false }
      ],
      hotels: {
        portBlair: "Hotel Swagat (Deluxe Room) / Hotel Driftwood (Deluxe Room) or Similar",
        havelock: "Radhakrishna Resort (Standard AC Room) / SeaShell Beach Resort (AC Standard Cottage) or Similar",
        neilIsland: "CS Empire (Premium Room) / Summer Sands Beach Resort (Standard Room) or Similar"
      }
    },
    {
      id: 3,
      type: "deluxe",
      title: "DELUXE PACKAGE",
      icon: deluxeIcon,
      price: "₹19,800",
      perPerson: "per person",
      features: [
        { text: "Premium 4-star accommodations", included: true },
        { text: "Best locations", included: true },
        { text: "All meals included", included: true },
        { text: "Private transfers", included: true },
        { text: "Scuba diving included", included: true }
      ],
      hotels: {
        portBlair: "Reef Atlantis (AC Deluxe Room) / The Luxor (Executive Room) / Bay Leaf Inn (Standard Room) or Similar",
        havelock: "Haywizz (Premium Room) / Aquays Hotels & Resorts (Havelock Plaza) or Similar",
        neilIsland: "Reef Valley Resort (AC Deluxe Cottage) / Coral Reef Resort (Garden Suite) or Similar"
      }
    }
  ];

  return (
 <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
  <div className="mb-8 overflow-hidden bg-white border border-gray-100 shadow-xl rounded-2xl">
    {/* Header */}
    <div className="relative p-8 overflow-hidden text-center bg-gradient-to-r from-blue-500 to-teal-400">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-200 rounded-full filter blur-3xl"></div>
      </div>
      <h2 className="relative z-10 text-3xl font-bold text-white md:text-4xl">
        Discover Andaman Packages
      </h2>
      <p className="relative z-10 mt-3 text-lg text-blue-100">
        Select your perfect island getaway
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300"></div>
    </div>

    {/* Pricing cards */}
    <div className="p-6 md:p-8 lg:p-10">
      <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
        {hotelOptions.map((option) => {
          const isStandard = option.type === "standard";
          return (
            <div
              key={option.id}
              className={`relative border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                isStandard
                  ? "border-teal-400 ring-4 ring-teal-100 transform md:-translate-y-4 shadow-lg"
                  : "border-gray-200 hover:border-teal-300"
              }`}
            >
              {/* Popular Badge */}
              {isStandard && (
                <div className="absolute top-0 right-0 z-10 px-4 py-1 text-sm font-bold text-yellow-900 bg-yellow-400 rounded-tr-lg rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              {/* Card Content */}
              <div className="p-6 lg:p-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`p-4 rounded-full ${
                      option.type === "budget"
                        ? "bg-blue-100"
                        : option.type === "standard"
                        ? "bg-teal-100"
                        : "bg-purple-100"
                    }`}
                  >
                    <img
                      src={option.icon}
                      alt={`${option.title} Icon`}
                      className="object-contain w-16 h-16"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl font-bold text-center mb-3 ${
                    option.type === "budget"
                      ? "text-blue-800"
                      : option.type === "standard"
                      ? "text-teal-800"
                      : "text-purple-800"
                  }`}
                >
                  {option.title}
                </h3>

                {/* Price */}
                <div className="p-4 mb-6 text-center rounded-lg bg-gradient-to-r from-gray-50 to-gray-100">
                  <span
                    className={`text-4xl font-extrabold ${
                      option.type === "budget"
                        ? "text-blue-600"
                        : option.type === "standard"
                        ? "text-teal-600"
                        : "text-purple-600"
                    }`}
                  >
                    {option.price}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    {option.perPerson}
                  </span>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="flex items-center mb-3 font-semibold text-gray-700">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {feature.included ? (
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-green-500 mr-2 mt-0.5"
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
                        ) : (
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-red-500 mr-2 mt-0.5"
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
                        )}
                        <span
                          className={`text-gray-700 ${
                            !feature.included ? "opacity-70" : ""
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hotels */}
                <div className="mb-8 space-y-4">
                  {Object.entries(option.hotels).map(([place, hotel]) => (
                    <div key={place} className="p-3 rounded-lg bg-gray-50">
                      <h4 className="flex items-center font-semibold text-gray-700 capitalize">
                        <svg
                          className="w-4 h-4 mr-2 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {place.replace(/([A-Z])/g, " $1")}
                      </h4>
                      <p className="mt-1 text-sm text-gray-600">{hotel}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  type="button"
                  className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                    isStandard
                      ? "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg hover:shadow-teal-200"
                      : "bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 border border-gray-300 hover:border-gray-400"
                  }`}
                >
                  {isStandard ? "BOOK NOW - BEST VALUE" : "SELECT PACKAGE"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Help Section */}
      <div className="relative p-8 mt-12 overflow-hidden border border-blue-200 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl">
        <div className="absolute top-0 right-0 opacity-20">
          <svg className="w-32 h-32 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="relative z-10">
          <h3 className="flex items-center mb-4 text-2xl font-bold text-blue-800">
            <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Need help choosing your package?
          </h3>
          <p className="mb-6 text-lg text-gray-700">
            Our Andaman travel experts will help you select the perfect package based on your preferences, budget, and travel dates.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="flex items-center justify-center px-6 py-3 font-semibold text-blue-600 transition-all duration-300 bg-white border-2 border-blue-500 hover:bg-blue-50 rounded-xl hover:shadow-md">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +91-7069377977
            </button>
            <button className="flex items-center justify-center px-6 py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-xl hover:shadow-md">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Request a Call Back
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Pricing;