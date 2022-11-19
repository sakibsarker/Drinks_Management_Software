import './App.css';
import Footer from './component/Footer.component';
import Header from './component/Header.component';
import Home from './pages/Home.pages';
import "../src/component/Color"

function App() {
  return (
    <div>
      <Header />
      <div className='App'>
        <Home />
        <Home />
        <Home />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
