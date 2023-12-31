import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectUsername } from "../../store/selector";

import classes from "./Header.module.scss";
import HeaderIn from "./HeaderOnline/HeaderOnline";
import HeaderOnline from "./HeaderWithoutAuth/HeaderSign";

const Header = () => {
  const isAuth = useSelector(selectUsername);
  const Auth = isAuth === "" ? HeaderOnline : HeaderIn;

  return (
    <React.Fragment>
      <div className={classes["header-container"]}>
        <Link to="/articles">
          <div className={classes.realworld}>Realworld Blog</div>
        </Link>
        <div className={classes.autorisation}>
          <Auth></Auth>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Header;
