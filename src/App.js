import Home from "./pages/Home";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import About from "./pages/About";

function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 10);
    console.log('page to reload')
}
function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Home />
            ),
        },
        {
            path: "about",
            element: <About reload={refreshPage}/>,
        },
    ]);
  return <RouterProvider router={router} />;
}

export default App;
