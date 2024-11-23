import { HashRouter } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/Home';
import Coupons from './pages/Coupons';
import { ErrorBoundary } from './components/ErrorBoundary';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Suspense } from 'react';
import Discounts from './pages/Discounts';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import SavedCoupons from './pages/SavedCoupons';
import PurchaseHistory from './pages/PurchaseHistory';
import Stores from './pages/Stores';

export function App() {
  return (
    <HashRouter>
      <ErrorBoundary>
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/saved-coupons" element={<SavedCoupons />} />
            <Route path="/purchase-history" element={<PurchaseHistory />} />
            <Route path="/store/:storeName" element={<Coupons />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="*" element={
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-gray-800">404 - Page Not Found</h2>
                <p className="text-gray-600 mt-2">The page you're looking for doesn't exist.</p>
              </div>
            } />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </HashRouter>
  )
} 