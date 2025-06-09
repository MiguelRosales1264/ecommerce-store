import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './pages/Products';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, Route, Routes } from 'react-router';
import Checkout from './pages/Checkout';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/CartProvider';

const queryCleint = new QueryClient();

function Layout() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className='flex-1'>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
}

function App() {

  return (
    <QueryClientProvider client={queryCleint}>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Products />}/>
            <Route path='/products/:id' element={<Product />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<NotFound />}/>
          </Route>
        </Routes>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App
