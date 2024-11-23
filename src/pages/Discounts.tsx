import { CouponsGrid } from '../components/CouponsGrid/CouponsGrid';

const Discounts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Current Discounts</h1>
      <CouponsGrid filters={{ category: 'discounts', priceRange: [0, 1000], sortBy: 'popular' }} />
    </div>
  );
};

export default Discounts;
