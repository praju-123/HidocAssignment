import React from "react";
import Image from "next/image";
import logo from "../assests/logo.jpg";
import frame from "../assests/Frame.png";
import searchIcon from "../assests/searchIcon.png";

const Header = () => {
  return (
    <main>
      {" "}
      <div className="card row align-items-center">
        <div
          className="card-header d-flex flex-row justify-content-between bg-light.bg-gradient "
          style={{ height: 40 }}
        >
          <div>
            <Image
              src={logo}
              width={80}
              height={20}
              alt="Picture of the author"
            />
          </div>
          <div className="fw-light" style={{ fontSize: 12 }}>
            Drugs | Calculators | Articles | News | Quizzes | surveys |
            Guidlines
          </div>
          <div style={{ marginBottom: 20 }}>
            <Image
              src={frame}
              width={20}
              height={20}
              alt="Picture of the author"
            />
            <button
              type="button"
              className="btn btn-outline-secondary text-center"
              style={{
                borderRadius: 20,
                height: 20,
                fontSize: 8,
                alignSelf: "center",

                color: "red",
              }}
              disabled
            >
              294
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary m-lg-2 text-center"
              style={{
                borderRadius: 33,

                height: 25,
                width: 8,
                fontSize: 8,
                textAlign: "center",

                color: "black",
              }}
              disabled
            >
              A
            </button>
          </div>
        </div>
        <div
          className="card-header d-flex justify-content-center bg-info bg-opacity-10 fs-6 "
          style={{ height: 40 }}
        >
          Your one stope solution for{" "}
          <span
            style={{ whiteSpace: "pre", fontWeight: "600", color: "skyblue" }}
          >
            {" "}
            MEDIACAL LEARNING & UPDATES
          </span>
        </div>
        <div className="card-body d-flex justify-content-center bg-light">
          Get knowledge of the
          <span
            style={{ whiteSpace: "pre", fontWeight: "600", color: "skyblue" }}
          >
            {" "}
            APROVED DRUGS
          </span>
          <div
            style={{
              width: "20%",

              marginLeft: 100,
              height: 10,
            }}
          >
            <div
              className="input-group flex-nowrap mb-5 rounded-pill bg-info bg-opacity-10 "
              style={{ height: 25, top: -7 }}
            >
              <input
                type="text"
                class="form-control bg-info bg-opacity-10  w-10"
                placeholder="Enter Drug Name"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />

              <Image
                src={searchIcon}
                width={20}
                height={15}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
