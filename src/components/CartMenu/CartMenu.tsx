import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const CartMenu = () => {
  const cartItems: CartItem[] = [
    {
      id: '1',
      name: 'Electronics Coupon',
      price: 49.99,
      quantity: 1,
      image: '/images/coupons/electronics.jpg'
    }
  ];

  const removeFromCart = (id: string) => {
    console.log('Removing item:', id);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="p-2 rounded-full hover:bg-gray-100 relative">
        <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
        {cartItems.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Shopping Cart</h3>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-12 w-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <Link
                    to="/checkout"
                    className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-center block"
                  >
                    Checkout
                  </Link>
                </div>
              </>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
