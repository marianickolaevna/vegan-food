import React from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Recomendations from "./Recomendations";
import Step from "./Step";

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
        <div className="d-flex flex-column align-items-center justify-content-between meal-wrapper">
          <div className="h1 heading meal-heading">{state.title}</div>
          <img src={state.image} alt="..." className="meal-image" />
          <div className="meal-des">{state.description}</div>
          <div
            style={{
              fontSize: "2.5vw",
              fontWeight: "500",
              margin: "1vw",
              marginTop: "4vw",
            }}
          >
            Ингридиенты
          </div>
          <div className="meal-des">{state.ingridients}</div>
          <div className="meal-des">{state.ingridients2}</div>
          {state.step1 && <Step text={state.step1} num={1} />}
          {state.step2 && <Step text={state.step2} num={2} />}
          {state.step3 && <Step text={state.step3} num={3} />}
          {state.step4 && <Step text={state.step4} num={4} />}
          {state.step5 && <Step text={state.step5} num={5} />}
          {state.step6 && <Step text={state.step6} num={6} />}
          {state.step7 && <Step text={state.step7} num={7} />}
        </div>
      </div>
      <Recomendations index={state.index}></Recomendations>
    </>
  );
};

export default Meal;
