// import { UserIcon } from '@heroicons/react/24/outline';

const PurchaseHistory = () => {
    const purchases = [
      {
        id: '1',
        date: '2024-03-15',
        store: 'Electronics Store',
        coupon: '25% OFF',
        savings: 50.00,
        total: 150.00
      },
      {
        id: '2',
        date: '2024-03-10',
        store: 'Fashion Outlet',
        coupon: '40% OFF',
        savings: 80.00,
        total: 120.00
      }
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Purchase History</h1>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Store</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coupon Used</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Savings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {purchases.map((purchase) => (
                <tr key={purchase.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{purchase.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{purchase.store}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{purchase.coupon}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">${purchase.savings.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${purchase.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default PurchaseHistory;