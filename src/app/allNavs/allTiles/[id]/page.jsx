import Image from 'next/image';
import React from 'react';

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://assignment-json-server.onrender.com/allTiles/${id}`, {
    next: { revalidate: 60 }
  });
  const data = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
        
        <div className="flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 relative h-[400px] lg:h-[600px] bg-gray-200">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              priority
            />
            {data.isNew && (
              <span className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                NEW ARRIVAL
              </span>
            )}
          </div>

          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                {data.category}
              </span>
              <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-lg">
                <span className="text-yellow-600 font-bold mr-1">★</span>
                <span className="text-yellow-800 font-medium">{data.rating}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              {data.title}
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mb-6 text-lg leading-relaxed">
              Designed by <span className="text-gray-900 dark:text-white font-semibold">{data.creator}</span>. 
              {data.description}
            </p>

            <div className="flex items-center mb-8">
              <span className="text-4xl font-black text-gray-900 dark:text-white">
                ${data.discountPrice || data.price}
              </span>
              {data.discountPrice && (
                <span className="ml-4 text-xl text-gray-400 line-through">
                  ${data.price}
                </span>
              )}
              <span className="ml-2 text-gray-500 uppercase">{data.currency}</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-600">
                <p className="text-xs text-gray-400 uppercase font-bold">Dimensions</p>
                <p className="text-gray-800 dark:text-gray-200 font-semibold">{data.dimensions}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-600">
                <p className="text-xs text-gray-400 uppercase font-bold">Material</p>
                <p className="text-gray-800 dark:text-gray-200 font-semibold">{data.material}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-600">
                <p className="text-xs text-gray-400 uppercase font-bold">Availability</p>
                <p className={`font-semibold ${data.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {data.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-600">
                <p className="text-xs text-gray-400 uppercase font-bold">Tags</p>
                <div className="flex flex-wrap gap-1">
                  {data.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>

       {/* Action Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-blue-200 dark:shadow-none">
                Add to Cart
              </button>
              <button className="flex-1 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white text-lg font-bold py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-600 transition-all">
                Add to Wishlist
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;