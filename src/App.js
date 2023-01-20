import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="overlay"></div>
      <main className="mainbox">
        <Navbar />
        <div className="hero d-flex justify-content-center align-item-center flex-column">
          <div className="text flex-class ">
          <div className="hero-text ">
            <h1 className="fw-bold hero-heading">Welcome to </h1>
            <h1 className="fw-bold hero-heading">AllSolutionPoint</h1>
            <p className="">We are here for you and for any query 
            related to Employment registration and
           Saksham contact me.</p>
            <Link  to="#call" className="btn btn-success" smooth>
              Conact Me
            </Link>
          </div>
          </div>
          <div className="hero-images d-flex align-items-baseline justify-content-between">
            <div className="images1 hero-image-size zoom"></div>
            <div className="images5 hero-image-size zoom d-none d-sm-block d-sm-none d-md-block"></div>
            <div className="images6 hero-image-size zoom d-none d-sm-block d-sm-none d-md-block"></div>
            <div className="images2 hero-image-size zoom2"></div>
            <div className="images3 hero-image-size zoom2"></div>
            <div className="images7 hero-image-size zoom2 d-none d-sm-block d-sm-none d-md-block"></div>
            <div className="images4 hero-image-size zoom"></div>
          </div>
        </div>
        <div className="services flex-class flex-column mt-5">
          <div className="service1  flex-class flex-column flex-lg-row flex-md-row " >
            <div className="service1-image service-image-size "></div>
            <div className="service-text" id="employment">
              <div className="service-logo flex-class"  >
                <img src="./work.png" alt="work logo" className="" />
              </div>
              <div className="service-heading ">
                <h1>Employment Registration</h1>
              </div>
              <p>Seeking job has becoming easier , Government of Haryana</p>
              <button className="service-btn btn btn-dark">Apply Here</button>
            </div>
          </div>
          <div className="service2  flex-class flex-column flex-lg-row-reverse flex-md-row-reverse">
            <div className="service2-image service-image-size"></div>
            <div className="service-text"  id="saksham">
              <div className="service-logo  flex-class">
                <img src="./money.png" alt="money logo" className="" />
              </div>
              <div className="service-heading">
                <h1>Saksham Registration</h1>
              </div>
              <p>
                Any doubt regarding, How to apply online for Haryana Saksham
                Yojana? To apply, Click on below button.
              </p>
              <button className=" service-btn btn btn-dark">Apply Here</button>
            </div>
          </div>
        </div>
        <div className="contact  flex-class flex-column" >
          <div className="flex-class flex-column">
            <h1 className="fw-bold ">Need urgent help?</h1>
            <p className="sos">
              Don't worry we are here to help you.
              <br />
              Just tap the below button to call
            </p>
          </div>
          <a href="tel:9068136628">
            <div className="shadow-box flex-class" id="call" >
              <img src="./phone.png" alt="" className="call-logo" />
            </div>
          </a>
          <p className="fw-bold">
            <strong>Introvert ? Don't want to call.</strong>
          </p>
          <p className="subheading">Then choose other mode of communication.</p>
          <div className="social d-flex">
            <a href="mailto:enjoylife.dheeraj@gmail.com">
              <div className="shadow-box-small flex-class">
                <img src="./mail.png" alt="" className="social-logo" />
              </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=9068136628&text=Hello%20!">
              <div className="shadow-box-small flex-class">
                <img src="./whatsapp.png" alt="" className="social-logo" />
              </div>
            </a>
          </div>
        </div>
      </main>
      <footer className="bg-dark text-light foot flex-class">
        <p className="mt-2">Copyright @Dy28</p>
      </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
