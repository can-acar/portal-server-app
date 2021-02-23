/* @flow */
import * as React from "react";


import {Redirect, Route, Switch} from "react-router-dom";
import routes from "./commons/routes";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {NotFound} from "./containers/notfound/index";
import "../index.scss";

library.add(fab, fas, far)
const BlogRoute = ({component: Component, path, exact = false, roles}) => {

    //const auth = useSelector(select => select.auth);

    const isLogin = true;//auth.isLogin;

    const useHasRequiredRole = true;//roles.includes(auth.kullaniciTuru)

    return (<Route
        exact={exact}
        path={path}
        render={(props) => isLogin && useHasRequiredRole
            ? (<Component {...props}/>)
            : (<Redirect
                to={{
                    pathname: useHasRequiredRole ?
                        "/login" :
                        "/yetkisizeririm",
                    state: {
                        //from: path
                        requestedPath: path
                    }
                }}/>)}
    />)
}


const App = () => {
    return <Switch>
        {routes.map(route => <BlogRoute key={route.path} {...route} />)}
        <Route path='*' component={NotFound}/>
    </Switch>

};

export default App;
