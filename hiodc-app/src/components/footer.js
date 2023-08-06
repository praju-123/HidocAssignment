import React from "react";
import Image from "next/image";
import footerLogo from "../assests/footerLogo.png";
import img1 from "../assests/footerGridImg/img-1.png";
import img2 from "../assests/footerGridImg/img-2.png";
import img3 from "../assests/footerGridImg/img-3.png";
import img4 from "../assests/footerGridImg/img-4.png";
import img5 from "../assests/footerGridImg/img-5.png";
import img6 from "../assests/footerGridImg/img-6.png";
import img7 from "../assests/footerGridImg/img-7.png";
import img8 from "../assests/footerGridImg/img-8.png";
import fb from "../assests/socialMediaLogos/fb.png";
import insta from "../assests/socialMediaLogos/insta.png";
import linkDin from "../assests/socialMediaLogos/linkDin.png";
import youTube from "../assests/socialMediaLogos/youTube.png";

const Footer = () => {
  return (
    <div>
      <footer
        class="text-white text-center text-lg-start"
        style={{ backgroundColor: "#091634" }}
      >
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
              <Image
                src={footerLogo}
                width={200}
                height={60}
                alt="Picture of the author"
              />

              <p className="mt-5 ">
                <a href="#!" style={{ marginRight: 20 }}>
                  <Image
                    src={fb}
                    width={22}
                    height={20}
                    alt="Picture of the author"
                  />
                </a>
                <a href="#!" style={{ marginRight: 20 }}>
                  <Image
                    src={insta}
                    width={22}
                    height={20}
                    alt="Picture of the author"
                  />
                </a>
                <a href="#!" style={{ marginRight: 20 }}>
                  <Image
                    src={youTube}
                    width={22}
                    height={20}
                    alt="Picture of the author"
                  />
                </a>
                <a href="#!" style={{ marginRight: 20 }}>
                  <Image
                    src={linkDin}
                    width={22}
                    height={20}
                    alt="Picture of the author"
                  />
                </a>
              </p>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase fs-6"> Reach Us</h5>

              <ul class="list-unstyled mb-0">
                <div
                  className="mt-3 "
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                  }}
                >
                  Please contact below details for any other information
                </div>
                <div className="mt-3 ">
                  <li>
                    <a href="#!" class="text-primary " style={{ fontSize: 14 }}>
                      Eamil:
                    </a>
                  </li>
                </div>
                <div>
                  <li>
                    <a href="#!" class="text-white " style={{ fontSize: 12 }}>
                      info@hidoc.co
                    </a>
                  </li>
                </div>

                <div className="mt-3 ">
                  <li>
                    <a href="#!" class="text-primary " style={{ fontSize: 14 }}>
                      Address
                    </a>
                  </li>
                </div>
                <div>
                  <li>
                    <a href="#!" class="text-white " style={{ fontSize: 12 }}>
                      Hidoc Dr.Inc. | Delaware C Corp | 1309 Coffeen Ave. Suite
                      1200, Sheridan WY, 82801
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0 fs-6">Hidoc dr. feature</h5>

              <div class="container text-center mt-4">
                <div class="row row-cols-4">
                  <a href="#!">
                    <div class="col ">
                      <Image
                        src={img1}
                        width={100}
                        height={80}
                        alt="Picture of the author"
                      />
                    </div>
                  </a>
                  <a href="#!">
                    <div class="col">
                      <Image
                        src={img2}
                        width={100}
                        height={80}
                        alt="Picture of the author"
                      />
                    </div>
                  </a>

                  <a href="#!">
                    <div class="col">
                      <Image
                        src={img3}
                        width={100}
                        height={80}
                        alt="Picture of the author"
                      />
                    </div>
                  </a>
                  <a href="#!">
                    <div class="col">
                      <Image
                        src={img5}
                        width={100}
                        height={80}
                        alt="Picture of the author"
                      />
                    </div>
                  </a>

                  <a href="#!">
                    <div class="col">
                      <Image
                        src={img5}
                        width={100}
                        height={80}
                        alt="Picture of the author"
                      />
                    </div>
                  </a>

                  <a href="#!">
                    <div class="col">
                      <Image
                        src={img6}
                        width={100}
                        height={80}
                        alt="Picture of the author"
                      />
                    </div>
                  </a>

                  <a href="#!">
                    <div class="col">
                      <Image
                        src={img7}
                        width={100}
                        height={80}
                        alt="Picture of the author"
                      />
                    </div>
                  </a>

                  <a href="#!">
                    <div class="col">
                      <Image
                        src={img8}
                        width={100}
                        height={80}
                        alt="Picture of the author"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="text-center  text-bg-light p-2 bg-secondary-subtle"
          style={{ fontSize: 12 }}
        >
          © CopyrightHidoc 2022{" "}
          <span style={{ fontWeight: "600" }}> Hidoc Dr. Inc.</span>
          <div style={{ fontSize: 10 }}>
            Terms and conditions | Privacy policy
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
