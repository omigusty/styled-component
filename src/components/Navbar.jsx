import React from "react";
import { Link, NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";
import color from "../utils/Colors";
import LogoImage from "../assets/img/Logo.svg";

const Logo = {
  src: LogoImage,
  alt: "Logo",
};

const navigation = [
  { title: "Home", navigate: "/" },
  { title: "About us", navigate: "/about" },
  { title: "Blog", navigate: "/blog" },
  { title: "Contact", navigate: "/contact" },
];

export default function Navbar() {
  const Nav = styled.nav`
    padding: 15px 0px;
    background-color: ${color.light};
    @media screen and (max-width: 640px) {
      padding: 12px 0px;
    }
    @media screen and (max-width: 768px) and (min-width: 640px) {
      padding: 12px 0px;
    }
  `;
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1140px;
    margin: auto;
    @media screen and (max-width: 640px) {
      max-width: 100%;
      padding: 0px 24px;
    }
    @media screen and (max-width: 768px) and (min-width: 640px) {
      max-width: 100%;
      padding: 0px 24px;
    }
  `;
  const Brand = styled.img`
    @media screen and (max-width: 640px) {
      width: 120px;
    }
  `;
  const NavLink = styled.div`
    display: flex;
    gap: 28px;
    @media screen and (max-width: 640px) {
      gap: 12px;
    }
  `;
  const NavLinkItem = styled(BaseNavLink)`
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    color: ${color.gray};
    &.active {
      color: ${color.primary};
    }
    @media screen and (max-width: 640px) {
      font-size: 12px;
    }
  `;

  return (
    <Nav>
      <Container>
        <Link to="/">
          <Brand src={Logo.src} alt={Logo.alt} />
        </Link>
        <NavLink>
          {navigation.map((item, index) => (
            <NavLinkItem to={item.navigate} key={index}>
              {item.title}
            </NavLinkItem>
          ))}
        </NavLink>
      </Container>
    </Nav>
  );
}
