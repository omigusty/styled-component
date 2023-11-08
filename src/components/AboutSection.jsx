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
  `;
  const Container = styled.div`
    max-width: 1140px;
    margin: auto;
  `;
  const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  `;
  const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;
  const HeroImage = styled.img`
    max-width: 555px;
  `;
  const Title = styled.h6`
    color: ${color.primary};
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 8px;
  `;
  const Heading = styled.h1`
    color: ${color.dark};
    font-size: 32px;
    font-weight: 500;
    max-width: 485px;
  `;
  const SubHeading = styled.p`
    color: ${color.gray};
    font-size: 18px;
    font-weight: 400;
  `;
  const CardWrapper = styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;
    margin-top: 36px;
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
