import React, {useState, useEffect, Fragment} from 'react';
import Form from './components/Form';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
require('dotenv').config();

const tokenStr = `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`;

function App() {

  // Método para consultar la API de Letras de canciones
  const consumeApiGithub = async search => {

    const {username} = search;
    const url = `https://api.github.com/users/${username}/repos`;

    // consultar la api
    const resultado = await axios.get(url,{
      headers: { Authorization: tokenStr}
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
