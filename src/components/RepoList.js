import React from "react";
import Repo from './Repo.js';

//stateless component
// al iniciar el function component con parametro, este recogera los props que vengan de la declaración 
// principal del o los componentes

const RepoList = ({repositories}) =>{
    
    const mensaje = Object.keys(citas).length === 0?'There are not repositories to that username':"Repository List"

    //en Cita se coloca un key para diferenciar cada elemento que se listara, sino se coloca, dara error
    return ( 
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="text-center">{mensaje}</h2>
                <div className="lista-citas">
                    {repositories.map(repo => (
                        <Repo 
                            key={repo.id} 
                            repo={repo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListaCitas;