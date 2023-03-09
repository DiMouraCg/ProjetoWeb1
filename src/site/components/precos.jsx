import React from 'react';


function Precos(){
    return <section id="preco">
        <div className="container">

            <div className="row text-center">
                <div className="titulo">
                    <h1>Planos e preços</h1>
                   <p>comece sua avaliação gratuita. Não é nescessário cartão de credito.</p>     
                </div>
            </div>

               <div className="row text-center">
               <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header"><h1>Free</h1></div>
                        <div className="card-body">
                            <h2>R$ 0,00 <small className="text-muted">/mês</small></h2>
                            <p>Até 50 clientes</p>
                            <p>Sem suporte</p>
                            <button className="btn btn-lg btn-outline-primary">Começar agora</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header"><h1>Pro</h1></div>
                        <div className="card-body">
                            <h2>R$ 39,90 <small className="text-muted">/mês</small></h2>
                            <p>Até 200 clientes</p>
                            <p>Suporte por email</p>
                            <button className="btn btn-lg btn-outline-primary">Começar agora</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header"><h1>Premium</h1></div>
                        <div className="card-body">
                            <h2>R$ 69,90 <small className="text-muted">/mês</small></h2>
                            <p>Clientes ilimitados</p>
                            <p>Suporte por email e whatsapp</p>
                            <button className="btn btn-lg btn-outline-primary">Começar agora</button>
                        </div>
                    </div>
                </div>
               </div>
           
        </div>
    </section>;
}

export default Precos;