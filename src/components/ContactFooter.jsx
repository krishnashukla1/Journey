// // src/components/ContactFooter.jsx
// import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
// import logo from '../assets/images/logo-color.svg'; // Adjust the path as necessary

// const ContactFooter = () => {
//   return (
//     <footer className="py-5 text-center bg-gradient-to-b from-pink-100 to-white">
//       {/* Contact Message */}
//       <p className="mb-4 text-lg italic text-gray-800">
//         Reach us round the clock, for any enquiry <br />
//         related to Andaman Tours & Activities.
//       </p>
//             {/* <h3 className="mb-2 text-xl font-bold">Journey Empires Andaman DMC</h3> */}

//       {/* Phone + WhatsApp */}
//       <div className="flex items-center justify-center gap-3 mb-2">
//         <span className="text-2xl font-bold text-black">+91 706 397 7977</span>
//         <FaWhatsapp className="text-3xl text-green-500" />
//       </div>

//       {/* Email */}
//       <p className="mb-6 text-2xl font-bold text-black">info@journeyempires.com</p>

//       {/* Social Icons */}
//       <div className="flex justify-center gap-6 mb-8">
//         <a href="#" className="text-3xl text-blue-600"><FaFacebook /></a>
//         <a href="#" className="text-3xl text-pink-500"><FaInstagram /></a>
//         <a href="#" className="text-3xl text-blue-700"><FaLinkedin /></a>
//         <a href="#" className="text-3xl text-sky-500"><FaTwitter /></a>
//       </div>

//       {/* Bottom Links */}
//       <div className="flex items-center justify-between px-6 pt-6 text-sm border-t border-pink-200">
//         <div className="flex gap-6">
//           <a href="/terms" className="hover:underline">Terms & Conditions</a>
//           <a href="/privacy" className="hover:underline">Privacy Policy</a>
//         </div>

//         {/* Logo */}
//         <div className="flex flex-col items-center">
//           <img
//             src={logo} // replace with your actual logo path
//             alt="Journey Empires Logo"
//             className="h-12 mb-2"
//           />
//           <p className="font-bold text-purple-700">JOURNEY EMPIRES</p>
//         </div>

//         {/* Credit */}
//         <div className="text-right">
//           <p>
//             Designed & Marketed by{" "}
//             <span className="font-bold text-pink-600">WELOIN</span>
//           </p>
//         </div>
      
//       </div>
//           <p className="mt-4 text-sm text-center text-gray-400">
//           &copy; {new Date().getFullYear()} Journey Empires. All rights reserved.
//         </p>
//     </footer>
//   );
// };

// export default ContactFooter;

//-----------------------
// src/components/ContactFooter.jsx
// import {
//   FaWhatsapp,
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter,
//   FaPhoneAlt,
// } from "react-icons/fa";
// import logo from "../assets/images/logo-color.svg"; // Adjust the path as necessary
// import callIcon from "../assets/icons/call-icon.svg"; // your call image
// import whatsappIcon from "../assets/icons/whatsapp-icon.svg"; // your whatsapp image

// import facebook from "../assets/icons/facebook-icon.svg"; // your whatsapp image
// import instagram from "../assets/icons/instagram-icon.svg"; // your whatsapp image
// import twitter from "../assets/icons/twitter-icon.svg"; // your whatsapp image
// import linkedin from "../assets/icons/linkedin-icon.svg"; // your whatsapp image




// const ContactFooter = () => {
//   return (
//     <>
//       <footer className="py-5 text-center bg-gradient-to-b from-pink-100 to-white">
//         {/* Contact Message */}
//         <p className="mb-4 text-lg italic text-gray-800">
//           Reach us round the clock, for any enquiry <br />
//           related to Andaman Tours & Activities.
//         </p>

//         {/* Phone + WhatsApp */}
//         <div className="flex items-center justify-center gap-3 mb-2">
//           <span className="text-2xl font-bold text-black">
//             +91 706 397 7977
//           </span>
//           {/* <FaWhatsapp className="text-3xl text-green-500" /> */}
//            <a
//     href="https://wa.me/917069377977"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <div className="flex items-center justify-center w-8 h-8 transition-transform duration-300 bg-green-500 rounded-full shadow-lg hover:scale-110">
//       <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
//     </div>
//   </a>
//         </div>

