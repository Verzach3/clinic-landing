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
import SintomasDolorcabeza from "./views/SintomasDolorcabeza.tsx"
import SintomasFatiga from "./views/SintomasFatiga.tsx";
import SintomasPerdidacabello from "./views/SintomasPerdidacabello.tsx";
import SintomasBajodeseo from "./views/SintomasBajodeseo.tsx";
import SintomasSofoco from "./views/SintomasSofoco.tsx";
import SintomasAnsiedad from "./views/SintomasAnsiedad.tsx";



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


      {
        path: '/sintomas/dolorcabeza',
        element: <SintomasDolorcabeza/>,
      },

      {
        path: '/sintomas/fatiga',
        element: <SintomasFatiga/>,
      },

      {
        path: '/sintomas/perdidacabello',
        element: <SintomasPerdidacabello/>,
      },


      {
        path: '/sintomas/bajodeseo',
        element: <SintomasBajodeseo/>,
      },

      {
        path: '/sintomas/sofocos',
        element: <SintomasSofoco/>,
      },

       {
        path: '/sintomas/ansiedad',
        element: <SintomasAnsiedad/>,
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
