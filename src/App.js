import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Banner from './components/Banner/Banner'
import Chat from './components/Chat/Chat'
import Footer from './components/Footer/Footer'


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Banner/>
                <div className={"main"}>
                    <Navbar/>
                    <Routes>
                        <Route path={"/"} element={<Profile/>}/>
                        <Route exact path={"/chat/*"} element={<Chat/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

