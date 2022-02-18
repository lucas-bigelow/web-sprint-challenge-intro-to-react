import React from 'react';

import Character from './Character';

function Characters(props) {
  const { characters } = props;

  return (
    <div>
      {characters.map(character => {
        return <Character key={character.name} character={character} />
      })}
    </div>
  )
}

export default Characters;