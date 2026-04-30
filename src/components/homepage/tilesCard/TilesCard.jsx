import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
const TilesCard = ({ tiles }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
      

      {tiles.isNew && (
        <span className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
          New
        </span>
      )}


      <div className="relative h-56 w-full overflow-hidden">
        <Image
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          //src={Card}
          src={tiles.image || "/placeholder.png"}
          alt={tiles.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
      </div>


      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">{tiles.category}</p>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-xs text-gray-500">{tiles.rating}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1 truncate">
          {tiles.title}
        </h3>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1 mb-4">
          {tiles.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">${tiles.discountPrice || tiles.price}</span>
            {tiles.discountPrice && (
              <span className="ml-2 text-sm text-gray-400 line-through">${tiles.price}</span>
            )}
          </div>
          <p className="text-xs text-gray-400 italic">{tiles.dimensions}</p>
        </div>

        <Link href={`/allNavs/allTiles/${tiles.id}`} className="block mt-5">
          <button className="w-full bg-gray-900 dark:bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors cursor-pointer duration-300 shadow-md">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TilesCard;