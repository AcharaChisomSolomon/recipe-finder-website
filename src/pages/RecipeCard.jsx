import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { getImage } from "../imageMap"

import IconServings from '../assets/images/icon-servings.svg'
import IconPrepTime from '../assets/images/icon-prep-time.svg'
import IconCookTime from '../assets/images/icon-cook-time.svg'

export default function RecipeCard({ data }) {
  const { title, overview, servings, prepMinutes, cookMinutes, slug } = data
  return (
    <Wrapper>
      <ImgWrapper>
        <img className="small" src={getImage(slug, 'small')} alt="" />
        <img className="large" src={getImage(slug)} alt="" />
      </ImgWrapper>
      <Title>{title}</Title>
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
      <Linker to={`/recipe/${slug}`}>
        View Recipe
      </Linker>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  font-size: var(--fs-16);
  background-color: var(--neutral-000);
  padding: var(--spacing-0100);
  border-radius: var(--radius-0008);
  box-shadow: 0 10px 38px -10px rgba(22, 23, 24, 0.35);
  container-type: inline-size;

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;

const ImgWrapper = styled.div`
  /* border: 1px solid red; */
  
  img {
    border-radius: var(--radius-0008);
  }
  .small {
    margin-block-end: var(--spacing-0300);
  }
  .large {
    display: none;
  }
  
  @container (min-width: 350px) {
    .small {
      display: none;
    }
    .large {
      margin-block-end: var(--spacing-0200);
      display: revert;
      aspect-ratio: 3 / 2;
      object-fit: cover;
      object-position: center;
      
    }
  }
`;

const Title = styled.h2`
  font-size: var(--fs-20);
  font-weight: var(--fw-bold);
  font-family: var(--font-primary);
  letter-spacing: -0.5px;
  margin-block-end: var(--spacing-0200);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RecipeFacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 var(--spacing-0250);
  margin-block: var(--spacing-0200);
`;

const RecipeFact = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-0050);
`;

const RecipeFactIcon = styled.img`
  flex-shrink: 0;
`;

const Linker = styled(Link)`
  color: var(--neutral-000);
  background-color: var(--neutral-900);
  text-decoration: none;
  display: block;
  text-align: center;
  padding-block: var(--spacing-0200);
  border-radius: var(--radius-full);
  transition: transform 250ms;

  &:hover {
    transform: scale(1.03);
  }

  &:focus, &:active {
    outline: 2px solid var(--neutral-900);
  }
`;