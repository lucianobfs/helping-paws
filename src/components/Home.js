import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import CountUp, { useCountUp } from "react-countup";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import handleViewport from "react-in-viewport";
import VisibilitySensor from "react-visibility-sensor";

import { FaHandHoldingHeart } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";

import img from "../assets/images/home.jpg";
import img2 from "../assets/images/home2.jpg";

import Button from "@restart/ui/esm/Button";

function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="col-lg-6">
          <h1
            className="display-5 fw-bold lh-1 mb-5 pb-5"
            style={{ fontSize: "4em", color: "lightGray" }}
          >
            Have you thought about adoption?
          </h1>
        </div>
      </div>

      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src={img2}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-6 pt-5 mt-5">
            <h2
              className="display-5 fw-bold lh-1 mb-3"
              style={{ fontSize: "3em", color: "#231F20" }}
            >
              We make the (Im)Possible
            </h2>
            <p
              className="display-5 fw-bold lh-3 mt-5"
              style={{ fontSize: "2.0em", color: "gray" }}
            >
              {" "}
              When adopting, the chosen animal is given a chance to restart.
              Meet our animals and help publicize them, here you will find
              puppies and adults, of different sizes, colors and coats, in
              addition to special animals.
            </p>
            <Button
              className="btn btn-primary mb-4 mt-5"
              to="/AllPets"
              href="/AllPets"
            >
              See our Pet List
            </Button>
          </div>
        </div>
      </div>

      <div
        className=""
        style={{ backgroundColor: "#fec84e", maxHeight: "100%" }}
      >
        <div className="card-deck mx-5 px-5 ">
          <div
            className="card border-0 text-center my-5 py-5"
            style={{ backgroundColor: "#fec84e" }}
          >
            <i className="card-img-top" src="..." alt="Card image cap">
              <FaHandHoldingHeart className="pt-2" size="50px" />
            </i>
            <div className="card-body">
              <CountUp start={0} end={25526} delay={0} duration={4} redraw={true}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <div>
                            <h1 className="fw-bold" ref={countUpRef} />
                        </div>
                    </VisibilitySensor>
                )}
              </CountUp>

              <p className="card-text fw-bold">
                Animals that we helped find a home.
              </p>
            </div>
          </div>
          <div
            className="card border-0 text-center my-5 py-5"
            style={{ backgroundColor: "#fec84e" }}
          >
            <i className="card-img-top" src="..." alt="Card image cap">
              <FaCat className="pt-2" size="50px" />
            </i>
            <div className="card-body">
              <CountUp start={0} end={347} delay={0} duration={4} redraw={true}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <div>
                            <h1 className="fw-bold" ref={countUpRef} />
                        </div>
                    </VisibilitySensor>
                )}
              </CountUp>

              <p className="card-text fw-bold">
                Daily average of registrations we receive of animals rescued or
                needing a home.
              </p>
            </div>
          </div>
          <div
            className="card border-0 text-center my-5 py-5"
            style={{ backgroundColor: "#fec84e" }}
          >
            <i className="card-img-top" src="..." alt="Card image cap">
              <FaPaw className="pt-2" size="50px" />
            </i>
            <div className="card-body">
              <CountUp start={0} end={15226754} delay={0} duration={4} redraw={true}>
                {({ countUpRef,start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                        <div>
                            <h1 className="fw-bold" ref={countUpRef} />
                        </div>
                    </VisibilitySensor>
                )}
              </CountUp>

              <p className="card-text fw-bold">
                Number of animals abandoned around the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-6 text-center">
            <iframe
              className="container-fluid"
              width="525"
              height="440"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-118.51248264312746%2C34.00807780839357%2C-118.47664833068849%2C34.024334049434735&amp;layer=mapnik&amp;marker=34.016206318030996%2C-118.49456548690796"
              style={{ border: "0px solid black" }}
            ></iframe>
          </div>
          <div className="col-md-6 pt-5">
            <h2
              className="display-5 fw-bold lh-1 mb-3 "
              style={{ fontSize: "3em", color: "#231F20" }}
            >
              Get in Touch With Us
            </h2>
            <p
              className="display-5 fw-bold lh-3 mt-5"
              style={{ fontSize: "2.0em", color: "gray" }}
            >
              {" "}
              The Pets would Love your visit
            </p>
            <div className="pt-5 mt-5">
              <h2>Our socials</h2>
              <div className="mt-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-decoration-none text-dark mr-4"
                >
                  <FaFacebookSquare color="#0A83ED" size="25px" />
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-decoration-none text-dark mr-4"
                >
                  <FaInstagram color="#C32AA3" size="25px" />
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-decoration-none text-dark mr-4"
                >
                  <FaTwitterSquare color="#00ACEE" size="25px" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

{
  /* <CountUp start={0} end={25526} delay={0} duration={4}>
                                {({ countUpRef }) => (
                                    <div>
                                        <h1 className="fw-bold" ref={countUpRef} />
                                    </div>
                                )}
                            </CountUp> */
}


{/* <CountUp start={0} end={347} delay={0} duration={4}>
                {({ countUpRef }) => (
                  <div>
                    <h1 className="fw-bold" ref={countUpRef} />
                  </div>
                )}
              </CountUp> */}


            //   <CountUp start={0} end={15226754} delay={0} duration={4}>
            //     {({ countUpRef }) => (
            //       <div>
            //         <h1 className="fw-bold" ref={countUpRef} />
            //       </div>
            //     )}
            //   </CountUp>