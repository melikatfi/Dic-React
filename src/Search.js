import React, {useState} from 'react'
import './Search.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  let [Word , SetWord] = useState("");

  function Search(event){
      event.preventDefault();
      alert(`Search For ${Word}'s defenition`)
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
    </div>
  );
}

export default App;
