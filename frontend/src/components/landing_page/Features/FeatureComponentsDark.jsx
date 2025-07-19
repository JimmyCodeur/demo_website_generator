import React from 'react';
import { CloudArrowUpIcon, LockClosedIcon, FingerPrintIcon, BoltIcon, ServerStackIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const NoServerFeatures = () => {
  const features = [
    {
      icon: <CloudArrowUpIcon className="h-8 w-8 text-indigo-500" />,
      title: "Push to deploy",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
    },
    {
      icon: <LockClosedIcon className="h-8 w-8 text-indigo-500" />,
      title: "SSL certificates",
      description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    },
    {
      icon: <FingerPrintIcon className="h-8 w-8 text-indigo-500" />,
      title: "Advanced security",
      description: "Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.",
    },
    {
      icon: <BoltIcon className="h-8 w-8 text-indigo-500" />,
      title: "Powerful API",
      description: "Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.",
    },
    {
      icon: <ArrowPathIcon className="h-8 w-8 text-indigo-500" />,
      title: "Simple queues",
      description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.",
    },
    {
      icon: <ServerStackIcon className="h-8 w-8 text-indigo-500" />,
      title: "Database backups",
      description: "Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.",
    },
  ];

  return (
    <section className="bg-gray-900 py-20 text-gray-300">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-indigo-500 font-semibold text-lg uppercase">Everything you need</p>
          <h2 className="mt-4 text-5xl font-bold text-white">No server? No problem.</h2>
          <p className="mt-6 text-lg text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoServerFeatures;