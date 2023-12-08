import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './layout/Footer';
import Nav from './layout/Nav';

function App() {
  return (
    <div data-theme="cupcake" className="App">
      {/* Navbar */}
      <Nav />

      {/* Main section */}
      <main className="main ">
        
        <Routes>
          <Route path='/' element = {<Home />} />
        </Routes>

      </main>



      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
