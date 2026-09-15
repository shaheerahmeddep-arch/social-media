import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Createpost, { createpostaction } from "./components/Createpost.jsx";
import App from "./routes/App.jsx";
import Postlists, { Postloader } from "./components/Postlists.jsx";

const route = createBrowserRouter([
  { path: "/", element: <App /> , children:[{ path: "/", element: <Postlists/> , loader:Postloader },
  { path: "/Create-post", element: <Createpost /> , action : createpostaction
   }] }
  
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
);
