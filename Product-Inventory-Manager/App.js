import React from 'react';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Inventory Manager</h1>
      <Dashboard />
    </div>
  );
}

export default App;