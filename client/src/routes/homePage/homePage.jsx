import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";
import Contact from "../../components/Contact/contact";
import { Link } from "react-router-dom";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title"><span className="nest">Realty</span> Nest Seekers: Connecting You to Your Perfect Home</h1>
            <p>
            At NestQuest, we make your real estate journey seamless and exciting. Whether you're looking to buy, sell, or rent, our expert team is dedicated to helping you find the perfect home. Explore our extensive listings and let us guide you every step of the way to your dream property
            </p>
            <SearchBar />
            <div className="testimonials">
  <div className="testimonial">
    <p>The team was amazing in helping us find our dream home. Highly recommend!</p>
    <h3>- Jane Doe</h3>
  </div>
  <div className="testimonial">
    <p>Professional and efficient service. We sold our property above market value.</p>
    <h3>- John Smith</h3>
  </div>
  <div className="testimonial">
    <p>Great experience with their property management services. Very reliable.</p>
    <h3>- Mary Johnson</h3>
  </div>
</div>
          </div>
        </div>

        <div className="mortgage">
  <h1>Get Pre-Approved for a Mortgage Today!</h1>
  <h5>Take the first step towards owning your dream home. Our mortgage calculator helps you understand your financial possibilities and pre-approve you for a loan in minutes.</h5>
  
    
  <button><Link to="/mortgage" style={{textDecoration:"none",color:"white"}}>Calculate Your Mortgage</Link></button>
</div>


        <div className="about">
          <div className="service">
            <p>Our Services</p>
            <ul>
              <li>
                Buying: Find your ideal home with our comprehensive listings and
                expert guidance.
              </li>
              <li>
                Selling: Get the best value for your property with our marketing
                strategies and market insights.
              </li>
              <li>
                Renting: Explore a wide range of rental properties that fit your
                lifestyle and budget.
              </li>
              <li style={{ paddingBottom: "20px" }}>
                Property Management: Professional management services to keep
                your investment property in top condition.
              </li>
            </ul>
          </div>

          <div className="feat">
            <h2>Find Best Related Properties</h2>
            <div className="pic">
              <div className="i">
                <img
                  src="https://image.cnbcfm.com/api/v1/image/103500764-GettyImages-147205632-2.jpg?v=1691157601&w=929&h=523&vtcrop=y"
                  alt=""
                />
              </div>
              
              <div className="i">
                <img
                  src="https://propertyaffaire.com/dlfcrestgurgaon/images/gallery/sample-flats/area-3898-sqft/sample-flat-3898-im-01.jpg"
                  alt=""
                />
              </div>
              <div className="i">
                <img
                  src="https://www.bankrate.com/2023/03/09124248/how-to-invest-in-real-estate-in-2024.jpeg?auto=webp&optimize=high&crop=16:9"
                  alt=""
                />
              </div>
              <div className="i">
                <img
                  src="https://th.bing.com/th/id/OIP.-d0JHr29NE0fiRqEu8MdXgHaFO?rs=1&pid=ImgDetMain"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="info1">
            <div className="img1">
              <img
                src="https://img.freepik.com/free-vector/realtor-assistance-illustration_52683-46786.jpg?t=st=1717655642~exp=1717659242~hmac=42b9ea0512922d814c5084584101c9c8106c51dacc380a2aa8e23492fd4d0f05&w=996"
                alt=""
              />
            </div>
            <div className="para" id="about">
          <h1>About Us</h1>
          <p className="next">Welcome to NestQuest</p>
          <p>
            At NestQuest, we are dedicated to turning your real estate dreams into reality. With a deep understanding of the market and a commitment to excellence, our experienced team of agents is here to guide you through every step of the buying, selling, or renting process. We pride ourselves on offering personalized, client-focused solutions that meet your unique needs and preferences. Our mission is to build long-lasting relationships with our clients, grounded in trust, transparency, and exceptional service. Discover how NestQuest can help you find the perfect place to call home or maximize the value of your property.
          </p>
        </div>

          </div>   
        </div>

        <Contact/>

        <div className="foot" style={{ backgroundColor: "black", overflow: "hidden", color:"white" }}>
          <footer className="py-5">
            <div className="container">
              <div className="row">
        
              <div className="col-md-3 mb-3">
                <h5>Contact Us</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <strong>Phone:</strong> (123) 456-7890
                  </li>
                  <li className="mb-2">
                    <strong>Email:</strong> info@nestquest.com
                  </li>
                  <li className="mb-2">
                    <strong>Address:</strong> 123 Real Estate St, City, Country
                  </li>
                </ul>
              </div>

                <div className="col-md-5 offset-md-1 mb-3">
                  <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of whats new and exciting from us.</p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                      <label htmlFor="newsletter1" className="visually-hidden">
                        Email address
                      </label>
                      <input
                        id="newsletter1"
                        type="text"
                        className="form-control"
                        placeholder="Email address"
                      />
                      <button className="btn btn-primary" type="button">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>© 2024 NestQuest.Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                  <li className="ms-3">
                    <a className="link-body-emphasis" href="#">
                      <svg className="bi" width="24" height="24">
                        <use xlinkHref="#twitter" />
                      </svg>
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-body-emphasis" href="#">
                      <svg className="bi" width="24" height="24">
                        <use xlinkHref="#instagram" />
                      </svg>
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-body-emphasis" href="#">
                      <svg className="bi" width="24" height="24">
                        <use xlinkHref="#facebook" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default HomePage;