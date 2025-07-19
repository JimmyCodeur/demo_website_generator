import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const FeaturesSection = () => {
  const features = [
    {
      title: "Invite team members",
      description: "Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.",
    },
    {
      title: "List view",
      description: "Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.",
    },
    {
      title: "Keyboard shortcuts",
      description: "In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.",
    },
    {
      title: "Calendars",
      description: "Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi.",
    },
    {
      title: "Notifications",
      description: "Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.",
    },
    {
      title: "Boards",
      description: "Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.",
    },
    {
      title: "Reporting",
      description: "Eos laudantium repellat sed architecto earum unde incidunt.",
    },
    {
      title: "Mobile app",
      description: "Nulla est saepe accusamus nostrum est est fugit omnis.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          {/* Left Content */}
          <div>
            <p className="text-indigo-600 font-semibold text-sm uppercase">
              Everything you need
            </p>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              All-in-one platform
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </p>
          </div>

          {/* Right Content - Features */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:mt-0">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircleIcon className="h-6 w-6 text-black-600 flex-shrink-0" aria-hidden="true" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
