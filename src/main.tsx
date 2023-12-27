import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home.tsx";

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
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router}/>
    </MantineProvider>
  </React.StrictMode>
);
