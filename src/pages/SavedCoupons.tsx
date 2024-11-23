import { CouponCard } from '../components/CouponCard';

const SavedCoupons = () => {
  const savedCoupons = [
    {
      id: '1',
      image: '/images/coupons/electronics.jpg',
      productName: 'Electronics Store Discount',
      discount: 25,
      expirationDate: '2024-04-30',
    },
    {
      id: '2',
      image: '/images/coupons/fashion.jpg',
      productName: 'Fashion Outlet Sale',
      discount: 40,
      expirationDate: '2024-05-15',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Saved Coupons</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {savedCoupons.map((coupon) => (
          <CouponCard
            key={coupon.id}
            image={coupon.image}
            productName={coupon.productName}
            discount={coupon.discount}
            expirationDate={coupon.expirationDate}
            onRedeem={() => console.log('Redeeming coupon:', coupon.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedCoupons;