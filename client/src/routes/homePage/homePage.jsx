import { useContext, useEffect } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import Contact from "../../components/Contact/contact";
import { Link } from "react-router-dom";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  // Scroll animation effect
  useEffect(() => {
    const animateElements = document.querySelectorAll('.fadeIn');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    });

    animateElements.forEach(el => {
      observer.observe(el);
    });
  }, []);

  return (
    <div className="homePage">
      {/* Hero Section */}
      <div className="heroSection fadeIn">
        <div className="textContainer">
          <h1 className="title">
            <span className="creators">Creators</span> Cafe: Where Influencers Meet Possibilities
          </h1>
          <p>
          <div className="gifContainer">
          <img src="cam.gif" alt="Animation" className="gifAnimation" />
          
        </div>
            Welcome to Creators Cafe, the platform that bridges the gap between influencers and item/space owners. Discover the perfect opportunities to collaborate, create, and grow.
          </p>
          <SearchBar />
          
        </div>
      </div>

      {/* Benefits Section */}
      <div className="influencerBenefits fadeIn">
        <h1>Why Creators Cafe?</h1>
        <h5>Take your content creation to the next level by discovering unique spaces and items for collaboration.</h5>
        <Link to="/join" className="joinButton">Join Us Today!</Link>
      </div>

      {/* Features Section */}
      <div className="about fadeIn">
        <h2 className="sectionTitle">Our Features</h2>
        <div className="featureCards">
          <div className="featureCard">
            <h3>Exclusive Spaces</h3>
            <p>Discover unique spaces for photo shoots, events, and more.</p>
          </div>
          <div className="featureCard">
            <h3>Collaborations</h3>
            <p>Connect with brands and item owners for mutual growth.</p>
          </div>
          <div className="featureCard">
            <h3>Networking</h3>
            <p>Build a community and collaborate with other creators.</p>
          </div>
          <div className="featureCard">
            <h3>Customized Offers</h3>
            <p>Get offers tailored to your niche and content style.</p>
          </div>
        </div>

        <h2 className="sectionTitle">Explore Equipments for Creators</h2>
        <div className="items">
          <div className="item">
            <img src="cam.jpeg" alt="Camera Stand" />
            <p>Camera Stand</p>
          </div>
          <div className="item">
            <img src="camera.jpeg" alt="Professional Camera" />
            <p>Professional Camera</p>
          </div>
          <div className="item">
            <img src="mic.jpg" alt="Studio Microphone" />
            <p>Studio Microphone</p>
          </div>
          <div className="item">
            <img src="light.webp" alt="Lighting Kit" />
            <p>Lighting Kit</p>
          </div>
        </div>

        <h2 className="sectionTitle">Explore Top Collaboration Spaces <img src="collabo.gif" alt="Animation" className="gifAnimation" /></h2>
        <div className="pic">
          <div className="i">
            <img src="img1.jpeg" alt="Collaboration Space 1" />
          </div>
          <div className="i">
            <img src="img2.jpeg" alt="Collaboration Space 2" />
          </div>
          <div className="i">
            <img src="img3.webp" alt="Collaboration Space 3" />
          </div>
          <div className="i">
            <img src="img4.jpeg" alt="Collaboration Space 4" />
          </div>
        </div>

        <div className="info1 fadeIn">
          <div className="img1">
            <img src="img5.jpeg" alt="About Us" />
          </div>
          <div className="para" id="about">
            <h1>About Us</h1>
            <p className="next">Welcome to Creators Cafe</p>
            <p>
              Creators Cafe is your go-to platform for finding the best collaboration opportunities. Whether you're an influencer looking for unique spaces or a brand aiming to reach a wider audience, we've got you covered. Our platform is built on trust, creativity, and mutual success.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <div className="foot fadeIn">
        <footer className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 mb-3">
                <h5>Contact Us</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><strong>Phone:</strong> (123) 456-7890</li>
                  <li className="mb-2"><strong>Email:</strong> info@creatorscafe.com</li>
                  <li className="mb-2"><strong>Address:</strong> 456 Creative Ave, City, Country</li>
                </ul>
              </div>

              <div className="col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Get the latest updates on collaborations and trends.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                    <button className="btn btn-primary" type="button">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>© 2024 Creators Cafe Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter" /></svg></a></li>
                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram" /></svg></a></li>
                <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook" /></svg></a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;