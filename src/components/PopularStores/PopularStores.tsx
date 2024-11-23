import { Link } from 'react-router-dom';

interface Store {
  id: string;
  name: string;
  logo: string;
  slug: string;
}

const stores: Store[] = [
  { id: '1', name: 'AYRC', logo: '/stores/ayrc.png', slug: 'ayrc' },
  { id: '2', name: 'Kappa', logo: '/stores/kappa.png', slug: 'kappa' },
  { id: '3', name: 'Scott', logo: '/stores/scott.png', slug: 'scott' },
  { id: '4', name: "Macy's", logo: '/stores/macys.png', slug: 'macys' },
  { id: '5', name: 'Old Navy', logo: '/stores/old-navy.png', slug: 'old-navy' },
  { id: '6', name: 'H&M', logo: '/stores/h-and-m.png', slug: 'h-and-m' },
  { id: '7', name: "Levi's", logo: '/stores/levis.png', slug: 'levis' },
  { id: '8', name: 'Adidas', logo: '/stores/adidas.png', slug: 'adidas' },
];

export const PopularStores = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Popular Stores</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stores.map((store) => (
            <Link
              key={store.id}
              to={`/store/${store.slug}`}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center"
            >
              <img
                src={store.logo}
                alt={store.name}
                className="max-h-12 w-auto"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};