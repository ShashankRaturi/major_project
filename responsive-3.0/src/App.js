import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Footer from './Components/Footer';



function App() {

  

  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/about' exact element = {<About/>} />
            <Route path='/team' exact element={<Team/>} />
            <Route path='/contact' exact element = {<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
