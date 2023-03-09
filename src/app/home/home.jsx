import React from 'react';
import { Link } from 'react-router-dom';
import ListaCliente from '../components/listaclientes/listacliente';
import HomeMenu from '../components/menu/homemenu';
import { getFirestore, collection, getDocs,doc, deleteDoc} from 'firebase/firestore';
import { useEffect, useState } from "react";
import SweetAlert from 'react-bootstrap-sweetalert';

import './home.css';

const db = getFirestore();
const docRef = collection(db, 'clientes');

function Home(){
    
 
  
    const deleteUser = async (id) => {
      try {
        const docRef = doc(db, 'clientes', id);
        await deleteDoc(docRef);
        console.log('Documento deletado com sucesso!');
        setExcluido(id);
        setConfirmacao(false)
      } catch (e) {
        console.error('Erro ao deletar documento:', e);
      }
    };
 

    async function getDocsFromFirebase() {
        const querySnapshot = await getDocs(docRef);
        const docs = [];
       
        querySnapshot.forEach((doc) => {
           if (doc.data().nome.indexOf(busca) >= 0){
            docs.push({
                id: doc.id,
                nome: doc.data().nome,
                email: doc.data().email,
                telefone :doc.data().telefone,
          });
           }
               
           
         
        });
        return docs;
      }

      const [docs, setDocs] = useState([]);
      const [busca, setBusca] = useState("");
      const [excluido, setExcluido] = useState("");
      const [confirmacao, setConfirmacao] = useState(false);
      const [confirmacaoId, setConfirmacaoId] = useState('');
      const [nomeCliente, setNomeCliente] = useState("");
      useEffect(() => {
        async function fetchData() {
          const data = await getDocsFromFirebase();
          setDocs(data);
         
        }
        fetchData();
      },  [busca,excluido]);

      function confirmaExclusao(id){
        setConfirmacao(true)
     
        setConfirmacaoId(id)
        
      }

    return <div >
            <HomeMenu/>
            <div className='container-fluid titulo'>
                <h1>Cadastro de Clientes</h1>
                <div className='row'>
                    <div className='col-4'>
                    <Link to="/app/novocliente" className=" btn btn-primary" type="button" ><i className="fa-solid fa-user-plus"></i> Cliente</Link>
                    </div>
                    <div className='col-8'>
                    <div className="input-group mb-3">
                    <input onChange={(e) => setBusca(e.target.value)} type="text" className="form-control" placeholder="Digite o nome do cliente" aria-label="Recipient's username" aria-describedby="button-addon2" />
                   
                    </div>
                    </div>
                </div>
               <ListaCliente docs={docs} clickDelete={confirmaExclusao}/>
                {
                  confirmacao ?<SweetAlert
                  danger
                  showCancel
                  confirmBtnText="Sim"
                  confirmBtnBsStyle="danger"
                  title="Exclusão"
                  cancelBtnText="Não"
                  cancelBtnBsStyle='light'
                  onConfirm={()=> deleteUser(confirmacaoId)}
                  onCancel={()=> setConfirmacao(false)}
                 reverseButtons={true}
                                 >
                  {'Deseja excluir o Cliente Selecionado ? '} 
              </SweetAlert> : null }
            </div>
    </div>;
}

export default Home;