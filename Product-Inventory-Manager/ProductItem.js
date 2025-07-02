import React from 'react';
import { deleteProduct } from '../services/productService';

function ProductItem({ product, onRefresh, onEdit }) {
  const handleDelete = async () => {
    await deleteProduct(product.id);
    onRefresh();
  };

  return (
    <div className="bg-white p-4 shadow rounded flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600">Category: {product.category}</p>
        <p className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(product)}
          className="bg-yellow-400 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductItem;