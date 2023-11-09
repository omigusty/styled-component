import React from "react";
import styled from "styled-components";
import color from "../utils/Colors";
import Button from "./elements/Button/Index";

const options = [
  { title: "Rogojampi", selected: "Rogojampi" },
  { title: "Banyuwangi", selected: "Banyuwangi" },
  { title: "Genteng", selected: "Genteng" },
  { title: "Srono", selected: "Srono" },
];

export default function HeroSection() {
  const Section = styled.section`
    padding: 72px 0px;
    background-color: ${color.light};
    @media screen and (max-width: 640px) {
      padding: 36px 0px;
    }
  `;
  const Container = styled.div`
    max-width: 1140px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 640px) {
      max-width: 100%;
      padding: 0px 24px;
    }
  `;
  const Header = styled.header`
    margin-bottom: 52px;
    @media screen and (max-width: 640px) {
      margin-bottom: 32px;
    }
  `;
  const Heading = styled.h1`
    margin-bottom: 4px;
    color: ${color.dark};
    font-size: 42px;
    font-weight: 500;
    text-align: center;
    @media screen and (max-width: 640px) {
      font-size: 36px;
    }
  `;
  const SubHeading = styled.p`
    font-size: 20px;
    color: ${color.gray};
    max-width: 728px;
    text-align: center;
    @media screen and (max-width: 640px) {
      font-size: 18px;
    }
  `;
  const Wrapper = styled.div`
    margin-top: 52px;
    display: flex;
    gap: 12px;
    @media screen and (max-width: 640px) {
      margin-top: 32px;
      flex-direction: column;
      gap: 8px;
    }
  `;
  const FilterDropdown = styled.select`
    padding: 12px 22px;
    border-radius: 26px;
    border: 1px solid ${color.gray_100};
    color: ${color.gray};
    font-size: 16px;
    width: 248px;
    cursor: pointer;
    background-color: ${color.white};
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  `;
  const Searching = styled.input`
    padding: 12px 22px;
    border-radius: 26px;
    color: ${color.gray};
    font-size: 16px;
    border: 1px solid ${color.gray_100};
    width: 321px;
    &:focus {
      outline-color: ${color.primary};
      outline-width: 1px;
    }
  `;

  return (
    <Section>
      <Container>
        <Header>
          <Heading>Wisata Kuliner Favorit di Banyuwangi</Heading>
          <SubHeading>
            Taklukkan Lidah Anda di Surga Rasa Banyuwangi: Destinasi Kuliner
            Terfavorit, Rasakan Lezatnya Warisan Budaya Kuliner Kami!
          </SubHeading>
        </Header>
        <Button type="primary" title="Jelajahi Sekarang" />
        <Wrapper>
          <FilterDropdown>
            <option selected>Pilih Lokasimu</option>
            {options.map((option) => (
              <option value={option.selected}>{option.title}</option>
            ))}
          </FilterDropdown>
          <Searching type="text" placeholder="Cari makanan" />
        </Wrapper>
      </Container>
    </Section>
  );
}
