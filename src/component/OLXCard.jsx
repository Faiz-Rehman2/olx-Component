import React from 'react';

const OlxCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border p-4">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <span className="text-lg font-bold text-green-600">${product.price}</span>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Contact Seller
        </button>
      </div>
    </div>
  );
};
export default OlxCard;