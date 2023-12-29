import React from "react";
import arrow from "../assets/arrow.png";
import meals from "../Recipes.ts";
import { Link } from "react-router-dom";

interface Props {
  index: number;
}

const Recomendations = ({ index }: Props) => {
  const minus = meals[index - 1];
  const plus = meals[index + 1];
  const last: any = meals[meals.length - 1];
  const first: any = meals[0];

  return (
    <div className="rec-wrapper">
      {minus ? (
        <Link
          to="/meal"
          state={{
            image: minus.image,
            title: minus.title,
            description: minus.description,
            ingridients2: minus.ingridients2,
            ingridients: minus.ingridients,
            additional: minus.additional,
            steps: minus.steps,
            index: index - 1,
          }}
          style={{ textDecoration: "none" }}
        >
          <div className="rec-item">
            <img className="arrow" src={arrow} />
            <img className="rec-img" src={minus.image} />
          </div>
        </Link>
      ) : (
        <Link
          to="/meal"
          state={{
            image: last.image,
            title: last.title,
            description: last.description,
            ingridients2: last.ingridients2,
            ingridients: last.ingridients,
            additional: last.additional,
            steps: last.steps,
            index: meals.length - 1,
          }}
          style={{ textDecoration: "none" }}
        >
          <div className="rec-item">
            <img className="arrow" src={arrow} />
            <img className="rec-img" src={last.image} />
          </div>
        </Link>
      )}
      {index < meals.length - 1 && plus ? (
        <Link
          to="/meal"
          state={{
            image: plus.image,
            title: plus.title,
            description: plus.description,
            ingridients2: plus.ingridients2,
            ingridients: plus.ingridients,
            additional: plus.additional,
            steps: plus.steps,
            index: index + 1,
          }}
          style={{ textDecoration: "none" }}
          preventScrollReset={false}
        >
          <div className="rec-item">
            <img className="rec-img" src={plus.image} />
            <img className="arrow right" src={arrow} />
          </div>
        </Link>
      ) : (
        <Link
          to="/meal"
          state={{
            image: first.image,
            title: first.title,
            description: first.description,
            ingridients2: first.ingridients2,
            ingridients: first.ingridients,
            additional: first.additional,
            steps: first.steps,
            index: 0,
          }}
          style={{ textDecoration: "none" }}
          preventScrollReset={false}
        >
          <div className="rec-item">
            <img className="rec-img" src={first.image} />
            <img className="arrow right" src={arrow} />
          </div>
        </Link>
      )}
    </div>
  );
};

export default Recomendations;
