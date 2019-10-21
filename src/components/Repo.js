import React from "react";

const Repo = ({ repo }) => {
    return (
        <div className="media text-muted pt-3">
            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <strong className="text-gray-dark">
                        <a target="_blank" href={repo.html_url}>
                            {repo.name}
                        </a>
                    </strong>
                    <label>{repo.language}</label>
                </div>
                <span className="d-block"></span>
            </div>
        </div>
    );
};

export default Repo;
