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

export default function Footer() {
  const Footer = styled.footer`
    background-color: ${color.light};
    display: flex;
    flex-direction: column;
    padding: 72px 150px 22px 150px;
    gap: 52px;
  `;
  const ContentWrapper = styled.section`
    display: flex;
    justify-content: space-between;
  `;
  const Description = styled.p`
    color: ${color.gray};
    font-size: 16px;
    margin-top: 8px;
    max-width: 263px;
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
        <div class="page-footer-kontakami">
          <h1 class="h1-judul">Kontak Kami</h1>
          <div class="footer-link">
            <div>
              <i class="fa-solid fa-envelope" aria-hidden="true"></i>
              <a href="https://www.gmail.com" target="_blank">
                <strong>contact@gmail.com</strong>
              </a>
            </div>
            <div>
              <i class="fa-brands fa-instagram"></i>
              <a href="https://www.instagram-account.com" target="_blank">
                <strong>@instagram-account</strong>
              </a>
            </div>
            <div>
              <i class="fa-brands fa-tiktok"></i>
              <a href="https://www.tiktok_account.com" target="_blank">
                <strong>@tiktok_account</strong>
              </a>
            </div>
          </div>
        </div>
      </ContentWrapper>
      <FooterBottom>
        © Copyright 2023 Logoipsum • All Right Reserved
      </FooterBottom>
    </Footer>
  );
}
