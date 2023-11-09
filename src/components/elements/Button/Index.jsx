import React from "react";
import styled from "styled-components";
import color from "../../../utils/Colors";
import { Link } from "react-router-dom";

export default function Button({ type, title }) {
  const ButtonPrimary = styled(Link)`
    background-color: ${color.primary};
    border: none;
    color: ${color.white};
    padding: 12px 22px;
    margin: auto;
    border-radius: 28px;
    font-size: 16px;
    text-decoration: none;
  `;
  const ButtonTeritary = styled(Link)`
    background-color: transparent;
    border: none;
    color: ${color.primary};
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
  `;

  if (type === "primary") {
    return <ButtonPrimary>{title}</ButtonPrimary>;
  } else if (type === "teritary") {
    return <ButtonTeritary>{title}</ButtonTeritary>;
  }
}
