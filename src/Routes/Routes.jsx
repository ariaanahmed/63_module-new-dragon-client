import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home"
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../NewsLayout/NewsLayout";
import News from "../pages/News/News";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/category/:id',
          element: <Category/>
        }
      ]
    },
    {
      path: 'news',
      element: <NewsLayout/>,
      children: [
        {
          path: ':id',
          element: <News/>
        }
      ]
    }
  ]);

export default router