//         {/* Email */}
//         <p className="mb-6 text-2xl font-bold text-black">
//           info@journeyempires.com
//         </p>

//         {/* Social Icons */}
//         <div className="flex justify-center gap-6 mb-8">
//           <a href="#" className="text-3xl text-blue-600">
//             {/* <FaFacebook /> */}
//             <img src={facebook} alt="facebook" className="w-8 h-8" />
//           </a>
//           <a href="#" className="text-3xl text-pink-500">
//             {/* <FaInstagram /> */}
//             <img src={instagram} alt="instagram" className="w-8 h-8" />
//           </a>
//           <a href="#" className="text-3xl text-blue-700">
//             {/* <FaLinkedin /> */}
//             <img src={linkedin} alt="linkedin" className="w-8 h-8" />
//           </a>
//           <a href="#" className="text-3xl text-sky-500">
//             {/* <FaTwitter /> */}
//             <img src={twitter} alt="twitter" className="w-8 h-8" />
//           </a>
//         </div>

//         {/* Bottom Links */}
//         <div className="flex items-center justify-between px-6 pt-6 text-sm border-t border-pink-200">
//           <div className="flex gap-6 ml-25">
//             <a href="/terms" className="hover:underline">
//               Terms & Conditions
//             </a>
//             <a href="/privacy" className="hover:underline">
//               Privacy Policy
//             </a>
//           </div>

//           {/* Logo */}
//           <div className="flex flex-col items-center">
//             <img
//               src={logo}
//               alt="Journey Empires Logo"
//               className="h-12 mb-2"
//             />
//             <p className="font-bold text-purple-700">JOURNEY EMPIRES</p>
//           </div>

//           {/* Credit */}
//           <div className="text-right mr-25">
//             <p>
//               Designed & Marketed by{" "}
//               <span className="font-bold text-pink-600">WELOIN</span>
//             </p>
//           </div>
//         </div>

//         <p className="mt-4 text-sm text-center text-gray-400">
//           &copy; {new Date().getFullYear()} Journey Empires. All rights
//           reserved.
//         </p>
//       </footer>

//       {/* Floating Call & WhatsApp Buttons */}
//       {/* <div className="fixed z-50 flex flex-col gap-4 bottom-6 right-6">
      
//         <a href="tel:+917069377977">
//           <div className="flex items-center justify-center transition-transform duration-300 bg-blue-600 rounded-full shadow-lg w-14 h-14 hover:scale-110">
//             <FaPhoneAlt className="text-2xl text-white" />
//           </div>
//         </a>

     
//         <a
//           href="https://wa.me/917069377977"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <div className="flex items-center justify-center transition-transform duration-300 bg-green-500 rounded-full shadow-lg w-14 h-14 hover:scale-110">
//             <FaWhatsapp className="text-2xl text-white" />
//           </div>
//         </a>
//       </div> */}




// <div className="fixed z-50 flex flex-col gap-4 bottom-6 right-6">
//   {/* Call */}
//   <a href="tel:+917069377977">
//     <div className="flex items-center justify-center transition-transform duration-300 bg-blue-600 rounded-full shadow-lg w-14 h-14 hover:scale-110">
//       <img src={callIcon} alt="Call" className="w-14 h-14" />
//     </div>
//   </a>

//   {/* WhatsApp */}
//   <a
//     href="https://wa.me/917069377977"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <div className="flex items-center justify-center transition-transform duration-300 bg-green-500 rounded-full shadow-lg w-14 h-14 hover:scale-110">
//       <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14" />
//     </div>
//   </a>
// </div>

//     </>
//   );
// };

// export default ContactFooter;


//===========desktop+mobile================

import logo from "../assets/images/logo-color.svg"; 
import callIcon from "../assets/icons/call-icon.svg"; 
import whatsappIcon from "../assets/icons/whatsapp-icon.svg"; 

