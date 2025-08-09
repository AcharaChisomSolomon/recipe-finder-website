import styled from "@emotion/styled";
import React from "react"
import { Link, useLocation } from "react-router-dom";

import MobileMenu from "./MobileMenu";
import UnstyledButton from './UnstyledButton'
import { QUERIES } from "./constants";
import Logo from './assets/images/logo.svg'
import IconHamburgerMenu from './assets/images/icon-hamburger-menu.svg'

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <Wrapper>
      <MainHeader>
        <div>
          <Linker to='/'>
            <img src={Logo} alt="recipe finder logo" />
          </Linker>
        </div>

        <Nav>
          <HighLightedLinker 
            to='/' 
            isActive={isActive('/')}
          >Home</HighLightedLinker>
          <HighLightedLinker 
            to='/about' 
            isActive={isActive('/about')}
          >About</HighLightedLinker>
          <HighLightedLinker 
            to='/recipes' 
            isActive={isActive('/recipes')}
          >Recipes</HighLightedLinker>
        </Nav>

        <AlternateRecipes>
          <Linker to='/recipes'>Browse recipes</Linker>
        </AlternateRecipes>

        <Menu onClick={() => setShowMobileMenu(true)}>
          <img src={IconHamburgerMenu} alt="" />
        </Menu>

      </MainHeader>

      <MobileMenu 
        isOpen={showMobileMenu} 
        onDismiss={() => setShowMobileMenu(false)}
      />

    </Wrapper>
  )
}

const Wrapper = styled.header`
  padding-block: var(--spacing-0200);
  border-bottom: 1px solid var(--neutral-300);
  transition: padding 500ms;

  @media (${QUERIES.tabletAndLarger}) {
    padding-block-start: var(--spacing-0400);
    padding-block-end: var(--spacing-0250);
  }

  @media (${QUERIES.laptopAndLarger}) {
   padding-block: var(--spacing-0250);
  }
`;

const MainHeader = styled.div`
  max-width: calc(1440 / 16 * 1rem);
  margin: 0 auto;
  padding-inline: clamp(1rem, 3.529vw + -0.324rem, 2.5rem);

  display: flex;
  align-items: center;

  @media (${QUERIES.laptopAndLarger}) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }
`;

const Linker = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const HighLightedLinker = styled(Linker, {
  shouldForwardProp: (prop) => prop !== 'isActive'
})`
  border-bottom: ${p => p.isActive && `3px solid var(--orange-500)`};
  font-size: var(--fs-18);

  &:hover {
    border-bottom: 3px solid var(--orange-500);
  }
`;

const Nav = styled.nav`
  display: none;

  @media (${QUERIES.laptopAndLarger}) {
    display: flex;
    gap: var(--spacing-0500);
  }
`;

const AlternateRecipes = styled.div`
  display: none;
  justify-self: end;
  transition: transform 250ms;

  a {
    background-color: var(--neutral-900);
    color: var(--neutral-000);
    font-weight: var(--fw-bold);
    font-size: var(--fs-20);
    border-radius: var(--radius-0010);
    padding: var(--spacing-0150);

    &:focus {
      outline: 2px solid var(--neutral-900);
      outline-offset: 4px;
    }

    /* Optional: Remove default browser focus outline */
    &:focus-visible {
      outline: 2px solid var(--neutral-900);
      outline-offset: 4px;
    }
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (${QUERIES.laptopAndLarger}) {
    display: revert;
  }
`;

const Menu = styled(UnstyledButton)`
  margin-left: auto;
  padding: var(--spacing-0150);
  background-color: var(--neutral-300);
  border-radius: var(--radius-0004);

  @media (${QUERIES.laptopAndLarger}) {
    display: none;
  }
`;