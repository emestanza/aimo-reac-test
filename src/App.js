import React, {useState, useEffect, Fragment} from 'react';
import Form from './components/Form';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  
  // Método para consultar la API de Letras de canciones
  const consumeApiGithub = async search => {
    console.log(search);
    const {username} = search;
    const url = `https://api.github.com/users/${username}/repos`;

    // consultar la api
    const resultado = await axios.get(url,{
      headers: { Authorization: "token a527fbf293ab502984a087a7090a233f7327fcbe" }
  });

    console.log("DATA");
    console.log(resultado);

}

  return (
    <Fragment>
      <Form consumeApiGithub ={consumeApiGithub} />
    </Fragment>
  );

}

export default App;
