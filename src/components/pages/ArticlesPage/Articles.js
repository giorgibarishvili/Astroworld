import React, { useEffect, useState } from "react";
import './Articles.css'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import Cards from "../../Cards";
import articles from "../../../articles.json"

function Articles() {
  const [sidebar, setSidebar] = useState(false)
  const [data, setData] = useState([])
  useEffect(() => {
        setData(articles.articles)
}, [])
    
  const showSidebar = () => {
      setSidebar(!sidebar)
  }

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search">

        <input
        type="text"
        id="searchbox"
        placeholder="Search Here"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />


        <IconContext.Provider value={{color: "#fff"}}>
        <div className="sidebar">
            <Link to="#" className="menu-bars">
                <FaBars onClick={showSidebar} />  
            </Link>
        </div>

        <nav className={sidebar ? "side-menu active" : "side-menu"}>
            <ul onClick={showSidebar} className='side-menu-items'>
                <li className='sidebar-toggle'>
                    <Link to="#" className='menu-bars'>
              <AiOutlineClose />
                    </Link>
                </li>
                {
                    data.map((articles) => {
                        return (
                            <li key={articles.id} className="nav-text">
                            <Link to={`/article-details/${articles.id}`} >
                                <span>
                                    {articles.name}
                                </span>
                          </Link>  
                        </li>
                        );
                      })
                }
            </ul>
            </nav>
        </IconContext.Provider> 
    <Cards searchTerm={searchTerm} />

    </div>
  );
}

export default Articles;
