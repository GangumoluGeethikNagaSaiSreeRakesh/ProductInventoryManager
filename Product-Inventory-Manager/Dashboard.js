import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import { getProducts } from '../services/productService';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const filtered = filter
    ? products.filter((p) => p.category.toLowerCase() === filter.toLowerCase())
    : products;

  return (
    <div>
      <div className="mb-4">
        <input
          className="p-2 border rounded mr-2"
          placeholder="Filter by category..."
          onChange={(e) => setFilter(e.target.value)}
        />
        <button onClick={() => setFilter('')} className="bg-gray-300 px-3 py-2 rounded">
          Clear
        </button>
      </div>
      <ProductForm onSave={loadProducts} editingProduct={editingProduct} />
      <ProductList products={filtered} onRefresh={loadProducts} onEdit={setEditingProduct} />
    </div>
  );
}

export default Dashboard;