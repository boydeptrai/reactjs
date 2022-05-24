import React from "react";
import { Route, Switch } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import { useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      TODO SHARE UI
      <Switch>
        <Route path={match.path} component={ListPage} exact></Route>
        <Route
          path={`${match.path}/:todoId`}
          component={DetailPage}
          exact
        ></Route>

        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}
export default TodoFeature;
