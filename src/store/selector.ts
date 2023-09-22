import { createSelector } from "reselect";

import { IStateArticles, IStateUser } from "../types/StateRedux";

const selectArticlesState = (state: IStateArticles) => state.articles; // Replace with your actual state structure

const selectUserState = (state: IStateUser) => state.user.user;

export const selectArticles = createSelector(
  [selectArticlesState],
  (articlesState) => articlesState.articles
);

export const selectToken = createSelector(
  [selectUserState],
  (state) => state.token
);

export const selectEmail = createSelector(
  [selectUserState],
  (state) => state.email
);

export const selectUsername = createSelector(
  [selectUserState],
  (state) => state.username
);

export const selectImg = createSelector(
  [selectUserState],
  (state) => state.image
);
