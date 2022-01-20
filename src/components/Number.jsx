import React from "react";
import { useParams } from "react-router-dom";

const Number = (props) => {
    const {integer} = useParams();

    return(
        <h1>The number is: {integer}</h1>
    );
}

export default Number;