import { useEffect, useState } from "react";
import "./Card.sass";

interface Props {
  img: string;
}

const Card = ({ img }: Props) => {
  return (
    <div className="card">
      <img src={img} alt="" />
    </div>
  );
};

export default Card;
