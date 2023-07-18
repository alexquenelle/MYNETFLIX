import { useEffect, useState } from "react";
import "./Slider.sass";
import Card from "../Card";

interface Props {
  title: string;
  movies: {
    id: number;
    img: string;
  }[];
}

const Slider = ({ title, movies }: Props) => {
  return (
    <div className="slider">
      <p>{title}</p>
      <div className="slider__cards">
        {movies.map((movie) => (
          <Card key={movie.id} img={movie.img} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
