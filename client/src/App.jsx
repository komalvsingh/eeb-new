import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import { Layout, RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";
import Dashboard from "./routes/Dashboard/dashboard";
import MortgageApp from "./routes/Mortgage/mortgageapp";
import Blog from "./routes/blog/blog";
import AgentList from "./routes/Agents/agentlist";
import PlanPage from "./components/plan"
import PlanPageWrapper from "./components/plan";
import Help from "./routes/Help/Help";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/help",
          element: <Help />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/mortgage",
          element: <MortgageApp />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/agent",
          element: <AgentList/>,
        },
        {
          path: "/plan",
          element: <PlanPageWrapper/>,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
