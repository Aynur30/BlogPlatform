import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { unLogin } from "../../../store/slices/userParametres";
import { selectImg, selectUsername } from "../../../store/selector";

import style from "./HeaderOnline.module.scss";

const HeaderOnline = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectUsername);
  const img = useSelector(selectImg);
  return (
    <div className={style.container}>
      <Link to={`/new-article`}>
        <button className={style.create}>Create article</button>
      </Link>
      <Link to={`/myprofile/edit`}>
        <span className={style.name}>{name}</span>
      </Link>
      <div className={style.img}>
        <img src={img}></img>
      </div>
      <button
        onClick={() => {
          dispatch(unLogin());
          return navigate("/sign-in");
        }}
        className={style.logOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default HeaderOnline;
