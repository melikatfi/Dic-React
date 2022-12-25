import React from 'react'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Example(props){
    if(props.example){
        return (
            <div>
                <strong>Example : </strong> 
                {props.Example.map(function (Example , index){
                    return (
                        <span key={index}>
                             {Example} ,
                        </span>
                    )
                })}
            </div>
        )
    }else{
        return null
    }
}