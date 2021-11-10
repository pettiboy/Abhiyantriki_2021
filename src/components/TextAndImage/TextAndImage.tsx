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
        <div className="col-sm-6 col-md-6">
          <div
            style={{
              marginTop: 30,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img className="w-100" src={image} alt="Beach Clean-up" />
          </div>
        </div>
        <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center">
          <div className="fs-4 fw-bold">{heading}</div>
          <div
            className="text-center"
            style={{
              fontSize: 14,
              fontFamily: "Roboto",
              textAlign: "center",
            }}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextAndImage;
