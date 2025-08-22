// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     email: "",
//     travellers: "",
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData);
//     setFormData({
//       name: "",
//       contact: "",
//       email: "",
//       travellers: "",
//     });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
//       {!submittedData ? (
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl"
//         >
//           <h2 className="mb-4 text-2xl font-bold text-center text-blue-600">
//             Travel Enquiry Form
//           </h2>

//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="tel"
//             name="contact"
//             placeholder="Enter contact number"
//             value={formData.contact}
//             onChange={handleChange}
//             required
//             className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter email address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="number"
//             name="travellers"
//             placeholder="No. of Travellers"
//             value={formData.travellers}
//             onChange={handleChange}
//             required
//             min="1"
//             className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
//           />

//           <button
//             type="submit"
//             className="w-full p-3 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
//           >
//             Submit
//           </button>
//         </form>
//       ) : (
//         <div className="w-full max-w-md p-6 text-center bg-white shadow-lg rounded-2xl">
//           <h3 className="mb-4 text-xl font-semibold text-green-600">
//             Thank You! 🎉
//           </h3>
//           <p className="mb-2">We will contact you quickly.</p>
//           <div className="p-4 text-left rounded-lg bg-gray-50">
//             <p><strong>Name:</strong> {submittedData.name}</p>
//             <p><strong>Contact:</strong> {submittedData.contact}</p>
//             <p><strong>Email:</strong> {submittedData.email}</p>
//             <p><strong>Travellers:</strong> {submittedData.travellers}</p>
//           </div>
//           <button
//             onClick={() => setSubmittedData(null)}
//             className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
//           >
//             Fill Again
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactForm;

//----------------
// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     email: "",
//     travellers: "",
//   });

//   const [submittedData, setSubmittedData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMsg(null);

//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_API_URL}/api/send-email`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       const result = await response.json();
//       setSubmittedData(formData);
//       setFormData({ name: "", contact: "", email: "", travellers: "" });
//     } catch (error) {
//       setErrorMsg("❌ Failed to send. Try again!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 bg-gradient-to-b from-blue-50 to-white">
//       {!submittedData ? (
//         <form className="relative w-full max-w-md p-6 overflow-hidden bg-white border border-gray-200 shadow-2xl md:p-8 rounded-3xl">
//           {/* Decorative Gradient Circles */}
//           <div className="absolute w-40 h-40 rounded-full bg-blue-200/30 -top-10 -left-10 blur-3xl"></div>
//           <div className="absolute w-32 h-32 rounded-full bg-pink-200/30 -bottom-10 -right-10 blur-3xl"></div>

//           <h2 className="mb-6 text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
//             Travel Enquiry Form
//           </h2>

//           {errorMsg && (
//             <p className="p-2 mb-4 text-center text-red-600 bg-red-100 rounded-lg shadow-inner">
//               {errorMsg}
//             </p>
//           )}

//           {/* Name */}
//           <input
//             type="text"
//             name="name"
//             placeholder="First Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-3 mb-4 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           {/* Contact */}
//           <input
//             type="tel"
//             name="contact"
//             placeholder="+91 9876543210"
//             value={formData.contact}
//             onChange={handleChange}
//             required
//             className="w-full p-3 mb-4 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="abc@gmail.com"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-3 mb-4 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
//           />

//           {/* Travellers */}
//           <input
//             type="number"
//             name="travellers"
//             placeholder="No. of Travellers (e.g., 2)"
//             value={formData.travellers}
//             onChange={handleChange}
//             required
//             min="1"
//             className="w-full p-3 mb-6 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 font-semibold text-white transition-all shadow-lg rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 hover:from-blue-700 hover:to-cyan-600"
//           >
//             {loading ? "Sending..." : "Submit"}
//           </button>
//         </form>
//       ) : (
//         <div className="relative w-full max-w-md p-8 overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-3xl">
//           {/* Decorative Gradient */}
//           <div className="absolute w-40 h-40 rounded-full bg-green-200/30 -top-10 -left-10 blur-3xl"></div>
//           <div className="absolute w-32 h-32 rounded-full bg-yellow-200/30 -bottom-10 -right-10 blur-3xl"></div>

