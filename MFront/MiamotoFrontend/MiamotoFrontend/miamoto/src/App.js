//import {Home, Footer, NavBar} from './components/Home';
import Home from './components/Home';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Miamoto from './components/Miamoto';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Miamoto/>
      <Footer />
    </Router>
  );
}
  
export default App;