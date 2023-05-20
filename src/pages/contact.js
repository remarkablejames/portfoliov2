import Header from "../components/Header";
import Footer from "../components/Footer";
import {bg1, icon3} from "./images";
function Contact() {
    return (
        <main className="main-aboutpage">
            {/* Header */}
            <Header />
            {/* Contact */}
            <section className="contact-area">
                <div className="container">
                    <div className="gx-row d-flex justify-content-between gap-24">
                        <div className="contact-infos">
                            <h3 data-aos="fade-up">Contact Info</h3>
                            <ul className="contact-details">
                                <li className="d-flex align-items-center" data-aos="zoom-in">
                                    <div className="icon-box shadow-box">
                                        <i className="iconoir-mail" />
                                    </div>
                                    <div className="right">
                                        <span>MAIL me</span>
                                        <h4>jame0246@algonquinlive.com</h4>
                                        <h4>jamesme85.me@gmail.com</h4>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center" data-aos="zoom-in">
                                    <div className="icon-box shadow-box">
                                        <i className="iconoir-phone" />
                                    </div>
                                    <div className="right">
                                        <span>Contact me</span>
                                        <h4>+1 613-878-8849</h4>
                                        <h4>+1 504-749-5456</h4>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center" data-aos="zoom-in">
                                    <div className="icon-box shadow-box">
                                        <i className="iconoir-pin-alt" />
                                    </div>
                                    <div className="right">
                                        <span>Location</span>
                                        <h4>171 Lees Avenue, Ottawa <br />Ontario <br />Canada</h4>
                                    </div>
                                </li>
                            </ul>
                            <h3 data-aos="fade-up">Social Info</h3>
                            <ul className="social-links d-flex align-center" data-aos="zoom-in">
                                <li>
                                    <a className="shadow-box" href><i className="iconoir-github" /></a>
                                </li>
                                <li>
                                    <a className="shadow-box" href><i className="iconoir-twitter" /></a>
                                </li>
                                <li>
                                    <a className="shadow-box" href><i className="iconoir-linkedin" /></a>
                                </li>
                            </ul>
                        </div>
                        <div data-aos="zoom-in" className="contact-form">
                            <div className="shadow-box">
                                <img src={bg1} alt="BG" className="bg-img" />
                                <img src={icon3} alt="Icon" />
                                <h1>Let’s work <span>together.</span></h1>
                                <form method="POST" action="mailer.php">
                                    <div className="alert alert-success messenger-box-contact__msg" style={{display: 'none'}} role="alert">
                                        Your message was sent successfully.
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="full-name" id="full-name" placeholder="Name *" />
                                    </div>
                                    <div className="input-group">
                                        <input type="email" name="email" id="email" placeholder="Email *" />
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="subject" id="subject" placeholder="Your Subject *" />
                                    </div>
                                    <div className="input-group">
                                        <textarea name="message" id="message" placeholder="Your Message *" defaultValue={""} />
                                    </div>
                                    <div className="input-group">
                                        <button className="theme-btn submit-btn" name="submit" type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
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

export default Contact;