import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import AnimalsList from "./components/AnimalList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<AnimalsList />} />
      </Route>
      <Route path="login" element={<Login />} />
    </>
  )
);

export function Router() {
  return <RouterProvider router={router} />;
}
