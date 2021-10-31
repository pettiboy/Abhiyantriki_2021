import React from "react";

export interface SectionNodeProps {
  data: { linkName: string; linkHash: string; component: React.ReactNode };
}

const ExpoAndSpeakerSection = ({ data }: SectionNodeProps) => {
  return <div>{data.component}</div>;
};

export default ExpoAndSpeakerSection;
