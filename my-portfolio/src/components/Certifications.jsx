// src/components/Certifications.jsx
import React from 'react';
import isc2Badge from '../images/isc2-cc.png';
import az900Badge from '../images/az-900.png';

export default function Certifications() {
  const certifications = [
    {
      title: "ISC2 Certified in Cybersecurity (CC)",
      issuer: "ISC2",
      description: "Validates foundational knowledge of cybersecurity principles, access controls, network security, and security operations.",
      image: isc2Badge,
      link: "https://www.credly.com/badges/56fbf132-f640-4076-9590-49a42ded89ce/public_url"
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      description: "Demonstrates foundational knowledge of cloud concepts, core Azure services, plus Azure management and governance.",
      image: az900Badge,
      link: "https://learn.microsoft.com/api/credentials/share/en-us/ArjunRamphal-9610/98EF909F74A30238?sharingId=CA5C0B1FFA1B90"
    }
  ];

  return (
    <div>
      {/* Font updated to perfectly match Skills, and underline removed */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
        Certifications
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-md transition-shadow"
          >
            {/* Badge Image */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0">
              <img 
                src={cert.image} 
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Certification Details */}
            <div className="flex flex-col text-center sm:text-left h-full">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                {cert.title}
              </h3>
              <p className="text-blue-600 font-semibold text-sm mb-2">
                Issued by {cert.issuer}
              </p>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {cert.description}
              </p>
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View details for ${cert.title} (opens in a new tab)`}
                className="inline-block mt-auto text-sm font-bold text-slate-700 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded transition-colors"
              >
                View Details &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}