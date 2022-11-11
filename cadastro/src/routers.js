import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import { Home,Registration} from "./pages";
import { ROUTES } from "./constants";
const Router = () => {
  return (
    <BrowserRouter>
       <Switch>
         <Layout>
           <Route exact path={ROUTES.HOME} component={Home} />
           <Route exact path={ROUTES.REGISTRATION} component={Registration} />
          
         </Layout>
       </Switch>
    </BrowserRouter>
  );
};
export default Router;