import {useRouteError} from "react-router-dom";
import Header from "../components/Header";

function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return (
        <>
            <Header/>
            <div style={{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center", height:"80vh"}}>
                <div>
                    <h1>Dang!</h1>
                    <p>This route is under construction</p>
                </div>
            </div>
        </>
    )
    ;
}

export default ErrorBoundary;