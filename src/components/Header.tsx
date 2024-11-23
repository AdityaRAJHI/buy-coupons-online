import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { ProfileMenu } from './ProfileMenu';

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">Buy Coupons</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/coupons" className="text-gray-700 hover:text-gray-900">Coupons</Link>
            <Link to="/discounts" className="text-gray-700 hover:text-gray-900">Discounts</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg"
              />
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" />
            </div>
            
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
            </button>
            
            <ProfileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}; 