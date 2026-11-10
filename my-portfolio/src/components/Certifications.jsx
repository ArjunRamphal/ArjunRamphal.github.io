// src/components/Certifications.jsx
import React, { memo } from 'react';
import isc2Badge from '../images/isc2-cc.png';
import az900Badge from '../images/az-900.png';

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

// Bolt: Wrapped in React.memo() to prevent unnecessary re-renders when parent component updates
const Certifications = memo(function Certifications() {
  return (
    <section aria-labelledby="certifications-heading">
      {/* Font updated to perfectly match Skills, and underline removed */}
      <h2 id="certifications-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
        Certifications
      </h2>

      <ul className="grid grid-cols-1 gap-6">
        {certifications.map((cert, index) => (
          <li
            key={index} 
            className="group bg-white border border-gray-100 rounded-xl shadow-sm p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-md focus-within:shadow-md transition-shadow"
          >
            {/* Badge Image */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0">
              {/* Bolt: Added decoding="async" alongside loading="lazy" to offload image decoding to a background thread, preventing main-thread blocking and scroll jank. */}
              <img 
                src={cert.image} 
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain group-hover:scale-105 group-focus-within:scale-105 transition-transform duration-500"
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
                className="group/link inline-block mt-auto text-sm font-bold text-slate-700 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded transition-colors"
              >
                View Details <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
});

export default Certifications;
