import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import {
  frenchMovies,
  currentTrends,
  thrillerMovies,
  awardWinningMovies,
} from "../../data";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Slider title="Films Francais" movies={frenchMovies} />
      <Slider title="Tendances Actuelles" movies={currentTrends} />
      <Slider title="Films à suspense" movies={thrillerMovies} />
      <Slider title="Films primés" movies={awardWinningMovies} />
    </div>
  );
};

export default Home;
