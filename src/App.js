import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUS';
import ContanctUs from './components/Contact/Contact';
import Aasharam from './components/Aasharam/Aasharam';
import Blog from './components/Blog/Blog';
import OurSant from './components/OurSant/OurSant';
import Testinomials from './components/Testinomials/Testinomials';
import Footer from './components/Footer/Footer';
import Listone from './components/Aasharam/Aasharam List/Listone';
import ListTwo from './components/Aasharam/Aasharam List/ListTwo';
import ListThree from './components/Aasharam/Aasharam List/ListThree';
import ListFour from './components/Aasharam/Aasharam List/ListFour';


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
        <Route path="/testinomials" element={<Testinomials/>} />
        <Route path="/oursant" element={<OurSant/>} />
        <Route path="/listone" element={<Listone/>} />
        <Route path="/listtwo" element={<ListTwo/>} />
        <Route path="/listthree" element={<ListThree/>} />
        <Route path="/listfour" element={<ListFour/>} />
  </Routes>
  <Footer></Footer>
 </>
  );
}

export default App;
