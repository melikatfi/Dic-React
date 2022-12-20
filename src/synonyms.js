import React from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Synonym(props){
    if(props.synonyms.length){
        return (
            <div>
                <strong>Synonyms : </strong> 
                {props.synonyms.map(function (synonyms , index){
                    return (
                        <span key={index}>
                             {synonyms} ,
                        </span>
                    )
                })}
            </div>
        )
    }else{
        return null
    }
}