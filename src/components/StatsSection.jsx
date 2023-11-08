import React from "react";
import styled from "styled-components";
import color from "../utils/Colors";

const stats = [
  { title: "22K+", desc: "Happy Custommers" },
  { title: "22K+", desc: "Happy Custommers" },
  { title: "22K+", desc: "Happy Custommers" },
  { title: "22K+", desc: "Happy Custommers" },
];

export default function StatsSection() {
  const Section = styled.section`
    padding: 72px 0px;
  `;
  const Container = styled.div`
    max-width: 1140px;
    margin: auto;
  `;
  const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Title = styled.h3`
    color: ${color.dark};
    font-size: 26px;
    font-weight: 500;
    text-align: center;
  `;
  const Desc = styled.p`
    text-align: center;
    color: ${color.gray};
    font-size: 18px;
    font-weight: 400;
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
