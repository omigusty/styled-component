import React from "react";
import styled from "styled-components";
import color from "../../../utils/Colors";
import Body from "./Body";
import Icon from "./Icon";

export default function CardFeature({ title, desc }) {
  const Container = styled.div`
    padding: 18px;
    display: flex;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    background-color: ${color.light};
    border-radius: 12px;
    @media screen and (max-width: 640px) {
      flex-direction: column;
      align-items: start;
      gap: 8px;
    }
  `;
  return (
    <Container>
      <Icon />
      <Body title={title} desc={desc} />
    </Container>
  );
}
