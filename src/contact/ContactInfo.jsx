




import * as React from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 800-555-6789",
      color: "text-slate-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "support@futureconnect.com",
      color: "text-blue-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Mon - Fri: 9AM - 5PM",
      color: "text-green-500",
    },
    {
      icon: MapPin,
      title: "Office",
      detail: "456 Future St, San Francisco, CA",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-r from-blue-50 to-purple-100 dark:bg-gradient-to-r  dark:from-[#1a1c2c] dark:to-[#3b4c6b] ">
      <div className="flex flex-col w-full max-w-5xl overflow-hidden bg-pink-500 rounded-lg shadow-lg md:flex-row">
        {/* Left Section - Contact Information */}
        <section className="p-6 bg-slate-500 md:w-1/2">
          <div className="mb-6">
            <h1 className="mb-3 text-2xl font-bold text-slate-50">
              Connect With Us
            </h1>
            <p className="mb-6 text-sm text-slate-300">
              Let’s help you take the next step. Reach out to our team for
              assistance or information.
            </p>
          </div>

          <div className="space-y-4">
            {contactDetails.map((contact, index) => (
              <div
                key={index}
                className="flex items-center p-3 space-x-3 transition-colors rounded-md hover:bg-slate-600"
              >
                <contact.icon className={`${contact.color} w-6 h-6`} />
                <div>
                  <h2 className="text-sm font-semibold text-slate-50">
                    {contact.title}
                  </h2>
                  <p className="text-xs text-slate-300">{contact.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Section - Contact Form */}
        <section className="flex items-center justify-center p-6 bg-slate-400 md:w-1/2">
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactInfo;