import facebook from "../assets/icons/facebook-icon.svg"; 
import instagram from "../assets/icons/instagram-icon.svg"; 
import twitter from "../assets/icons/twitter-icon.svg"; 
import linkedin from "../assets/icons/linkedin-icon.svg"; 

const ContactFooter = () => {
  return (
    <>
      <footer className="py-6 text-center bg-gradient-to-b from-pink-100 to-white">
        {/* Contact Message */}
        <p className="px-4 mb-4 text-base italic text-gray-800 md:text-lg">
          Reach us round the clock, for any enquiry <br className="hidden md:block" />
          related to Andaman Tours & Activities.
        </p>

        {/* Phone + WhatsApp */}
        <div className="flex flex-col items-center justify-center gap-3 mb-2 md:flex-row">
          <span className="text-xl font-bold text-black md:text-2xl">
            +91 706 397 7977
          </span>
          <a
            href="https://wa.me/917069377977"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center w-10 h-10 transition-transform duration-300 bg-green-500 rounded-full shadow-lg md:w-12 md:h-12 hover:scale-110">
              <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12 md:w-12 md:h-12" />
            </div>
          </a>
        </div>

        {/* Email */}
        <p className="mb-6 text-lg font-bold text-black md:text-2xl">
          info@journeyempires.com
        </p>

        {/* Social Icons */}
        {/* <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="transition hover:scale-110">
            <img src={facebook} alt="facebook" className="w-7 h-7 md:w-8 md:h-8" />
          </a>
          <a href="#" className="transition hover:scale-110">
            <img src={instagram} alt="instagram" className="w-7 h-7 md:w-8 md:h-8" />
          </a>
          <a href="#" className="transition hover:scale-110">
            <img src={linkedin} alt="linkedin" className="w-7 h-7 md:w-8 md:h-8" />
          </a>
          <a href="#" className="transition hover:scale-110">
            <img src={twitter} alt="twitter" className="w-7 h-7 md:w-8 md:h-8" />
          </a>
        </div> */}


        {/* Social Icons */}
<div className="flex justify-center gap-6 mb-8">
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:scale-110"
  >
    <img src={facebook} alt="facebook" className="w-7 h-7 md:w-8 md:h-8" />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:scale-110"
  >
    <img src={instagram} alt="instagram" className="w-7 h-7 md:w-8 md:h-8" />
  </a>

  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:scale-110"
  >
    <img src={linkedin} alt="linkedin" className="w-7 h-7 md:w-8 md:h-8" />
  </a>

  <a
    href="https://twitter.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:scale-110"
  >
    <img src={twitter} alt="twitter" className="w-7 h-7 md:w-8 md:h-8" />
  </a>
</div>


        {/* Bottom Links + Logo + Credit */}
        <div className="flex flex-col gap-6 px-6 pt-6 text-sm border-t border-pink-200 md:flex-row md:items-center md:justify-between">
          {/* Links */}
          <div className="flex justify-center gap-6 md:ml-20">
            <a href="/terms" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center">
            <img src={logo} alt="Journey Empires Logo" className="h-10 mb-2 md:h-12" />
            <p className="text-sm font-bold text-purple-700 md:text-base">
              JOURNEY EMPIRES
            </p>
          </div>

          {/* Credit */}
          <div className="text-center md:text-right md:mr-20">
            <p>
              Designed & Marketed by{" "}
              <span className="font-bold text-pink-600">WELOIN</span>
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs text-center text-gray-400 md:text-sm">
          &copy; {new Date().getFullYear()} Journey Empires. All rights reserved.
        </p>
      </footer>

      {/* Floating Call & WhatsApp Buttons */}
      <div className="fixed z-50 flex flex-col gap-3 bottom-5 right-5">
        {/* Call */}
        <a href="tel:+917069377977">
          <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 bg-blue-600 rounded-full shadow-lg md:w-14 md:h-14 hover:scale-110">
            <img src={callIcon} alt="Call" className="w-12 h-12 md:w-14 md:h-14" />
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/917069377977"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 bg-green-500 rounded-full shadow-lg md:w-14 md:h-14 hover:scale-110">
            <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12 md:w-14 md:h-14" /> 
          </div>
        </a>
      </div>
    </>
  );
};

export default ContactFooter;

