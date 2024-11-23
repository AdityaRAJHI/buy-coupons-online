import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

interface Store {
  id: string;
  name: string;
  logo: string;
  category: string;
  activeDeals: number;
}

const Stores = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const stores: Store[] = [
    {
      id: '1',
      name: 'Electronics Hub',
      logo: '/images/stores/electronics.jpg',
      category: 'Electronics',
      activeDeals: 15
    },
    {
      id: '2',
      name: 'Fashion World',
      logo: '/images/stores/fashion.jpg',
      category: 'Fashion',
      activeDeals: 25
    },
    // Add more stores here
  ];

  const categories = ['all', 'Electronics', 'Fashion', 'Food', 'Travel', 'Beauty'];

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || store.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">All Stores</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search stores..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" />
        </div>
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg bg-white"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStores.map(store => (
          <Link
            key={store.id}
            to={`/store/${store.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex items-center space-x-4"
          >
            <img
              src={store.logo}
              alt={store.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-semibold text-lg">{store.name}</h3>
              <p className="text-sm text-gray-500">{store.category}</p>
              <p className="text-sm text-blue-600">{store.activeDeals} active deals</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Stores;