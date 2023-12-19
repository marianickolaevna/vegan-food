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
          <div className="menu-grid">
            {items.map(
              (
                {
                  image,
                  title,
                  description,
                  ingridients,
                  ingridients2,
                  step1,
                  step2,
                  step3,
                  step4,
                  step5,
                  step6,
                  step7,
                  step8,
                },
                index
              ) => {
                return (
                  <Card
                    image={image}
                    title={title}
                    description={description}
                    ingridients={ingridients}
                    ingridients2={ingridients2}
                    step1={step1}
                    step2={step2}
                    step3={step3}
                    step4={step4}
                    step5={step5}
                    step6={step6}
                    step7={step7}
                    step8={step8}
                    index={index}
                  />
                );
              }
            )}
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
