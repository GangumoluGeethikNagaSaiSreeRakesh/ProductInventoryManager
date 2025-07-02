import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onRefresh, onEdit }) {
  return (
    <div className="grid gap-4">
      {products.map((p) => (
        <ProductItem key={p.id} product={p} onRefresh={onRefresh} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default ProductList;