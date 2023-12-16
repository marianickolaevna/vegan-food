import React from "react";

interface Props {
  heading: string;
}

const Heading = ({ heading }: Props) => {
  return <div className="h1 m-100 heading">{heading}</div>;
};

export default Heading;
