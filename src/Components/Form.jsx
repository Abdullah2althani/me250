import React from "react";

const Form = (props) => {
    const { inputs, setInputs } = props;
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form>
            <label htmlFor="FristName">FristName</label>
            <input onChange={onChange } type="text" name="fristName" />

            <label htmlFor="LastName">LastName</label>
            <input onChange={onChange } type="text" name="lastName" />

            <label htmlFor="Email">Email</label>
            <input onChange={onChange } type="text" name="email" />

            <label htmlFor="Password">Password</label>
            <input onChange={onChange } type="password" name="password" />

            <label htmlFor="CoPassword">CoPassword</label>
            <input onChange={onChange } type="password" name="coPassword" />
        </form>
    );
};

export default Form;