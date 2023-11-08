import React from "react";
import styled from "styled-components";
import color from "../utils/Colors";

export default function SubscribeSection() {
  const Section = styled.section`
    padding: 72px 0px;
  `;
  const Container = styled.div`
    max-width: 1140px;
    margin: auto;
  `;
  const Content = styled.div`
    padding: 64px 46px;
    background-color: ${color.light};
    border-radius: 20px;
  `;
  const Header = styled.header`
    margin-bottom: 46px;
  `;
  const Heading = styled.h3`
    color: ${color.dark};
    text-align: center;
    font-size: 32px;
    font-weight: 500;
  `;
  const SubHeading = styled.p`
    color: ${color.gray};
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin: auto;
    max-width: 629px;
  `;
  const Form = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
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
  `;

  return (
    <Section>
      <Container>
        <Content>
          <Header>
            <Heading>We Always Provide Quality Food for You</Heading>
            <SubHeading>
              Pastikan desain website Anda responsif, artinya dapat diakses
              dengan baik di berbagai perangkat seperti komputer desktop
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
