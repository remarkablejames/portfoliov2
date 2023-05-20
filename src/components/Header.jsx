import {Link} from "react-router-dom";
function Header({reload}) {
  return (
      <header className="header-area">
          <div className="container">
              <div className="gx-row d-flex align-items-center justify-content-between">
                  <a href="./index.html" className="logo" style={{color: 'white'}}>
                      <h2>James</h2>
                  </a>
                  <nav className="navbar">
                      <ul className="menu">
                          <li className="active"><Link to="/" onClick={reload}>Home</Link></li>
                          <li><Link to="/about" onClick={reload}>About</Link></li>
                          <li><Link to="/works" onClick={reload}>Works</Link></li>
                          <li><Link to="/contact" onClick={reload}>Contact</Link></li>
                      </ul>
                      <a href="./contact.html" className="theme-btn">Let's talk</a>
                  </nav>
                  <a href="./contact.html" className="theme-btn">Let's talk</a>
                  <div className="show-menu">
                      <span />
                      <span />
                      <span />
                  </div>
              </div>
          </div>
      </header>
  );
}

export default Header;