import React from 'react'
import axios from 'axios'
import styled from "styled-components"

const Menu = styled.div`
display: block;
flex-direction: column;
margin: 8px;
margin-top: 8px;
margin-right: 8px;
button{
    margin: 8px;   
}

`
const Lista = styled.div`
margin-left: 100px;
`
export default class App extends React.Component {
  state = {
    page: 1,
    users: [],
    inputValue: '',
    inputValueEmail: ''
  }
    handleInputChange = (e) =>{
      this.setState({inputValue: e.target.value})
    }
    handleInputEmail = (e) =>{
      this.setState({inputValueEmail: e.target.value})
    }
   
    componentDidMount(){
      this.getAllUsers()
    }
   
    getAllUsers = () =>{
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      {
        headers:{
          Authorization: 'Larissa-Firmino-moreira'
        }
      }).then((response)=>{
         this.setState({users: response.data})
         console.log(response.data)
      }).catch((error)=>{
      })
    }
  
    createUser = () =>{
     const body ={
       name: this.state.inputValue,
       email: this.state.inputValueEmail
     }
     axios.post(
       'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',body,
       {
         headers:{
           Authorization: 'Larissa-Firmino-moreira'
         }
       }
     ).then((response)=>{
       this.setState({inputValue: ''})
       this.setState({inputValueEmail: ''})
       alert('Usuário criado')
       console.log(response.data)
       this.getAllUsers()
     }).catch((error)=>{
       console.log(error.response)
     })
    }
   
    deleteUser = (id) =>{
      axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
       {
         headers:{
           Authorization: 'Larissa-Firmino-moreira'
         }
       }
      ).then((response)=>{
        alert('Usuário apagado')
        this.getAllUsers()
      }).catch((error)=>{
        console.log(error.response)
      })
    }
    mudarPagina = () =>{
      if(this.state.page === 1){
        return this.setState({page: 2})
      } else if(this.state.page === 2){
        return this.setState({page: 1})
      }
    }
   render(){
     const userList = this.state.users.map((item)=>(
     <li key={item.id}>{item.name}<button onClick={()=> this.deleteUser(item.id)}>X</button></li>
     ))
   
     const pagina1 =  <Menu>
     
   <input placeholder='Nome'
   value={this.state.inputValue}
   onChange={this.handleInputChange}
   />
   
     <input placeholder='Email.'
   value={this.state.inputValueEmail}
   onChange={this.handleInputEmail}
   />
   <button onClick={this.createUser}>Criar Cadastro</button>
   </Menu>
   
   const pagina2 = 
    <ul>{userList}</ul>
     return (
       <div className='App'>
       <button onClick={this.mudarPagina}>Lista de Usuários</button>
       {this.state.page === 1 ? pagina1 : pagina2}
       </div>
     )
   }
}
