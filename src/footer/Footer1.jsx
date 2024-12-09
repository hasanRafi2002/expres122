// import React from "react";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   MapPin,
//   Mail,
//   Phone,
// } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative">
//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-900 opacity-95" />

//       {/* Main content */}
//       <div className="relative pt-16 pb-12">
//         <div className="container px-4 mx-auto">
//           <div className="grid gap-12 mb-16 md:grid-cols-3">
//             {/* Company Info */}
//             <div className="text-white">
//               <h3 className="mb-4 text-3xl font-bold tracking-tight">
//                 Career Compass
//               </h3>
//               <p className="text-teal-100">
//                 Personalized Career Guidance to Help You Make Informed,
//                 Confident Decisions
//               </p>
//               {/* Social Media Icons */}
//               <div className="flex mt-6 space-x-4">
//                 {[
//                   { Icon: Facebook, href: "#" },
//                   { Icon: Twitter, href: "#" },
//                   { Icon: Instagram, href: "#" },
//                 ].map(({ Icon, href }) => (
//                   <a
//                     key={Icon.name}
//                     href={href}
//                     className="p-2 text-teal-100 transition-colors duration-200 rounded-full hover:bg-teal-600 hover:text-white"
//                   >
//                     <Icon size={20} />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div className="text-white">
//               <h4 className="mb-6 text-lg font-semibold tracking-wider text-teal-100 uppercase">
//                 Quick Links
//               </h4>
//               <ul className="space-y-3">
//                 {[
//                   "Home",
//                   "Services",
//                   "Career Assessment",
//                   "Resources",
//                   "Contact",
//                 ].map((link) => (
//                   <li key={link}>
//                     <a
//                       href={`#${link.toLowerCase().replace(" ", "-")}`}
//                       className="text-teal-100 transition-colors duration-200 hover:text-white hover:underline"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact Information */}
//             <div className="text-white">
//               <h4 className="mb-6 text-lg font-semibold tracking-wider text-teal-100 uppercase">
//                 Contact Us
//               </h4>
//               <div className="space-y-4">
//                 {[
//                   { Icon: Phone, text: "(555) 123-4567" },
//                   { Icon: Mail, text: "support@careercompass.com" },
//                   { Icon: MapPin, text: "123 Career Lane, Success City" },
//                 ].map(({ Icon, text }) => (
//                   <div key={text} className="flex items-center group">
//                     <Icon
//                       size={18}
//                       className="flex-shrink-0 mr-3 text-teal-300 group-hover:text-teal-200"
//                     />
//                     <span className="text-teal-100 transition-colors duration-200 group-hover:text-white">
//                       {text}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="pt-8 mt-8 text-center border-t border-teal-600/30">
//           <p className="text-sm text-teal-200">
//             © {new Date().getFullYear()} Career Compass. All Rights Reserved.
//           </p>
//         </div>
//       </div>

//       {/* Decorative bottom wave */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg
//           className="w-full h-12 fill-current text-teal-900/20"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
//         </svg>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-gray-900 opacity-95" />

      {/* Main content */}
      <div className="relative pt-16 pb-12">
        <div className="container px-4 mx-auto">
          <div className="grid gap-12 mb-16 md:grid-cols-3">
            {/* About Section */}
            <div className="text-white">
              <h3 className="mb-4 text-3xl font-bold tracking-tight">
                EquiSport Hub
              </h3>
              <p className="text-blue-100">
                Your trusted partner for premium sports gear, apparel, and accessories. Empowering athletes with quality and precision since 2024.
              </p>
              {/* Social Media Icons */}
              <div className="flex mt-6 space-x-4">
                {[
                  { Icon: Facebook, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Instagram, href: "#" },
                ].map(({ Icon, href }) => (
                  <a
                    key={Icon.name}
                    href={href}
                    className="p-2 text-blue-100 transition-colors duration-200 rounded-full hover:bg-blue-600 hover:text-white"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="text-white">
              <h4 className="mb-6 text-lg font-semibold tracking-wider text-blue-100 uppercase">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  "Home",
                  "Shop Equipment",
                  "About Us",
                  "FAQs",
                  "Contact Us",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-blue-100 transition-colors duration-200 hover:text-white hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="text-white">
              <h4 className="mb-6 text-lg font-semibold tracking-wider text-blue-100 uppercase">
                Get in Touch
              </h4>
              <div className="space-y-4">
                {[
                  { Icon: Phone, text: "+1 (800) 456-7890" },
                  { Icon: Mail, text: "support@lotusequisports.com" },
                  { Icon: MapPin, text: "456 Sports Ave, Athletic City" },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center group">
                    <Icon
                      size={18}
                      className="flex-shrink-0 mr-3 text-blue-300 group-hover:text-blue-200"
                    />
                    <span className="text-blue-100 transition-colors duration-200 group-hover:text-white">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-8 text-center border-t border-blue-600/30">
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} EquiSport Hub. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 fill-current text-blue-900/20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
