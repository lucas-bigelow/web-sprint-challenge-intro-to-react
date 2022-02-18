import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';

import Characters from './components/Characters';

// styling for our app
const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
  text-shadow: 2px 2px 0 #ffffba, 
              -2px -2px 0 #ffffba,
               2px -2px 0 #ffffba,
              -2px 2px 0 #ffffba;
`;

const Header = styled.h1`
  font-size: 2.4rem;
  margin: 0.5em;
  border-bottom: 5px solid #ffb3ba;
`;

const App = () => {
  // characters is the only state i'll need and be passing down
  const [characters, setCharacters] = useState([]);

  // base url and get http request
  const BASE_URL = "https://swapi.dev/api/people";

  useEffect(() => {
    axios.get(BASE_URL)
      .then(res => res.data)
      .then(res => setCharacters(res))
      .catch(err => console.error(err));
  }, []);

  return (
    <Wrapper>
      <Header>Characters</Header>
      {/* <SearchBar /> */}
      <Characters characters={characters}/>
    </Wrapper>
  );
}

export default App;
