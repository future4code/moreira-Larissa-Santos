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
  width: 200px;
  border: 1px solid gray;
  margin-top: -10px;
  margin-bottom: -10px;
`;
const Perguntas = styled.h4`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
`;
const Etapas = styled.h3`
  font-size: 21px;
`;
const Selecao = styled.select`
  border-radius: 5px;
  width: 206px;
`;

export class Etapa3 extends React.Component {
  state = {
    perguntasEtapa3: [
      {
        inputGraduacao: ""
      }
    ]
  };

  render() {
    return (
      <Container>
        <Etapas>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Etapas>
        <Input>
          <Perguntas>
            7. Por que você não terminou um curso de graduação?
          </Perguntas>
          <InputEstilizado/>
        </Input>
        <Perguntas>8. Você fez algum curso complementar?</Perguntas>
        <Selecao>
          <option value="Não fiz curso complementar">
            Não fiz curso complementar
          </option>
          <option value="Curso Técnico">Curso Técnico</option>
          <option value="Curso de Inglês">Curso de Inglês</option>
        </Selecao>
      </Container>
    );
  }
}

