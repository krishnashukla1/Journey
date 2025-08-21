const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <h3 className="mb-2 text-xl font-bold">Journey Empires Andaman DMC</h3>
            <p>Phone: +91-7069377977</p>
            <p>Email: info@journeyempires.com, journeyempires@gmail.com</p>
          </div>
          <div className="flex gap-4">
            <a href="/terms" className="hover:text-blue-300">Terms & Conditions</a>
            <a href="/privacy" className="hover:text-blue-300">Privacy Policy</a>
          </div>
        </div>
        <p className="mt-8 text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} Journey Empires. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
//-------------

// import callIcon from "../assets/icons/call-icon.svg"; // your call image
// import whatsappIcon from "../assets/icons/whatsapp-icon.svg"; // your whatsapp image

// const Footer = () => {
//   return (
//     <>
//       <footer className="relative py-8 text-white bg-gray-800">
//         <div className="container px-4 mx-auto">
//           <div className="flex flex-col items-center justify-between md:flex-row">
//             <div className="mb-4 md:mb-0">
//               <h3 className="mb-2 text-xl font-bold">
//                 Journey Empires Andaman DMC
//               </h3>
//               <p>Phone: +91-7069377977</p>
//               <p>Email: info@journeyempires.com, journeyempires@gmail.com</p>
//             </div>
//             <div className="flex gap-4">
//               <a href="/terms" className="hover:text-blue-300">
//                 Terms & Conditions
//               </a>
//               <a href="/privacy" className="hover:text-blue-300">
//                 Privacy Policy
//               </a>
//             </div>
//           </div>
//           <p className="mt-8 text-sm text-center text-gray-400">
//             &copy; {new Date().getFullYear()} Journey Empires. All rights reserved.
//           </p>
//         </div>
//       </footer>

//       {/* Floating Call & WhatsApp Buttons */}
//       <div className="fixed z-50 flex flex-col gap-4 bottom-6 right-6">
//         {/* Call */}
//         <a href="tel:+917069377977">
//           <img
//             src={callIcon}
//             alt="Call Us"
//             className="transition-transform duration-300 rounded-full shadow-lg w-14 h-14 hover:scale-110"
//           />
//         </a>

//         {/* WhatsApp */}
//         <a
//           href="https://wa.me/917069377977"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src={whatsappIcon}
//             alt="WhatsApp"
//             className="transition-transform duration-300 rounded-full shadow-lg w-14 h-14 hover:scale-110"
//           />
//         </a>
//       </div>
//     </>
//   );
// };

// export default Footer;
