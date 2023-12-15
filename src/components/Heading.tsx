import React from "react";

interface Props {
  heading: string;
}

const style = {
  color: "brown",
  "text-align": "center",
  "font-size": "5vw",
  "padding-top": "80px",
  position: "fixed",
};

const Heading = ({ heading }: Props) => {
  return (
    <div
      className="h1 m-100"
      style={{
        color: "brown",
        textAlign: "center",
        fontSize: "5vw",
        paddingTop: "60px",
        position: "fixed",
        width: "100%",
        zIndex: "1",
        backgroundColor: "white",
      }}
    >
      {heading}
    </div>
  );
};

export default Heading;
