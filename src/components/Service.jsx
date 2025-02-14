//import React from "react";

const services = [
  {
    id: 1,
    title: "Data Analysis & Visualization",
    description: "Analyzing data , Gaining Insights and creating interactive visualizations.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Integrating GenAI LLMs in applications",
    description: "Integrating GenAI LLMs in applications to provide better user experience.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills , providing user authentication and database management.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content about technologies and programming languages.",
  },
  {
    id: 6,
    title: "Machine Learning",
    description: "Building various machine learning models for different use cases.",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
          
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;