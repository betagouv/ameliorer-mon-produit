import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Product } from './pages/Product';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/" element={<Product />} />
        </Routes>
    );
}

export { Router };
