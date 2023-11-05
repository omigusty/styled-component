import React from "react";
import styled from "styled-components";

export default function Image({ img, alt }) {
  const CardImage = styled.div`
    height: 170px;
    border-radius: 12px;
    overflow: hidden;
  `;
  const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: auto;
  `;
  return (
    <CardImage>
      <Image src={img} alt={alt} />
    </CardImage>
  );
}
