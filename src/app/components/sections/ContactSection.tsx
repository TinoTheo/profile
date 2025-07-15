// ContactSection.tsx
import React, { forwardRef } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import { FaCheck } from 'react-icons/fa6';

const ContactSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
  ContactSection.displayName = 'ContactSection';
  const [state, handleSubmit] = useForm('xldnowyn');

  if (state.succeeded) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] py-16" id='contact'>
        <div className="text-center bg-black/10 border border-white/10 rounded-3xl p-10 shadow-xl max-w-md w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Thank you for your message!
          </h1>
          <p className="text-gray-400 mb-4">We'll get back to you soon.</p>
          <div className="mx-auto w-fit bg-white/10 p-3 rounded-xl backdrop-blur-md shadow-md">
            <FaCheck className="h-5 w-5 text-green-500" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 md:py-24 px-4 sm:px-6 text-white"
    >
      <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className="text-xl mb-8 text-gray-200">
              Have a project in mind? Let’s collaborate and bring your ideas to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/10 p-3 rounded-xl backdrop-blur-md shadow-md">
                  <FaEnvelope className="h-4 w-4 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-300">theotmuff@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/10 p-3 rounded-xl backdrop-blur-md shadow-md">
                  <FaPhone className="h-4 w-4 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-300">+27 73 145 8566</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/5 text-white placeholder-gray-400 border border-white/10 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/5 text-white placeholder-gray-400 border border-white/10 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                  placeholder="you@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 text-white placeholder-gray-400 border border-white/10 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                  placeholder="Your message..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
