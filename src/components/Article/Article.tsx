import React, { useState } from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import dateFormat from "dateformat";
import { Link, useParams } from "react-router-dom";
import "./article.scss";
import { useSelector } from "react-redux";
import cn from "classnames";

import { fetchAddLike, fetchDeleteLike } from "../../services/favorites";
import { IArticle } from "../../types/Articles";
import { selectToken } from "../../store/selector";

const Article = ({ article }: { article: IArticle }) => {
  const {
    title,
    favoritesCount,
    tagList,
    description,
    author,
    updatedAt,
    slug,
    favorited,
  } = article;

  const [stateFavor, changeStateFavor] = useState(favorited);
  const [likes, changeLikes] = useState(favoritesCount);

  const tags = tagList
    .map((elem) => (
      <span className="article-tag" key={elem}>
        {elem.slice(0, 20)}
      </span>
    ))
    .slice(0, 6);

  const token = useSelector(selectToken);
  useParams();

  return (
    <div className="article">
      <div className="article-header">
        <div>
          <div className="article-top">
            <Link to={`/articles/${slug}`} state={{ item: article }} />
            <span className="article-title">{title.slice(0, 40)}</span>
            <span
              onClick={() => {
                if (token !== "") {
                  if (!stateFavor) {
                    fetchAddLike(slug, token);
                    changeLikes(likes + 1);
                  } else {
                    fetchDeleteLike(slug, token);
                    changeLikes(likes - 1);
                  }
                  changeStateFavor(!stateFavor);
                }
              }}
              className={cn({
                "article-withLike": stateFavor,
                "article-withOutLike": !stateFavor,
              })}
            >
              {stateFavor ? <HeartFilled /> : <HeartOutlined />}
            </span>
            <span className="article-favorite">{likes}</span>
          </div>
          <div>{tags}</div>
        </div>
        <div>
          <div className="article-profile">
            <div className="article-author-info">
              <span className="article-author-info__name">
                {author.username}
              </span>
              <span className="article-author-info__date">
                {dateFormat(updatedAt, "mediumDate")}
              </span>
            </div>
            <div className="article-profile__icon">
              <img src={author.image} alt={author.username} />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="article-description">{description.slice(0, 200)}</div>
    </div>
  );
};

export default Article;
