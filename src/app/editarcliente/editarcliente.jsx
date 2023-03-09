import React from 'react';
import HomeMenu from '../components/menu/homemenu';
import { getFirestore, doc, setDoc,getDoc  } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link, useParams  } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import './editarcliente.css';


//const app = initializeApp(firebaseConfig);

function EditarCliente(props){
     const [sucesso, setSucesso] = useState("");
     const [mensagem, setMensagem] = useState("");
     const db = getFirestore();
     let { id } = useParams()
     const [cliente, setCliente] = useState({
        email: "",
        nome: "",
        telefone: "",
      });

     

      const getCliente = async (id) => {
        try {
          const clienteRef = doc(db, "clientes", id);
          const clienteDoc = await getDoc(clienteRef);
      
          if (clienteDoc.exists()) {
            setCliente(clienteDoc.data());
          } else {
            console.error("Cadastro não encontrado");
          }
        } catch (error) {
          console.error("Erro ao buscar cadastro: ", error);
        }
      };
      
      
      useEffect(() => {
        const id = window.location.pathname.split('/').pop(); // insira o ID do cliente aqui
        getCliente(id);
       
      }, []);

     
     const updateCliente = async (id, cliente) => {

       
        try {
          const clienteRef = doc(db, "clientes", id);
          await setDoc(clienteRef, cliente, { merge: true });
           setSucesso('S');
        } catch (error) {
          setMensagem("Erro ao atualizar cadastro: ", error);
          setSucesso('N');
          console.log("Erro ao atualizar cadastro: ", error);
        }
      };
     
      const handleUpdate = async (e) => {
        e.preventDefault();
      
        const id = e.target.id.value;
        const email = e.target.email.value; 
        const nome = e.target.nome.value;
        const telefone = e.target.telefone.value;
        const cliente = {
          email: email,
          nome: nome,
          telefone: telefone,
        };
        if (!email || !telefone || !telefone) {
            setMensagem('Informe todos os campos');
            setSucesso('N');
            return;
          }
        await updateCliente(id, cliente);
      };

     
      function SucessoCadastro(){
        window.location = "/app/home";
      }
     
    return <div>
     
       <HomeMenu/>
        <div className='container-fluid'>
        <div className="offset-lg-3  col-lg-6">
        <h1 className='titulo text-center'>Editar Cliente</h1> 
            <form onSubmit={handleUpdate}>
            
               <div className="mb-3">
                    <label htmlFor='text' className='form-label'>Código</label>
                    <input defaultValue={id} disabled type='text' className='form-control' name='id' aria-describedby='nomehelp'/>
               </div> 

                <div className="mb-3">
                    <label htmlFor='text' className='form-label'>Nome</label>
                    <input  defaultValue={cliente.nome} type='text' className='form-control' name='nome' aria-describedby='nomehelp'/>
               </div> 
               <div className="mb-3">
                    <label htmlFor='Email' className='form-label'>Email</label>
                    <input  defaultValue={cliente.email}  type='email' className='form-control' name='email' aria-describedby='emailHelp'/>
               </div> 
               <div className="mb-3">
                    <label htmlFor='text' className='form-label'>Telefone</label>
                    <input  defaultValue={cliente.telefone} type='text' className='form-control' name='telefone' aria-describedby='tellHelp'/>
               </div>
                    <div className="text-center"> 
                    <button type='submit' className='btn btn-primary btn-acao'>Salvar</button>
                    <Link to="/app/home" type='button' className='btn btn-outline-secondary btn-acao'>Cancelar</Link>
                    {sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}

                    {
                  sucesso === 'S' ?<SweetAlert
                   success
                   title="Cadastro Alterado"
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

export default EditarCliente;