import React, { useEffect, useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import articles from "../articles.json"
import { useTranslation } from "react-i18next";


function Cards({searchTerm}) {
  const [data, setData] = useState([])
    useEffect(() => {
          setData(articles.articles)
  }, [])
      
  const {t} = useTranslation();
  return (
    <div className="cards">
      <h1>{t("checkArticles")}</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
        {
          data.filter((value) => {
              if (searchTerm === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchTerm?.toLowerCase())
              ) {
                return value;
              }
              return null;
            }).map((articles, key) => {
              return (
                <ul className="cards__items" key={key}>
                <CardItem
                  id={articles.id}
                  image={articles.image}
                  name={articles.name}
                  preview={articles.preview}
    
                />
              </ul>
              );
            })
        }
        </div>
      </div>
    </div>
  );
}

export default Cards;
