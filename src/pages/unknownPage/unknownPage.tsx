import React from "react";
import { Link } from "react-router-dom";

const unknownPage = () => {
  return (
    <React.Fragment>
      <h2 style={{ textAlign: "center" }}>Такой страницы не существует</h2>
      <h2 style={{ textAlign: "center" }}>
        Вернуться к странице с <Link to="/articles">блогом</Link>
      </h2>
    </React.Fragment>
  );
};

export default unknownPage;
