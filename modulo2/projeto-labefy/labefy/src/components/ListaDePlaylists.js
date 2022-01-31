import React from "react";
import axios from "axios";
import styled from "styled-components";
import ReactPlayer from "react-player";
import img from "../images/tropical.jpg"

const Body1 = styled.div`
display: grid;
grid-template-columns: 1fr 4fr 1fr;
min-height: 100vh;
grid-template-rows: 100%;
`

const PlaylistDiv = styled.div`
display: flex;
flex-direction: column;
padding: 12px;
background-color: #556B2F;
color: black;

    >h3{
        text-align: center;
        font-size:28px;
    }
`

const ContainerPlaylists = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 240px;
height: 25px;
margin: 5px;
padding: 5px;
border-radius: 15px;
    >button{
        font-size: 20px;
        border-radius: 50%;
        color: black;
        border: none;
    }
    >button:hover{
        
        color: black;
    }
    :hover{
        background-color: white;
        transition: 400ms;
    }
`
const CriarPlaylist = styled.div`
display: flex;
padding: 5px;
    >input{
        color: white;
        padding: 4px;
        width: 195px;
        margin-right: 5px;
        border-radius: 5px;
        border: 1px white solid;
        background-color: transparent;
    }
    >button{
        padding: 4px;
        width: 50px;
        color: black;
        border-radius: 15px;
        border: 1px black solid;
        background-color: transparent;
    }
    >button:hover{
        background: white;
        color: black;
        transition: 400ms;
    }
`

const ContainerTracks = styled.div`
display: flex;
flex-direction: column;
background-color: #98FB98 ;
width: 400px;
margin: 20px;
padding: 15px;

    >button{
        background-color: transparent;
        border-radius: 15px;
        border: 1px solid red;
        color: red;
        padding: 10px;
        transition: 500ms;
    }
    >button:hover{
        background-color: red;
        color: white;
    }
`
const ContainerMusical = styled.div`
font-size:35px;
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${img});
color: black;
height: 100%;
    >h3{
        text-align: center;
        color: black;
        font-size: 50px bold;
        
    }
`

const AddTrackDiv = styled.div`
font-size:25px;
display: flex;
flex-direction: column;
padding: 32px;
background-color: #556B2F;
color: black;
align-items: center;
    >h3{
        text-align: center;
    }
    >input{
        padding: 5px;
        margin-bottom: 8px;
        border-radius: 7px;
        border: 1px black solid;
        background-color: transparent;
        color: white;
    }
    
    >button{
        padding: 4px;
        width: 100px;
        color: black;
        border-radius: 15px;
        border: 1px black solid;
        background-color: transparent;
    }
    >button:hover{
        background: white;
        color: black;
        transition: 400ms; 
    }
`

export default class ListPlaylist extends React.Component{
    state={
        nome: "",
        playlists: [],
        playlistId: "",
        musicas: [],
        musicasName: "",
        musicasArtist: "",
        musicasUrl: ""
    }   

    componentDidMount(){
        this.pegarPlaylists()
    }

    handlePlaylist = (event) => {
        this.setState({nome: event.target.value})
    }

    fazerPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.nome
        }
        axios.post(url, body, {
            headers: {
                Authorization: "Larissa-Firmino-moreira"
            }
        })
        .then((res) => {
            alert("Playlist Criada!")
            this.pegarPlaylists()
            this.setState({nome: ""})
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })
    }

    pegarPlaylists = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        axios.get(url, {
            headers: {
                Authorization: "Larissa-Firmino-moreira"
            }
        })
        .then((res) => {
            this.setState({playlists: res.data.result.list})
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    removerPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "Larissa-Firmino-moreira"
            }
        })
        .then((res) => {
            console.log(res)
            this.pegarPlaylists()
        })
        .then((err) => {
            console.log(err.response.data)
        })
    }

    pegarTracksPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        axios.get(url, {
            headers: {
                Authorization: "Larissa-Firmino-moreira"
            }
        })
        .then((res) => {
            this.setState({musicas: res.data.result.tracks})
            this.setState({playlistId: id})
        })
        .catch((err) =>{
            alert(err.response)
        })
    }

    handleTrackName = (event) => {
        this.setState({musicasName: event.target.value})
    }

    handleTrackArtist = (event) => {
        this.setState({musicasArtist: event.target.value})
    }

    handleTrackUrl = (event) => {
        this.setState({musicasUrl: event.target.value})
    }

    adicionarMusica = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks`
        const body = {
            name: this.state.musicasName,
            artist: this.state.musicasArtist,
            url: this.state.musicasUrl,
        }
        axios.post(url, body, {
            headers: {
                Authorization: "Larissa-Firmino-moreira"
            }
        })
        .then((res) => {
            alert("Nova música adicionada!")
            this.pegarTracksPlaylist(this.state.playlistId)
            this.setState({musicasName: "", musicasArtist: "", musicasUrl: ""})
        })
        .catch((err) =>{
            alert(err.response)
        })
    }

    removerMusica = (trackId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks/${trackId}`
        axios.delete(url, {
            headers: {
                Authorization: "Larissa-Firmino-moreira"
            }
        })
        .then(() =>{
            alert("Faixa removida com sucesso")
            this.pegarTracksPlaylist(this.state.playlistId)
        })
        .catch((err) =>{
            alert(err.response)
        })
    }

    render(){
        const listaPlaylist = this.state.playlists.map((item) => {
            return <ContainerPlaylists key={item.id}>                
                <p onClick={() =>this.pegarTracksPlaylist(item.id)}>{item.name}</p>
                <button onClick={() => this.removerPlaylist(item.id)}>x</button>
            </ContainerPlaylists>
        })
        
        const renderTracks = this.state.musicas.map((item) => {
            return <ContainerTracks key={item.id}>
                <ReactPlayer
                    url={item.url}
                    playing={false}
                    controls={true}
                    width={400}
                    height={272}
                />
                <h3>{item.artist} - {item.name}</h3>
                <button onClick={() => this.removerMusica(item.id)}>Remover Música</button>
            </ContainerTracks>
        })

        return<Body1>
           <PlaylistDiv>
                <h3>Playlists Brasileiras</h3>    
                {listaPlaylist}        
                <CriarPlaylist>
                    <input
                        value={this.state.nome}
                        onChange={this.handlePlaylist}
                        placeholder="Criar playlist..."
                    />
                    <button onClick={this.fazerPlaylist}>Criar</button>
                </CriarPlaylist>
            </PlaylistDiv>
            
            <ContainerMusical>
                <h3>Brazilify</h3>
                {renderTracks}                
            </ContainerMusical>

            <AddTrackDiv>
                    <h3>Adicionar Músicas</h3>

                    <input
                        value={this.state.musicasName}
                        onChange={this.handleTrackName}
                        placeholder="Nome da música"
                    />
                    <input
                        value={this.state.musicasArtist}
                        onChange={this.handleTrackArtist}
                        placeholder="Nome do artista"
                    />
                    <input
                        value={this.state.musicasUrl}
                        onChange={this.handleTrackUrl}
                        placeholder="Link da música"
                    />
                    <button onClick={this.adicionarMusica}>Adicionar</button>
            </AddTrackDiv>

            
                
        </Body1>
        
        
    }
}