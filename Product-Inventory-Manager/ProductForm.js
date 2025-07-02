import React, { useEffect, useState } from 'react';
import { addProduct, updateProduct } from '../services/productService';

function ProductForm({ onSave, editingProduct }) {
  const [form, setForm] = useState({ name: '', category: '', stock: 0 });

  useEffect(() => {
    if (editingProduct) setForm(editingProduct);
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await updateProduct(form);
    } else {
      await addProduct(form);
    }
    setForm({ name: '', category: '', stock: 0 });
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <div className="flex gap-4 mb-2">
        <input
          className="p-2 border rounded w-full"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="p-2 border rounded w-full"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />
        <input
          className="p-2 border rounded w-full"
          name="stock"
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          {form.id ? 'Update' : 'Add'}
        </button>
      </div>
    </form>
  );
}

export default ProductForm;