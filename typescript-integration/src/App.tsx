/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Dashboard } from "./components/Pages/Dashboard.tsx";
import { PageNotFound } from "./components/Pages/PageNotFound.tsx";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "*", element: <PageNotFound /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
