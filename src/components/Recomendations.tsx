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
            step1: minus.step1,
            step2: minus.step2,
            step3: minus.step3,
            step4: minus.step4,
            step5: minus.step5,
            step6: minus.step6,
            step7: minus.step7,
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
            step1: last.step1,
            step2: last.step2,
            step3: last.step3,
            step4: last.step4,
            step5: last.step5,
            step6: last.step6,
            step7: last.step7,
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
            step1: plus.step1,
            step2: plus.step2,
            step3: plus.step3,
            step4: plus.step4,
            step5: plus.step5,
            step6: plus.step6,
            step7: plus.step7,
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
            step1: first.step1,
            step2: first.step2,
            step3: first.step3,
            step4: first.step4,
            step5: first.step5,
            step6: first.step6,
            step7: first.step7,
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
