import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {bg1, icon2, icon3, project3, project4, project5, project6, projectBanner1, star2} from "../images";

function Project1() {
  return (
      <main className="main-workdetails-page">
          {/* Header */}
            <Header />
          {/* Breadcrumb */}
          <section className="breadcrumb-area">
              <div className="container">
                  <div className="breadcrumb-content" data-aos="fade-up">
                      <p>BRANDING - RAVEN STUDIO</p>
                      <h1 className="section-heading">
                          <img src={star2} alt="Star" /> Aesthetic
                          design for brand <br />new startup
                          <img src={star2} alt="Star" />
                      </h1>
                  </div>
              </div>
          </section>
          {/* Project Details */}
          <section className="project-details-wrap">
              <div className="project-details-img" data-aos="zoom-in">
                  <img src={projectBanner1} alt="Project Details" />
              </div>
              <div className="container">
                  <div data-aos="zoom-in">
                      <div className="d-flex project-infos-wrap shadow-box mb-24">
                          <img src={bg1} alt="BG" className="bg-img" />
                          <img src={icon2} alt="Icon" />
                          <div className="project-details-info flex-1">
                              <h3>Raven studio</h3>
                              <p>
                                  Sit amet luctussd fav venenatis, lectus magna fringilla inis
                                  urna, porttitor rhoncus dolor purus non enim praesent in
                                  elementum sahas facilisis leo, vel fringilla est ullamcorper
                                  eget nulla facilisi etisam dignissim diam quis enim lobortis
                                  viverra orci sagittis eu volutpat odio facilisis mauris sit.
                              </p>
                              <p>
                                  Scelerisque fermentum duisi faucibus in ornare quam sisd sit
                                  amet luctussd fav venenatis, lectus magna fringilla zac urna,
                                  porttitor rhoncus dolor purus non enim praesent cuz elementum
                                  sahas facilisis leot.
                              </p>
                          </div>
                          <div className="project-details-info flex-1">
                              <h3>About</h3>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                                  aliquam, purus sit amet luctus venenatis, lectus magna ve
                                  fringilla urna, porttitor rhoncus dolor purus nonds enim isi
                                  praesent elementum facilisis leo.
                              </p>
                              <p>
                                  Vel fringilla est ullamcorper eget nulla facilisi etiama ashfa
                                  dignissim diam quis enim lobortis scelerisque fermentum dui
                                  faucibus in ornare quam viverra orci sagittis eu agv he
                                  volutpat odio asas facilisis mauris sit.
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="project-details-2-img mb-24" data-aos="zoom-in">
                      <img src={projectBanner1} alt="Project" />
                  </div>
                  <div className="row mb-24">
                      <div className="col-md-6" data-aos="zoom-in">
                          <div className="project-details-3-img">
                              <img src={project3} alt="Project" />
                          </div>
                      </div>
                      <div className="col-md-6" data-aos="zoom-in">
                          <div className="project-details-3-img">
                              <img src={project4} alt="Project" />
                          </div>
                      </div>
                  </div>
                  <div className="row mb-24">
                      <div className="col-md-6" data-aos="zoom-in">
                          <div className="project-details-3-img">
                              <img src={project5} alt="Project" />
                          </div>
                      </div>
                      <div className="col-md-6" data-aos="zoom-in">
                          <div className="project-details-3-img">
                              <img src={project6} alt="Project" />
                          </div>
                      </div>
                  </div>
                  <div data-aos="zoom-in">
                      <div className="project-about-2 d-flex shadow-box mb-24">
                          <img src={bg1} alt="BG" className="bg-img" />
                          <div className="left-details">
                              <img src={icon3} alt="Icon" />
                              <ul>
                                  <li>
                                      <p>Year</p>
                                      <h4>2023</h4>
                                  </li>
                                  <li>
                                      <p>Client</p>
                                      <h4>Raven Studio</h4>
                                  </li>
                                  <li>
                                      <p>Services</p>
                                      <h4>Web Design</h4>
                                  </li>
                                  <li>
                                      <p>Project</p>
                                      <h4>Dynamic</h4>
                                  </li>
                              </ul>
                          </div>
                          <div className="right-details">
                              <h3>Description</h3>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi
                                  sfejdis aliquam, purus sit amet luctus venenatis, lectus magna
                                  sansit trandis fringilla urna, porttitor rhoncus dolor purus
                                  non enim dollors praesent tabasi elementum facilisis leo, vel
                                  fringilla est ullamcorper eget nulla facilisi etiam facilisis
                                  dignissim diam quis enim lobortis scelerisque.
                              </p>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit utsadi
                                  sfejdis aliquam, purus sit amet luctus venenatis, lectus magna
                                  sansit trandis fringilla urna, porttitor rhoncus dolor purus
                                  non enim dollors praesent tabasi elementum facilisis leo, vel
                                  fringilla est ullamcorper eget nulla facilisi etiam facilisis
                                  dignissim diam quis enim lobortis scelerisque iin fermentumisa
                                  dui faucibus in ornare.Lorem ipsum dolor sit.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="project-details-img" data-aos="zoom-in">
                  <img src={projectBanner1} alt="Project Details" />
              </div>
              <div className="container d-flex align-items-center justify-content-center" data-aos="zoom-in">
                  <a href="#" className="big-btn shadow-box"> Live preview </a>
              </div>
          </section>
          {/* Footer */}
          <Footer />
      </main>

  );
}

export default Project1;