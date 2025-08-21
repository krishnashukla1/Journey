// import logo from '../assets/images/logo-color.svg'; // Adjust the path as necessary

// const Header = () => {
//   return (
//     <header className="sticky top-0 z-50 py-4 bg-white shadow-md">
//       <div className="container flex items-center justify-between px-4 mx-auto">
//         <img src={logo} alt="Journey Empires Logo" className="h-20" />
//         <h1 className="text-2xl font-bold text-blue-600">Journey Empires</h1>
//         <nav>
//           <ul className="flex gap-6">
//             <li><a href="/" className="text-gray-800 transition-colors hover:text-blue-600">Home</a></li>
//             <li><a href="/trip-plan" className="text-gray-800 transition-colors hover:text-blue-600">Trip Plan</a></li>
//             <li><a href="/customize" className="text-gray-800 transition-colors hover:text-blue-600">Customize</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

//================desktop only==================
// import logo from '../assets/images/logo-color.svg'; // Adjust the path as necessary

// const Header = () => {
//   return (
//     <header className="sticky top-0 z-50 bg-pink-100 shadow-md">
//       <div className="container flex items-center justify-between px-4 py-3 mx-auto">
//         {/* Logo + Title */}
//         <div className="flex items-center gap-3">
//           <img src={logo} alt="Journey Empires Logo" className="h-16 md:h-20" />
//           <h1 className="text-xl font-bold text-blue-600 ml-100 md:text-2xl">
//             Journey Empires
//           </h1>
//         </div>

//         {/* Navigation */}
//         <nav>
//           <ul className="flex gap-8 text-sm font-semibold text-gray-700 uppercase">


//             <li><a href="/" className="transition-colors hover:text-pink-600">Home</a></li>
            
//             <li><a href="/trip-plan" className="transition-colors hover:text-pink-600"> Trip Plan </a>
//             </li>
            
//             <li><a href="/customize" className="transition-colors hover:text-pink-600">Customize</a>
//             </li>
//             <li><a href="/terms" className="transition-colors hover:text-pink-600">Terms</a></li>
//             <li><a href="/privacy" className="transition-colors hover:text-pink-600">Privacy</a></li>
            
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// ===================desktop+ mobile=========
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons
import logo from "../assets/images/logo-color.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-pink-100 shadow-md">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Journey Empires Logo" className="h-14 md:h-20" />
          <h1 className="text-xl font-bold text-blue-600 md:text-2xl">
            Journey Empires
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-semibold text-gray-700 uppercase">
            <li><a href="/" className="transition-colors hover:text-pink-600">Home</a></li>
            <li><a href="/trip-plan" className="transition-colors hover:text-pink-600">Trip Plan</a></li>
            <li><a href="/customize" className="transition-colors hover:text-pink-600">Customize</a></li>
            <li><a href="/terms" className="transition-colors hover:text-pink-600">Terms</a></li>
            <li><a href="/privacy" className="transition-colors hover:text-pink-600">Privacy</a></li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block text-gray-700 md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="shadow-inner md:hidden bg-pink-50">
          <ul className="flex flex-col gap-4 px-6 py-4 text-sm font-semibold text-gray-700 uppercase">
            <li><a href="/" className="block transition-colors hover:text-pink-600">Home</a></li>
            <li><a href="/trip-plan" className="block transition-colors hover:text-pink-600">Trip Plan</a></li>
            <li><a href="/customize" className="block transition-colors hover:text-pink-600">Customize</a></li>
            <li><a href="/terms" className="block transition-colors hover:text-pink-600">Terms</a></li>
            <li><a href="/privacy" className="block transition-colors hover:text-pink-600">Privacy</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
