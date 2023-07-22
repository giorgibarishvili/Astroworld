import React from "react";
import "./RegPage.css";
import { useTranslation } from "react-i18next";

function Registration() {
  const {t} = useTranslation();

  return (
    <div className="main">
      <form>
        <div className="form-group">
          <p className="pNews">{t("sendNews")}</p>
        </div>
        <div className="form-group">
          <label htmlFor="name">{t("name")}:</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t("email")}:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t("topic")}:</label>
          <input type="text" id="text" name="email" placeholder="Write topics you are interested in" required />
        </div>
        <input type="submit" value="Submit" 
        // onClick={alert("You just signed up for news!")} 
        />
      </form>
    </div>
  );
}

export default Registration;
