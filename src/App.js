import axios from 'axios';
import { useEffect, useState } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Footer from './Footer.js';
// import Result from './Results.js'
import './styles/sass/App.css';

function App() {
  const apiKey = "ecee6254-f8f9-42d1-b310-d45f930f7e04";

  const [word, setWord] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

// const ApiCall = () => {

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
      console.log(response.data[0]);
      setWord(response.data[0]);
    });
  }, [searchTerm]);
// }

  const handleInput = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(userInput);
    // ApiCall();
  }

  const renderWord = () => {
    if (word === undefined || word.length === 0 || word === null|| word.length < 2 )
            return 
        else {
            return (
            <div className='wrapper outer-word-container'>
              <div className="inner-word-container">
                <h2>{word.meta.id}</h2>
                <p className='pronunciation'>{word.hwi.prs[0].mw}</p>
                <div className="definition-container">
                  <p className='definition'>{word.shortdef}</p>
                </div>
              </div>
            </div>
            )}
  }
  
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>Word Search</h1>
        </div>
      </header> 
      <main>
        <section className='form-section'>
            <div className="wrapper">
              <form onSubmit={ handleSubmit }>
                <label htmlFor="search">Look through the dictionary here </label>
                <div className="input-container">
                  <input type="text" id="search" placeholder="Type your word here..." onChange={ handleInput } value={ userInput } 
                  />
                  <i className='fa fa-search'></i>
                </div>
              </form>
            </div>
        </section>
        <section className='results'>
      {renderWord()}

        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
