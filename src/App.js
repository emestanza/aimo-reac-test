import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import Form from "./components/Form";
import Error from "./components/Error";
import RepoList from "./components/RepoList";
require("dotenv").config();

const tokenStr = `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`;

function App() {

    const [username, handleUserName] = useState("");
    const [error, showError] = useState(false);
    const [repoList, handleRepoList] = useState([]);

    const handleForm = formData => {
        
        if (formData.username === "") {
            showError(true);
            return;
        }

        handleUserName(formData.username);
        showError(false);
    };

    //useEffect
    //https://reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        if (username === "") return;

        // Método para consultar la API de Letras de canciones
        const consumeApiGithub = async () => {
            //const {username} = search;
            const url = `https://api.github.com/users/${username}/repos`;

            // consultar la api
            const resultado = await axios
                .get(url, {
                    headers: { Authorization: tokenStr }
                })
                .then(
                    response => {

                        if (response.data.length > 0) {
                            handleRepoList(response.data);
                            showError(false);
                        } else {
                            showError(true);
                        }
                    },
                    error => {
                        //console.log(error)
                        showError(true);
                    }
                );
        };

        consumeApiGithub();
    }, [username]);

    let component;

    if (error) {
        // NO results
        component = <Error mensaje="No results found" />;
    } 
    else {
        // Show the repositories
        component = <RepoList repositories={repoList} />;
    }

    return (
        <Fragment>
            <Form consumeApiGithub={handleForm} />
            <div>{component}</div>
        </Fragment>
    );
}

export default App;
