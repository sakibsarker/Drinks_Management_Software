import './App.css';
import Header from './component/Header.component';
import Home from './pages/Home.pages';

function App() {
  return (
    <div>
      <Header />
      <div className='App'>
        <Home />
        <Home />
        <Home />
      </div>
    </div>
  );
}

export default App;
