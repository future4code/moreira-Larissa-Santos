import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Etapas = styled.h3`
  font-size: 21px;
`;

const Perguntas = styled.h4`
  font-size: 14px;
  text-align: center;
  font-weight: 450;
`;

export class Final extends React.Component {
  render() {
    return (
      <Container>
        <Etapas>O FORMULÁRIO ACABOU</Etapas>

        <Perguntas>
          Muito obrigado por participar! Entraremos em contato!
        </Perguntas>
      </Container>
    );
  }
}
