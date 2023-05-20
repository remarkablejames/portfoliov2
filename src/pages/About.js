import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {bg1, icon, icon2, me2, sign, star2} from "./images";
function About ({reload}){
    return(
        <main className="main-aboutpage">
            {/* Header */}
            <Header reload={reload}/>
            {/* About */}
            <section className="about-area">
                <div className="container">
                    <div className="d-flex about-me-wrap align-items-start gap-24">
                        <div data-aos="zoom-in">
                            <div className="about-image-box shadow-box">
                                <img src={bg1} alt="BG" className="bg-img" />
                                <div className="image-inner">
                                    <img src={me2} alt="About Me" />
                                </div>
                            </div>
                        </div>
                        <div className="about-details" data-aos="zoom-in">
                            <h1 className="section-heading" data-aos="fade-up">
                                <img src={star2} alt="Star" /> Self-summary
                                <img src={star2} alt="Star" />
                            </h1>
                            <div className="about-details-inner shadow-box">
                                <img src={icon2} alt="Star" />
                                <h1>James Niyongira</h1>
                                <p>
                                    I am a sophomore majoring in web development and internet
                                    applications with a focus on backend development, database
                                    management, and DevOps. I am flexible, fast and adaptive
                                    enough to work in any environment.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-24">
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="about-edc-exp about-experience shadow-box">
                                <img src={bg1} alt="BG" className="bg-img" />
                                <h3>EXPERIENCE</h3>
                                <ul>
                                    <li>
                                        <p className="date">2022 - Present</p>
                                        <h2>Building Academic Projects</h2>
                                        <p className="type">Various tech stacks</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="zoom-in">
                            <div className="about-edc-exp about-education shadow-box">
                                <img src={bg1} alt="BG" className="bg-img" />
                                <h3>EDUCATION</h3>
                                <ul>
                                    <li>
                                        <p className="date">2022 - Present</p>
                                        <h2>Web Development &amp; Internet applications</h2>
                                        <p className="type">Algonquin College</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-24">
                        <div className="col-md-12">
                            <div className="d-flex profile-contact-credentials-wrap gap-24">
                                <div data-aos="zoom-in">
                                    <div className="about-profile-box info-box shadow-box h-full">
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <div className="inner-profile-icons shadow-box">
                                            <a href="#">
                                                <i className="iconoir-github" />
                                            </a>
                                            <a href="#">
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
                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="about-contact-box info-box shadow-box">
                                        <a className="overlay-link" href="./contact.html" />
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <img src={icon2} alt="Icon" className="star-icon" />
                                        <h1>Let's <br />work <span>together.</span></h1>
                                        <a href="./contact.html" className="about-btn">
                                            <img src={icon} alt="Button" />
                                        </a>
                                    </div>
                                </div>
                                <div data-aos="zoom-in" className="h-full">
                                    <div className="about-crenditials-box info-box shadow-box">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer />
        </main>

    );
}

export default About;