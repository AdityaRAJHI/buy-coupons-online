interface CouponsGridProps {
  filters?: {
    category?: string;
    priceRange?: number[];
    sortBy?: string;
    store?: string;
  };
}

export const CouponsGrid = ({ filters }: CouponsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Coupon cards will go here */}
      <div>Coming soon... {filters?.category}</div>
    </div>
  );
};
