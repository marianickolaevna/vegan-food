import React from "react";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  title: string;
  description: string;
}

const Card = ({ image, title, description }: Props) => {
  return (
    <>
      <Link
        to="/meal"
        state={{ image, title, description }}
        style={{ textDecoration: "none" }}
      >
        <div
          className="card p-0 m-1"
          style={{ backgroundColor: "#ffe6e5", height: "470px" }}
        >
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
            <p className="card-text">{description.slice(0, 100) + "..."}</p>

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
