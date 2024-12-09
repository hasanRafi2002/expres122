import * as React from "react";
import { User, Mail, MessageCircle, Send } from "lucide-react";

function ContactForm() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 ">
      <div className="w-full max-w-md overflow-hidden bg-white shadow-2xl rounded-2xl">
        <div className="p-8 text-center text-white bg-gradient-to-r from-slate-500 to-slate-600">
          <h2 className="mb-3 text-2xl font-bold">Contact Our Team</h2>
          <p className="text-sm opacity-80">
            We're eager to hear from you. Fill out the form below and we'll
            respond promptly.
          </p>
        </div>

        <form className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="flex items-center mb-2 text-sm font-medium     dark:text-gray-200  text-gray-700"
              >
                <User className="w-5 h-5 mr-2 text-slate-500" />
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className="w-full px-4 py-2.5 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-300 transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="flex items-center mb-2 text-sm font-medium     dark:text-gray-200  text-gray-700"
              >
                <User className="w-5 h-5 mr-2 text-slate-500" />
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className="w-full px-4 py-2.5 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-300 transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="flex items-center mb-2 text-sm font-medium     dark:text-gray-200  text-gray-700"
            >
              <Mail className="w-5 h-5 mr-2 text-teal-500" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@example.com"
              className="w-full px-4 py-2.5 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-300 transition-all duration-300"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="flex items-center mb-2 text-sm font-medium     dark:text-gray-200  text-gray-700"
            >
              <MessageCircle className="w-5 h-5 mr-2 text-teal-500" />
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows={4}
              className="w-full px-4 py-2.5 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-300 transition-all duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-full gap-2 py-3 text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-slate-600 to-slate-700 hover:opacity-90 group"
          >
            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;



