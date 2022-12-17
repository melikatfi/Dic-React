import React from 'react'
import './Search.css';
import Meaning from './Meaning'
import 'bootstrap/dist/css/bootstrap.css';

export default function Result(props) {
    console.log(props.results)
    if(props.results.length){
        return (
          <div className="App mx-auto mt-5">
            <div className="border p-2">
              <h5>{props.results[0].word}</h5>
              {props.results[0].meanings.map(function(meaning, index)
              {
                return <div key={index}>
                    <Meaning res={meaning} />
                </div>
              }
              )}
            </div>
          </div>
        );
    }
    else {
        return (
          <div className="App mx-auto mt-5">
          <div className='border p-4'>
            <h5>Search Your Word In The Box</h5>
          </div>
        </div>
        );
    }
  
}
