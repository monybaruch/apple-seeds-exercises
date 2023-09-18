const singleDigimon = ({ image, digimonName }) => {
  return (
    <article>
      <img className="image" src={image}></img>
      <div>
        <header>
          <h2>{digimonName}</h2>
        </header>
      </div>
    </article>
  );
};
export default singleDigimon;
