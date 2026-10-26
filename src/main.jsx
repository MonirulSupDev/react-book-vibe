import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home/Home.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./components/PagesToRead/PagesToRead.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import Loading from "./components/Loading/Loading.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    HydrateFallback: Loading,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      {
        path: "listed-books",
        Component: ListedBooks,
        loader: () => fetch("/books.json").then((res) => res.json()),
      },
      {
        path: "pages-to-read",
        Component: PagesToRead,
        loader: () => fetch("/books.json").then((res) => res.json()),
      },
      {
        path: "book/:bookId",
        Component: BookDetails,
        loader: () => fetch("/books.json").then((res) => res.json()),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
