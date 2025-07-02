import axios from 'axios';

const API = 'http://localhost:5000/products';

export const getProducts = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const addProduct = async (product) => {
  await axios.post(API, product);
};

export const updateProduct = async (product) => {
  await axios.put(`${API}/${product.id}`, product);
};

export const deleteProduct = async (id) => {
  await axios.delete(`${API}/${id}`);
};