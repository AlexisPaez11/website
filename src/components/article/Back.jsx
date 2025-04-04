import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Back = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { prevPath, prevField = "Desarrollo", prevCategory = "Todos" } = state || {};

  const handleBack = () => {
    navigate(prevPath || "/blog", {
      state: {
        prevField,
        prevCategory
      }
    });
  };

  return (
    <button onClick={handleBack} className="btn btn-back">
      <IoIosArrowBack />
    </button>
  );
};

export default Back;