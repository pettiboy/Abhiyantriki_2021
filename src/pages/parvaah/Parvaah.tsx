import TextAndButton from "../../components/TextAndButton/TextAndButton";
import "./parvaah.css";

interface ParvaahProps {}

const Parvaah = ({}: ParvaahProps) => {
  return (
    <div>
      <div className="container mb-5">
        <div className="col">
          <h1
            className="text-white text-center my-5"
            style={{ fontSize: "50px", fontFamily: "Roboto" }}
          >
            Parvaah
          </h1>

          <div className="d-sm-flex justify-content-around align-items-center text-center mb-5">
            <img
              src="/assets/logos/Parvaah Logo.png"
              alt=""
              className="parvaah logo"
            />
            <div className="vl"></div>
            <img
              src="/assets/logos/Sustainable Reality logo.png"
              alt=""
              className="parvaah logo"
            />
          </div>

          <TextAndButton
            paraText="Parvaah, the social wing of K.J Somaiya College of Engineering works
            towards the social causes of the society and improving the
            conditions of the less privileged. Team Parvaah, through its various
            initiatives, has been striving to spread maximum social awareness in
            the community."
            buttonText="Volunteer"
            buttonHref="#"
          />
        </div>
      </div>

      <div>
        {/* <!-- image left text right --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center">
              <div className="align-items-center d-flex justify-content-center flex-column">
                <div className="fs-1 fw-bold">Beach Clean-up (2017)</div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column"
                  style={{ fontSize: 20, fontFamily: "Roboto" }}
                >
                  Team Parvaah was a part of the Versova Beach clean up drive. A
                  lot of student organisations across Mumbai joined hands to
                  save the beach. Cleaning and hygiene issues have always been
                  of utmost importance in our city.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                style={{
                  marginTop: "30",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src="/assets/images/events/Events.png"
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- image right text left --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center order-md-2">
              <div className="align-items-center d-flex justify-content-center flex-column">
                <div className="fs-1 fw-bold">Beach Clean-up (2017)</div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column"
                  style={{ fontSize: 20, fontFamily: "Roboto" }}
                >
                  Team Parvaah was a part of the Versova Beach clean up drive. A
                  lot of student organisations across Mumbai joined hands to
                  save the beach. Cleaning and hygiene issues have always been
                  of utmost importance in our city.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 order-md-1">
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src="../assets/images/events/Events.png"
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parvaah;
