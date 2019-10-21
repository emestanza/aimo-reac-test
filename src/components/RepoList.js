import React, { Fragment } from "react";
import Repo from "./Repo.js";

const RepoList = ({ repositories }) => {
    const mensaje =
        Object.keys(repositories).length === 0 ? "" : "Repository List";
    return (
        <Fragment>
            <h2 className="text-center">{mensaje}</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {repositories.map(repo => (
                        <Repo key={repo.id} repo={repo} />
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default RepoList;
