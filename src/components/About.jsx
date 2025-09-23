import React from 'react';

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')" // City skyline
}}
    >
      <div className="bg-black bg-opacity-50 text-white text-center p-8 rounded-lg max-w-md">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">Learn more about us on this page with an urban city background.</p>
      </div>
    </div>
  );
};

export default About;


