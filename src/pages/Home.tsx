import { Hero } from '../components/Hero';
import { PopularStores } from '../components/PopularStores/PopularStores';
import { Dashboard } from '../components/Dashboard/Dashboard';

const Home = () => {
  return (
    <div>
      <Hero />
      <Dashboard />
      <PopularStores />
    </div>
  );
};

export default Home;
