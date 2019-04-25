/**
 * HOC to render the app based on the route path
 */
import React from "react";
import { Route } from "react-router-dom";
import { UsersListProvider } from "../state/UsersListProvider";
import RenderUsers from "./RenderUsers";
import RenderUser from "./RenderUser";

const App = () => (
  <UsersListProvider>
    <Route path="/" exact component={RenderUsers} />
    <Route path="/:userId" component={RenderUser} />
  </UsersListProvider>
);

export default App;
