import React from "react";
import { Link, NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";
import color from "../utils/Colors";
import LogoImage from "../assets/img/Logo.svg";

const Logo = {
  src: LogoImage,
  alt: "Logo",
};

export default function Navbar() {
  const Nav = styled.nav`
    padding: 15px 0px;
    background-color: ${color.light};
  `;
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1140px;
    margin: auto;
  `;
  const NavLink = styled.div`
    display: flex;
    gap: 28px;
  `;
  const NavLinkItem = styled(BaseNavLink)`
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    color: ${color.gray};
    &.active {
      color: ${color.primary};
    }
  `;

  return (
    <Nav>
      <Container>
        <Link to="/">
          <img src={Logo.src} alt={Logo.alt} />
        </Link>
        <NavLink>
          <NavLinkItem to="/">Home</NavLinkItem>
          <NavLinkItem to="/about">About us</NavLinkItem>
          <NavLinkItem to="/blog">Blog</NavLinkItem>
          <NavLinkItem to="/contact">Contact</NavLinkItem>
        </NavLink>
      </Container>
    </Nav>
  );
}
