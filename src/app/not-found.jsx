import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">

        <div className="relative flex flex-col items-center justify-center">

          <h1 className="text-[10rem] md:text-[13rem] font-black text-gray-100 select-none leading-none">
            404
          </h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl absolute mt-10">
            Uh-oh!
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-700">
            Page Not Found
          </h2>
          <p className="mt-4 text-gray-500 max-w-sm mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>


        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-blue-200 transition-all duration-200"
          >
            Go Back Home
          </Link>
          
          <Link 
            href="/allNavs/contact" 
            className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-all duration-200"
          >
            Contact Support
          </Link>
        </div>

        <div className="mt-16 opacity-30">
          <code className="text-xs text-gray-400 font-mono">
            Error_Code: ERR_PAGE_NOT_FOUND_404
          </code>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;