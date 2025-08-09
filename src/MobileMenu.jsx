import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import styled from '@emotion/styled'
import { Link, useLocation } from 'react-router-dom'
import { QUERIES } from './constants'
import VisuallyHidden from './VisuallyHidden'

export default function MobileMenu({ isOpen, onDismiss }) {
  const location = useLocation()
  const [headerHeight, setHeaderHeight] = React.useState(null)

  React.useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header')
      if (header) {
        setHeaderHeight(header.offsetHeight)
      }
    }

    updateHeaderHeight()

    window.addEventListener('resize', updateHeaderHeight)

    return () => {
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [])

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <Content style={{ top: `${headerHeight - 8}px`}}>

          <VisuallyHidden>
            <Dialog.Title>Navigation Menu</Dialog.Title>
            <Dialog.Description>
              Navigate through the website sections
            </Dialog.Description>
          </VisuallyHidden>
          
          <Nav>
            <NavLink 
              to="/" 
              onClick={onDismiss}
              isActive={isActive('/')}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={onDismiss}
              isActive={isActive('/about')}
            >
              About
            </NavLink>
            <NavLink 
              to="/recipes" 
              onClick={onDismiss}
              isActive={isActive('/recipes')}
            >
              Recipes
            </NavLink>
          </Nav>

          <BrowseButton to="/recipes" onClick={onDismiss}>
            Browse recipes
          </BrowseButton>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
`

const Content = styled(Dialog.Content)`
  background-color: var(--neutral-000);
  position: fixed;
  left: 0;
  right: 0;
  width: calc(100% - clamp(1rem, 3.529vw + -0.324rem, 2.5rem) * 2);
  margin-inline: clamp(1rem, 3.529vw + -0.324rem, 2.5rem);
  padding: var(--spacing-0050);
  box-shadow: -10px 0 25px rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-0008);
  
  &[data-state="open"] {
    animation: slideIn 300ms ease-out;
  }
  
  &[data-state="closed"] {
    animation: slideOut 300ms ease-out;
  }
  
  &:focus {
    outline: none;
  }

  @keyframes slideIn {
    from { 
      transform: translateX(100%);
    }
    to { 
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from { 
      transform: translateX(0);
    }
    to { 
      transform: translateX(100%);
    }
  }

  @media (${QUERIES.laptopAndLarger}) {
    display: none;
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0050);
  margin-bottom: var(--spacing-0200);
`

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isActive'
})`
  color: var(--neutral-900);
  text-decoration: none;
  font-size: var(--fs-18);
  font-weight: var(--fw-medium);
  padding: var(--spacing-0200) var(--spacing-0100);
  border-radius: var(--radius-0008);
  border-left: ${p => p.isActive ? `4px solid var(--neutral-900)` : `4px solid transparent`};
  background-color: ${p => p.isActive ? `var(--neutral-100)` : `transparent`};
  
  &:hover {
    background-color: var(--neutral-200);
  }
  
  &:focus-visible {
    outline: 2px solid var(--neutral-900);
    outline-offset: 2px;
  }
`;

const BrowseButton = styled(Link)`
  display: block;
  background-color: var(--neutral-900);
  color: var(--neutral-000);
  text-decoration: none;
  font-weight: var(--fw-bold);
  font-size: var(--fs-20);
  text-align: center;
  padding: var(--spacing-0200);
  border-radius: var(--radius-0010);
  
  &:hover {
    background-color: var(--neutral-600);
  }
  
  &:focus-visible {
    outline: 2px solid var(--neutral-900);
    outline-offset: 2px;
  }
`