import React from "react";
import styled from "styled-components";
import color from "../utils/Colors";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.svg";

const explore = [
  { title: "Home", navigation: "/" },
  { title: "Tentang", navigation: "" },
  { title: "Blog", navigation: "" },
  { title: "Kuliner Populer", navigation: "" },
];

const service = [
  { title: "Bantuan", navigation: "" },
  { title: "Syarat & Ketentuan", navigation: "" },
  { title: "Iklan", navigation: "" },
];

const socialMedia = [
  {
    title: "contact@gmail.com",
    navigate: "gmail.com",
    icon: <i class="fa-solid fa-envelope" aria-hidden="true"></i>,
  },
  {
    title: "Instagram",
    navigate: "instagram.com",
    icon: <i class="fa-brands fa-instagram"></i>,
  },
  {
    title: "Tiktok",
    navigate: "tiktok.com",
    icon: <i class="fa-brands fa-tiktok"></i>,
  },
];

export default function Footer() {
  const Footer = styled.footer`
    padding: 72px 0px 22px 0px;
    @media screen and (max-width: 640px) {
      padding: 36px 0px 16px 0px;
    }
    @media screen and (max-width: 768px) and (min-width: 640px) {
      padding: 36px 0px 16px 0px;
    }
  `;
  const Container = styled.div`
    max-width: 1140px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 52px;
    @media screen and (max-width: 640px) {
      gap: 32px;
    }
  `;
  const ContentWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 640px) {
      flex-direction: column;
      gap: 20px;
    }
    @media screen and (max-width: 768px) and (min-width: 640px) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      align-items: center;
      justify-content: center;
    }
  `;
  const Description = styled.p`
    color: ${color.gray};
    font-size: 16px;
    margin-top: 8px;
    max-width: 263px;
    @media screen and (max-width: 768px) and (min-width: 640px) {
      max-width: 100%;
    }
  `;
  const Title = styled.h5`
    color: ${color.dark};
    font-size: 16px;
    font-weight: 500;
  `;
  const NavigationWrapper = styled.div`
    margin-top: 12px;
    text-decoration: none;
  `;
  const Navigation = styled.ul`
    text-decoration: none;
  `;
  const NavigationTitle = styled(Link)`
    text-decoration: none;
    color: ${color.gray};
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
  `;
  const FooterBottom = styled.p`
    text-align: center;
    color: ${color.gray};
    font-size: 16px;
    font-weight: 400;
  `;

  return (
    <Footer>
      <Container>
        <ContentWrapper>
          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <Description>
              Jelajahi Rasa Autentik Banyuwangi Kuliner Terfavorit menyapa di
              setiap Gigitan
            </Description>
          </div>
          <div>
            <Title>Jelajahi</Title>
            <NavigationWrapper>
              {explore.map((item) => (
                <Navigation key={item.title}>
                  <NavigationTitle to={item.navigation}>
                    {item.title}
                  </NavigationTitle>
                </Navigation>
              ))}
            </NavigationWrapper>
          </div>
          <div>
            <Title>Layanan</Title>
            <NavigationWrapper>
              {service.map((item) => (
                <Navigation key={item.title}>
                  <NavigationTitle to={item.navigation}>
                    {item.title}
                  </NavigationTitle>
                </Navigation>
              ))}
            </NavigationWrapper>
          </div>
          <div>
            <Title>Kontak Kami</Title>
            <NavigationWrapper>
              {socialMedia.map((item) => (
                <div key={item.title}>
                  <NavigationTitle to={item.navigate} target="_blank">
                    {item.icon}
                    {item.title}
                  </NavigationTitle>
                </div>
              ))}
            </NavigationWrapper>
          </div>
        </ContentWrapper>
        <FooterBottom>
          © Copyright 2023 Logoipsum • All Right Reserved
        </FooterBottom>
      </Container>
    </Footer>
  );
}
