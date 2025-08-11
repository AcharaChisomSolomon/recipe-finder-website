import styled from "@emotion/styled"
import { QUERIES } from "../constants";

import InputSection from "./InputSection";
import React from "react";

export default function Recipes() {
  const [searchTerms, setSearchTerms] = React.useState({
    prepTime: null,
    cookTime: null,
    query: ''
  })
  console.log(searchTerms)

  return (
    <Wrapper>

      <TitularSection>
        <Title>Explore our simple, healthy recipes</Title>
        <p>
          Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. 
          Use the search bar to find a recipe by name or ingredient, 
          or simply scroll the list and let something delicious catch your eye.
        </p>
      </TitularSection>

      <InputSection 
        searchTerms={searchTerms}
        setSearchTerms={setSearchTerms}
      />

      <section></section>

    </Wrapper>
  )
}

const Wrapper = styled.main`
  max-width: calc(1440 / 16 * 1rem);
  margin: 0 auto;
  padding-inline: clamp(1rem, 3.529vw + -0.324rem, 2.5rem);
`;

const TitularSection = styled.section`
  @media ${QUERIES.laptopAndLarger} {
    max-width: 790px;
    margin: 0 auto;
    text-align: center;
  }
`;

const Title = styled.h1`
  margin-bottom: var(--spacing-0100);
  font-weight: var(--fw-extrabold);
  font-family: var(--font-primary);
`;