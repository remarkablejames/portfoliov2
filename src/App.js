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
import Project1 from "./pages/projects/Project1";

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
        },{
            path: "project1",
            element: <Project1/>,
        },

        {
            path: "*",
            element: <ErrorBoundary />,

        }
    ]);
  return <RouterProvider router={router} />;
}

export default App;
