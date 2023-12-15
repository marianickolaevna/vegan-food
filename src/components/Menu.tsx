import React, { useState } from "react";
import Nav from "./Nav";
import Heading from "./Heading";
import Card from "./Card";
import meals from "../Recipes.ts";

const Menu = () => {
  let [items, setItems] = useState(meals);

  return (
    <>
      <Nav
        color="white"
        item="brown"
        filter={(arg) =>
          setItems(
            meals.filter((meal) =>
              meal.title.toLowerCase().includes(arg.toLowerCase())
            )
          )
        }
      />
      <div style={{ position: "relative" }}>
        <Heading heading="Рецепты" />
        {items.length > 0 ? (
          <div
            className="row"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "16px",
              maxWidth: "1100px",
              margin: "auto",
              paddingTop: "200px",
            }}
          >
            {items.map(({ image, title, description }) => {
              return (
                <Card image={image} title={title} description={description} />
              );
            })}
          </div>
        ) : (
          <div
            style={{
              fontSize: "3vw",
              width: "100%",
              textAlign: "center",
              paddingTop: "200px",
            }}
          >
            Таких рецептов пока нет.
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