//           <h3 className="mb-4 text-2xl font-extrabold text-center text-green-600 animate-bounce">
//             🎉 Thank You!
//           </h3>
//           <p className="mb-4 italic text-center text-gray-700">
//             We will contact you quickly.
//           </p>

//           <div className="p-5 mb-4 space-y-2 shadow-inner bg-gray-50 rounded-xl">
//             <p><strong>Name:</strong> {submittedData.name}</p>
//             <p><strong>Contact:</strong> {submittedData.contact}</p>
//             <p><strong>Email:</strong> {submittedData.email}</p>
//             <p><strong>Travellers:</strong> {submittedData.travellers}</p>
//           </div>

//           <button
//             onClick={() => setSubmittedData(null)}
//             className="px-6 py-3 font-semibold text-white transition-all shadow-lg rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105"
//           >
//             Fill Again
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactForm;

//-------------
// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     email: "",
//     travellers: "",
//   });

//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData(formData);
//     setFormData({
//       name: "",
//       contact: "",
//       email: "",
//       travellers: "",
//     });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-blue-50 to-white">
//       {!submittedData ? (
//         <form
//           onSubmit={handleSubmit}
//           className="relative w-full max-w-md p-6 overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-3xl"
//         >
//           <h2 className="mb-6 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
//             Travel Enquiry Form
//           </h2>

//           <input
//             type="text"
//             name="name"
//             placeholder="First Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-3 mb-4 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="tel"
//             name="contact"
//             placeholder="+91 9876543210"
//             value={formData.contact}
//             onChange={handleChange}
//             required
//             className="w-full p-3 mb-4 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="abc@gmail.com"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-3 mb-4 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
//           />

//           <input
//             type="number"
//             name="travellers"
//             placeholder="No. of Travellers (e.g., 2)"
//             value={formData.travellers}
//             onChange={handleChange}
//             required
//             min="1"
//             className="w-full p-3 mb-6 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />

//           <button
//             type="submit"
//             className="w-full py-3 font-semibold text-white transition-all shadow-lg rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 hover:from-blue-700 hover:to-cyan-600"
//           >
//             Submit
//           </button>
//         </form>
//       ) : (
//         <div className="relative w-full max-w-md p-8 overflow-hidden text-center bg-white border border-gray-200 shadow-2xl rounded-3xl">
//           <h3 className="mb-4 text-2xl font-extrabold text-green-600 animate-bounce">
//             ✅ Successfully Submitted!
//           </h3>
//           <p className="mb-4 italic text-gray-700">
//             We will contact you quickly.
//           </p>

//           <div className="p-5 mb-4 space-y-2 text-left shadow-inner bg-gray-50 rounded-xl">
//             <p>
//               <strong>Name:</strong> {submittedData.name}
//             </p>
//             <p>
//               <strong>Contact:</strong> {submittedData.contact}
//             </p>
//             <p>
//               <strong>Email:</strong> {submittedData.email}
//             </p>
//             <p>
//               <strong>Travellers:</strong> {submittedData.travellers}
//             </p>
//           </div>

//           <button
//             onClick={() => setSubmittedData(null)}
//             className="px-6 py-3 font-semibold text-white transition-all shadow-lg rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105"
//           >
//             Fill Again
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactForm;

//---------------

// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     email: "",
//     travellers: "",
//   });

//   const [submittedData, setSubmittedData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMsg(null);



//     try {
//       const response = await fetch(
       

//         `${import.meta.env.VITE_API_URL}/api/send-email`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData), // fields match backend: name, contact, email, travellers
//         }
//       );

//       const result = await response.json();

//       if (result.message === "✅ Email sent successfully!") {
//         setSubmittedData(formData);
//         setFormData({ name: "", contact: "", email: "", travellers: "" });
//       } else {
//         setErrorMsg("❌ Failed to send email. Try again!");
//       }
//     } catch (error) {
//       console.error(error);
//       setErrorMsg("❌ Failed to send email. Try again!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     // <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-blue-50 to-white">
    
//         <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 bg-gradient-to-b from-blue-50 to-white">

//     {!submittedData ? (
//         <form
//           onSubmit={handleSubmit}
//           className="relative w-full max-w-md p-6 overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-3xl"
//         >
//           <h2 className="mb-6 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
//             Travel Enquiry Form
//           </h2>

