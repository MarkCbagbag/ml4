import React from "react";
import "./footer.css";
import "./bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppStoreIos,
  faFacebook,
  faGooglePlay,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { ArrowRightCircleFill } from "react-bootstrap-icons";

const fbicon = <FontAwesomeIcon icon={faFacebook} />;
const twtIcon = <FontAwesomeIcon icon={faTwitter} />;
const instaIcon = <FontAwesomeIcon icon={faInstagram} />;
const appleIcon = <FontAwesomeIcon icon={faAppStoreIos} />;
const playstoreIcon = <FontAwesomeIcon icon={faGooglePlay} />;

function Footer() {
  return (
    <div>
      <div>
        <div
          class="bottom-sidebar kopa-area"
          style={{ backgroundColor: "rgba(66,65,65,1.00)", height: "-50%" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div style={{ textAlign: "center", fontSize: "25px" }}>
                  <p class="bottom-logo-title" style={{ color: "white" }}>
                    About Me
                  </p>
                </div>

                <div
                  class="bottom-logo-caption"
                  style={{ borderRight: "2px solid white", color: "white" }}
                >
                  <p> Jexter Datu Web System. Lorem ipsum doler sit amet</p>
                  <p>
                    EMAIL : jexterreigner.datu@gnc.edu.ph <br />
                    Phone : 09271345673
                  </p>
                </div>
              </div>

              <div class="col-md-6">
                <article class="entry-item">
                  <div class="entry-content">
                    <h4
                      class="entry-title style-03 newsletter-title"
                      style={{ color: "#849b0d" }}
                    >
                      Web System Sign Up
                    </h4>
                    <p style={{ color: "white" }}>
                      Sign up for the Best Made Web System to get the latest
                      news, announcements, special offers and event information
                    </p>
                    <div class="enter-mail">
                      <form method="post" action="#">
                        <input
                          class="mail-input"
                          placeholder="Your email address"
                          type="text"
                          value=""
                          name="mail"
                          id="mail"
                        />
                        <button
                          type="submit"
                          class="mail-submit"
                          style={{ color: "white", fontSize: "20px" }}
                        >
                          <ArrowRightCircleFill />
                        </button>
                      </form>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div
              class="widget millside-module-mail"
              style={{ marginLeft: "60%", marginTop: "1%" }}
            >
              <div
                class="kopa-social-links-2 text-center"
                style={{ marginLeft: " -150%" }}
              >
                <div
                  class="container"
                  style={{ marginBottom: "2%", marginTop: " 2%" }}
                >
                  <div class="row text-center">
                    <p>
                      <a href="#" class="btn btn-store">
                        <span style={{ fontSize: "200%", float: "left" }}>
                          {appleIcon}
                        </span>
                        <span
                          class="btn-label"
                          style={{
                            display: " block",
                            textAlign: " center",
                            lineHeight: " 1",
                          }}
                        >
                          &nbsp;&nbsp;Download on the
                        </span>
                        <span
                          class="btn-caption"
                          style={{
                            display: " block",
                            textAlign: " center",
                            lineHeight: " 2",
                          }}
                        >
                          &nbsp;App Store
                        </span>
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a href="#" class="btn btn-store">
                        <span style={{ fontSize: "200%", float: "left" }}>
                          {playstoreIcon}
                        </span>
                        <span
                          class="btn-label"
                          style={{
                            display: "block",
                            textAlign: " right",
                            lineHeight: " 1",
                          }}
                        >
                          {" "}
                          &nbsp; Download on the
                        </span>
                        <span
                          class="btn-caption"
                          style={{
                            display: " block",
                            textAlign: " right",
                            lineHeight: " 2",
                          }}
                        >
                          &nbsp;Google Play
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
                <ul class="clearfix">
                  <li>
                    <a href="#">{fbicon}</a>
                  </li>
                  <li>
                    <a href="#">{twtIcon}</a>
                  </li>
                  <li>
                    <a href="#">{instaIcon}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- row -->  */}
      </div>
      {/* <!-- container --> */}

      {/* <!-- bottom sidebar --> */}

      <footer
        class="kopa-page-footer"
        style={{ backgroundColor: "rgba(232,214,196,1.00)" }}
      >
        <div class="container" style={{ marginBottom: "-2%" }}>
          <p class="text-center" style={{ marginTop: "-2%" }}>
            Copyright © 2021{" "}
            <a href="https://www.facebook.com/jexterdatu">
              {" "}
              JexterReignerDatu{" "}
            </a>{" "}
            All Rights Reserved.
          </p>
        </div>
        {/* <!-- container --> */}
      </footer>
    </div>
  );
}

export default Footer;
