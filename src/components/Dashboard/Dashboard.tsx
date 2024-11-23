import { 
  ChartBarIcon, 
  TagIcon, 
  ShoppingBagIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

interface DashboardStat {
  id: string;
  name: string;
  value: string;
  change: string;
  icon: React.ElementType;
}

export const Dashboard = () => {
  const stats: DashboardStat[] = [
    {
      id: '1',
      name: 'Active Coupons',
      value: '2,651',
      change: '+12.5%',
      icon: TagIcon
    },
    {
      id: '2',
      name: 'Total Stores',
      value: '156',
      change: '+3.2%',
      icon: ShoppingBagIcon
    },
    {
      id: '3',
      name: 'Total Savings',
      value: '$1.2M',
      change: '+15.3%',
      icon: ChartBarIcon
    },
    {
      id: '4',
      name: 'Active Users',
      value: '45.2K',
      change: '+5.7%',
      icon: UserGroupIcon
    }
  ];

  return (
    <section className="relative bg-white shadow-sm">
      <div 
        className="absolute inset-0 overflow-hidden opacity-5"
        style={{
          backgroundImage: 'url(/images/dashboard.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold mb-8">Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.name}</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </p>
                    <span className="ml-2 text-sm font-medium text-green-600">
                      {stat.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};