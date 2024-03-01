// CharacterList.tsx
import React from 'react';
import Card from '../../components/uiSwapi/card';

interface Character {
  name: string;
  id: string | number;
  hair_color: string;
}

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  if (characters.length === 0) {
    return <div>No characters available</div>;
  }



// ...

return (
    <div>
        {characters.map((character) => (
            // Utilizar el id único del personaje como clave
            <Card key={character.id} title={character.name} hair_color={character.hair_color} />
        ))}

        <div>
        </div>
    </div>
);
};

export default CharacterList;
