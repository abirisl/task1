import logo from './logo.svg';
import './App.css';
import Navbar from './component/shared/Navbar';
import Banner from './component/Home/Banner';
import Home from './component/Home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
