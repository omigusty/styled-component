import React from "react";
import styled from "styled-components";
import color from "../utils/Colors";

const stats = [
  { title: "22K+", desc: "Happy Custommers" },
  { title: "4.5", desc: "Ratings" },
  { title: "1K+", desc: "Street Foods" },
  { title: "2023", desc: "Best Awards" },
];

export default function StatsSection() {
  const Section = styled.section`
    padding: 72px 0px;
    @media screen and (max-width: 640px) {
      padding: 36px 0px;
    }
    @media screen and (max-width: 768px) and (min-width: 640px) {
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
    @media screen and (max-width: 768px) and (min-width: 640px) {
      max-width: 100%;
      padding: 0px 24px;
    }
  `;
  const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 640px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
  `;
  const Title = styled.h3`
    color: ${color.dark};
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    @media screen and (max-width: 640px) {
      font-size: 22px;
    }
  `;
  const Desc = styled.p`
    text-align: center;
    color: ${color.gray};
    font-size: 18px;
    font-weight: 400;
    @media screen and (max-width: 640px) {
      font-size: 14px;
    }
  `;

  return (
    <Section>
      <Container>
        <ContentWrapper>
          {stats.map((item, index) => (
            <div key={index}>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </div>
          ))}
        </ContentWrapper>
      </Container>
    </Section>
  );
}
