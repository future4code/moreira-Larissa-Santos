import React from 'react';
import './App.css';
import styled from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './img/img-perfil.jpg';
import empresa from './img/Byjus.png';
import formacao from './img/img-con.jpg';
import email from './img/email.png';
import endereco from './img/endereco.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={perfil}
          nome="Larissa"
          descricao="Oi, eu sou a Larissa, aluna da Labenu. Me desafiei a entrar nesse novo mundo da programação e estou orgulhosa do meu progresso . Sigo firme e com muitos projetos pela frente. "
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>
    
      <div className="page-section-container">
        <CardPequeno
          imagem={email}
          nome="Email:"
          descricao= "larissafirmino@gmail.com"
        />

          <CardPequeno
          imagem={endereco}
          nome="Endereço:"
          descricao= "Rua A, Centro - Barro Preto- BA " 
        />
        </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={formacao}
          nome="Larissa"
          descricao="Formada em Contabilidade e Estudante de Web Full Stack."
        />

        <CardGrande
          imagem={empresa}
          nome="Byjus Future School"
          descricao="Instrutora Infantil de Progamação."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
