import React from "react";
import ContactInfo from "./ContactInfo";
import ContactUsBanner from "./ContactBanner";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-100 dark:bg-gradient-to-r  dark:from-[#1a1c2c] dark:to-[#3b4c6b] ">
      <ContactUsBanner />
      <ContactInfo />
    </div>
  );
};

export default ContactUs;
