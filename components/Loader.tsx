import React from 'react';

const Loader = () => {
  return (
    <>
      <span className="sr-only">Loading</span>
      { Array.from({ length: 18 }, (_, index) => {
        return (
          <div className="w-full p-8 mx-auto border-2 border-gray-200 rounded-lg animate-fade-in" aria-hidden="true" key={index}>
            <div className="flex space-x-4 animate-pulse">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div className="flex-1 py-1 space-y-8">
                <div className="h-2 bg-gray-300 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 col-span-2 bg-gray-300 rounded"></div>
                    <div className="h-2 col-span-1 bg-gray-300 rounded"></div>
                  </div>
                  <div className="h-2 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        );
      }) }
    </>
  );
};
export default Loader;