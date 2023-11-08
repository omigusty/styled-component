import React from "react";
import styled from "styled-components";
import color from "../../../utils/Colors";

export default function Body({ title, desc }) {
  const Title = styled.h6`
    color: ${color.dark};
    font-size: 18px;
    font-weight: 500;
  `;
  const Description = styled.p`
    color: ${color.gray};
    font-size: 16px;
  `;
  return (
    <div>
      <Title>{title}</Title>
      <Description>{desc}</Description>
    </div>
  );
}
