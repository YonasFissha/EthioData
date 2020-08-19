import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Agriculture from "../Sections/Agriculture";
import Covid from "../Sections/Covid";
import Education from "../Sections/Education";
import Health from "../Sections/Health";
export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Covid} />
          <Route exact path="/agriculture" component={Agriculture} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/covid" component={Covid} />
          <Route exact path="/health" component={Health} />
        </Switch>
      </div>
    );
  }
}
