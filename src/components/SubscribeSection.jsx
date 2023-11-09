import React from "react";
import styled from "styled-components";
import color from "../utils/Colors";

export default function SubscribeSection() {
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
      padding: 0px 24px;
      max-width: 100%;
    }
  `;
  const Content = styled.div`
    padding: 64px;
    background-color: ${color.light};
    border-radius: 20px;
    @media screen and (max-width: 640px) {
      padding: 24px;
    }
  `;
  const Header = styled.header`
    margin-bottom: 46px;
    @media screen and (max-width: 640px) {
      margin-bottom: 32px;
    }
  `;
  const Heading = styled.h3`
    color: ${color.dark};
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    @media screen and (max-width: 640px) {
      font-size: 28px;
    }
  `;
  const SubHeading = styled.p`
    color: ${color.gray};
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin: auto;
    max-width: 629px;
    @media screen and (max-width: 640px) {
      font-size: 16px;
      max-width: 100%;
    }
  `;
  const Form = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
    @media screen and (max-width: 640px) {
      flex-direction: column;
      gap: 12px;
    }
  `;
  const TextInput = styled.input`
    width: 381px;
    padding: 12px 22px;
    border-radius: 26px;
    border: 1px solid ${color.gray_100};
    color: ${color.gray};
    font-size: 16px;
    font-weight: 400;
    &:focus {
      outline-width: 1px;
      outline-color: ${color.primary};
    }
    @media screen and (max-width: 640px) {
      width: auto;
    }
  `;
  const ButtonSubmit = styled.button`
    background-color: ${color.primary};
    cursor: pointer;
    padding: 0px 22px;
    border: none;
    color: ${color.white};
    border-radius: 26px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    @media screen and (max-width: 640px) {
      padding: 12px;
    }
  `;

  return (
    <Section>
      <Container>
        <Content>
          <Header>
            <Heading>Subscribe Our Newsletter</Heading>
            <SubHeading>
              Subscribe to Our Newsletter for Exclusive Content, Special Offers,
              and Exciting News delivered directly to your inbox.
            </SubHeading>
          </Header>
          <Form>
            <TextInput type="email" placeholder="Enter email address" />
            <ButtonSubmit>Subscribe</ButtonSubmit>
          </Form>
        </Content>
      </Container>
    </Section>
  );
}
