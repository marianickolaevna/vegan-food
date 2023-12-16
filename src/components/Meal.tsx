import React from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";

const Meal = () => {
  let { state } = useLocation();
  return (
    <>
      <Nav color="white" item="brown" filter={() => {}} button />
      <Link to="/menu">
        <div className="d-flex flex-row align-items-center justify-content-center back">
          <img
            style={{
              width: "24px",
            }}
            className="mx-1"
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-1024.png"
          />
          <div>Назад</div>
        </div>
      </Link>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div
          className="d-flex flex-column align-items-center justify-content-between"
          style={{ maxWidth: "75%", marginTop: "10%", marginBottom: "15%" }}
        >
          <div className="h1 heading meal-heading">{state.title}</div>
          <img src={state.image} alt="..." className="meal-image" />
          <div className="meal-des">{state.description}</div>
        </div>
      </div>
    </>
  );
};

export default Meal;
