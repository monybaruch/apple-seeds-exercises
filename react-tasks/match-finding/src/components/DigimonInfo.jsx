import digimons from '../data/data';
import { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { RxCrossCircled } from 'react-icons/rx';
const DigimonInfo = () => {
  const [index, setIndex] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const { image, digimonName } = digimons[index];

  const wrongDigimon = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + digimons.length) % digimons.length;
      setWrongAnswer(wrongAnswer + 1);
      return newIndex;
    });
  };
  const correctDigimon = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % digimons.length;
      setCorrectAnswer(correctAnswer + 1);
      return newIndex;
    });
  };
  return (
    <main>
      <section>
        <div className="text-container">
          <h4 className="left">Wrong Answers: {wrongAnswer}</h4>
          <h4 className="right">Right Answers: {correctAnswer}</h4>
        </div>
        <img className="image" src={image}></img>
        <div>
          <header>
            <h2>{digimonName}</h2>
          </header>
        </div>
        <button className="btn" onClick={wrongDigimon}>
          <RxCrossCircled />
        </button>
        <button className="btn" onClick={correctDigimon}>
          <AiOutlineCheckCircle />
        </button>
      </section>
    </main>
  );
};
export default DigimonInfo;
