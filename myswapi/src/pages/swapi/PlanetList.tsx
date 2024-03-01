// PlanetList.tsx
import React from 'react';

interface Planet {
  name: string;
  // Agregar una propiedad única como id si está disponible
  id: string | number; // Por ejemplo, asumiendo que cada planeta tiene un id único
}

interface PlanetListProps {
  planets: Planet[];
}

const PlanetList: React.FC<PlanetListProps> = ({ planets }) => {
  if (planets.length === 0) {
    return <div>No planets available</div>;
  }

  return (
    <ul>
      {planets.map((planet) => (
        // Utilizar el id único del planeta como clave
        <li key={planet.id}>{planet.name}</li>
      ))}
    </ul>
  );
};

export default PlanetList;
