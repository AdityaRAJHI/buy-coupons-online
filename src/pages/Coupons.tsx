import { Filters } from '../components/Filters';
import { CouponsGrid } from '../components/CouponsGrid/CouponsGrid';
import { useState } from 'react';

const Coupons = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 1000],
    sortBy: 'popular'
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Filters filters={filters} onFilterChange={setFilters} />
        <div className="md:col-span-3">
          <CouponsGrid filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default Coupons;