//           {errorMsg && (
//             <p className="p-2 mb-4 text-center text-red-600 bg-red-100 rounded-lg">
//               {errorMsg}
//             </p>
//           )}

//           <input
//             type="text"
//             name="name"
//             placeholder="First Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-3 mb-4 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <input
//             type="tel"
//             name="contact"
//             placeholder="+91 9876543210"
//             value={formData.contact}
//             onChange={handleChange}
//             required
//             className="w-full p-3 mb-4 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="abc@gmail.com"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-3 mb-4 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
//           />

//           <input
//             type="number"
//             name="travellers"
//             placeholder="No. of Travellers (e.g., 2)"
//             value={formData.travellers}
//             onChange={handleChange}
//             required
//             min="1"
//             className="w-full p-3 mb-6 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 font-semibold text-white transition-all shadow-lg rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-50"
//           >
//             {loading ? "Sending..." : "Submit"}
//           </button>
//         </form>
//       ) : (
//         <div className="relative w-full max-w-md p-8 overflow-hidden text-center bg-white border border-gray-200 shadow-2xl rounded-3xl">
//           <h3 className="mb-4 text-2xl font-extrabold text-green-600 animate-bounce">
//             ✅ Successfully Submitted!
//           </h3>
//           <p className="mb-4 italic text-gray-700">
//             We will contact you quickly.
//           </p>

//           <div className="p-5 mb-4 space-y-2 text-left shadow-inner bg-gray-50 rounded-xl">
//             <p>
//               <strong>Name:</strong> {submittedData.name}
//             </p>
//             <p>
//               <strong>Contact:</strong> {submittedData.contact}
//             </p>
//             <p>
//               <strong>Email:</strong> {submittedData.email}
//             </p>
//             <p>
//               <strong>Travellers:</strong> {submittedData.travellers}
//             </p>
//           </div>

//           <button
//             onClick={() => setSubmittedData(null)}
//             className="px-6 py-3 font-semibold text-white transition-all shadow-lg rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105"
//           >
//             Fill Again
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactForm;


//----------------------------
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    travellers: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      // Safe handling for JSON or empty response
      let result;
      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (response.ok && result?.message === "✅ Email sent successfully!") {
        setSubmittedData(formData);
        setFormData({ name: "", contact: "", email: "", travellers: "" });
      } else {
        const text = result?.message || "❌ Failed to send email!";
        setErrorMsg(text);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMsg("❌ Failed to send email. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 bg-gradient-to-b from-blue-50 to-white">
      {!submittedData ? (
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-md p-6 bg-white border border-gray-200 shadow-2xl rounded-3xl"
        >
          <h2 className="mb-6 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Travel Enquiry Form
          </h2>

          {errorMsg && (
            <p className="p-2 mb-4 text-center text-red-600 bg-red-100 rounded-lg">
              {errorMsg}
            </p>
          )}

          <input
            type="text"
            name="name"
            placeholder="First Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="tel"
            name="contact"
            placeholder="+91 9876543210"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="number"
            name="travellers"
            placeholder="No. of Travellers (e.g., 2)"
            value={formData.travellers}
            onChange={handleChange}
            required
            min="1"
            className="w-full p-3 mb-6 italic placeholder-gray-400 transition border shadow-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 font-semibold text-white transition-all shadow-lg rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      ) : (
        <div className="relative w-full max-w-md p-8 text-center bg-white border border-gray-200 shadow-2xl rounded-3xl">
          <h3 className="mb-4 text-2xl font-extrabold text-green-600 animate-bounce">
            ✅ Successfully Submitted!
          </h3>
          <p className="mb-4 italic text-gray-700">
            We will contact you quickly.
          </p>

          <div className="p-5 mb-4 space-y-2 text-left shadow-inner bg-gray-50 rounded-xl">
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Contact:</strong> {submittedData.contact}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Travellers:</strong> {submittedData.travellers}
            </p>
          </div>

          <button
            onClick={() => setSubmittedData(null)}
            className="px-6 py-3 font-semibold text-white transition-all shadow-lg rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105"
          >
            Fill Again
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
