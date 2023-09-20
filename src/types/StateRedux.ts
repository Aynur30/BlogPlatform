import { IArticle } from "./Articles";
import { IUser } from "./UsersStart";

export interface IStateArticle {
  articles: Array<IArticle>;
  loading: boolean;
  totalArticles: number | undefined;
}

export interface IStateArticles {
  articles: IStateArticle;
}

export interface IStateUserOne {
  user: IUser;
}

export interface IStateUser {
  user: IStateUserOne;
}
