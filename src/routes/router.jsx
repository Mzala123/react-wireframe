import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import ErrorPage from "../error/ErrorPage.jsx";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <Layout/>,
            errorElement: <ErrorPage/>,
            children:[
                {

                }
            ]
        }
    ]
)

export default router