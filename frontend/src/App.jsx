import HomePage from "./landing page/home/HomePage.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./landing page/home/Navbar.jsx";
import Footer from "./landing page/Footer.jsx";
import NotFound from "./NotFound.jsx";
import AboutPage from "./landing page/about/AboutPage.jsx";
import ProductsPage from "./landing page/products/ProductsPage.jsx";
import PricingPage from "./landing page/pricing/PricingPage.jsx";
import SupportPage from "./landing page/support/SupportPage.jsx";
function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element ={<HomePage/>}/>
        <Route path = "/about" element ={<AboutPage/>}/>
        <Route path = "/products" element = {<ProductsPage/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
        <Route path = "/support" element={<SupportPage/>}/>
        <Route path = "*" element ={<NotFound/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
