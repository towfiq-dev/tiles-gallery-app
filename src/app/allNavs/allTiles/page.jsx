import SearchBar from '@/components/homepage/searchBar/SearchBar';
import TilesCard from '@/components/homepage/tilesCard/TilesCard';
import { getFeaturesTiles } from '@/lib/dataFetch';
import React from 'react';

const AllTilesPage = async ({ searchParams }) => {
  const allTiles = await getFeaturesTiles();
  
  const searchQuery = (await searchParams)?.search?.toLowerCase() || "";

  const filteredTiles = allTiles.filter((tile) =>
    tile.title?.toLowerCase().includes(searchQuery) || 
    tile.category?.toLowerCase().includes(searchQuery)
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-black">
            All Featured <span className="text-blue-600">Tiles</span>
          </h2>
          <p className="text-gray-500 mt-2">Premium quality tiles for your dream space.</p>
        </div>

        <SearchBar />
      </div>

      {filteredTiles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTiles.map((tiles) => (
            <TilesCard 
              tiles={tiles} 
              key={tiles.id} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">No tiles found matching your search.</p>
        </div>
      )}
    </section>
  );
};

export default AllTilesPage;