import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import './homemenu.css';

function HomeMenu(){
  const {setLogado} = useContext(AuthContext);

  function logout(){
    setLogado(false);
    localStorage.removeItem("logado");
  }
  
    return <nav className="navbar fixed-top navbar-expand-md navbar-dark">
        <div className="container">
       <a className="navbar-brand" href="#">
      <img src="/images/LogoDcontrol.png" width={80} />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  ">
        <li className="nav-item">
            <Link to="/app/home" className="nav-link" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/app/novocliente" className="nav-link" aria-current="page">Novo Cliente</Link>
          </li>
          <li className="nav-item">
            <a onClick={logout} className="nav-link logout" aria-current="page">Sair</a>
          </li>         
        </ul>
      </div>
    </div>
  </nav>;
   
}

export default HomeMenu;