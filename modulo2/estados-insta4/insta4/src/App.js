import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "damiao",
        fotoUsuario: "https://picsum.photos/200/300",
        fotoPost: "https://picsum.photos/id/237/200/150"
      },
      {
        nomeUsuario: "solange",
        fotoUsuario: "https://picsum.photos/200",
        fotoPost: "https://picsum.photos/seed/picsum/200/150"
      }
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoPosts = [...this.state.posts, novoPost];

    this.setState({ posts: novoPosts });
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.posts.map((post, index) => {
      return (
        <Post
          key={index}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });
    return (
      <MainContainer>
        <div>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome de usuario"}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do usuario"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do post"}
          />

          <button onClick={this.adicionaPost}>Adicionar</button>
        </div>
        <div>{listaDePosts}</div>
      </MainContainer>
    );
  }
}

export default App;
