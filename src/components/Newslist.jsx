import React, { useEffect, useState } from "react";
import "./CSS/NewsList.css"; 

function NewsList() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const apiKey = "bf9045fe54dc4b45a37a7f1c00f4bb26";
      
      const newsUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bf9045fe54dc4b45a37a7f1c00f4bb26`;
      const response = await fetch(newsUrl);
      const result = await response.json();
      console.log(result);
      setNews(result.articles);
    };

    fetchApi();
  }, []);

  return (
    <div className="news-grid">
      {news &&
        news.map((article, index) => (
         return <div key={index} className={`grid-item ${index % 2 === 0 ? "even" : "odd"}`}>
            <img src={article.urlToImage} alt="News Image" />
            <div className="content">
              <h2>{article.title}</h2>
              <a href={article.url} className="readBtn">Read More</a>
            </div>
          </div>
        ))}
    </div>
  );
}

export default NewsList;
