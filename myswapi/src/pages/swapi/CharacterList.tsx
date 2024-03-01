// CharacterList.tsx
import React from 'react';
import Card from '../../components/uiSwapi/card';
import charactersImg from '../../utils/characters';

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
      <Card key={character.id}
       title={character.name} 
       hair_color={character.hair_color}
      image={charactersImg[character.name as keyof typeof charactersImg]}
        />
    ))}

    <div>
    </div>
  </div>
);
};

export default CharacterList;
