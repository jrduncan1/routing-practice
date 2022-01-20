import React from "react";
import { useParams } from "react-router-dom";

const Word = (props) => {
    const {string} = useParams();
    const {stringColor} = useParams();
    const {backgroundColor} = useParams();

    return(
        <h1 style={{color: stringColor, background: backgroundColor}}>The word is: {string}</h1>
    );
}

export default Word;