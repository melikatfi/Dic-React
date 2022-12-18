import React from 'react'
import './index.css';
import Meaning from './Meaning'
import 'bootstrap/dist/css/bootstrap.css';

export default function Result(props) {
    console.log(props.results)
    if(props.results.length){
        return (
          <div className="App mx-auto mt-5">
            <div className="result p-2">
              <h4 className='mb-0'>{props.results[0].word}</h4>
            </div>

            <div className="result p-2 mt-2">
              <h4 className='mb-0'>{props.results[0].phonetic}</h4>
            </div>

            {props.results[0].meanings.map(function(meaning, index)
              {
                return <div key={index}>
                    <Meaning res={meaning} />
                </div>
              }
              )}
          </div>
        );
    }
    else {
        return (
          <div className="App mx-auto mt-5">
          <div className='result p-4'>
            <h5 className='mb-0'>Search Your Word In The Box</h5>
          </div>
        </div>
        );
    }
  
}
