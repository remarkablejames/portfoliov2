import Footer from "../components/Footer";
import Header from "../components/Header";
import {bg1, me} from "./images";

function Credentials() {
  return (
      <main className="main-aboutpage">
          {/* Header */}
            <Header />
          {/* Credentials */}
          <section className="credential-area">
              <div className="container">
                  <div className="gx-row d-flex">
                      <div className="credential-sidebar-wrap" data-aos="zoom-in">
                          <div className="credential-sidebar text-center">
                              <div className="shadow-box">
                                  <img src={bg1} alt="BG" className="bg-img" />
                                  <div className="img-box">
                                      <img src={me} alt="About Me" />
                                  </div>
                                  <h2>James Niyongira</h2>
                                  <p>@remarkablejames</p>
                                  <ul className="social-links d-flex justify-content-center">
                                      <li>
                                          <a href="#"><i className="iconoir-dribbble" /></a>
                                      </li>
                                      <li>
                                          <a href="#"><i className="iconoir-twitter" /></a>
                                      </li>
                                      <li>
                                          <a href="#"><i className="iconoir-instagram" /></a>
                                      </li>
                                      <li>
                                          <a href="#"><i className="iconoir-facebook-tag" /></a>
                                      </li>
                                  </ul>
                                  <a href="/contact" className="theme-btn">Contact Me</a>
                              </div>
                          </div>
                      </div>
                      <div className="credential-content flex-1">
                          <div className="credential-about" data-aos="zoom-in">
                              <h2>About Me</h2>
                              <p>
                                  I am a highly skilled fullstack developer with expertise in
                                  Java, Python, and JavaScript. With a deep understanding of
                                  these programming languages, I have successfully developed and
                                  deployed numerous web applications and software solutions.
                                  From frontend development using JavaScript frameworks to
                                  backend implementation with Java and Python, I possess a
                                  well-rounded skill set to tackle any development challenge.
                              </p>
                              <p>
                                  My passion for creating robust, efficient, and user-friendly
                                  applications drives me to continuously learn and adapt to the
                                  latest industry trends. I am committed to delivering
                                  high-quality code and exceeding client expectations.
                              </p>
                          </div>
                          <div className="credential-edc-exp credential-education">
                              <h2 data-aos="fade-up">Education</h2>
                              <div className="credential-edc-exp-item" data-aos="zoom-in">
                                  <h4>2022 - Present</h4>
                                  <h3>
                                      <a href="https://www.algonquincollege.com/sat/program/internet-applications-web-development/">Web Development and Internet Applications</a>
                                  </h3>
                                  <h5>Algonquin college, Ottawa</h5>
                                  <p>
                                      Sit amet luctussd fav venenatis, lectus magna fringilla inis
                                      urna, porttitor rhoncus dolor purus non enim praesent in
                                      elementum sahas facilisis leo, vel fringilla est ullamcorper
                                      eget nulla facilisi etisam dignissim diam quis enim lobortis
                                      viverra orci sagittis eu volutpat odio facilisis mauris sit.
                                  </p>
                              </div>
                          </div>
                          <div className="skills-wrap">
                              <h2 data-aos="fade-up">Skills</h2>
                              <div className="d-grid skill-items gap-24 flex-wrap">
                                  <div className="skill-item" data-aos="zoom-in">
                                      <span className="percent">85%</span>
                                      <h3 className="name">Java</h3>
                                      <p>&amp; OOP concepts</p>
                                  </div>
                                  <div className="skill-item" data-aos="zoom-in">
                                      <span className="percent">78%</span>
                                      <h3 className="name">Python</h3>
                                      <p>with ML</p>
                                  </div>
                                  <div className="skill-item" data-aos="zoom-in">
                                      <span className="percent">92%</span>
                                      <h3 className="name">JavaScript</h3>
                                      <p>And it's libraries</p>
                                  </div>
                                  <div className="skill-item" data-aos="zoom-in">
                                      <span className="percent">90%</span>
                                      <h3 className="name">C#</h3>
                                      <p>&amp; .NET Core</p>
                                  </div>
                                  <div className="skill-item" data-aos="zoom-in">
                                      <span className="percent">81%</span>
                                      <h3 className="name">HTML &amp; CSS</h3>
                                      <p>&amp; Tailwindcss</p>
                                  </div>
                                  <div className="skill-item" data-aos="zoom-in">
                                      <span className="percent">87%</span>
                                      <h3 className="name">Dev Tools</h3>
                                      <p>Production-grade workflows</p>
                                  </div>
                              </div>
                          </div>
                          <div className="skills-wrap awards-wrap">
                              <h2 data-aos="fade-up">Certificates</h2>
                              <div className="d-grid skill-items gap-24 flex-wrap">
                                  <div className="skill-item" data-aos="zoom-in">
                                      <span className="percent">14 May 2020</span>
                                      <h3 className="name">React developer</h3>
                                      <p>Awarded by HackerRank</p>
                                  </div>
                                  <div className="skill-item" data-aos="zoom-in">
                                      <span className="percent">26 June 2018</span>
                                      <h3 className="name">MongoDB A. Developer</h3>
                                      <p>Awarded by MongoDB University</p>
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

export default Credentials;