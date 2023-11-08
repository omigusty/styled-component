import React from "react";
import styled from "styled-components";
import color from "../../../utils/Colors";
import Feature from "../../../assets/icons/IcLight.svg";

const FeatureIcon = {
  src: Feature,
  alt: "Location Icon",
};

export default function Icon() {
  const Circle = styled.div`
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.primary_100};
    border-radius: 50%;
  `;
  return (
    <Circle>
      <img src={FeatureIcon.src} alt={FeatureIcon.alt} />
    </Circle>
  );
}
