import styled from "styled-components"
import React from "react"

export const FormCards = styled.form`
display: flex;
flex-direction: column;
align-items: center;
height: 50vh;
width: 500px;
padding: 10px;
`

export const ContainerForms = styled.div`
  margin: 0;
  border: 2px solid darkgray;  
  flex-grow: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
 `
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background-color: darkgray;
`

export const Select = styled.select`
  width: 40vw;
  height: 5vh;
  border-radius: 15px;
  padding: 4px 8px;
  border-width: 3px;
  margin: 0px 0px 15px;
  background-color: #7a297a;
`
export const Input = styled.input`
  width: 39vw;
  height: 5vh;
  border-radius: 15px;
  padding: 4px 8px;
  border-width: 3px;
  margin: 0px 0px 15px;
  background-color: #7a297a;
  color: black;
`

export const Container2 = styled.div`
display: flex;
flex-direction: row;
width: 10vw;
justify-content: space-between;
`
export const Button = styled.button`
border-radius: 20%;
background-color: #bda091;
font-weight: bolder;
min-height: 4vh;
width: 4.5vw; 
cursor: pointer;
`