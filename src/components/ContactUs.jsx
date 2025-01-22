import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xgegjwrz"); // Replace with your Formspree ID

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="max-w-2xl w-full p-6 bg-green-100 rounded-lg shadow-md dark:bg-green-800 dark:text-white">
          <p className="text-green-500 text-center font-semibold">Thanks for contacting us! We'll get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 mt-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 disabled:bg-gray-400"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
