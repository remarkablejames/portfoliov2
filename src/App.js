import Home from "./pages/Home";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorBoundary from "./pages/ErrorBoundary";
import About from "./pages/About";

function App() {


    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Home/>
            ),
            errorElement: <ErrorBoundary />,
        },
        {
            path: "about",
            element: <About/>,
            errorElement: <ErrorBoundary />,
        },
    ]);
  return <RouterProvider router={router} />;
}

export default App;
