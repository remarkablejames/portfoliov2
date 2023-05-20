import {Link} from "react-router-dom";
function About ({reload}){
    return(
        <div>
            <h1>About</h1>
            <Link to="/" onClick={reload}>Home</Link>
        </div>);
}

export default About;