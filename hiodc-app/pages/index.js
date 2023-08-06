import react, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLaoding] = useState(true);
  const [drugDetails, setDrugDetails] = useState();

  useEffect(() => {
    axios
      .post("http://devapi.hidoc.co:8080/hidoc-us/drug/getDrugList")
      .then((response) => {
        setData(response.data);
        setLaoding(false);
        console.log("DATA", data);
      });
  }, []);

  const showDrugDtails = (details) => {
    setDrugDetails(details);
  };

  if (loading) return <div>Loading</div>;

  return (
    <main>
      <Header />

      <div class="container text-center mt-4">
        <div class="row  ">
          <div
            class=" mt-2 col-8"
            style={{ fontSize: 10, color: "gray", fontWeight: "400" }}
          >
            Dailymed Drug Database: The DailyMed database cointains 143072
            labeling sub,itted to <br />
            the food and drug administrater (FDA) by companies. DailyNed does
            not contain a <br /> complete listing of labelling for FDA-
            regulated products(eg. labeling that is not submitted <br /> to the
            FDA )
          </div>
          <div class="col-4 ">
            <div class="row">
              <div class="col">
                <button type="button" class="btn btn-outline-secondary btn-sm">
                  Anethesioa
                </button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-outline-secondary btn-sm">
                  Cardiology
                </button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-outline-secondary btn-sm">
                  Critical Care
                </button>
              </div>
            </div>

            <div class="row mt-2">
              <div class="col">
                <button type="button" class="btn btn-outline-secondary btn-sm">
                  Dentistry
                </button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-outline-secondary btn-sm">
                  Dermatology
                </button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-outline-secondary btn-sm">
                  Diebetology
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center mt-4">
        <div
          class="row justify-content-center  "
          style={{
            height: 50,
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          <div
            class="col-4 border border-dark border-2  "
            style={{ marginRight: 7 }}
          >
            <div className="mt-2">Drug Data</div>
          </div>
          <div class="col-4 border border-dark border-2 ">
            <div className="mt-2">Drug Details</div>
          </div>
        </div>
        <div class="row justify-content-center" style={{ height: 150 }}>
          <div
            class="col-4 border border-top-0 border-dark h-100 border-2 fs-4 fw-light   "
            style={{ marginRight: 7, height: 100 }}
          >
            {data.data.drugData.map((val, index) => (
              <div
                class="icon-link-hover"
                key={val.id}
                onMouseOver={() => showDrugDtails(val.drugDetails)}
              >
                {val.drugName}
              </div>
            ))}
          </div>
          <div class="col-4 border border-top-0 border-dark h-100 border-2 pt-2 ">
            {/* <div class="text-info ">FERREM OXYDATOM PALLETS</div> */}
            <div style={{ fontSize: 10, fontWeight: "300" }}>
              {drugDetails}
              {/* jsbfufgwufhknfcfbufhikd hwiofjfionv bnuwefn <br />
              anfiqjhqimdk BWEFUWHFIQW <br /> jsbfufgwufhknfcfbufhikd
              hwiofjfionv bnuwefn <br /> */}
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center mt-5">
        <div class="row">
          <div class="col-6">
            <div>
              <div style={{ fontWeight: "700", fontSize: 20 }}>
                Explore more on hidoc Dr.
              </div>

              <div class="row justify-content-md-center">
                <div class="col col-lg-4"></div>
                <div class="col col-lg-10">
                  <div> news</div>

                  <div style={{ fontWeight: "500", fontSize: 20 }}>
                    {data.data.exploreMore.news.title}
                  </div>
                  <div
                    style={{ fontSize: 12, color: "gray", fontWeight: "400" }}
                  >
                    {data.data.exploreMore.news.description}
                  </div>
                  <div
                    style={{ fontSize: 10, color: "gray", fontWeight: "400" }}
                  >
                    posted on {data.data.exploreMore.news.publishedAt}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col"
            style={{ fontSize: 12, color: "gray", fontWeight: "400" }}
          >
            CRITICAL CARE {"  "} . 10 Mar 2023
            <div className="fs-5 text-left text-dark lh-sm">
              Discovering <br /> Arthogyroposis Understanding <br /> the causes
              Symtoms and Dignosis
            </div>
            <div>
              Arthogyroposis is also know as curvature of joints, is the rare
              condition that affects the joints in the body
            </div>
          </div>
          <div
            class="col"
            style={{ fontSize: 12, color: "gray", fontWeight: "400" }}
          >
            CRITICAL CARE {"  "} . 18 May 2023
            <div className="fs-5 text-left text-dark lh-sm">
              The science behind the crest disease: Exploring the underlying
              mechanisms
            </div>
            <hr />
            <div
              class="col"
              style={{ fontSize: 12, color: "gray", fontWeight: "400" }}
            >
              CRITICAL CARE {"  "} . 18 May 2023
            </div>
            <div className="fs-5 text-left text-dark lh-sm">
              Discovering <br /> Arthogyroposis Understanding <br /> the causes
              Symt
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
