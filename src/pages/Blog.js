import Footer from "../components/Footer";
import Header from "../components/Header";
import {blog1, blog2, star2} from "./images";

function Blog () {
  return (
      <main className="main-workdetails-page">
          {/* Header */}
            <Header />
          {/* Breadcrumb */}
          <section className="breadcrumb-area">
              <div className="container">
                  <div className="breadcrumb-content" data-aos="fade-up">
                      <p>HOME - BLOG</p>
                      <h1 className="section-heading">
                          <img src={star2} alt="Star" /> Blog with
                          rightsidebar <img src={star2} alt="Star" />
                      </h1>
                  </div>
              </div>
          </section>
          {/* Blog Items */}
          <section className="blog-area">
              <div className="container">
                  <div className="row">
                      <div className="col-md-8">
                          <div className="blog-items">
                              <div className="blog-item" data-aos="zoom-in">
                                  <div className="img-box">
                                      <img src={blog1} alt="Blog" />
                                  </div>
                                  <div className="content">
                                      <span className="meta">25 March 2022 - Comments (4) - Share (7)</span>
                                      <h1>
                                          <a href="blog-details.html">Real Men Are Those Who Face Their Problems Head On</a>
                                      </h1>
                                      <p>
                                          Sit amet luctussd fav venenatis, lectus magna fringilla
                                          inis urna, porttitor rhoncus dolor purus non enim praesent
                                          in elementum sahas facilisis leo, vel fringilla est
                                          ullamcorper eget nulla facilisi etisam dignissim diam quis
                                          enim lobortis viverra orci sagittis eu volutpat odio
                                          facilisis mauris sit.
                                      </p>
                                      <a href="blog-details.html" className="theme-btn">Read More</a>
                                  </div>
                              </div>

                              <div className="blog-item" data-aos="zoom-in">
                                  <div className="img-box">
                                      <img src={blog1} alt="Blog" />
                                  </div>
                                  <div className="content">
                                      <span className="meta">25 March 2022 - Comments (4) - Share (7)</span>
                                      <h1>
                                          <a href="blog-details.html">The Case For C# vs NodeJS</a>
                                      </h1>
                                      <p>
                                          Sit amet luctussd fav venenatis, lectus magna fringilla
                                          inis urna, porttitor rhoncus dolor purus non enim praesent
                                          in elementum sahas facilisis leo, vel fringilla est
                                          ullamcorper eget nulla facilisi etisam dignissim diam quis
                                          enim lobortis viverra orci sagittis eu volutpat odio
                                          facilisis mauris sit.
                                      </p>
                                      <a href="blog-details.html" className="theme-btn">Read More</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="blog-sidebar">
                              <div className="blog-sidebar-inner">
                                  <div className="blog-sidebar-widget search-widget">
                                      <div className="blog-sidebar-widget-inner" data-aos="zoom-in">
                                          <form className="shadow-box">
                                              <input type="text" placeholder="Search Here..." />
                                              <button className="theme-btn">Search</button>
                                          </form>
                                      </div>
                                  </div>
                                  <div className="blog-sidebar-widget recent-post-widget" data-aos="zoom-in">
                                      <div className="blog-sidebar-widget-inner shadow-box">
                                          <h3>Recent Posts</h3>
                                          <ul>
                                              <li>
                                                  <a href="blog-details.html">Consulted admitting is power acuteness.</a>
                                              </li>
                                              <li>
                                                  <a href="blog-details.html">Unsatiable entreaties may collecting Power.</a>
                                              </li>
                                              <li>
                                                  <a href="blog-details.html">Discovery incommode earnestly no he commanded</a>
                                              </li>
                                              <li>
                                                  <a href="blog-details.html">Unsatiable entreaties may collecting Power.</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="blog-sidebar-widget categories-widget" data-aos="zoom-in">
                                      <div className="blog-sidebar-widget-inner shadow-box">
                                          <h3>Categories</h3>
                                          <ul>
                                              <li><a href="blog-details.html">-Analysis</a></li>
                                              <li><a href="blog-details.html">-Firewall</a></li>
                                              <li><a href="blog-details.html">-IT Solutions</a></li>
                                              <li><a href="blog-details.html">-Security</a></li>
                                              <li><a href="blog-details.html">-Technology</a></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="blog-sidebar-widget tags-widget" data-aos="zoom-in">
                                      <div className="blog-sidebar-widget-inner shadow-box">
                                          <h3>Tags</h3>
                                          <ul>
                                              <li>
                                                  <a className="theme-btn" href="blog-details.html">SAAS</a>
                                              </li>
                                              <li>
                                                  <a className="theme-btn" href="blog-details.html">Development</a>
                                              </li>
                                              <li>
                                                  <a className="theme-btn" href="blog-details.html">UI/UX</a>
                                              </li>
                                              <li>
                                                  <a className="theme-btn" href="blog-details.html">Web</a>
                                              </li>
                                              <li>
                                                  <a className="theme-btn" href="blog-details.html">Figma</a>
                                              </li>
                                              <li>
                                                  <a className="theme-btn" href="blog-details.html">Java</a>
                                              </li>
                                              <li>
                                                  <a className="theme-btn" href="blog-details.html">WordPress</a>
                                              </li>
                                          </ul>
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

export default Blog;