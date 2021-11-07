import { useRef } from "react";
import { COLORS } from "../../constants/constants";
import ESNav from "./SmallScreen/ESNav";
import ESScrollSpy from "./SmallScreen/ESScrollSpy";
import Header from "./SmallScreen/Header";
import "./ES.css";

interface ESBigScreenProps {}

const ESBigScreen = ({}: ESBigScreenProps) => {
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="container">
        <div
          className="position-relative"
          style={{
            zIndex: 2,
            width: "100%",
          }}
        >
          <div
            className="position-fixed top-0"
            style={{
              // marginTop: "calc(40vh/2)",
              background: "black" + " !important",
            }}
          >
            <Header />
            <ESNav />
          </div>

          <div className={"flex-column d-flex justify-content-center"}>
            <div ref={parentScrollContainerRef} style={{}}>
              <ESScrollSpy />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ESBigScreen;
