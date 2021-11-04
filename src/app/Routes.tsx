import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./utils";

//Layouts
import MainLayout from "../layouts/main";

//Pages
import RickNMorty from "../pages/RickNMorty";
import Character from "../pages/Character";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        path="/home"
        exact
        Layout={MainLayout}
        Component={RickNMorty}
      />
      <RouteWithLayout
        path="/ricknmorty/:id"
        exact
        Layout={MainLayout}
        Component={Character}
      />
    </Switch>
  );
};

export default Routes;
