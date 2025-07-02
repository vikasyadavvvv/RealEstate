import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              Privacy Policy & Terms of Use
            </h1>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                At PrimeEstates, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Information We Collect</h3>
              <p>
                We may collect personal information such as your name, email address, phone number, and property preferences when you voluntarily submit this information through our contact forms or property search tools.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">How We Use Your Information</h3>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5">
                <li>Provide and maintain our services</li>
                <li>Notify you about changes to our services</li>
                <li>Allow you to participate in interactive features of our website</li>
                <li>Provide customer support</li>
                <li>Gather analysis or valuable information to improve our website</li>
                <li>Monitor the usage of our website</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">Terms of Use</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Intellectual Property</h3>
              <p>
                All content included on this site, such as text, graphics, logos, button icons, images, and software, is the property of PrimeEstates or its content suppliers and protected by international copyright laws.
              </p>
              
              <h3 className="text-xl font-semibold mt-6">Limitation of Liability</h3>
              <p>
                PrimeEstates shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site.
              </p>
              
              <p className="mt-8">
                <strong>Last Updated:</strong> June 1, 2023
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Legal;