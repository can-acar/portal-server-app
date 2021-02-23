import loadable from '@loadable/component';
import {App} from "../containers/main/index";


const routes = [
    {
        path: '/',
        component: App,
        exact: true,
        role: [1]
    },

];

export default routes;
