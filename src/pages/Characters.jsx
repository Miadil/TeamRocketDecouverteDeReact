import { useEffect, useState } from "react";
import Header from "../components/Header";

import "./Characters.css";
import DisplayCard from "../components/DisplayCard";

function Characters() {
  const [starWarsCharacters, setStarWarsCharacters] = useState([]);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((result) => result.json())
      .then((result) => console.log(result) || setStarWarsCharacters(result));
  }, []);

  return (
    <div>
      <Header />
      je suis dans Characters
      <section className="mainCard">
        {starWarsCharacters.map((character) => {
          return (
            <DisplayCard
              key={character.id}
              name={character.name}
              image={character.image}
              id={character.id}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Characters;
