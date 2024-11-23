import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { UserIcon, Cog6ToothIcon, HeartIcon, ClipboardIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export const ProfileMenu = () => {
  const menuItems = [
    { name: 'My Profile', icon: UserIcon, href: '/profile' },
    { name: 'Settings', icon: Cog6ToothIcon, href: '/settings' },
    { name: 'Saved Coupons', icon: HeartIcon, href: '/saved-coupons' },
    { name: 'Purchase History', icon: ClipboardIcon, href: '/purchase-history' },
  ];

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="p-2 rounded-full hover:bg-gray-100">
        <UserIcon className="h-6 w-6 text-gray-700" />
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
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-2">
            {menuItems.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <Link
                    to={item.href}
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } flex items-center px-4 py-2 text-sm text-gray-700`}
                  >
                    <item.icon className="h-5 w-5 mr-3 text-gray-500" />
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
            <hr className="my-1" />
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } flex items-center w-full px-4 py-2 text-sm text-red-600`}
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5 mr-3" />
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
