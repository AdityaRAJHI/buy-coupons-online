interface FiltersProps {
  filters: {
    category: string;
    priceRange: number[];
    sortBy: string;
  };
  onFilterChange: (filters: any) => void;
}

export const Filters = ({ filters, onFilterChange }: FiltersProps) => {
  const categories = ['All', 'Electronics', 'Fashion', 'Groceries', 'Travel'];
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-medium mb-2">Categories</h4>
          {categories.map((category) => (
            <label key={category} className="block mb-2">
              <input
                type="radio"
                name="category"
                value={category.toLowerCase()}
                checked={filters.category === category.toLowerCase()}
                onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
                className="mr-2"
              />
              {category}
            </label>
          ))}
        </div>

        <div>
          <h4 className="font-medium mb-2">Price Range</h4>
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.priceRange[1]}
            onChange={(e) => onFilterChange({ 
              ...filters, 
              priceRange: [0, parseInt(e.target.value)] 
            })}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Sort By</h4>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="popular">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="expiring">Expiring Soon</option>
          </select>
        </div>
      </div>
    </div>
  );
};
