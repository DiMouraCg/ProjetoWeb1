import React from "react";
import './listacliente.css';
import { Link } from 'react-router-dom';

//import { initializeApp } from '../../config/firebase';




function ListaCliente(props) {
   
   
   return <table className="table table-striped table-hover">
        <thead className="table-dark">
         <tr>
            <th scope="col">Código</th>   
            <th scope="col">Nome</th>   
            <th scope="col">Email</th>   
            <th scope="col">Telefone</th>
            <th scope="col"></th>          
         </tr>       
        </thead>
        <tbody>
            {
                props.docs.map((doc) => {
                    return  <tr key={doc.id}>
                    <th scope="row">{doc.id}</th>   
                    <th>{doc.nome}</th> 
                    <th>{doc.email}</th> 
                    <th>{doc.telefone}</th>
                    <th className="coluna-acao">
                        <Link to={'/app/editarcliente/'+doc.id}><i className="fa-solid fa-pen-to-square icone-acao btn-editar"></i></Link>
                        <Link to='#' onClick={()=> props.clickDelete(doc.id)}><i className="fa-solid fa-trash-can icone-acao btn-delete"></i></Link>
                    </th>    
                </tr>   
                })
            }
        
       </tbody>              
    </table>
}
export default ListaCliente;