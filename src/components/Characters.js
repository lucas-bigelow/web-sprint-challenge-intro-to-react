import React from 'react';

import Character from './Character';

function Characters(props) {
  const { characters } = props;

  return (
    <div className="">
      {characters.map(character => {
        return <Character character={character} />
      })}
    </div>
  )
}

export default Characters;