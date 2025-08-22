import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    travellers: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      name: "",
      contact: "",
      email: "",
      travellers: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {!submittedData ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl"
        >
          <h2 className="mb-4 text-2xl font-bold text-center text-blue-600">
            Travel Enquiry Form
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="tel"
            name="contact"
            placeholder="Enter contact number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 mb-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="number"
            name="travellers"
            placeholder="No. of Travellers"
            value={formData.travellers}
            onChange={handleChange}
            required
            min="1"
            className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full p-3 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="w-full max-w-md p-6 text-center bg-white shadow-lg rounded-2xl">
          <h3 className="mb-4 text-xl font-semibold text-green-600">
            Thank You! 🎉
          </h3>
          <p className="mb-2">We will contact you quickly.</p>
          <div className="p-4 text-left rounded-lg bg-gray-50">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Contact:</strong> {submittedData.contact}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Travellers:</strong> {submittedData.travellers}</p>
          </div>
          <button
            onClick={() => setSubmittedData(null)}
            className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Fill Again
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
