import React from "react";

const Results = (props) => {
    const {fristName,lastName,email,password,coPassword } = props.data;
    
    return (
        <div>
            
            <h3>Results</h3>
            {fristName.length < 2 && fristName.length !== 0 ? <p>Error FristName must be at least 2 charactoer </p> : null }
            {lastName.length < 2 && lastName.length !== 0 ? <p>Error LastName must be at least 2 charactoer </p>:null}
            {email.length < 5 && email.length !== 0 ? <p>Error Email must be at least 5 charactoer  </p> : null}
            {password !== coPassword && password.length !== 8 ? <p> Error Password must match with coPassword  </p> : null }
            {coPassword !== password && coPassword.length !== 8 ? <p> Error coPassword not match with password  </p> : null }
        </div>
    );
};
export default Results;

