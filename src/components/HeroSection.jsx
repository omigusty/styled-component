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
  `;
  const Container = styled.div`
    max-width: 1140px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  `;
  const Header = styled.header`
    margin-bottom: 52px;
  `;
  const Heading = styled.h1`
    margin-bottom: 4px;
    color: ${color.dark};
    font-size: 42px;
    font-weight: 500;
  `;
  const SubHeading = styled.p`
    font-size: 20px;
    color: ${color.gray};
    max-width: 728px;
    text-align: center;
  `;
  const Wrapper = styled.div`
    margin-top: 52px;
    display: flex;
    gap: 12px;
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
