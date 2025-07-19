import React from 'react';


const HeroSection = () => {
  return (
    <section className="relative bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left Text Section */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-2 mb-4">
                {/* Logo/Icon */}
                <p className="text-sm text-gray-500 font-medium bg-gray-100 px-4 py-2 rounded-full shadow-sm">
                    Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
                    <a href="#" className="text-indigo-600 hover:underline">
                    Read more &rarr;
                    </a>
                </p>
                </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Data to enrich your business
            </h1>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="px-6 py-3 text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Get started
              </a>
              <a
                href="#"
                className="px-6 py-3 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Learn more &rarr;
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-full h-full flex justify-center items-center">
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
