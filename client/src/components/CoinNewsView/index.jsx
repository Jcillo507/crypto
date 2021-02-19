import React from "react";
import { titleShort, contentShort, turnIntoLink } from "../Helpers";


const CoinNewsView = (props) => {
  const {news}= props
      const newsDisplay = news.map((news) => {
        return (
          <div key={news.id} >
            <div href={news.url}>
              <div className="info-news-ctr" key={news._id}>
                <h3>{titleShort(news.title)}</h3>
                <div>{contentShort(news.content, news.url)}</div>
              </div>
            </div>
          </div>
        );
      });
  return <div className="newsDisplay">{news ? newsDisplay : "Loading"}</div>;
};

export default CoinNewsView;
