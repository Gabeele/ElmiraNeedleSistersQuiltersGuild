import React from 'react';

const Home = () => {
  const features = [
    {
      title: "Monthly Meetings",
      description: "Join us every month for inspiring presentations, skill-sharing sessions, and community bonding.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Workshops",
      description: "Learn new techniques and perfect your skills with our regular hands-on workshops.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      title: "Quilting Projects",
      description: "Participate in quilting projects together.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/img/sewer.jpg"
              alt="Quilter"
              className="rounded-lg object-cover w-full max-w-md shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-semibold text-primary mb-6">Welcome to Our Guild!</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are a welcoming community of quilters and fibre artists in Elmira.
              Whether you're a beginner or a seasoned artist, our guild offers a
              supportive space to learn, create, and share. From traditional quilt
              patterns to modern textile art, we celebrate all forms of creativity.
            </p>
            <button
              onClick={() => document.getElementById('meetings').scrollIntoView({ behavior: 'smooth' })}
              className="bg-secondary hover:bg-primary text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Join Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-center text-primary mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <div className="text-secondary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
