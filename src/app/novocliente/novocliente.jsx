import React from 'react';
import HomeMenu from '../components/menu/homemenu';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { Navigate, Link } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import './novocliente.css';

//const app = initializeApp(firebaseConfig);

function NovoCliente(){
     const [sucesso, setSucesso] = useState("");
     const [mensagem, setMensagem] = useState("");
     const db = getFirestore();
     const addCliente = async (cliente) => {
    
          try {
               
            const docRef = await addDoc(collection(db, "clientes"), cliente);
            setSucesso('S');
          } catch (error) {
            setSucesso('N');
            setMensagem(error);
          }
        };
     
        const handleSubmit = async (e) => {
          e.preventDefault();
        
          const nome = e.target.nome.value;
          const email = e.target.email.value;
          const telefone = e.target.telefone.value;
          
          if (!email || !telefone || !telefone) {
               setMensagem('Informe todos os campos');
               setSucesso('N');
               return;
             }
        
          const cliente = {
            nome: nome,
            email: email,
            telefone: telefone,
          };
        
          await addCliente(cliente);
        };

        function SucessoCadastro(){
          window.location = "/app/home";
        }
     
    return <div>
     
       <HomeMenu/>
        <div className='container-fluid'>
        <div className="offset-lg-3  col-lg-6">
        <h1 className='titulo text-center'>Novo Cliente</h1> 
            <form onSubmit={handleSubmit}>
            
                <div className="mb-3">
                    <label htmlFor='text' className='form-label'>Nome</label>
                    <input  type='text' className='form-control' name='nome' aria-describedby='nomehelp'/>
               </div> 
               <div className="mb-3">
                    <label htmlFor='Email' className='form-label'>Email</label>
                    <input  type='email' className='form-control' name='email' aria-describedby='emailHelp'/>
               </div> 
               <div className="mb-3">
                    <label htmlFor='text' className='form-label'>Telefone</label>
                    <input type='text' className='form-control' name='telefone' aria-describedby='tellHelp'/>
               </div>
                    <div className="text-center"> 
                    <button type='submit' className='btn btn-primary btn-acao'>Salvar</button>
                    <Link to="/app/home" type='button' className='btn btn-outline-secondary btn-acao'>Cancelar</Link>
                    {sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
                   
                    {
                  sucesso === 'S' ?<SweetAlert
                   success
                   title="Cadastro Realizado"
                   onConfirm={SucessoCadastro}                  
                    >
                     
                   </SweetAlert> : null }
                    <p className="mt-5 mb-3 text-muted">© Desenvolvido por Dcontrol Software</p>
              </div>
            </form>
        </div>
   </div>
   </div>;
}

export default NovoCliente;