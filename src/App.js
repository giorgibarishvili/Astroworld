import React from "react";
import "./App.css";
import Home from "./components/pages/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import AboutUs from "./components/pages/AboutUsPage/AboutUs";
import SignUp from "./components/SignUp/SignUp";
import Articles from "./components/pages/ArticlesPage/Articles";
import RegPage from "./components/pages/Register/RegPage";
import Forum from "./components/pages/Forum/ForumPage";
import ArticlesDetails from "./components/pages/ArticlesPage/ArticlesDetails";

function App() {
  return (
    <Router basename="/Astroworld">
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/articles" component={Articles} />
        <Route path="/article-details/:id" component={ArticlesDetails} />
        <Route path="/RegPage" component={RegPage} />
        <Route path="/Forum" component={Forum} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
