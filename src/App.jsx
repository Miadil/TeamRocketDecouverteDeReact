import Header from "./components/Header";
import Commande from "./components/Commande";
import PokemonCard from "./components/PokemonCard";

import "./App.css";

function App() {
  const pokemon = { name: "Mioaus" };
  return (
    <>
      <Header name="joris" age={42} admin={false} />
      <PokemonCard myPokemon={pokemon} />

      <section className="commandeSection">
        <Commande nbCommande={236} nbBiere={6} marque="leffe" nbTable={32} />
        <Commande
          nbCommande={237}
          nbBiere={13}
          marque="henekien"
          nbTable={42}
        />
        <Commande nbCommande={238} nbBiere={2} marque="kwak" nbTable={7} />
      </section>
    </>
  );
}

export default App;
