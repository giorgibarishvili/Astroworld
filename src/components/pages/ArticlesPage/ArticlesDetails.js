import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import articles from "../../../articles.json"
import "./ArticlesDetails.css"
import { Button } from "../../Button";
import { useTranslation } from "react-i18next";

export default function Articlesdata() {
    const { id } = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
          setData(articles.articles.find((article) => +article.id === +id))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {t} = useTranslation();
    return (
        <div className="articlesDetailsPage">
            {data && 
                <div className="maindiv"> 
                <Link to="/articles" className="backBtn">
                    <Button buttonStyle="btn--outline">{t("back")}</Button>
                     </Link>
                {
                    <div className="chldiv">
                        <div
                        className="image"
                        style={{ 
                          backgroundImage: `url(${data.image})`,
                          backgroundPosition: 'relative',
                          borderRadius: '15px',
                          marginTop: '35px',
                          marginRight: '10px'
                        }}
                      ></div>
                    <fieldset className="info-container">
                        <legend>Info</legend>
                        <p className="str">{`${data.name}`}</p>
                        <p>{data.content}</p>
                    </fieldset>
                    </div>
                }
                 <hr />
            </div>
            }
        </div>
    )
}