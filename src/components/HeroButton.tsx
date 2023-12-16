import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const HeroButton = () => {
  return (
    <Link
      style={{
        zIndex: "3",
        textDecoration: "none",
      }}
      to="/menu"
    >
      <Button
        style={{
          color: "#ffcb00",
        }}
        size="large"
        variant="contained"
      >
        РЕЦЕПТЫ
      </Button>
    </Link>
  );
};

export default HeroButton;
