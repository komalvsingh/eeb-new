import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
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
import AgentList from "./routes/Agents/agentlist";
import MortgageApp from "./routes/Mortgage/mortgageapp";
import Blog from "./routes/blog/blog";
import PlanPage from "./components/plan";  // Add PlanPage
import WelcomePage from "./components/welcome.jsx";  // Add WelcomePage

function App() {
  const paymentDone = localStorage.getItem('paymentDone') === 'true';  // Check if payment is done
  const registered = localStorage.getItem('registered') === 'true';    // Check if registration is done

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
          path: "/plan",
          element: <PlanPage />,
        },
        {
          path: "/dashboard",
          element: paymentDone ? <Dashboard /> : <Navigate to="/plan" />, // Protect other pages until payment is done
        },
        {
          path: "/mortgage",
          element: paymentDone ? <MortgageApp /> : <Navigate to="/plan" />, // Protect until payment is done
        },
        {
          path: "/list",
          element: paymentDone ? <ListPage /> : <Navigate to="/plan" />, 
          loader: paymentDone ? listPageLoader : null, // Only load data if payment is done
        },
        {
          path: "/agent",
          element: paymentDone ? <AgentList /> : <Navigate to="/plan" />,
        },
        {
          path: "/:id",
          element: paymentDone ? <SinglePage /> : <Navigate to="/plan" />,
          loader: paymentDone ? singlePageLoader : null,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/blog",
          element: paymentDone ? <Blog /> : <Navigate to="/plan" />,
        },
        {
          path: "/register",
          element: <Register onRegister={() => localStorage.setItem('registered', 'true')} />, // Set registration status
        },
        {
          path: "/welcome",
          element: paymentDone ? <WelcomePage /> : <Navigate to="/plan" />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: paymentDone ? <ProfilePage /> : <Navigate to="/plan" />,
          loader: paymentDone ? profilePageLoader : null,
        },
        {
          path: "/profile/update",
          element: paymentDone ? <ProfileUpdatePage /> : <Navigate to="/plan" />,
        },
        {
          path: "/add",
          element: paymentDone ? <NewPostPage /> : <Navigate to="/plan" />,
        },
      ],
    },
    {
      path: "/plan",
      element: registered && !paymentDone ? <PlanPage /> : <Navigate to="/" />, // Redirect based on registration and payment
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
