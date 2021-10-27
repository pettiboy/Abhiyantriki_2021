interface AboutProps {}

const About = ({}: AboutProps) => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <img
            src="assets/logos/about-kjsce.png"
            alt=""
            className="kj-img kjsce"
          />
          <div className="about-kjsce" style={{ color: "aliceblue" }}>
            <h1 className="text-end">KSJCE</h1>
            <p>
              K.J. Somaiya College of Engineering is a nationally reputed
              engineering college under the Somaiya Vidyavihar University (SVU)
              offering 4-year B-Tech courses to 5 branches of Engineering. The
              college hosts three exuberant festivals: Abhiyantriki, Skream, and
              Symphony.
            </p>
          </div>
        </div>
        <h1 className="text-center" style={{ color: "palegoldenrod" }}>
          ABOUT
        </h1>
        <div
          className="
          d-md-flex
          justify-content-between
          align-items-center
          flex-row-reverse
          rev
        "
        >
          <div>
            <img
              src="assets/logos/about-abhiyantriki.png"
              alt=""
              className="kj-img abhiyantriki"
            />
          </div>
          <div className="about-abhiyantriki" style={{ color: "aliceblue" }}>
            <h1 className="text-start">ABHIYANTRIKI</h1>
            <p>
              K.J. Somaiya College of Engineering is a nationally reputed
              engineering college under the Somaiya Vidyavihar University (SVU)
              offering 4-year B-Tech courses to 5 branches of Engineering. The
              college hosts three exuberant festivals: Abhiyantriki, Skream, and
              Symphony.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
