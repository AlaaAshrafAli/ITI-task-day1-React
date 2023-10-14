import React from "react";
import style from "./Artist.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const ArtistCard = () => {
  return (
    <div className="col-lg-6 col-md-12">
      <div className="container d-flex justify-content-center align-items-center">
        <div className={[style.card, style.bgNone].join(" ")} style={{ width: 500 }}>
          <div className="row">
            <div className="col-sm-5">
              <img className="card-img" src={"images/artist-image.png"} alt="Artist Card" />
            </div>
            <div className="col-sm-7">
              <div className="card-body">
                <h5 className="card-title py-3">DJ Remerson Huke</h5>
                <h6>Lead DJ On Deadpoll</h6>
                <p className="card-text">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.
                </p>
              </div>
              <section className="mb-4 py-2">
                <a className="btn btn-floating m-1" href="#!">
                  <FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: "#f7ea66" }} />
                </a>
                <a className="btn btn-floating m-1" href="#!">
                  <FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: "#f7ea66" }} />
                </a>
                <a className="btn btn-floating m-1" href="#!">
                  <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#f7ea66" }} />
                </a>
                <a className="btn btn-floating m-1" href="#!">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: "#f7ea66" }} />
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Artist() {
  return (
    <div className="bg-violet  d-flex justify-content-around">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-yellow my-4">Our Halloween's Artist</h2>
        <p className="text-white py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, libero.</p>
        <div className="row mt-5">
          <ArtistCard />
          <ArtistCard />
        </div>
      </div>
    </div>
  );
}
