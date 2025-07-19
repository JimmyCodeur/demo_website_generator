import React from 'react';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
      <div className="flex flex-col items-center text-center">
        <div className="p-4 bg-blue-50 rounded-full">{icon}</div>
        <h3 className="mt-6 text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
