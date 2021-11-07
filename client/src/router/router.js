import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../views/main";
import Login from "../views/login";
import Register from "../views/register";
import Questions from "../views/questions";
import Verif from "../views/emailverification";
import Event from "../views/events";
import Pageevent from "../views/event";
import Profile from "../views/profile"

export default function Views() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/postQuestions" component={Questions}></Route>
      <Route path="/emailverification" component={Verif}></Route>
      <Route path="/events" component={Event}></Route>
      <Route path="/event/:id" component={Pageevent}></Route>
      <Route path="/user/profile" component={Profile}></Route>
    </Router>
  );
}
