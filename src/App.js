import './App.css';
import { HashRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import HeadTail from './Components/HeadTail';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeadTailTwo from './Components/HeadTailTwo';
import './styles.css'

function App() {
  return (
    <div className="App">
     <Router>

         <div className="d-flex flex-column min-vh-100 bg-light">
        <Header />
        <main className="flex-grow-1 container py-5">
          <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/head-tail" element={<HeadTail/>} />
          <Route path="/head-tailtwo" element={<HeadTailTwo/>} />
          </Routes>
        </main>
        <Footer/>
        </div>
    
    </Router>
    </div>
  );
}

export default App;
