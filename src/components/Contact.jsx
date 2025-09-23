import React from 'react';

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" // Ocean beach
      }}
    >
      <div className="bg-black bg-opacity-50 text-white text-center p-8 rounded-lg max-w-md">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">Get in touch with us here, featuring a serene beach background.</p>
      </div>
    </div>
  );
};

export default Contact;