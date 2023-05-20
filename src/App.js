import Home from "./pages/Home";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorBoundary from "./pages/ErrorBoundary";
import About from "./pages/About";
import Contact from "./pages/ContactPage";
import Works from "./pages/Works";
import Credentials from "./pages/Credentials";
import Blog from "./pages/Blog";

function App() {


    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Home/>
            ),
        },
        {
            path: "about",
            element: <About/>,
        },
        {
            path: "contact",
            element: <Contact/>,
        },
        {
            path: "works",
            element: <Works/>,
        },
        {
            path: "credentials",
            element: <Credentials/>,
        },
        {
            path: "blog",
            element: <Blog/>,
        },

        {
            path: "*",
            element: <ErrorBoundary />,

        }
    ]);
  return <RouterProvider router={router} />;
}

export default App;
