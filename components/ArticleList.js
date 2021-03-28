import React from "react";
import articleStyles from "../styles/Article.module.css";
import ArticleItem from "../components/ArticleItem";

export default function ArticleList({ articles }) {
  return (
    <div className={articleStyles}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
}
