import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center">
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-5xl font-bold mb-6">
            Save $$$ Online With<br />
            Coupons & Deals
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Coupon code website saving you time and money on 1,000+
            popular products and services.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/stores" 
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              View All Stores
            </Link>
            <Link 
              to="/coupons" 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              All Coupons
            </Link>
          </div>
        </div>
        <div className="hidden md:block w-1/2 absolute right-0 top-0 h-full">
          <img 
            src="/images/hero-image.jpg" 
            alt="Shopping deals"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
