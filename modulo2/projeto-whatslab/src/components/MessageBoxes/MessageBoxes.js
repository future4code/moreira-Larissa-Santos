import styled from 'styled-components';
import React from 'react';
const Box = styled.div`
   
   background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8"
        } else if (props.tipo === "outro") {
            return "#ffffff"
        }
    }};
    align-self:  ${props => {
        if (props.tipo === "eu") {
            return "flex-end"
        } else {
            return "flex-start"
        }
    }};
    
    word-wrap: break-word;
    padding: 0.7em 0.6em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    margin: 0.3rem 0;
`; 
export const ContainerNome = styled.div`
    color: #9AAC8C;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
`
const boxMessage = (user, msgs) => {
    if (user === "eu") {
        return (
            <Box tipo={"eu"}>
                {msgs}
            </Box>
        )
    } else {
        return (
            <Box tipo={"outro"}>
                <ContainerNome>{user}</ContainerNome>
                <div>{msgs}</div>
            </Box>
        )
    }
}
export class MessageBoxes extends React.Component {

    render() {
        const name = this.props.user.toLowerCase()
        return <>{boxMessage(name, this.props.msgs)}</>
    }
}
