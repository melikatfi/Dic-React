import React from 'react'
import Example from './example'
import Synonyms from './synonyms'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Meaning(props) {
    return(
        <div className='justify-content my-2'>
            <div className='result p-3'>
                <h6>
                    <strong>{props.res.partOfSpeech}</strong>
                </h6>
                {props.res.definitions.map(function (definition , index){
                    return (
                        <div key={index}>
                            <p>
                                {definition.definition}
                                <br />
                                <Example example={definition.examples} />
                                <br />
                                <Synonyms synonyms={definition.synonyms} />
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}