import React from 'react';
// import logo from './logo.svg';
import Background from "./media/desktop.mp4";
import Footer from "./pages/Footer/Footer";
import Logo from "./media/header_logo.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <video autoPlay loop style={{
            position: "absolute",
            width: "110%",
            height: "120%",
            zIndex: "-1",
            objectFit: "cover"

          }}>
            <source src={Background}/>
          </video>
          <div className="new-header">
            <img src={Logo}/>

              <button className="buttonHeader" type="submit"><span>ENG</span></button>
          </div>

          <div className="logon-container">

            <section className="form">
              <h1>Bem-vindo. <br/>Aqui renasce a Criatividade Brasileira.</h1>
              <button className="button1" type="submit"><span>ONBOARDING</span></button>
              <button className="button2" type="submit"><span>REBORN</span></button>
              {/* <Link to="/register" className="back-link">
                <FiLogIn size={16} color="#E02041"/>
                Não tenho cadastro</Link> */}
                         
            </section>
            {/* <img src={HeroesImg} alt="header image"/> */}

        </div>
        <Footer/>


          {/* <h2 key="h2">Bem-vindo.<br/>Aqui renasce <br/> a Criatividade <br/> Brasileira. </h2>
          <div key="button1" className="start-button clearfix">
            <a>
            ONBOARDING
            </a>
            <a>
            REBORN
            </a>
          </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

    </div>
  );
}

export default App;
