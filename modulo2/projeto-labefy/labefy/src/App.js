import React from 'react';
import ListPlaylist from './components/ListaDePlaylists';
import styled from 'styled-components';


export default class App extends React.Component {
  
  render(){
    return<div>
      <ListPlaylist/>
    </div>
  }
}