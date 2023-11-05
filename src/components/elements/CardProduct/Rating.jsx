import React from "react";
import styled from "styled-components";
import IcStar from "../../../assets/icons/IcStar.svg";
import color from "../../../utils/Colors";

const RatingIcon = {
  src: IcStar,
  alt: "Icon rating",
};

export default function Rating({ ratingValue }) {
  const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
  `;
  const RatingValue = styled.p`
    font-size: 16px;
    margin-left: 2px;
    color: ${color.gray};
    font-weight: 500;
  `;
  return (
    <ContentWrapper>
      <img src={RatingIcon.src} alt={RatingIcon.alt} />
      <RatingValue>{ratingValue}</RatingValue>
    </ContentWrapper>
  );
}
