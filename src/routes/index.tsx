import { createBrowserRouter } from "react-router-dom";
import RoutLayout from "../layouts/RootLayout";
import DashboardPage from "../pages/DashboardPage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <RoutLayout />,
        children: [
            {
                element: <RoutLayout />,
                children: [
                    {
                        index: true,
                        element: <DashboardPage />
                    }
                ]
            },
            {
                path: "sign-in",
                element: <SigninPage />
            },
            {
                path: "sign-up",
                element: <SignupPage />
            }
        ]
    }
])