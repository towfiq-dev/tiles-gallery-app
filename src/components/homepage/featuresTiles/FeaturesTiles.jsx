import React from 'react';
import TilesCard from '../tilesCard/TilesCard';
import Link from 'next/link';
import { getFeaturesTiles } from '@/lib/dataFetch';

const FeaturesTiles = async () => {
  const allFeaturesTiles = await getFeaturesTiles();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-black">
            Featured <span className="text-blue-600">Collection</span>
          </h2>
          <p className="text-gray-500 mt-2">Premium quality tiles for your dream space.</p>
        </div>
      <Link href={'/allNavs/allTiles'}>
              <button className="text-blue-600 font-semibold cursor-pointer hover:underline">View All Collection &rarr;</button>
      </Link>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {allFeaturesTiles.slice(0,8).map((tiles) => (
          <TilesCard 
            tiles={tiles} 
            key={tiles.id} 
          />
        ))}
      </div>
      {/* <Link href={'/allNavs/allTiles'} className='flex justify-center mt-6'>
      <button className='btn text-[17px] font-semibold'>
        View All
      </button>
      </Link> */}
    </section>
  );
};

export default FeaturesTiles;