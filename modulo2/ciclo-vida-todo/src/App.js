import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{id: Date.now(),
	              texto: 'Responder Warmup',
	              completa: false },

                 {id: Date.now(),
	              texto: 'Arrumar o quarto',
	              completa: true }],


      inputValue: '',
      filtro: ''
    };
    salvoLocalStorage= () =>{
      localStorage.setItem("texto", JSON.stringify(this.state.tarefas))
    };

    buscarLocalStorage=()=>{
      const textoString = localStorage.getItem("texto");
      if(textoString){
        const textoObjeto = JSON.parse(textoString)
        this.setState({
        tarefas:textoObjeto
      })
      }
      //  console.log("textoString", textoString)
      // console.log("textoObjeto", textoObjeto)
    
    };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.tarefas !== this.state.tarefas)    {  
    this.salvoLocalStorage();
    console.log("update");
    }
  };

  componentDidMount() {
    this.buscarLocalStorage();
  };

  onChangeInput = (event) => {
   console.log(event.target.value)
   this.setState({inputValue: event.target.value})
  console.log(this.state)
  };

  criaTarefa = () => {
    const novaTarefa = {
	  id: Date.now(), 
	  texto: this.state.inputValue,
	  completa: false 
};
  const copiaListaTarefas = [...this.state.tarefas, novaTarefa]
  this.setState({tarefas:copiaListaTarefas})
  }

  selectTarefa = (id) => {
    const novaListaDeTarefas= this.state.tarefas.map((tarefa)=>{
      if (id===tarefa.id){
        const tarefaAtual={
          ...tarefa,
          completa:!tarefa.completa
        }
        return tarefaAtual
      } else{
        return tarefa
      }
    })
    this.setState({tarefas:novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
       this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
