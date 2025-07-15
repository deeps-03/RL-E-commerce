
// App.tsx
// Main application component that sets up routing and layout for the e-commerce app.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Top navigation bar
import Footer from './components/Footer'; // Footer section
import Home from './pages/Home'; // Home page
import Products from './pages/Products'; // Product listing page
import Cart from './pages/Cart'; // Shopping cart page

function App() {
  return (
    <Router>
      {/* Header is always visible */}
      <Header />
      {/* Define routes for each main page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* Footer is always visible */}
      <Footer />
    </Router>
  );
}

export default App;
