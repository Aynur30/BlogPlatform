import { createAsyncThunk } from "@reduxjs/toolkit";

import IListArticles from "../types/Articles";
import { IPostNewArticle, IEditArticle } from "../types/FormTypes";

const fetchArticlesList = createAsyncThunk<
  IListArticles,
  { page: number; token: string }
>("articles/articlesList", ({ page, token }) =>
  fetch(`https://blog.kata.academy/api/articles?offset=${page * 20}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => {
      throw new Error(error.message);
    })
);

export const fetchArticlesSlug = (slug: string, token: string) =>
  fetch(`https://blog.kata.academy/api/articles/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res);

export const fetchPostNewArticle = (body: IPostNewArticle, token: string) =>
  fetch(`https://blog.kata.academy/api/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());

export const fetchEditArticle = (
  body: IEditArticle,
  token: string,
  slug: string
) =>
  fetch(`https://blog.kata.academy/api/articles/${slug}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());

export const fetchDeleteArticle = (token: string, slug: string) =>
  fetch(`https://blog.kata.academy/api/articles/${slug}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
  });

export default fetchArticlesList;
