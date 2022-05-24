import React, { useEffect } from "react";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import NotFound from "./components/NotFound";
import productApi from "./api/productApi";
import CounterFeature from "./features/Counter";
import Header from "./components/Header";

export default function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const params = {
        _limit: 10
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    fetchProduct();
  }, []);
  return (
    <div className="App">
      <Header />

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
