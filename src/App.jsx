import './App.css'
import Services from './components/Services';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Products from './components/Products';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import MyFooter from './components/MyFooter';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
  <>

<BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/investissements" element={<Blog />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/contact" element={<Newsletter />} />
        <Route path="/faq" element={<Newsletter />} />
      </Routes>
    <MyFooter/>
</BrowserRouter>


      {/* <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Products/>
      <Blog/>
      <Newsletter/> */}
     
  </>
     
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
export default App
