import React from "react";

const Background: React.FC = () => {
  return (
    // <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-700">

    <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900">
      {/* // <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900"> */}
      {/* Clouds */}
      {/* <div className="absolute top-40 left-10 w-24 h-12 bg-white rounded-full opacity-80"></div> */}
      <div className="absolute top-36 left-20 w-32 h-16 bg-white rounded-full opacity-80"></div>
      {/* <div className="absolute top-32 left-5 w-20 h-10 bg-white rounded-full opacity-80"></div> */}

      <div className="absolute top-60 right-20 w-28 h-14 bg-white rounded-full opacity-70"></div>
      {/* <div className="absolute top-56 right-10 w-36 h-16 bg-white rounded-full opacity-80"></div> */}
      <div className="absolute top-52 right-30 w-20 h-10 bg-white rounded-full opacity-80"></div>

      {/* Confetti decoration (static) */}
      <div className="absolute top-1/4 left-1/4 w-3 h-8 bg-blue-400 rotate-45 opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-8 bg-purple-400 -rotate-30 opacity-30"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-8 bg-yellow-400 rotate-15 opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/3 w-3 h-8 bg-pink-400 -rotate-60 opacity-30"></div>

      {/* Shopping bags and gifts at the bottom */}
      <div className="absolute bottom-10 left-10 w-16 h-20 bg-teal-300 rounded-t-lg transform -rotate-6"></div>
      <div className="absolute bottom-10 left-30 w-20 h-16 bg-yellow-300 rounded transform rotate-3"></div>
      {/* <div className="absolute bottom-8 left-60 w-24 h-22 bg-purple-200 rounded transform -rotate-2"></div> */}

      <div className="absolute bottom-12 right-20 w-18 h-22 bg-yellow-200 rounded transform rotate-6"></div>
      {/* <div className="absolute bottom-10 right-50 w-20 h-16 bg-teal-200 rounded transform -rotate-4"></div> */}
    </div>
  );
};

export default Background;
