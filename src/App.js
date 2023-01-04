import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUS';
import ContanctUs from './components/Contact/Contact';
import Aasharam from './components/Aasharam/Aasharam';
import Blog from './components/Blog/Blog';
import Service from './components/Service/Service';


function App() {
  return (
 <>
<NavBar></NavBar>
  <Routes>
    <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContanctUs/>} />
        <Route path="/aasharam" element={<Aasharam/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/service" element={<Service/>} />
  </Routes>
 </>
  );
}

export default App;
