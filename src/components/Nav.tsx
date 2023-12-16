import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

interface Props {
  color: "white" | "#ffcb00";
  item: "white" | "brown";
  filter: (arg: string) => void;
  button?: boolean;
}

const Nav = ({ color, item, filter, button }: Props) => {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light px-4"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "2",
        backgroundColor: color,
      }}
    >
      <div
        className="d-flex flex-row align-items-center justify-content-between"
        style={{ width: "100%" }}
      >
        <div
          className="d-flex flex-row align-items-center justify-content-between"
          style={{ width: "20%" }}
        >
          <Link style={{ textDecoration: "none", color: item }} to="/">
            <a className="navbar-brand" href="#">
              <img style={{ width: "40px" }} src={logo} />
            </a>
          </Link>
          <div className="d-flex flex-row align-items-center justify-content-end">
            <Link style={{ textDecoration: "none", color: item }} to="/">
              <div className="nav-item mx-3 ">Главная</div>
            </Link>
            <Link style={{ textDecoration: "none", color: item }} to="/menu">
              <div className="nav-item mx-3 nav-item">Рецепты</div>
            </Link>
          </div>
        </div>
        {button ? (
          <button
            className="btn btn-primary"
            onClick={() => navigate("/menu")}
            style={{
              backgroundColor: "brown",
              borderColor: "brown",
              color: color,
            }}
          >
            Искать рецепты
          </button>
        ) : (
          <form className="d-flex">
            <input
              className="form-control me-2"
              style={{ borderColor: "brown", color: "brown" }}
              type="search"
              placeholder="Начни печатать"
              aria-label="Search"
              onChange={(e) => {
                filter(e.target.value);
              }}
            />
          </form>
        )}
      </div>
    </nav>
  );
};

export default Nav;
