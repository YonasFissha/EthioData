import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar";
import Pages from "./Components/Layouts/Pages";
import Routes from "./Components/Others/Routes";

import { store, rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { Provider } from "react-redux";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router>
            <div className="wrapper">
              <Navbar />
              <div id="content">
                <Pages />
                <Routes />
              </div>
            </div>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}
export default App;
