// Modules
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// Components
import Footer from './components/Footer.js';
import Results from './components/Results.js'
// Styles
import './styles/sass/App.css';

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
      setWord(response.data[0]);
    })
    .catch( (error) => {
      if(error.message) {
        alert("Sorry, we can not define that word, please refresh the page and select a new word.")
      }else {
        alert("Something went wrong. We are currently working on the issue.")
      }
    });
  }, [searchTerm]);
  

  const handleInput = (event) => {
    const userWord = event.target.value;
    setUserInput(userWord);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(userInput);
  }
  
  const renderWord = () => {
    const firstLetter = userInput.charAt(0);
    
    if (word === undefined || word.length === 0 || word === null|| word.length < 2 )
      
      return <p>Please type in a word at the top.</p>
  else {
      return (
        <div key={word.meta.uuid}> 

          <Results 
          word={word.meta.stems[0]}
          pronunciation={word.hwi.prs[0].mw}
          definition={word.shortdef}
          audio={word.hwi.prs[0].sound.audio}
          audioLetter={firstLetter}
          />   
              
        </div>
        
      )}
  }
  
  return (
    <div className="App">
      <header>
        <div className="wrapper header-container">
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
                  <button type="submit" className='search-button'><i className='fa fa-search'></i></button>
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
