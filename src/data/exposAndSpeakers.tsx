import Center from "../components/Center/Center";
import { ScrollSpyNode } from "../components/ScrollSpy/ScrollSpy";
import TextAndButton from "../components/TextAndButton/TextAndButton";

export const exposAndSpeakersData: ScrollSpyNode[] = [
  {
    linkHash: "panel",
    linkName: "Panel Session",
    component: (
      <Center>
        <h1 className="my-5 text-center" style={{ fontSize: "50px" }}>
          Panel Session
        </h1>
        <TextAndButton
          paraText={`A live session with connoisseurs from myriad backgrounds,
              the Speaker Session at Abhiyantriki is sure to leave you wanting
              for more! Abhiyantriki has previously hosted notable speakers like
              the Late Dr A.P.J Abdul Kalam, Dr Raghuram Rajan, the former RBI Governor,
              His Holiness the Dalai Lama, and many more!`}
          buttonHref="#"
          buttonText="Register"
        />
      </Center>
    ),
  },
  {
    linkHash: "speaker",
    linkName: "Speaker Session",
    component: (
      <Center>
        <h1 className="my-5 text-center" style={{ fontSize: "50px" }}>
          Speaker Session
        </h1>
        <TextAndButton
          paraText={`A live session with the connoisseurs from myraid backgrounds, 
          the SPeaker Session at Abhiyantriki is sure to leave you wanting for 
          more! Abhiyantriki has previously hosted notable speakers like Late Dr 
          A.P.J Abdul Kalam, Dr. Raghuram Rajan, the former RBI Governer, 
          His Holiness the Dalai Lama and many more!`}
          buttonHref="#"
          buttonText="Register"
        />
      </Center>
    ),
  },
  {
    linkHash: "internship",
    linkName: "Internship Expo",
    component: (
      <Center>
        <h1 className="my-5 text-center" style={{ fontSize: "50px" }}>
          Internship Expo
        </h1>
        <TextAndButton
          paraText={`Internship expo is one of the major events at Abhiyantriki. The main
              objective of this expo is to provide students with a diverse range
              of internship opportunities. These internships help the students
              acquaint with a lot of new skills and give them the required work
              experience. Internships play an essential role in magnifying the
              morale of the students.`}
          buttonHref="#"
          buttonText="Register"
        />
      </Center>
    ),
  },
  {
    linkHash: "tech",
    linkName: "Tech Expo",
    component: (
      <Center>
        <h1 className="my-5 text-center" style={{ fontSize: "50px" }}>
          Tech Expo
        </h1>
        <TextAndButton
          paraText={`A display of the most innovative technologies from around the
            country, ranging from humanoid robots to high-speed drones, Tech
            Expo is the most eye-catching event of Abhiyantriki.
            Exhibits from some big names like DRDO, BARC, IMD, DAE and
            many more at the tech expo are sure to ignite a fire for science and
            technology and leave you inquisitive!`}
          buttonHref="#"
          buttonText="Register"
        />
      </Center>
    ),
  },
];
