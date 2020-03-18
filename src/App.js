import React from 'react';

import './App.css';
import Header from "./Header/Header";
import MainInfo from "./MainInfo/MainInfo";
import MySkills from "./MySkills/MySkills";
import MyProjects from "./MyWorks/MyProjects";
import Slogan from "./Slogan/Slogan";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <div className="portfolio">
                <Header/>
                <div className='sidebar'>
                    <MainInfo/>
                    <MySkills/>
                    <MyProjects/>
                    <Slogan/>
                    <Contacts/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
