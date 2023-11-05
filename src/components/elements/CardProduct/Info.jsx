import React from "react";
import styled from "styled-components";
import IcLocation from "../../../assets/icons/IcLocation.svg";
import color from "../../../utils/Colors";

const LocationIcon = {
  src: IcLocation,
  alt: "Location icon",
};

export default function Info({ title, location }) {
  const Title = styled.h5`
    font-size: 20px;
    color: ${color.dark};
    text-overflow: ellipsis;
    font-weight: 500;
  `;
  const Location = styled.div`
    display: flex;
    margin-top: 2px;
  `;
  const LocationName = styled.p`
    margin-left: 4px;
    font-size: 16px;
    color: ${color.gray};
    font-family: Poppins;
    font-weight: 400;
  `;

  return (
    <div>
      <Title>{title}</Title>
      <Location>
        <img src={LocationIcon.src} alt={LocationIcon.alt} />
        <LocationName>{location}</LocationName>
      </Location>
    </div>
  );
}
