import Home from "./pages/Home";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorBoundary from "./pages/ErrorBoundary";
import About from "./pages/About";

function refreshPage() {
    setTimeout(()=>{
        window.location.reload();
    }, 5);
    console.log('page to reload')
}
function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Home reload={refreshPage}/>
            ),
            errorElement: <ErrorBoundary />,
        },
        {
            path: "about",
            element: <About reload={refreshPage}/>,
            errorElement: <ErrorBoundary />,
        },
    ]);
  return <RouterProvider router={router} />;
}

export default App;
