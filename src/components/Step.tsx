import React from "react";

interface Props {
  text: any;
  num: number;
}

const Step = ({ text, num }: Props) => {
  return (
    <>
      <div
        style={{
          fontSize: "2vw",
          fontWeight: "500",
          margin: "1vw",
          marginTop: "4vw",
        }}
      >
        {"Шаг " + num}
      </div>
      <div className="meal-des">{text}</div>
    </>
  );
};

export default Step;
