import React from 'react';
import Navbar from "./Navbar/Navbar";
import room from "./room.jpg";
import avatar from "./avatar.png";

function App() {
  return (
    <div className="app">
      <header className="header">
          <div className="logo-box">
            <p className="logo-text">This Interior</p>
          </div>
          <div className="navbar-box"><Navbar /></div>
      </header>

      <main className="main">
        <div className="main-box">
          <h1>Modern interior</h1>
          <p>A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</p>
          <p className="nav" id="read"><a className="readmore" href="#article">Read more &nbsp;&nbsp;&rarr;</a></p>
        </div>
        <div className="content-box">
          <div className="img-box">
            <img className="main-img" src={room} alt="room" />
          </div>
          <div className="profile-box animate">
            <div className="img-avatar-box">
                <img className="img-avatar" src={avatar} alt="avatar" />
              <div className="info-avatar">
                <h3>Nyxy</h3>
                <h4>Web designer</h4>
              </div>
            </div>
            <div>
              <p className="profile-text">Designed in 2023 by Nyxy</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p className="footer-text">created by <a href="https://github.com/CyNyxy"><b>CyNyxy</b></a> - devChallenges.io</p>
      </footer>
    </div>
  );
}

export default App;
