import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials1({ aiContent }) {
  const defaultContent = {
    sectionTitle: "What Our Customers Say",
    testimonials: [
      {
        text: "This product has completely transformed our business operations. The team is responsive and the features are exactly what we needed.",
        name: "Sarah Johnson",
        role: "CEO at TechCorp",
        rating: 5
      },
      {
        text: "Outstanding service and incredible results. We've seen a 300% increase in efficiency since implementing this solution.",
        name: "Michael Chen",
        role: "Director of Operations",
        rating: 5
      }
    ]
  };
  
  const content = aiContent || defaultContent;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {content.sectionTitle}
          </h2>
          <div className="flex justify-center items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="ml-3 text-gray-600 font-medium">
              4.9/5 from 1000+ reviews
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {content.testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="h-8 w-8 text-blue-400 opacity-50" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Join thousands of satisfied customers
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold text-lg">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}