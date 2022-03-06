import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Banner from './components/Banner/Banner'

const App = () => {
  return (
    <div className="app-wrapper">
        <Header/>
        <Banner/>
        <Navbar/>
        <Profile/>
    </div>
  );
}

export default App;
