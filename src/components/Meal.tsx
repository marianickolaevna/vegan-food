import React from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";

const Meal = () => {
  let { state } = useLocation();
  return (
    <>
      <Nav color="white" item="brown" filter={() => {}} button />
      <Link to="/menu">
        <div
          className="d-flex flex-row align-items-center justify-content-center"
          style={{
            position: "fixed",
            top: "20%",
            left: "50px",
            cursor: "pointer",
            fontSize: "2vw",
            color: "black",
          }}
        >
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
          <div
            className="h1"
            style={{
              fontSize: "4vw",
              color: "brown",
              textAlign: "center",
              maxWidth: "50vw",
            }}
          >
            {state.title}
          </div>
          <img
            src={state.image}
            alt="..."
            style={{ width: "40vw", height: "500px", objectFit: "cover" }}
            className="my-4"
          />
          <div style={{ fontSize: "2vw" }}>{state.description}</div>
        </div>
      </div>
    </>
  );
};

export default Meal;
