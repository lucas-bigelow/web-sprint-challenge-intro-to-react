// Write your Character component here
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Character(props) {
  const { character } = props;

  const [homeworld, setHomeworld] = useState("");

  useEffect(() => {
    axios.get(character.homeworld)
      .then(res => res.data)
      .then(res => setHomeworld(res.name))
      .catch(err => console.error(err));
  });

  return (
    <div>
      <h2>{character.name}</h2>
      <div className="hidden">
        <p>Born: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
        <p>Films: {character.films.map(film => `- ${film} -`)}</p>
        <p>Homeworld: {homeworld}</p>
      </div>
    </div>
  )
}

export default Character;