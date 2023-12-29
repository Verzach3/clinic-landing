import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home.tsx";
import Blog from "./views/Blog.tsx";
import About from "./views/About.tsx";
import InfoForWomens from "./views/InfoForWomens.tsx";
import InfoForMens from "./views/InfoForMens.tsx";
import Footer from "./views/Footer.tsx";
import BlogView from "./views/blog/BlogView.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },

      {
        path: "/",
        element: <Footer/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/blog/:id",
        element: <BlogView/>,
      },
      {
        path: "/info/woman",
        element: <InfoForWomens/>,
        children:[
          {
            path:'/info/woman',
            element:<h1> EJEMPLO</h1>
          }
        ]
      },

      {
        path: "/info/men",
        element: <InfoForMens/>,
        children:[
          {
            path:'/info/men',
            element:<h1> EJEMPLO</h1>
          }
        ]
      },
      
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="auto">
      <RouterProvider router={router}/>
    </MantineProvider>
  </React.StrictMode>
);
