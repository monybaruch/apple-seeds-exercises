import digimons from '../data/data';
import { useState } from 'react';
const DigimonInfo = () => {
  const [index, setIndex] = useState(0);
  const { image, digimonName } = digimons[index];
  const wrongDigimon = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return newIndex;
    });
  };
  const correctDigimon = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return newIndex;
    });
  };
  return (
    <article>
      <img className="image" src={image}></img>
      <div>
        <header>
          <h2>{digimonName}</h2>
        </header>
      </div>
      <button onClick={wrongDigimon}>x</button>
      <button onClick={correctDigimon}>v</button>
    </article>
  );
};
export default DigimonInfo;
