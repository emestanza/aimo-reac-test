import React, { useState } from "react";

function Form({ consumeApiGithub }) {
    const [search, addSearch] = useState({
        username: ""
    });

    const updateState = e => {
        addSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    };

    // Cuando hacemos submit al form
    const submitInfo = e => {
        e.preventDefault();
        consumeApiGithub(search);
    };

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent  mb-5 pt-5 pb-2"
                        onSubmit={submitInfo}
                    >
                        <fieldset>
                            <legend className="text-center">
                                Search GitHub User to see its Repositories
                            </legend>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Github User</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            placeholder="Example: emestanza"
                                            onChange={updateState}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >
                                Search
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
