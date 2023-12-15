import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  isVisible: string;
  handleButtonClick: () => void;
}

const Alert = ({ children, isVisible, handleButtonClick }: Props) => {
  return (
    <div
      className={
        "alert alert-primary d-flex justify-content-between " + isVisible
      }
    >
      {children}
      <button
        onClick={handleButtonClick}
        type="button"
        className="btn-close"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
