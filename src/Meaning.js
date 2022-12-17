import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function Meaning(props) {
    console.log(props)
    return(
        <div>
            <h1>{props.res.partOfSpeech}</h1>
            <h2>{props.res.definitions[0].definition}</h2>
            <h3>{props.res.definitions[0].example}</h3>
        </div>
    );
}