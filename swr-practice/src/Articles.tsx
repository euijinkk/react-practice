import { IArticles, ArticleSWRResponse } from "App";
import { fetcher } from "libs/api";
import React from "react";
import useSWR from "swr";

const Articles = () => {
  const { data, error } = useSWR<ArticleSWRResponse<IArticles[]>>(
    "/article",
    fetcher
  );
  const articleData = data?.data;
  return (
    <div>
      {articleData &&
        articleData.map((li) => <div key={li.id}>{li.title}</div>)}
    </div>
  );
};

export default Articles;
