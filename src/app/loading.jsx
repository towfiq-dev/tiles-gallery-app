import React from 'react';

const Loading = () => {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center gap-4">
      <span className="loading loading-bars w-20 text-primary"></span>
      
      <p className="text-lg font-medium text-gray-500 animate-pulse">
        Loading please wait...
      </p>
    </div>
  );
};

export default Loading;