import React from "react";
import styled from "styled-components";
import AboutUs from "../assets/img/AboutUs.png";
import color from "../utils/Colors";
import CardFeature from "./elements/CardFeature/Index";

const AboutUsImg = {
  src: AboutUs,
  alt: "About us image section",
};

const features = [
  {
    title: "Bahan Berkualitas Tinggi",
    desc: "Selalu menggunakan bahan berkualitas terbaik",
  },
  {
    title: "Kenyamanan dan Kemudahan",
    desc: "Membuat pengalaman anda lebih nyaman",
  },
  {
    title: "Variasi Menu Luar Biasa",
    desc: "Temukan beragam menu makanan lezat ",
  },
];

export default function AboutSection() {
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
  const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
    @media screen and (max-width: 640px) {
      display: block;
    }
  `;
  const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  const HeroImage = styled.img`
    max-width: 555px;
    @media screen and (max-width: 640px) {
      max-width: 100%;
      display: none;
    }
  `;
  const Title = styled.h6`
    color: ${color.primary};
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 8px;
    @media screen and (max-width: 640px) {
      font-size: 18px;
    }
  `;
  const Heading = styled.h1`
    color: ${color.dark};
    font-size: 32px;
    font-weight: 500;
    max-width: 485px;
    @media screen and (max-width: 640px) {
      font-size: 28px;
      max-width: 100%;
    }
  `;
  const SubHeading = styled.p`
    color: ${color.gray};
    font-size: 18px;
    font-weight: 400;
    @media screen and (max-width: 640px) {
      font-size: 16px;
    }
  `;
  const CardWrapper = styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;
    margin-top: 36px;
    @media screen and (max-width: 640px) {
      margin-top: 24px;
    }
  `;

  return (
    <Section>
      <Container>
        <Row>
          <div>
            <HeroImage src={AboutUsImg.src} alt={AboutUsImg.alt} />
          </div>
          <Col>
            <header>
              <Title>About us</Title>
              <Heading>We Always Provide Quality Food for You</Heading>
              <SubHeading>
                Didirikan dengan hasrat untuk membagi kecintaan kami terhadap
                makanan lezat, kami menyajikan berbagai ulasan restoran, resep
                unik, dan tips memasak dari para ahli kuliner.
              </SubHeading>
            </header>
            <CardWrapper>
              {features.map((feature) => (
                <CardFeature title={feature.title} desc={feature.desc} />
              ))}
            </CardWrapper>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
