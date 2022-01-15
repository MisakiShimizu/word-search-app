import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const apiKey = "ecee6254-f8f9-42d1-b310-d45f930f7e04";

  const [word, setWord] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect to mkae API to Merriam Webster API
  useEffect( () => {
    axios({
      url: `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${searchTerm}`,
      method: "GET",
      dataResponse: "json",
      params: {
        key: apiKey,
      }
    }).then( (response) => {
      console.log(response.data);
      setWord(response.data);
    });
  }, [searchTerm]);

  const handleInput = (event) => {
    event.preventDefault();
    console.log("test", event.target.value);
    setUserInput(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(userInput);
  }

  return (
    <div className="App">
      <header>
        <h1>Word Search</h1>
      </header>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="search">Look through the dictionary here</label>
        <input type="text" id="search" onChange={ handleInput } value={ userInput }/>
        <button>Search</button>
      </form>

      
    </div>
  );
}

export default App;
