import React from "react";
import Nav from "./Nav";
import HeroButton from "./HeroButton";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Nav
        color="#ffcb00"
        item="brown"
        button
        filter={() => {
          navigate("/menu");
        }}
      />
      <div className="d-flex flex-column align-items-center justify-content-end img-section">
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
          }}
          src="https://denhaag.com/sites/default/files/styles/keyvisual_1960x640/public/2022-05/Vega-en-vegan-restaurants-Den-Haag.png?h=d1cb525d&itok=wak0b-Dz"
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: "1",
            backgroundColor: "#0000006e",
          }}
        ></div>
        <HeroButton />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-start y-section">
        <div className="go-vegan">GO VEGAN</div>
      </div>
    </div>
  );
};

export default Hero;
