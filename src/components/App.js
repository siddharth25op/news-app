import React from "react";
import NavbarComponent from "./NavbarComponent";
import News from "./News";
import "./styles.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const pagesize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              key="general"
              pageSize={pagesize}
              country="in"
              apiKey={apiKey}
              category="general"
            />
          }
        ></Route>
        <Route
          exact
          path="/business"
          element={
            <News
              key="business"
              pageSize={pagesize}
              country="in"
              apiKey={apiKey}
              category="business"
            />
          }
        ></Route>
        <Route
          exact
          path="/entertainment"
          element={
            <News
              key="entertainment"
              pageSize={pagesize}
              country="in"
              apiKey={apiKey}
              category="entertainment"
            />
          }
        ></Route>
        <Route
          exact
          path="/general"
          element={
            <News
              key="general"
              pageSize={pagesize}
              country="in"
              apiKey={apiKey}
              category="general"
            />
          }
        ></Route>
        <Route
          exact
          path="/health"
          element={
            <News
              key="health"
              pageSize={pagesize}
              country="in"
              category="health"
            />
          }
        ></Route>
        <Route
          exact
          path="/science"
          element={
            <News
              key="science"
              pageSize={pagesize}
              country="in"
              apiKey={apiKey}
              category="science"
            />
          }
        ></Route>
        <Route
          exact
          path="/sports"
          element={
            <News
              key="sports"
              pageSize={pagesize}
              country="in"
              apiKey={apiKey}
              category="sports"
            />
          }
        ></Route>
        <Route
          exact
          path="/technology"
          element={
            <News
              key="technology"
              pageSize={pagesize}
              country="in"
              apiKey={apiKey}
              category="technology"
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
