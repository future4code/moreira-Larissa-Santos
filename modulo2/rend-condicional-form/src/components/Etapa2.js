import React from "react";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 415px;
`;
const InputEstilizado = styled.input`
  width: 170px;
  border: 1px solid black;
`;

const Etapas = styled.h3`
    font-size: 21px;
  text-align: center;
`;

const Perguntas = styled.h4`
   text-align: center;    
    font-size: 15px;
    font-weight: 400;
`;

export class Etapa2 extends React.Component {
  state = {
    perguntasEtapa2: [
      {
        inputCurso: "",
        inputUnidade: ""
      }
    ]
  };

  render() {
    return (
      <Container>
        <Etapas>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Etapas>
        <Input>
          <Perguntas>5. Qual curso?</Perguntas>
          <InputEstilizado
          />
          <Perguntas>6. Qual a unidade de ensino?</Perguntas>
          <InputEstilizado
          />
        </Input>
      </Container>
    );
  }
}