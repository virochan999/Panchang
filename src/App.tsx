import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Login from "./views/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
