import React, { Fragment, useState } from "react";
import "./AboutUsHeroSection.css";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };
  const {t} = useTranslation();

  return (
    <Fragment>
      <section className="about">
        <h1 className="abHead">About AstroWorld</h1>
        <div className="row">
          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2>{t("about")}</h2>
              </div>

              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                <h2>{t("goals")}</h2>
              </div>

              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              >
                <h2>{t("contact")}</h2>
              </div>

              <div
                className={
                  toggleTab === 4 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(4)}
              >
                <h2>{t("contact")}</h2>
              </div>
            </div>

            <div className="tab-content">
              {/*1*/}

              <div
                className={
                  toggleTab === 1 ? "content active-content" : "content"
                }
              >
                <h2>{t("about")}</h2>
                <p>
                  {t("aboutUsP")}
                </p>
                <h3>{t("forWho")}</h3>
                <p>
                  {t("forWhoAnswer")}
                </p>
              </div>

              {/*2*/}

              <div
                className={
                  toggleTab === 2 ? "content active-content" : "content"
                }
              >
                <h2>{t("goals")}</h2>
                <p>
                  {t("goalsP")}
                </p>
                <h3>{t("result")}</h3>
                <p>
                  {t("resultP")}
                </p>
              </div>

              <div
                className={
                  toggleTab === 3 ? "content active-content" : "content"
                }
              >
                <h2>{t("contact")}</h2>
                <p>
                  {t("ourEmail")}: _______ <br></br>
                  <br></br>{t("hotline")}: _______
                  <br></br>
                  <br></br>
                  {t("facebook")}: ________
                </p>
                <p></p>
              </div>

              <div
                className={
                  toggleTab === 4 ? "content active-content" : "content"
                }
              >
                <h2>{t("ourTeam")}</h2>
                <p>
                  {t("teamMembers")}<br></br>
                  <br></br>
                  <br></br>
                  ------------------------------------------<br></br>
                  ------------------------------------------<br></br>
                  ------------------------------------------<br></br>
                  ------------------------------------------<br></br>
                  ------------------------------------------<br></br>
                  ------------------------------------------<br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
