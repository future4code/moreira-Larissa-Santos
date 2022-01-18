import React from 'react' 
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Input = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 415px;
`
const InputEstilizado = styled.input`
    width: 170px;
    border: 1px solid black;
`
const Etapas = styled.h3`
    font-size: 21px;
`
const Perguntas = styled.h4`
    text-align: center;    
    font-size: 15px;
    font-weight: 400;
`
const Selecao = styled.select`
    width: 224px;
`

 export class Etapa1 extends React.Component {
    state = {

        perguntasEtapa1:
            [
                {
                    inputNome: "",
                    inputIdade: "",
                    inputEmail: ""
                }
            ],
    }

    render(){

        return(
        <Container>
            <Etapas>ETAPA 1 - DADOS GERAIS</Etapas>
            <Input>
            <Perguntas>1. Qual o seu nome?</Perguntas>  
            <InputEstilizado
            />
            <Perguntas>2. Qual a sua idade?</Perguntas>  
            <InputEstilizado
            />
            <Perguntas>3. Qual o seu email?</Perguntas>  
            <InputEstilizado
            />
            </Input>
            <Perguntas>4. Qual a sua escolaridade?</Perguntas>
            <Selecao>
                <option value="Ensino médio incompleto">Ensino médio incompleto
                </option>
                <option value="Ensino médio completo">Ensino médio completo
                </option>
                <option value="Ensino médio incompleto">Ensino superior incompleto
                </option>
                <option value="Ensino médio incompleto">Ensino superior completo
                </option>
            </Selecao>
        </Container>
        )
    }
}