
// //================================
// // src/App.jsx
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import TripPlan from "./pages/TripPlan";
// import Customize from "./pages/Customize";
// import './index.css';

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <Header />
//         <main className="flex-grow py-4 bg-gray-50">
//           <div className="container px-4 mx-auto"> {/* Added mx-auto and px-4 for centering and padding */}
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/trip-plan" element={<TripPlan />} />
//               <Route path="/customize" element={<Customize />} />
//             </Routes>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;





// ================================

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home"; // your homepage component
// import Terms from "./components/Terms";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {/* Main content */}
//         <div className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/terms" element={<Terms />} />
//             <Route path="/privacy" element={<PrivacyPolicy />} />
//           </Routes>
//         </div>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


//=======================
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Terms from "./components/Terms";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TripPlan from "./pages/TripPlan";       // ✅ new page
import Customize from "./pages/Customize";     // ✅ new page
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactFooter from "./components/ContactFooter";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-poppins">
        {/* Header on all pages */}
        <Header />

        {/* Main content */}
        <main className="flex-grow">
          {/* <div className="container px-4 py-8 mx-auto"> */}
          <div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trip-plan" element={<TripPlan />} />
              <Route path="/customize" element={<Customize />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        {/* <Footer /> */}
        <ContactFooter/>
      </div>
    </Router>
  );
}

export default App;



//=========================================================

// import Header from './components/Header';
// import TripHighlights from './components/TripHighlights';
// import DayPlan from './components/DayPlan';
// import Pricing from './components/Pricing';
// import InclusionsExclusions from './components/InclusionsExclusions';
// import Contact from './components/Contact';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen font-poppins">
//       <Header />
//       <main className="flex-grow">
//         <div className="container px-4 py-8 mx-auto">
//           <TripHighlights />
//           <DayPlan />
//           <Pricing />
//           <InclusionsExclusions />
//           <Contact />
//           <Testimonials />
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

//-----------------------------

