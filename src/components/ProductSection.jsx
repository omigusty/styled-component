import React from "react";
import CardProduct from "./elements/CardProduct/Index";
import styled from "styled-components";
import color from "../utils/Colors";
import Button from "./elements/Button/Index";
import products from "../utils/DummyProduct";

export default function ProductSection() {
  const Section = styled.section`
    padding: 72px 0px;
    @media screen and (max-width: 640px) {
      padding: 36px 0px;
    }
  `;
  const Container = styled.div`
    max-width: 1140px;
    margin: auto;
    @media screen and (max-width: 640px) {
      max-width: 100%;
      padding: 0px 24px;
    }
  `;
  const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 640px) {
      flex-direction: column;
      align-items: center;
      gap: 18px;
    }
  `;
  const Heading = styled.h1`
    color: ${color.dark};
    font-size: 32px;
    font-weight: 500;
    @media screen and (max-width: 640px) {
      font-size: 28px;
      text-align: center;
    }
  `;
  const SubHeading = styled.p`
    color: ${color.gray};
    font-size: 18px;
    @media screen and (max-width: 640px) {
      font-size: 16px;
    }
  `;
  const Grid = styled.div`
    margin-top: 36px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    @media screen and (max-width: 640px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
    }
  `;

  return (
    <Section>
      <Container>
        <HeaderWrapper>
          <header>
            <Heading>Daftar Kuliner</Heading>
            <SubHeading>Top kuliner yang harus kamu coba</SubHeading>
          </header>
          <Button type="teritary" title="Lebih Banyak" />
        </HeaderWrapper>
        <Grid>
          {products.map((product) => (
            <CardProduct
              key={product.title}
              img={product.img}
              alt={product.alt}
              title={product.title}
              location={product.location}
              ratingValue={product.ratingValue}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
