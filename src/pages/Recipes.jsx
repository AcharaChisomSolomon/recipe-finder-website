import React from "react";
import styled from "@emotion/styled"
import { QUERIES } from "../constants";

import InputSection from "./InputSection";
import RecipeCard from "./RecipeCard";
import RecipesContext from "../recipesContext";

export default function Recipes() {
  const [searchTerms, setSearchTerms] = React.useState({
    prepTime: null,
    cookTime: null,
    query: ''
  })
  const [recipesToDisplay, setRecipesToDisplay] = React.useState(null)
  const { prepTime, cookTime, query } = searchTerms
  const recipesData = React.useContext(RecipesContext)

  React.useEffect(() => {
    let newList = [...recipesData]

    if (prepTime !== null) {
      newList = newList.filter(r => r.prepMinutes <= Number(prepTime))
    }
    if (cookTime !== null) {
      newList = newList.filter(r => r.cookMinutes <= Number(cookTime))
    }
    if (query.trim() !== '') {
      newList = newList.filter(r => {
        const isInTitle = r.title.toLowerCase().includes(query.toLowerCase())
        const isInSlug = r.slug.toLowerCase().includes(query.toLowerCase())
        const isInIngredients = r.ingredients.some(i => i.toLowerCase().includes(query.toLowerCase()))
        return isInIngredients || isInSlug || isInTitle
      })
    }

    setRecipesToDisplay(newList)
  }, [prepTime, cookTime, query, recipesData])

  if (recipesToDisplay === null) {
    return (<p>Loading!!!</p>)
  }

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

      <RecipeCards>
        {recipesToDisplay.map(r => (<RecipeCard key={r.id} data={r} />))}
      </RecipeCards>

    </Wrapper>
  )
}

const Wrapper = styled.main`
  max-width: calc(1312 / 16 * 1rem);
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

const RecipeCards = styled.section`
  display: grid;
  gap: var(--spacing-0400);
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
`;