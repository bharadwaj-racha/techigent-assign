// src/App.js
import React from 'react';
import NavBar from './NavBar';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
// import SearchBar from './SearchBar';
import SideBar from './SideBar';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <SideBar />
      <NavBar />
      <main>
        <UserProfile />
        {/* <SearchBar/> */}
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}
export default App;
