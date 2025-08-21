import React from "react";
import logo from "../assets/images/logo-color.svg"; // Adjust the path as necessary

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl px-6 py-12 mx-auto">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Journey Empires Logo" className="h-16" />
      </div>

      {/* Heading */}
      <h1 className="mb-2 text-3xl font-bold text-left">
        Privacy Policy
      </h1>
      <p className="mb-8 text-left text-gray-600">
        Effective Date: 21st Nov, 2023
      </p>

      {/* Content */}
      <div className="space-y-6 leading-relaxed text-gray-700">
        <p>
          Welcome to <span className="font-semibold">Journey Empires</span>, where your privacy is of utmost importance.
          This Privacy Policy elucidates the manner in which Journey Empires
          gathers, utilizes, and safeguards your personal information. We
          encourage you to carefully review the following details:
        </p>

        <div>
          <h2 className="mb-2 text-xl font-semibold">Information Collection</h2>
          <p>
            We collect specific personal information, including names, email
            addresses (optional), and phone numbers, exclusively on a voluntary
            basis. Additionally, we capture IP addresses and browser
            identification information for analytical purposes.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">
            Utilization of Collected Information
          </h2>
          <p>
            The personal information acquired is primarily employed during the
            booking process to facilitate communication and process your package
            tour efficiently. Other data, such as IP addresses and browser
            identification, is strictly utilized for analytics to enhance our
            services.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">Information Sharing</h2>
          <p>
            Journey Empires may share information with trusted third-party
            analytics services such as Analytics, GTags, Mixpanel, and Google
            Ads. Furthermore, we employ a proprietary Customer Relationship
            Management System (CRM) to securely store contact data, enabling
            effective communication with individuals expressing an interest in
            our services.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">Security Measures</h2>
          <p>
            To ensure the utmost security of your information, Journey Empires
            implements rigorous measures. Access to specific information is
            restricted through meticulously defined roles and permissions.
            Additionally, data is anonymized for tracking and analytical
            purposes, reinforcing our commitment to confidentiality.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">
            Opt-Out and Information Management
          </h2>
          <p>
            Users possess the option to opt-out or manage their information by
            clearing cookies and choosing not to utilize our services. It is
            important to note that such actions may impact the overall user
            experience.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">Cookies</h2>
          <p>
            Journey Empires utilizes cookies to discern user sessions and
            browsers. These cookies enhance the overall user experience on our
            website by facilitating efficient session management.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">Age Restriction</h2>
          <p>
            While our services are available to users of all ages, we encourage
            minors to seek parental guidance when engaging with our platform.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">
            Changes to Privacy Policy
          </h2>
          <p>
            Our Privacy Policy may undergo periodic updates. Any modifications
            will be promptly reflected on our website, accompanied by the date
            of the last update. We recommend regularly reviewing our Privacy
            Policy to stay informed about how we protect and manage your
            information.
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold">Contact Information</h2>
          <p>
            Should you have any questions or concerns regarding our Privacy
            Policy, please do not hesitate to contact us at{" "}
            <a
              href="mailto:info@journeyempires.com"
              className="text-blue-600 underline"
            >
              info@journeyempires.com
            </a>
            . Thank you for choosing Journey Empires!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
