import {useRouteError} from "react-router-dom";

function ErrorBoundary() {
    let error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return <div style={{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center", height:"100vh"}}>
        <div>
            <h1>Dang!</h1>
            <p>This route is under construction</p>
        </div>
    </div>;
}

export default ErrorBoundary;