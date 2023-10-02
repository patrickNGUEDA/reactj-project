import './App.css'
import Services from './components/Services';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Products from './components/Products';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import MyFooter from './components/MyFooter';

function App() {
  
  return (
  <>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Products/>
      <Blog/>
      <Newsletter/>
      <MyFooter/>
  </>
     
  );
}

export default App
