import React from 'react';

const Meetings = () => {
  const meetingDetails = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "When",
      details: "4th Monday of each month",
      subDetails: "Doors open at 6:30 PM, Meeting starts at 7:00 PM",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Where",
      details: "Elmira Mennonite Church",
      subDetails: "58 Church Street, Elmira",
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-primary mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We welcome quilters of all skill levels to join our monthly meetings. 
              Each gathering features demonstrations, show-and-tell sessions, and opportunities 
              to connect with fellow quilting enthusiasts.
            </p>
          </div>

          {/* Meeting Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {meetingDetails.map((detail, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <div className="text-secondary">
                      {detail.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">
                      {detail.title}
                    </h3>
                    <p className="text-gray-700 font-medium">
                      {detail.details}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {detail.subDetails}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Schedule Note */}
          <div className="bg-primary/5 rounded-lg p-6 mb-12 text-center">
            <p className="text-primary font-medium">
              Please Note: We do not hold meetings in June, July, August, and December
            </p>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.279773197226!2d-80.56750982364666!3d43.600716055823746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bee8d4395e88f%3A0x692b8cd9e36396de!2sElmira%20Mennonite%20Church!5e0!3m2!1sen!2sca!4v1731888888582!5m2!1sen!2sca"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Meetings; 