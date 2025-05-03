
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const Category = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
      return;
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);

      setCategoryNews(filteredNews);
    }
  }, [id, data]);

  return (
    <div>
      <h1>total {categoryNews.length} news</h1>
    </div>
  );
};

export default Category;
