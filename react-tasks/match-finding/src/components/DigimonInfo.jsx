import digimons from '../data/data';
import SingleDigimon from './SingleDigimon';

const DigimonInfo = () => {
  return (
    <div>
      {digimons.map((digimon) => {
        return <SingleDigimon key={digimon.id} {...digimon} />;
      })}
    </div>
  );
};
export default DigimonInfo;
