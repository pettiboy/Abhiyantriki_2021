import React from "react";

interface Props {
  heading: string;
  text: string;
  image: string;
}

const TextAndImage = ({ heading, text, image }: Props) => {
  return (
    <div className="container p-3 text-white">
      <div className="row">
        <div className="col-sm-6 col-md-6 order-md-1">
          <div
            style={{
              marginTop: 30,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img style={{ width: "100%" }} src={image} alt="Beach Clean-up" />
          </div>
        </div>
        <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center order-md-2">
          <div className="align-items-center d-flex justify-content-center flex-column">
            <div className="fs-4 fw-bold">{heading}</div>
            <div
              className="align-items-center d-flex justify-content-center flex-column"
              style={{
                fontSize: 17,
                fontFamily: "Roboto",
                textAlign: "center",
              }}
            >
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAndImage;
