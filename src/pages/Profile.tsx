import { UserIcon } from '@heroicons/react/24/outline';

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
            <UserIcon className="h-12 w-12 text-gray-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Account Information</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value="John Doe"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value="john.doe@example.com"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                disabled
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Total Savings</p>
                <p className="text-2xl font-bold text-green-600">$1,234</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Used Coupons</p>
                <p className="text-2xl font-bold">45</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;