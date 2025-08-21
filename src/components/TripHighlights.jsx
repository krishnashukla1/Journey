// import {
//   FaClock,
//   FaPlane,
//   FaHotel,
//   FaMapMarkedAlt,
//   FaPlusSquare,
// } from "react-icons/fa";

import bgImage from "../assets/images/package-single-cover-bg.png";
import logo from "../assets/images/logo-color.svg"; // Adjust the path as necessary
import clockIcon from "../assets/icons/clock.svg";
import planeIcon from "../assets/icons/airport-pickup.svg";
import hotelIcon from "../assets/icons/hotel.svg";
import mapIcon from "../assets/icons/siteseeing.svg";
import customIcon from "../assets/icons/customize.svg";

const TripHighlights = () => {
  // const tripDetails = [
  //   { icon: <FaClock className="text-2xl text-blue-600" />, title: "DURATION", value: "4 Nights / 5 Days" },
  //   { icon: <FaPlane className="text-2xl text-blue-600" />, title: "AIRPORT", value: "Pickup & Drop" },
  //   { icon: <FaHotel className="text-2xl text-blue-600" />, title: "HOTELS", value: "Included" },
  //   { icon: <FaMapMarkedAlt className="text-2xl text-blue-600" />, title: "SIGHTSEEING", value: "7 Included" },
  //   { icon: <FaPlusSquare className="text-2xl text-blue-600" />, title: "CUSTOMIZATIONS", value: "Available" },
  // ];
  const tripDetails = [
    { icon: clockIcon, title: "DURATION", value: "4 Nights / 5 Days" },
    { icon: planeIcon, title: "AIRPORT", value: "Pickup & Drop" },
    { icon: hotelIcon, title: "HOTELS", value: "Included" },
    { icon: mapIcon, title: "SIGHTSEEING", value: "7 Included" },
    { icon: customIcon, title: "CUSTOMIZATIONS", value: "Available" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      {/* <div className="relative w-full h-[300px] md:h-[400px] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/package-single-cover-bg.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative px-4 text-center text-white">
          <h1 className="text-3xl font-bold md:text-5xl">
            4 Nights / 5 Days Andaman Trip
          </h1>
          <p className="mt-2 text-lg italic md:text-2xl">
            Best for short & quick exploration.
          </p>
        </div>
      </div> */}
      <div
        className="relative w-full h-[400px] md:h-[700px] flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="relative px-4 text-center text-black">
          <img
            src={logo}
            alt="Trip Logo"
            className="object-contain mx-auto mb-4 w-50 h-50"
          />
          <h1 className="text-3xl font-bold md:text-5xl">
            4 Nights / 5 Days Andaman Trip
          </h1>
          <p className="mt-2 text-lg italic md:text-2xl">
            Best for short & quick exploration.
          </p>
        </div>
        {/* <div className="flex flex-wrap justify-center gap-4 py-6 bg-none">
        {tripDetails.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-center md:text-left p-2 md:p-4 min-w-[150px]">
            {item.icon}
            <div>
              <h4 className="text-sm font-bold md:text-base">{item.title}</h4>
              <p className="text-sm text-gray-700 md:text-base">{item.value}</p>
            </div>
          </div>
        ))}
      </div> */}
        {/* <div className="grid grid-cols-2 gap-6 mt-6 md:grid-cols-5">
          {tripDetails.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={item.icon}
                alt={item.title}
                className="w-20 h-8 mb-2"
              />
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.value}</p>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-2 gap-5 mt-6 md:grid-cols-5">
  {tripDetails.map((item, index) => (
    <div key={index} className="flex items-center space-x-1 text-left">
      {/* Left side: Image */}
      <img
        src={item.icon}
        alt={item.title}
        className="flex-shrink-0 w-10 h-10"
      />

      {/* Right side: Title + Value */}
      <div className="flex flex-col">
        <p className="text-sm italic">{item.title}</p>
      <h3 className="text-sm font-bold text-black-600">{item.value}</h3>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Trip Details */}
      {/* <div className="flex flex-wrap justify-center gap-4 py-6 bg-white">
        {tripDetails.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-center md:text-left p-2 md:p-4 min-w-[150px]">
            {item.icon}
            <div>
              <h4 className="text-sm font-bold md:text-base">{item.title}</h4>
              <p className="text-sm text-gray-700 md:text-base">{item.value}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default TripHighlights;
//===============desktop+mobile==========

// import bgImage from "../assets/images/package-single-cover-bg.png";
// import logo from "../assets/images/logo-color.svg"; // Adjust the path as necessary
// import clockIcon from "../assets/icons/clock.svg";
// import planeIcon from "../assets/icons/airport-pickup.svg";
// import hotelIcon from "../assets/icons/hotel.svg";
// import mapIcon from "../assets/icons/siteseeing.svg";
// import customIcon from "../assets/icons/customize.svg";

// const TripHighlights = () => {
//   const tripDetails = [
//     { icon: clockIcon, title: "DURATION", value: "4 Nights / 5 Days" },
//     { icon: planeIcon, title: "AIRPORT", value: "Pickup & Drop" },
//     { icon: hotelIcon, title: "HOTELS", value: "Included" },
//     { icon: mapIcon, title: "SIGHTSEEING", value: "7 Included" },
//     { icon: customIcon, title: "CUSTOMIZATIONS", value: "Available" },
//   ];

//   return (
//     <div className="w-full">
//       {/* Hero Section */}

//       <div
//         className="relative w-full h-[400px] md:h-[700px] flex flex-col items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       >
//         <div className="relative px-4 text-center text-black">
//           <img
//             src={logo}
//             alt="Trip Logo"
//             className="object-contain mx-auto mb-4 w-50 h-50"
//           />
//           <h1 className="text-3xl font-bold md:text-5xl">
//             4 Nights / 5 Days Andaman Trip
//           </h1>
//           <p className="mt-2 text-lg italic md:text-2xl">
//             Best for short & quick exploration.
//           </p>
//         </div>
// {/* 
//         <div className="grid grid-cols-2 gap-5 mt-6 md:grid-cols-5">
//           {tripDetails.map((item, index) => (
//             <div key={index} className="flex items-center space-x-1 text-left">
           
//               <img
//                 src={item.icon}
//                 alt={item.title}
//                 className="flex-shrink-0 w-10 h-10"
//               />

            
//               <div className="flex flex-col">
//                 <p className="text-sm italic">{item.title}</p>
//                 <h3 className="text-sm font-bold text-black-600">
//                   {item.value}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div> */}

// <div className="grid grid-cols-2 gap-5 mt-6 md:grid-cols-5">
//   {tripDetails.map((item, index) => (
//     <div
//       key={index}
//       className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:space-x-2"
//     >
//       {/* Left side: Image */}
//       <img
//         src={item.icon}
//         alt={item.title}
//         className="w-10 h-10 mb-2 md:mb-0"
//       />

//       {/* Right side: Title + Value */}
//       <div className="flex flex-col">
//         <p className="text-xs italic md:text-sm">{item.title}</p>
//         <h3 className="text-sm font-bold text-black md:text-base">
//           {item.value}
//         </h3>
//       </div>
//     </div>
//   ))}
// </div>


//       </div>

//       {/* Trip Details */}
//     </div>
//   );
// };

// export default TripHighlights;

//===============================

// import bgImage from "../assets/images/package-single-cover-bg.png";
// import logo from "../assets/images/logo-color.svg";
// import clockIcon from "../assets/icons/clock.svg";
// import planeIcon from "../assets/icons/airport-pickup.svg";
// import hotelIcon from "../assets/icons/hotel.svg";
// import mapIcon from "../assets/icons/siteseeing.svg";
// import customIcon from "../assets/icons/customize.svg";

// const TripHighlights = () => {
//   const tripDetails = [
//     { icon: clockIcon, title: "DURATION", value: "4 Nights / 5 Days" },
//     { icon: planeIcon, title: "AIRPORT", value: "Pickup & Drop" },
//     { icon: hotelIcon, title: "HOTELS", value: "Included" },
//     { icon: mapIcon, title: "SIGHTSEEING", value: "7 Included" },
//     { icon: customIcon, title: "CUSTOMIZATIONS", value: "Available" },
//   ];

//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[400px] md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       >
//         {/* Overlay for better text visibility */}
//         <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent" />

//         <div className="relative px-4 text-center text-black">
//           {/* Logo */}
//           <img
//             src={logo}
//             alt="Trip Logo"
//             className="object-contain w-32 h-32 mx-auto mb-4 md:w-40 md:h-40"
//           />

//           {/* Heading */}
//           <h1 className="text-3xl font-bold md:text-5xl">
//             4 Nights / 5 Days Andaman Trip
//           </h1>
//           <p className="mt-2 text-lg italic md:text-2xl">
//             Best for short & quick exploration.
//           </p>
//         </div>

//         {/* Trip Highlights Grid */}
//         <div className="relative z-10 grid grid-cols-2 gap-6 px-6 py-4 mt-8 shadow-md md:grid-cols-5 bg-white/80 rounded-xl">
//           {tripDetails.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center text-center"
//             >
//               <img
//                 src={item.icon}
//                 alt={item.title}
//                 className="w-10 h-10 mb-2"
//               />
//               <p className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
//                 {item.title}
//               </p>
//               <h3 className="text-sm font-bold text-black">{item.value}</h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Tabs Section */}
//       <div className="w-full bg-purple-100">
//         <div className="flex flex-wrap justify-center gap-8 py-4 text-sm font-semibold text-gray-700 uppercase">
//           <a href="#tripplan" className="hover:text-purple-600">
//             Trip Plan
//           </a>
//           <a href="#pricing" className="hover:text-purple-600">
//             Pricing
//           </a>
//           <a href="#inclusions" className="hover:text-purple-600">
//             Inclusions
//           </a>
//           <a href="#exclusions" className="hover:text-purple-600">
//             Exclusions
//           </a>
//           <a href="#customizations" className="hover:text-purple-600">
//             Customizations
//           </a>
//           <a href="#terms" className="hover:text-purple-600">
//             Terms
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripHighlights;
