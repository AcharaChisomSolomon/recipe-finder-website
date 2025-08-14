import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default styled(Link)`
  display: inline-block;
  transition: transform 250ms;
  height: max-content;

  color: inherit;
  text-decoration: none;
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
  

  &:hover {
    transform: scale(1.1);
  }
`;