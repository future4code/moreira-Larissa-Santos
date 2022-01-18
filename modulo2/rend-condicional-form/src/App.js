
import React from "react";
import styled from "styled-components";
import { Etapa1 } from "./components/Etapa1";
import { Etapa2 } from "./components/Etapa2";
import { Etapa3 } from "./components/Etapa3";
import { Final } from "./components/Final";


const Geral = styled.div`
  margin-top: 50px;
  height: 500px;
  width: 470px;
  border: solid 2px black;
  background-color: #f9c29e;
`;
const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin-top: 76px;
  :hover {
    background-color: #c6b5aa;
  }
`;
class App extends React.Component {
  state = {
    telaInicial: 1
  };

 renderizarEtapa = () => {
    switch (this.state.telaInicial) {
      case 1:return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
    }
  };

  proximaTela = () => {
    this.setState({ telaInicial: this.state.telaInicial + 1 });
  };

  render() {
    return (
      <Geral>
        {this.renderizarEtapa()}
      
        {this.state.telaInicial < 4 && (
          <Button onClick={this.proximaTela}>Próxima Etapa</Button>
        )}
      </Geral>
    );
  }
}

export default App;

