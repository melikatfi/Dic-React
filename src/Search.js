import React, {useState} from 'react'
import './index.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Result from './Result';

function App() {
  let [Word , SetWord] = useState("");
  let [Res , SetRes] = useState([]);

  function handleResponse(response){
    SetRes(response.data)
  }

  function Search(event){
      event.preventDefault();
      alert(`Search For ${Word}'s defenition`)

      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Word}`;
      axios.get(apiUrl).then(handleResponse)
  }

  function HandleWord(event){
      SetWord(event.target.value)
  }

  return (
    <div className="App col-lg-6 col-md-8 col-sm-9 mx-auto mt-5">
      <form onSubmit={Search}>
        <div className="input-group mb-3">
          <input type="search" className="form-control" placeholder="Search your word" aria-label="Search your word" aria-describedby="basic-addon2" onChange={HandleWord} />
          <div className="input-group-append">
            <button className="btn" type="submit">Search</button>
          </div>
        </div>
      </form>
      <Result results={Res} />
    </div>
  );
}

export default App;
