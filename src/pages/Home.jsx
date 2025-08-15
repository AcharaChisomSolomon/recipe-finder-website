import styled from "@emotion/styled"
import { QUERIES } from "../constants";
import SubFooter from "./SubFooter";
import LinkButton from "../LinkButton";

import HeroLarge from '../assets/images/image-home-hero-large.webp'
import HeroSmall from '../assets/images/image-home-hero-small.webp'
import LifeLarge from '../assets/images/image-home-real-life-large.webp'
import LifeSmall from '../assets/images/image-home-real-life-small.webp'

import IconWholeFood from '../assets/images/icon-whole-food-recipes.svg'
import IconMinimumFuss from '../assets/images/icon-minimum-fuss.svg'
import IconSearchInSeconds from '../assets/images/icon-search-in-seconds.svg'

export default function Home() {
  return (
    <Wrapper>
      <Container> 

        <Hero>
          <Title>
            <Highlight>Healthy</Highlight> meals, zero fuss
          </Title>
          <HeroText>
            Discover eight quick, whole-food recipes that you can cook 
            tonight—no processed junk, no guesswork.
          </HeroText>
          <LinkButton to='/recipes'>Start exploring</LinkButton>
        </Hero>

        <SubHero>
          <HeroContainer>
            <img className="small" src={HeroSmall} alt="woman preparing vegetables" />
            <img className="large" src={HeroLarge} alt="woman preparing vegetables" />
          </HeroContainer>
          <Explainer>
            <ExplainerTitle>What you'll get</ExplainerTitle>
            <ExplainerFacts>

              <ExplainerFact>
                <ExplainerIconContainer>
                  <img src={IconWholeFood} alt="" />
                </ExplainerIconContainer>
                <h3>Whole-food recipes</h3>
                <p>
                  Each dish uses everyday, unprocessed ingredients.
                </p>
              </ExplainerFact>
              <ExplainerFact>
                <ExplainerIconContainer>
                  <img src={IconMinimumFuss} alt="" />
                </ExplainerIconContainer>
                <h3>
                  Minimum fuss
                </h3>
                <p>
                  All recipes are designed to make eating healthy quick and easy.
                </p>
              </ExplainerFact>
              <ExplainerFact>
                <ExplainerIconContainer>
                  <img src={IconSearchInSeconds} alt="" />
                </ExplainerIconContainer>
                <h3>Search in seconds</h3>
                <p>
                  Filter by name or ingredient and jump straight to the recipe you need.
                </p>
              </ExplainerFact>

            </ExplainerFacts>
          </Explainer>
        </SubHero>

        <Divider />

        <Displayer>
          <DisplayerTexts>
            <h2>Built for real life</h2>
            <p>
              Cooking shouldn’t be complicated. 
              These recipes come in under <Highlight>30 minutes</Highlight> of active time, 
              fit busy schedules, and taste good enough to repeat. 
            </p>
            <p>
              Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.
            </p>
          </DisplayerTexts>
          <ImageContainer>
            <img className="small" src={LifeSmall} alt="" />
            <img className="large" src={LifeLarge} alt="" />
          </ImageContainer>
        </Displayer>

        <SubFooter />

      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background-image: url('/src/assets/images/pattern-squiggle-1.svg');
  background-repeat: no-repeat;
  background-position: center 25rem;
  background-size: contain;

  @media ${QUERIES.tabletAndLarger} {
    background-position: center 12.5rem;
  }
`;

const Container = styled.div`
  max-width: calc(1312 / 16 * 1rem);
  margin: 0 auto;
  padding-inline: clamp(1rem, 3.529vw + -0.324rem, 2.5rem);
`;

const Hero = styled.section`
  margin-block-end: clamp(2rem, 13.333vw + -8rem, 4rem);

  @media ${QUERIES.laptopAndLarger} {
    text-align: center;

    p {
      max-width: calc(580 / 16 * 1rem);
      margin-inline: auto;
    }
  }
`;

const HeroText = styled.p`
  margin-block: var(--spacing-0400) clamp(2rem, 6.667vw + -3rem, 3rem);
`;

const Title = styled.h1`
  font-size: clamp(3.25rem, 5.556vw + -1rem, 4rem);
`;

const Highlight = styled.span`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 40%;
    width: 103%;
    background-color: var(--orange-500);
    opacity: 0.5;
    top: 48%;
    z-index: -2;
    border-radius: var(--radius-0004);
  }
`;

const ImageContainer = styled.div`
  border-radius: var(--radius-0016);
  overflow: hidden;

  .large {
    display: none;
  }

  @media ${QUERIES.tabletAndLarger} {
    .small {
      display: none;
    }

    .large {
      display: block;
    }
  }
`;
const HeroContainer = styled(ImageContainer)`
  border: var(--spacing-0150) solid var(--neutral-000);
  margin-block-end: var(--spacing-1000);
`;

const SubHero = styled.section`
  margin-block-end: clamp(5rem, 1.905vw + 4.286rem, 6rem);
`;

const Explainer = styled.div`

`;

const ExplainerTitle = styled.h2`
margin-block-end: clamp(2.5rem, 12vw + -2rem, 4rem);
  @media ${QUERIES.laptopAndLarger} {
    text-align: center;
  }
`;

const ExplainerFacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 4vw + 0.5rem, 2.5rem);

  @media ${QUERIES.laptopAndLarger} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ExplainerFact = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0300);
`;

const ExplainerIconContainer = styled.div`
  display: inline-block;
  width: calc(60 / 16 * 1rem);
  height: calc(60 / 16 * 1rem);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--neutral-200);
  border-radius: var(--radius-0012);
  background-color: var(--neutral-000);
`;

const Divider = styled.hr`
  display: none;
  border: none;
  height: 2px;
  background-color: var(--neutral-300);
  margin-block-end: var(--spacing-1200);

  @media ${QUERIES.tabletAndLarger} {
    display: revert;
  }
`;

const Displayer = styled.section`
  display: grid;
  gap: var(--spacing-0500);
  margin-block-end: clamp(4rem, 3.81vw + 2.571rem, 6rem);
  @media (min-width: calc(900 / 16 * 1rem)) {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-0600);
    align-items: center;
  }
`;

const DisplayerTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0300);
`;