import React from "react";
import styled from 'styled-components';
import { MessageBoxes } from './components/MessageBoxes/MessageBoxes';
import img from './img/icone.png';
import plano from './img/fundo.jpg';


const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 300px;
  border: 1.9px solid black;
  padding: 5px;
  background-image: url('${plano}');
  background-size: 100% 100%;
  margin:10vh 4px;
  border-radius:30px;
`
const ContainerMensager = styled.div`
  display:flex;
  width:100%;
  height:90%;
  overflow-y: auto;
  flex-direction: column;
  margin: 1px;
  justify-content: end;
`
const InputGeral = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0px;
    height: 40px;
    border-top: 2.5px solid lightgray;
    margin:1.5px;
    width:100%;
`;

const InputNome = styled.input`
    width: calc(40% - 30px);
    height: 1.3rem;
    border-radius: 8px;
    border: none;
    margin: 3px;
    padding: 1px 3px;
`;

const InputMensagem = styled.input`
    height: 1.3rem;
    border-radius: 8px;
    border: none;
    margin: 3px;
    width: 60%;
    padding: 1px 3px;

`;

const ButtonEnvio = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    border: 1px solid gray;
    border-radius: 50%;
    background-color: #ffffff;
    margin: 4px;
    background-image: url('${img}');
    background-size: 70% 70%;
    cursor: pointer;
    background-repeat:  no-repeat;
    background-position: center;
    cursor: pointer;
    :hover{
        background-color: #C7C3C7;

    }
    :active{
        background-color: #DA8EE2 ;

    }
   
`;

class App extends React.Component {
  state = {
    messages: [],
    inputNomeValue: "",
    inputMensagemValue: "",
  };

  sendMessage = () => {
    if (this.state.inputMensagemValue !== "") {
      const novaMsg = {
        name: this.state.inputNomeValue,
        message: this.state.inputMensagemValue,
      }

      const collectMessage = [...this.state.messages, novaMsg];
      this.setState({ messages: collectMessage, inputMensagemValue: "", inputNomeValue: "" });
    }
  };
  onChangeInputNome = (event) => {
    this.setState({ inputNomeValue: event.target.value });

  };
  onChangeInputMensagem = (event) => {
    this.setState({ inputMensagemValue: event.target.value });
  };
  enter = (e) => {
    if (e.code==="Enter")
    {
      this.sendMessage()
    }
  }
  render() {
    const chat = this.state.messages.map((conversas) => {
      return <MessageBoxes user={conversas.name} msgs={conversas.message} />
    });

    return (
      <ContainerPrincipal>
        <ContainerMensager>
          {chat}
        </ContainerMensager>

        <InputGeral>
          <InputNome type='text' placeholder='Usuário' value={this.state.inputNomeValue} onChange={this.onChangeInputNome} />

          <InputMensagem type='text' placeholder='Mensagem' value={this.state.inputMensagemValue} onChange={this.onChangeInputMensagem} onKeyPress={this.enter}/>

          <ButtonEnvio onClick={this.sendMessage}></ButtonEnvio>

        </InputGeral>

      </ContainerPrincipal>
    );
  }
};

export default App;
