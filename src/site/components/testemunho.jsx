import React from 'react';


function Testemunho(){
    return <section id="testemunho">
        <div className="container">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <h2>Exelente ferramenta para acompanhamento do dia a dia</h2> 
      <img src="images/cliente.jpg"  alt="..."  />
      <em>DiMoura - Campina Grande/PB</em>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <h2>Exelente ferramenta para acompanhamento do dia a dia</h2> 
      <img src="images/cliente.jpg"  alt="..."  />
      <em>Fracisco - João Pessoa/PB</em>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <h2>Exelente ferramenta para acompanhamento do dia a dia</h2> 
      <img src="images/cliente.jpg"  alt="..." />
      <em>Marcos - Campina Grande/PB</em>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </section>;
}

export default Testemunho;