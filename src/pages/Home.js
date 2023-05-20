import Footer from "../components/Footer";
import Header from "../components/Header";
import {bg1,me,icon,sign,star1,projects,blog,icon2} from "./images";
import {useEffect} from "react";

function Home ({reload}){
    useEffect(() => {
        // AOS.refreshHard()
    }, []);
    return(
        <main className="main-homepage">
            {/* Header */}
            <Header reload={reload} />
            {/* About */}
            <section className="about-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="about-me-box shadow-box">
                                <a className="overlay-link" href="./about.html" />
                                <img src={bg1} alt="BG" className="bg-img" />
                                <div className="img-box">
                                    <img src={me} alt="About Me" />
                                </div>
                                <div className="infos">
                                    <h4>REMARKABLE</h4>
                                    <h1>James Niyongira.</h1>
                                    <p>I am a full stack developer based in Ottawa.</p>
                                    <a href="#" className="about-btn">
                                        <img src={icon} alt="Button" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-credentials-wrap">
                                <div data-aos="zoom-in">
                                    <div className="banner shadow-box">
                                        <div className="marquee">
                                            <div>
                    <span>LATEST WORK AND <b>FEATURED</b>
                      <img src={star1} alt="Star" />
                      LATEST WORK AND <b>FEATURED</b>
                      <img src={star1} alt="Star" />
                      LATEST WORK AND <b>FEATURED</b>
                      <img src={star1} alt="Star" />
                      LATEST WORK AND <b>FEATURED</b> LATEST WORK AND
                      <img src={star1} alt="Star" />
                      LATEST WORK AND <b>FEATURED</b> LATEST WORK AND
                      <img src={star1} alt="Star" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="gx-row d-flex gap-24">
                                    <div data-aos="zoom-in">
                                        <div className="about-crenditials-box info-box shadow-box h-full">
                                            <a className="overlay-link" href="./credentials.html" />
                                            <img src={bg1} alt="BG" className="bg-img" />
                                            <img src={sign} alt="Sign" />
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>more about me</h4>
                                                    <h1>Credentials</h1>
                                                </div>
                                                <a href="./credentials.html" className="about-btn">
                                                    <img src={icon} alt="Button" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-aos="zoom-in">
                                        <div className="about-project-box info-box shadow-box h-full">
                                            <a className="overlay-link" href="./works.html" />
                                            <img src={bg1} alt="BG" className="bg-img" />
                                            <img src={projects} alt="My Works" />
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="infos">
                                                    <h4>SHOWCASE</h4>
                                                    <h1>Projects</h1>
                                                </div>
                                                <a href="#" className="about-btn">
                                                    <img src={icon} alt="Button" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-24">
                        <div className="col-md-12">
                            <div className="blog-service-profile-wrap d-flex gap-24">
                                <div data-aos="zoom-in">
                                    <div className="about-blog-box info-box shadow-box h-full">
                                        <a href="./blog.html" className="overlay-link" />
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <img src={blog} alt="blog" />
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="infos">
                                                <h4>Blog</h4>
                                                <h1>Recent stories</h1>
                                            </div>
                                            <a href="./blog.html" className="about-btn">
                                                <img src={icon} alt="Button" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="about-services-box info-box shadow-box h-full">
                                        <a href="./service.html" className="overlay-link" />
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <div className="icon-boxes">
                                            <i className="iconoir-design-pencil" />
                                            <i className="iconoir-code" />
                                            <i className="iconoir-database-restore" />
                                            <i className="iconoir-dev-mode-phone" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="infos">
                                                <h4>specialization</h4>
                                                <h1>Services Offering</h1>
                                            </div>
                                            <a href="./service.html" className="about-btn">
                                                <img src={icon} alt="Button" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="zoom-in">
                                    <div className="about-profile-box info-box shadow-box h-full">
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <div className="inner-profile-icons shadow-box">
                                            <a href="https://github.com/remarkablejames">
                                                <i className="iconoir-github" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/james-niyongira-551082156/">
                                                <i className="iconoir-linkedin" />
                                            </a>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="infos">
                                                <h4>Connect with me</h4>
                                                <h1>Profiles</h1>
                                            </div>
                                            <a href="./contact.html" className="about-btn">
                                                <img src={icon} alt="Button" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-24">
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="about-client-box info-box shadow-box">
                                <img src={bg1} alt="BG" className="bg-img" />
                                <div className="clients d-flex align-items-start gap-24 justify-content-center">
                                    <div className="client-item">
                                        <h1>07</h1>
                                        <p>Years <br />Experience</p>
                                    </div>
                                    <div className="client-item">
                                        <h1>+125</h1>
                                        <p>CLIENTS <br />WORLDWIDE</p>
                                    </div>
                                    <div className="client-item">
                                        <h1>+210</h1>
                                        <p>Total <br />Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="about-contact-box info-box shadow-box">
                                <a className="overlay-link" href="./contact.html" />
                                <img src={bg1} alt="BG" className="bg-img" />
                                <img src={icon2} alt="Icon" className="star-icon" />
                                <h1>Let's <br />work <span>together.</span></h1>
                                <a href="./index.html" className="logo" style={{color: 'white'}}>
                                    <h2>James</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </main>
    )
}

export default Home;