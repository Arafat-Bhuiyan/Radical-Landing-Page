import { Layout } from "@/layouts/Layout";
import { Home } from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <h2 className="text-red-500 text-center mt-10">Route not found</h2>
    ),
    children: [{ index: true, element: <Home /> }],
  },
]);

export default router;
