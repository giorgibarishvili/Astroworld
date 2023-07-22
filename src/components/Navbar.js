import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosPlanet } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import i18n from "./i18n/i18n";
import { useTranslation } from "react-i18next";


function Navbar() {

  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const {t} = useTranslation();
  const [lang, setLang] = useState('en')
  function changeBetweenLanguages() {
    if (lang === 'en') {
      setLang('ka');      
    } else {
      setLang('en');
    }
    i18n.changeLanguage(lang);
  }

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <IoIosPlanet className="navbar-icon" />
              <h5>AstroWorld</h5>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                {t("home")}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="articles"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {t("articles")}
                </Link>
              </li>

              <li className="nav-item">
              </li>

              <li className="nav-item">
                <Link
                  to="forum"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {t("forum")}
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="AboutUs"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {t("about")}
                </Link>
              </li>

              <li className="nav-btn">
                {button ? ( ////for leptops
                  <Link to="/sign-up" className="btn-link languageBtn">
                    <Button buttonStyle="btn--outline">{t("sign-up")}</Button>
                  </Link>
                ) : (
                  ////for mobiles
                  <Link
                    to="/sign-up"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--large">
                      {t("sign-up")}
                    </Button>
                  </Link>
                )}
                <li className="searchBar">
                <div className="nav-links">
                </div>
              </li>
              </li>

              <li className="nav-btn">
                {button ? ( ////for leptops
                    <Button buttonStyle="btn--outline" onClick={changeBetweenLanguages}>{t("language")}</Button>
                ) : (
                  ////for mobiles
                  <Link
                    to="/sign-up"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--large" onClick={changeBetweenLanguages}>
                      {t("language")}
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
