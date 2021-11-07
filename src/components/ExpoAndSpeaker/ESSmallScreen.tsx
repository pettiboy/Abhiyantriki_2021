import { useRef } from "react";
import { COLORS } from "../../constants/constants";
import ESNav from "./SmallScreen/ESNav";
import ESScrollSpy from "./SmallScreen/ESScrollSpy";
import Header from "./SmallScreen/Header";
import "./ES.css";
import "./ScrollPadding.css";
import Footer from "../Footer/Footer";

interface ESBigScreenProps {}

const ESBigScreen = ({}: ESBigScreenProps) => {
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {/* top container */}
      <div
        className="position-fixed w-100"
        style={{ background: COLORS.PRIMARY, zIndex: 1 }}
      >
        <Header />
        <ESNav />
      </div>

      {/* bottom container */}
      <div className="flex-column d-flex justify-content-center">
        <div
          ref={parentScrollContainerRef}
          style={{ marginTop: 90, paddingBottom: 0 }}
        >
          <ESScrollSpy />
        </div>
      </div>

      {/* hard coded footer to prevent footer on ESBigScreen */}
      <Footer />
    </>
  );
};

export default ESBigScreen;
