import React from "react";

interface Props {
  text: any;
  num: number;
}

const Step = ({ text, num }: Props) => {
  return (
    <>
      <div className="step">{"Шаг " + num}</div>
      <div className="meal-des">{text}</div>
    </>
  );
};

export default Step;
