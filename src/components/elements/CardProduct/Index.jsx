import React from "react";
import Image from "./Image";
import Info from "./Info";
import Rating from "./Rating";
import styled from "styled-components";

export default function CardProduct({
  img,
  alt,
  title,
  location,
  ratingValue,
}) {
  const Card = styled.div``;
  const ContentWrapper = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  return (
    <Card>
      <Image img={img} alt={alt} />
      <ContentWrapper>
        <Info title={title} location={location} />
        <Rating value={ratingValue} />
      </ContentWrapper>
    </Card>
  );
}
