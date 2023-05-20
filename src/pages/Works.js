import Footer from "../components/Footer";
import Header from "../components/Header";
import {bg1, icon, star2,project2,project6,project5,project4,project3,project1} from "./images";

function Works (){
    return(
        <main className="main-workspage">
            {/* Header */}
            <Header />
            {/* Projects */}
            <section className="projects-area">
                <div className="container">
                    <h1 className="section-heading" data-aos="fade-up">
                        <img src={star2} alt="Star" /> All Projects
                        <img src={star2} alt="Star" />
                    </h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div data-aos="zoom-in">
                                <div className="project-item shadow-box">
                                    <a className="overlay-link" href="/project1" />
                                    <img src={bg1} alt="BG" className="bg-img" />
                                    <div className="project-img">
                                        <img src={project1} alt="Project" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="project-info">
                                            <p>WEB DESIGNING</p>
                                            <h1>Netflix</h1>
                                        </div>
                                        <a href="/project1" className="project-btn">
                                            <img src={icon} alt="Button" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="zoom-in">
                                <div className="project-item shadow-box">
                                    <a className="overlay-link" href="/project1" />
                                    <img src={bg1} alt="BG" className="bg-img" />
                                    <div className="project-img">
                                        <img src={project2} alt="Project" />
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="project-info">
                                            <p>PHOTOGRAPHY</p>
                                            <h1>Natours</h1>
                                        </div>
                                        <a href="/project1" className="project-btn">
                                            <img src={icon} alt="Button" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="section-heading" data-aos="fade-up">
                                <img src={star2} alt="Star" /> All Projects
                                <img src={star2} alt="Star" />
                            </h1>
                            <div className="d-flex align-items-start gap-24">
                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <a className="overlay-link" href="/project1" />
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <div className="project-img">
                                            <img src={project3} alt="Project3" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>mOBILE DESIGNING</p>
                                                <h1>Messenger</h1>
                                            </div>
                                            <a href="/project1" className="project-btn">
                                                <img src={icon} alt="Button" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <a className="overlay-link" href="/project1" />
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <div className="project-img">
                                            <img src={project4} alt="Project" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>Branding</p>
                                                <h1>Reactive Notes</h1>
                                            </div>
                                            <a href="/project1" className="project-btn">
                                                <img src={icon} alt="Button" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-24">
                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <a className="overlay-link" href="./work-details.html" />
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <div className="project-img">
                                            <img src={project5} alt="Project" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>mOBILE DESIGNING</p>
                                                <h1>Librawave</h1>
                                            </div>
                                            <a href="/project1" className="project-btn">
                                                <img src={icon} alt="Button" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="zoom-in" className="flex-1">
                                    <div className="project-item shadow-box">
                                        <a className="overlay-link" href="/project1" />
                                        <img src={bg1} alt="BG" className="bg-img" />
                                        <div className="project-img">
                                            <img src={project6} alt="Project" />
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="project-info">
                                                <p>wEB DESIGNING</p>
                                                <h1>Vidstream</h1>
                                            </div>
                                            <a href="/project1" className="project-btn">
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

    )
}

export default Works;