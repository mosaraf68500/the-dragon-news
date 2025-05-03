
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard/NewsCard";

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
      <h1 className="text-lg font-bold text-gray-500">total <span className="text-red-400"> {categoryNews.length} </span>news</h1>
      <div className="grid grid-cols-1 gap-6">
        {
            categoryNews.map(news =><NewsCard news={news} key={news.id}></NewsCard>)
        }
      </div>
    </div>
  );
};

export default Category;
