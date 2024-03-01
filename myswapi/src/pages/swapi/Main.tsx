/* eslint-disable @typescript-eslint/no-explicit-any */
// MainComponent.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';
import PlanetList from './PlanetList';

const MainComponent: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [planets, setPlanets] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentCharacterPage, setCurrentCharacterPage] = useState<number>(1);
  const [currentPlanetPage, setCurrentPlanetPage] = useState<number>(1);
  const [totalCharacterPages, setTotalCharacterPages] = useState<number>(1);
  const [totalPlanetPages, setTotalPlanetPages] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [charactersResponse, planetsResponse] = await Promise.all([
          axios.get(`https://swapi.dev/api/people/?page=${currentCharacterPage}`),
          axios.get(`https://swapi.dev/api/planets/?page=${currentPlanetPage}`)
        ]);
        setCharacters(charactersResponse.data.results);
        setPlanets(planetsResponse.data.results);
        setTotalCharacterPages(Math.ceil(charactersResponse.data.count / 10)); // Assuming 10 characters per page
        setTotalPlanetPages(Math.ceil(planetsResponse.data.count / 10)); // Assuming 10 planets per page
        setLoading(false);
      } catch (error) {
        setError('Error fetching data from SWAPI');
        setLoading(false);
      }
    };

    fetchData();
  }, [currentCharacterPage, currentPlanetPage]);

  const handleNextCharacterPage = () => {
    setCurrentCharacterPage((prevPage) => prevPage + 1);
  };

  const handlePrevCharacterPage = () => {
    setCurrentCharacterPage((prevPage) => prevPage - 1);
  };

  const handleNextPlanetPage = () => {
    setCurrentPlanetPage((prevPage) => prevPage + 1);
  };

  const handlePrevPlanetPage = () => {
    setCurrentPlanetPage((prevPage) => prevPage - 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Star Wars Information</h1>
      <h2>Characters</h2>
      <CharacterList characters={characters} />
      <button onClick={handlePrevCharacterPage} disabled={currentCharacterPage === 1}>Previous Character Page</button>
      <button onClick={handleNextCharacterPage} disabled={currentCharacterPage === totalCharacterPages}>Next Character Page</button>
      <h2>Planets</h2>
      <PlanetList planets={planets} />
      <button onClick={handlePrevPlanetPage} disabled={currentPlanetPage === 1}>Previous Planet Page</button>
      <button onClick={handleNextPlanetPage} disabled={currentPlanetPage === totalPlanetPages}>Next Planet Page</button>
    </div>
  );
};

export default MainComponent;
