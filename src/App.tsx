import React from "react";
import PokemonSearch from "./components/PokemonSearch";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <PokemonSearch name="Nico Audy" numberOfPokemons={5} />
      <PokemonSearch name="John Doe" />
    </div>
  );
};

export default App;
