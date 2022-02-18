// Write your Character component here
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  border: 0.3rem solid 	#baffc9;
  border-radius: 0.5rem;
  width: 80%;
  margin: 0.5rem auto;
  background-color: 	#ffdfba;

  .hidden {
    display: none
  }
`;

function Character(props) {
  const { character } = props;

  // set up our state
  const [homeworld, setHomeworld] = useState("");
  const [hidden, setHidden] = useState(true);

  // make an api call to get the homeworld of a character
  useEffect(() => {
    axios.get(character.homeworld)
      .then(res => res.data)
      .then(res => setHomeworld(res.name))
      .catch(err => console.error(err));
  });

  // set up an event handler to hide and show character info
  const changeHidden = (evt) => {
    evt.preventDefault();
    setHidden(!hidden);
  }

  return (
    <Box onClick={(evt) => changeHidden(evt)}>
      <h2>{character.name}</h2>
      <div className={hidden ? "hidden" : ""}>
        <p>Born: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
        <p>Films: {character.films.map(film => `- ${film} -`)}</p>
        <p>Homeworld: {homeworld}</p>
      </div>
    </Box>
  )
}

export default Character;