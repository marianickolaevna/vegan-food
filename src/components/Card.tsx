import React from "react";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  title: string;
  description: string;
  ingridients?: Array<string>;
  ingridients2?: Array<string>;
  additional?: string;
  steps: Array<string>;
  step1?: string;
  step2?: string;
  step3?: string;
  step4?: string;
  step5?: string;
  step6?: string;
  step7?: string;
  step8?: string;
  index: number;
}

const Card = ({
  image,
  title,
  description,
  ingridients,
  ingridients2,
  additional,
  steps,
  index,
}: Props) => {
  const sliceText = (text: string) => {
    let n = 100;
    if (window.innerWidth < 990) {
      n = 120;
    } else if (window.innerWidth < 600) {
      n = 200;
    }
    return text.slice(0, n) + "...";
  };
  return (
    <>
      <Link
        to="/meal"
        state={{
          image,
          title,
          description,
          ingridients,
          ingridients2,
          additional,
          steps,
          index,
        }}
        style={{ textDecoration: "none" }}
      >
        <div className="card p-0 m-1 menu-card">
          <img
            src={image}
            className="card-img-top"
            style={{
              height: "50%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            alt="..."
          />
          <div className="card-body d-flex flex-column align-items-around justify-content-around">
            <h5 className="card-title h3">{title}</h5>
            <p className="card-text">{sliceText(description)}</p>
            <a
              href="#"
              className="btn btn-primary"
              style={{ backgroundColor: "brown", borderWidth: "0px" }}
            >
              Как готовить?
            </a>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
