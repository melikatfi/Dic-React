import React from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Meaning(props) {
    return(
        <div className='justify-content mt-2'>
            <div className='result p-3'>
                <h6>{props.res.partOfSpeech}</h6>
                <p>
                    {props.res.definitions[0].definition}
                    <br />
                    Example : {props.res.definitions[0].example}
                </p>
            </div>
        </div>
    );
}