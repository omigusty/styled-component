import React from "react";
import CardProduct from "./elements/CardProduct/Index";
import styled from "styled-components";
import color from "../utils/Colors";
import Button from "./elements/Button/Index";
import products from "../utils/DummyProduct";

export default function ProductSection() {
  const Section = styled.section`
    padding: 72px 0px;
  `;
  const Container = styled.div`
    max-width: 1140px;
    margin: auto;
  `;
  const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const Heading = styled.h1`
    color: ${color.dark};
    font-size: 32px;
    font-weight: 500;
  `;
  const SubHeading = styled.p`
    color: ${color.gray};
    font-size: 18px;
  `;
  const Grid = styled.div`
    margin-top: 36px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
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
