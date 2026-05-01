'use client'
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DetailsButton = () => {
  const [isAddingCart, setIsAddingCart] = useState(false);
  const [isAddingWishlist, setIsAddingWishlist] = useState(false);

  const handleAddToCart = () => {
    setIsAddingCart(true);
    toast.success("Item added to cart successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleAddToWishlist = () => {
    setIsAddingWishlist(true);
    toast.info("Added to your wishlist!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Add to Cart Button */}
      <button 
        onClick={handleAddToCart}
        disabled={isAddingCart}
        className={`flex-1 text-white cursor-pointer text-lg font-bold py-4 rounded-2xl transition-all transform shadow-xl shadow-blue-200 dark:shadow-none
          ${isAddingCart 
            ? 'bg-gray-400 cursor-not-allowed scale-100' 
            : 'bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] active:scale-95'}`}
      >
        {isAddingCart ? "Added" : "Add to Cart"}
      </button>

      {/* Add to Wishlist Button */}
      <button 
        onClick={handleAddToWishlist}
        disabled={isAddingWishlist}
        className={`flex-1 border-2 cursor-pointer text-lg font-bold py-4 rounded-2xl transition-all
          ${isAddingWishlist 
            ? 'bg-gray-200 dark:bg-gray-800 border-gray-300 text-gray-400 cursor-not-allowed' 
            : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600'}`}
      >
        {isAddingWishlist ? "Added!" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default DetailsButton;