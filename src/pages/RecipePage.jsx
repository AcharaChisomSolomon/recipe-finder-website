import React from "react"
import RecipesContext from "../recipesContext"
import { Link, useParams } from "react-router-dom"
import styled from "@emotion/styled"
import RecipeCard from "./RecipeCard"
import { getImage } from "../imageMap"
import WidthUtil from "../WidthUtil"

import IconServings from '../assets/images/icon-servings.svg'
import IconPrepTime from '../assets/images/icon-prep-time.svg'
import IconCookTime from '../assets/images/icon-cook-time.svg'
import IconBulletPoint from '../assets/images/icon-bullet-point.svg'


function getNextThreeRecipes(recipes, id) {
  const output = []

  for (let i = 1; i <= 3; i++) {
    output.push(recipes[(id + i) % recipes.length])
  }

  return output
}

function LineItem({ item }) {
  return (
    <List>
      <img src={IconBulletPoint} alt="" />
      <span>{item}</span>
    </List>
  )
}

export default function RecipePage() {
  const recipesData = React.useContext(RecipesContext)
  const { name } = useParams()

  const recipe = recipesData.find(r => name === r.slug)
  const nextRecipes = getNextThreeRecipes(recipesData, recipe.id)

  const { 
    title, 
    slug,
    overview, 
    servings, 
    prepMinutes, 
    cookMinutes,
    ingredients,
    instructions
  } = recipe

  return (
    <Wrapper>

      <BreadCrumbs>
        <Crumb to='/recipes'>Recipes</Crumb>
        <span>{title}</span>
      </BreadCrumbs>

      <MainContainer>
        <div>
          <Image src={getImage(slug)} alt="" />
        </div>
        <MainSection>
          <h1>{title}</h1>
          <p>{overview}</p>
          <RecipeFacts>
            <RecipeFact>
              <RecipeFactIcon src={IconServings} alt="" />
              <span>Servings: {servings}</span>
            </RecipeFact>
            <RecipeFact>
              <RecipeFactIcon src={IconPrepTime} alt="" />
              <span>Prep: {prepMinutes} min{prepMinutes > 1 && 's'}</span>
            </RecipeFact>
            <RecipeFact>
              <RecipeFactIcon src={IconCookTime} alt="" />
              <span>Cook: {cookMinutes} min{cookMinutes > 1 && 's'}</span>
            </RecipeFact>
          </RecipeFacts>
          <div>
            <h3>Ingredients:</h3>
            <Lists>
              {ingredients.map((i, id) => (
                <LineItem key={id} item={i}/>
                ))}
            </Lists>
          </div>
          <div>
            <h3>Instructions:</h3>
            <Lists>
              {instructions.map((i, id) => (
                <LineItem key={id} item={i}/>
                ))}
            </Lists>
          </div>
        </MainSection>
      </MainContainer>

      <Divider />

      <WidthUtil>
        <SubTitle>More recipes</SubTitle>
        <RecipeCards>
          {nextRecipes.map(r => (<RecipeCard key={r.id} data={r} />))}
        </RecipeCards>
      </WidthUtil>

      <Divider_ />

    </Wrapper>
  )
}

const Wrapper = styled.main`
  h3 {
    font-size: var(--fs-24);
    letter-spacing: -1px;
    margin-block-end: var(--spacing-0100);
  }
`;

const BreadCrumbs = styled(WidthUtil)`
  font-size: var(--fs-18);
  letter-spacing: -0.3px;
  font-weight: var(--fw-semibold);
  font-family: var(--font-primary);
  margin-bottom: var(--spacing-0300);
`;

const Crumb = styled(Link)`
  color: var(--neutral-600);
  text-decoration: none;

  &::after {
    content: '|';
    display: inline-block;
    transform: rotate(15deg);
    padding-inline: var(--spacing-0100);
  }

  &:hover {
    text-decoration: revert;
  }
`;

const MainContainer = styled(WidthUtil)`
  display: grid;
  gap: var(--spacing-0600) var(--spacing-0500);

  @media (min-width: calc(900 / 16 * 1rem)) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Image = styled.img`
  border-radius: var(--radius-0010);
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0200);
`

const RecipeFacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 var(--spacing-0250);
`;

const RecipeFact = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-0050);
`;

const RecipeFactIcon = styled.img`
  flex-shrink: 0;
`;

const Lists = styled.ul`
  padding: 0;
  list-style: none;
`;

const List = styled.li`
  display: flex;
  align-items: start;
  gap: var(--spacing-0100);
  
  img {
    flex-shrink: 0;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 2px;
  background-color: var(--neutral-300);
  margin-block: clamp(3rem, 14.815vw + -8.333rem, 5rem);
`;

const Divider_ = styled(Divider)`
  margin: 0;
  margin-block-start: clamp(3rem, 22.222vw + -14rem, 6rem);
`;

const SubTitle = styled.h2`
  font-size: var(--fs-32);
  font-weight: var(--fw-bold);
  font-family: var(--font-primary);
  margin-block-end: var(--spacing-0400);
`;

const RecipeCards = styled.section`
  display: grid;
  gap: var(--spacing-0400);
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
`;