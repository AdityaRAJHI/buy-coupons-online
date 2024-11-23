import { useParams } from 'react-router-dom';
import { CouponsGrid } from '../components/CouponsGrid/CouponsGrid';

const StoreDetails = () => {
  const { storeName } = useParams();
  
  // Replace with actual store data fetching
  const storeData = {
    name: storeName?.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' '),
    logo: '/images/stores/default.jpg',
    description: 'Find the best deals and coupons for this store.',
    activeDeals: 15
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-6">
          <img
            src={storeData.logo}
            alt={storeData.name}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div>
            <h1 className="text-3xl font-bold">{storeData.name}</h1>
            <p className="text-gray-600 mt-2">{storeData.description}</p>
            <p className="text-blue-600 mt-1">{storeData.activeDeals} active deals</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Available Coupons</h2>
      <CouponsGrid filters={{ store: storeName }} />
    </div>
  );
};

export default StoreDetails;