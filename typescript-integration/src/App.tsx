/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Dashboard } from "./components/Pages/Dashboard.tsx";
import { PageNotFound } from "./components/Pages/PageNotFound.tsx";

import { Web3ModalProvider } from "./components/Wagmi/Web3ModalProvider.tsx";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "*", element: <PageNotFound /> },
  ]);

  return (
    <>
      <div
        className="mainLoader loader loader-default "
        id="loaderVisibility"
        data-text="Loading...  Wait for Transaction to Complete!"></div>
      <div
        className="mainLoader loader loader-default "
        id="loaderVisibilityFetching"
        data-text="Loading...  Wait for Fetching Data!"></div>

      <Web3ModalProvider>
        <RouterProvider router={router} />
      </Web3ModalProvider>
    </>
  );
}

export default App;
