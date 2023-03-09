import React, { useContext } from "react";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'; 
import { AuthContext } from "./app/context/auth";

import Site from "./site/site";
import Login from "./app/login/login";
import NovaConta from "./app/novaconta/novaconta";
import ResetSenha from "./app/resetsenha/resetsenha";
import Home from "./app/home/home";
import NovoCliente from "./app/novocliente/novocliente";
import EditarCliente from "./app/editarcliente/editarcliente";


function App(){
  const {logado} = useContext(AuthContext);

  function SecureRoute({...params}){
    if (!logado){
      return <Navigate to="/app" />
    } else {
      return <Route {...params} />
    }
  }

  return (
    <BrowserRouter>
      <Routes>
     
  <Route path='/' element={<Site/>} exact/>
  <Route path='/app' element={<Login/>} exact/>
  <Route path='/app/novaconta' element={<NovaConta/>} exact/>
  <Route path='/app/resetsenha' element={<ResetSenha/>} exact/> 

  <Route path='/app/home' element={<Home/>} exact/>
  <Route path='/app/novocliente' element={<NovoCliente/>} exact/>
  <Route path='/app/editarcliente/:id' element={<EditarCliente/>} exact/>
 
</Routes>
    </BrowserRouter> 
  );
}

export default App;
