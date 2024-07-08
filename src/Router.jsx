import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Shop from "./Pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Shop />,
      },
    ],
  },
]);

export default router;
