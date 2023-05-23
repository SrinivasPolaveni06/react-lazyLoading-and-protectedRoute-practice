import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./pages/error-page";

import { LazyLoading } from "./pages/lazy-loading/lazy-loading";
import ProtectedRoute from "./pages/protected-routes/protected-routes";
import Dashboard from "./pages/protected-routes/dashboard";
import Login from "./pages/login";
import Home from "./pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "lazy-loading",
        element: <LazyLoading />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);
