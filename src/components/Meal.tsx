import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Recomendations from "./Recomendations";
import Step from "./Step";

const Meal = () => {
  let { state } = useLocation();
  const mapItems = (arr: Array<string>) => {
    return arr.map((item: string) => {
      return (
        <li>
          <div className="meal-des">{item}</div>
        </li>
      );
    });
  };
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
        <div className="d-flex flex-column align-items-center justify-content-between meal-wrapper">
          <div className="h1 heading meal-heading">{state.title}</div>
          <img src={state.image} alt="..." className="meal-image" />
          <div className="meal-des">{state.description}</div>
          <div
            style={{
              fontWeight: "500",
              margin: "1vw",
              marginTop: "4vw",
            }}
            className="step"
          >
            Ингридиенты:
          </div>
          <ul>{mapItems(state.ingridients)}</ul>
          <div
            style={{
              fontWeight: "500",
              margin: "1vw",
              marginTop: "4vw",
            }}
            className="step"
          >
            {state.additional}
          </div>
          {state.ingridients2 && <ul>{mapItems(state.ingridients2)}</ul>}
          {state.steps &&
            state.steps.map((step: string, index: number) => {
              return <Step text={step} num={index + 1} />;
            })}
        </div>
      </div>
      <Recomendations index={state.index}></Recomendations>
    </>
  );
};

export default Meal;
