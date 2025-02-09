import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const contactMethods = [
    {
      name: "Anne Jenson",
      role: "Guild President",
      email: "personA@example.com",
    },
    {
      name: "Robin Bogaert",
      role: "Guild Secretary",
      email: "personB@example.com",
    },
  ];

  return (
    <div className="bg-background">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about joining the guild or attending our meetings? 
              We'd love to hear from you! Reach out to our guild representatives below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <EnvelopeIcon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {contact.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {contact.role}
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300 space-x-2"
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-primary mb-4 text-center">
              Join Our Community
            </h3>
            <p className="text-gray-600 text-center mb-6">
              New members are always welcome! Visit us during one of our monthly meetings 
              to experience the warmth and creativity of our quilting community firsthand.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => document.getElementById('meetings').scrollIntoView({ behavior: 'smooth' })}
                className="bg-secondary hover:bg-primary text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                View Meeting Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 