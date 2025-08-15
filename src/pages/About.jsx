import styled from "@emotion/styled";
import { QUERIES } from "../constants";

import BeyondThePlateLarge from '../assets/images/image-about-beyond-the-plate-large.webp'
import BeyondThePlateSmall from '../assets/images/image-about-beyond-the-plate-small.webp'
import OurMissionLarge from '../assets/images/image-about-our-mission-large.webp'
import OurMissionSmall from '../assets/images/image-about-our-mission-small.webp'

import IconBulletPoint from '../assets/images/icon-bullet-point.svg'
import SubFooter from "./SubFooter";
import WidthUtil from "../WidthUtil";

export default function About() {
  return (
    <main>

      <Hero>
        <div>
          <HighLight>Our mission</HighLight>
          <h2>Help more people cook nourishing meals, more often.</h2>
          <p>
            Healthy Recipe Finder was created to prove that healthy eating can be convenient, 
            affordable, and genuinely delicious.
          </p>
          <p>
            We showcase quick, whole-food dishes that anyone can master—no fancy equipment, 
            no ultra-processed shortcuts—just honest ingredients and straightforward steps.
          </p>
        </div>
        <ImageContainer>
          <img className="small" src={OurMissionSmall} alt="" />
          <img className="large" src={OurMissionLarge} alt="" />
        </ImageContainer>
      </Hero>

      <Divider />

      <Explainers>
        <div>
          <h2>Why we exist</h2>
        </div>
        <div>
          <Facts>
            <FactItem>
              <FactIconContainer>
                <img src={IconBulletPoint} alt="" />
              </FactIconContainer>
              <FactItemTexts>
                <h4>Cut through the noise.</h4>
                <p>
                  The internet is bursting with recipes, 
                  yet most busy cooks still default to take-away or packaged foods. 
                  We curate a tight collection of fool-proof dishes so you can skip the 
                  scrolling and start cooking.
                </p>
              </FactItemTexts>
            </FactItem>
            <FactItem>
              <FactIconContainer>
                <img src={IconBulletPoint} alt="" />
              </FactIconContainer>
              <FactItemTexts>
                <h4>Empower home kitchens.</h4>
                <p>
                  When you control what goes into your meals, you control how you feel. 
                  Every recipe is built around unrefined ingredients and ready in about half 
                  an hour of active prep.
                </p>
              </FactItemTexts>
            </FactItem>
            <FactItem>
              <FactIconContainer>
                <img src={IconBulletPoint} alt="" />
              </FactIconContainer>
              <FactItemTexts>
                <h4>Make healthy look good.</h4>
                <p>
                  High-resolution imagery shows you exactly what success looks like—because 
                  we eat with our eyes first, and confidence matters.
                </p>
              </FactItemTexts>
            </FactItem>
          </Facts>
        </div>
      </Explainers>

      <Divider />

      <Explainers>
        <div>
          <h2>Our food philosophy</h2>
        </div>
        <div>
          <Facts>
            <FactItem>
              <FactIconContainer>
                <img src={IconBulletPoint} alt="" />
              </FactIconContainer>
              <FactItemTexts>
                <h4>Whole ingredients first.</h4>
                <p>
                  Fresh produce, grains, legumes, herbs, 
                  and quality fats form the backbone of every recipe.
                </p>
              </FactItemTexts>
            </FactItem>
            <FactItem>
              <FactIconContainer>
                <img src={IconBulletPoint} alt="" />
              </FactIconContainer>
              <FactItemTexts>
                <h4>Flavor without compromise.</h4>
                <p>
                  Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.
                </p>
              </FactItemTexts>
            </FactItem>
            <FactItem>
              <FactIconContainer>
                <img src={IconBulletPoint} alt="" />
              </FactIconContainer>
              <FactItemTexts>
                <h4>Respect for time.</h4>
                <p>
                  Weeknight meals should slot into real schedules; 
                  weekend cooking can be leisurely but never wasteful.
                </p>
              </FactItemTexts>
            </FactItem>
            <FactItem>
              <FactIconContainer>
                <img src={IconBulletPoint} alt="" />
              </FactIconContainer>
              <FactItemTexts>
                <h4>Sustainable choices.</h4>
                <p>
                  Short ingredient lists cut down on food waste and carbon footprint, 
                  while plant-forward dishes keep things planet-friendly.
                </p>
              </FactItemTexts>
            </FactItem>
          </Facts>
        </div>
      </Explainers>

      <Divider />

      <Beyond>
        <div>
          <h2>Beyond the plate</h2>
          <p>
            We believe food is a catalyst for community and well-being. 
            By sharing approachable recipes, we hope to:
          </p>
          <ul>
            <li>Encourage family dinners and social cooking.</li>
            <li>Reduce reliance on single-use packaging and delivery waste.</li>
            <li>Spark curiosity about seasonal produce and local agriculture.</li>
          </ul>
        </div>
        <ImageContainer>
          <img className="small" src={BeyondThePlateSmall} alt="" />
          <img className="large" src={BeyondThePlateLarge} alt="" />
        </ImageContainer>
      </Beyond>

      <WidthUtil>
        <SubFooter />
      </WidthUtil>

    </main>
  )
}

const Hero = styled(WidthUtil)`
  display: grid;
  gap: clamp(3rem, 3.81vw + 1.571rem, 5rem);

  p:first-of-type {
    margin-block: var(--spacing-0400) var(--spacing-0300);
  }

  @media ${QUERIES.laptopAndLarger} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

`;

const HighLight = styled.span`
  display: inline-block;
  background-color: var(--orange-500);
  border-radius: var(--radius-0006);
  padding: var(--spacing-0100);
  font-weight: var(--fw-bold);
  font-family: var(--font-primary);
  margin-block-end: var(--spacing-0400);
`;

const Explainers = styled(WidthUtil)`
  display: grid;
  gap: var(--spacing-0600);

  @media ${QUERIES.laptopAndLarger} {
    grid-template-columns: 1fr 2fr;
  }
`;

const Facts = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 2.857vw + 1.429rem, 4rem);
`;

const FactItem = styled.li`
  display: flex;
  gap: var(--spacing-0250);
`;

const FactIconContainer = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FactItemTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0250);
`;

const Beyond = styled(WidthUtil)`
  margin-block-end: clamp(3rem, 5.714vw + 0.857rem, 6rem);
  display: grid;
  gap: var(--spacing-0300);

  p {
    margin-block: var(--spacing-0300) var(--spacing-0200);
  }

  @media ${QUERIES.laptopAndLarger} {
    grid-template-columns: 1fr 2fr;
    align-items: center;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 2px;
  background-color: var(--neutral-300);
  margin-block: clamp(3.5rem, 4.762vw + 1.714rem, 6rem);
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