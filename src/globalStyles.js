import { css } from "@emotion/react";

export const GlobalStyles = css`
  @font-face {
    font-family: 'Nunito';
    src: url('/fonts/Nunito/Nunito-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Nunito Sans';
    src: url('/fonts/Nunito_Sans/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf') format('truetype');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }


  :root {
    /* COLORS */
    --neutral-900: hsla(164, 46%, 16%, 1.00);
    --neutral-600: hsl(166, 22%, 28%);
    --neutral-300: hsl(160, 13%, 84%);
    --neutral-200: hsl(150, 10%, 89%);
    --neutral-100: hsl(45, 20%, 95%);
    --neutral-000: hsl(0, 0%, 100%);
    --orange-500:  hsl(21, 98%, 71%);
    --teal-500:    hsla(170, 40%, 48%, 0.1);
    --indigo-500:  hsl(230, 62%, 64%);

    /* SPACING */
    --spacing-0000: calc(0 / 16 * 1rem);
    --spacing-0025: calc(2 / 16 * 1rem);
    --spacing-0050: calc(4 / 16 * 1rem);
    --spacing-0100: calc(8 / 16 * 1rem);
    --spacing-0125: calc(10 / 16 * 1rem);
    --spacing-0150: calc(12 / 16 * 1rem);
    --spacing-0200: calc(16 / 16 * 1rem);
    --spacing-0250: calc(20 / 16 * 1rem);
    --spacing-0300: calc(24 / 16 * 1rem);
    --spacing-0400: calc(32 / 16 * 1rem);
    --spacing-0500: calc(40 / 16 * 1rem);
    --spacing-0600: calc(48 / 16 * 1rem);
    --spacing-0800: calc(64 / 16 * 1rem);
    --spacing-1000: calc(80 / 16 * 1rem);
    --spacing-1200: calc(96 / 16 * 1rem);
    --spacing-1400: calc(112 / 16 * 1rem);
    --spacing-1600: calc(128 / 16 * 1rem);
    --spacing-1800: calc(140 / 16 * 1rem);

    /* RADIUS */
    --radius-0000: calc(0 / 16 * 1rem);
    --radius-0004: calc(4 / 16 * 1rem);
    --radius-0006: calc(6 / 16 * 1rem);
    --radius-0008: calc(8 / 16 * 1rem);
    --radius-0010: calc(10 / 16 * 1rem);
    --radius-0012: calc(12 / 16 * 1rem);
    --radius-0016: calc(16 / 16 * 1rem);
    --radius-0020: calc(20 / 16 * 1rem);
    --radius-0024: calc(24 / 16 * 1rem);
    --radius-full: calc(999 / 16 * 1rem);

    /* FONT SIZES */
    --fs-72: calc(72 / 16 * 1rem);
    --fs-64: calc(64 / 16 * 1rem);
    --fs-52: calc(52 / 16 * 1rem);
    --fs-48: calc(48 / 16 * 1rem);
    --fs-40: calc(40 / 16 * 1rem);
    --fs-32: calc(32 / 16 * 1rem);
    --fs-24: calc(24 / 16 * 1rem);
    --fs-20: calc(20 / 16 * 1rem);
    --fs-18: calc(18 / 16 * 1rem);
    --fs-16: calc(16 / 16 * 1rem);
    --fs-14: calc(14 / 16 * 1rem);

    /* FONT FAMILIES */
    --font-primary: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-secondary: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

    /* FONT WEIGHTS */
    --fw-medium: 500;
    --fw-semibold: 600;
    --fw-bold: 700;
    --fw-extrabold: 800;
  }

  /* 1. Use a more-intuitive box-sizing model */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin */
  * {
    margin: 0;
  }

  /* 3. Enable keyword animations */
  @media (prefers-reduced-motion: no-preference) {
    html {
      interpolate-size: allow-keywords;
    }
  }

  body {
    /* 4. Add accessible line-height */
    line-height: 1.5;
    letter-spacing: 0.3px;
    /* 5. Improve text rendering */
    -webkit-font-smoothing: antialiased;
    /* Add font family */
    font-family: var(--font-secondary);
    font-weight: var(--fw-medium);
    font-size: var(--fs-20);

    background-color: var(--neutral-100);
    color: var(--neutral-900);
  }

  /* 6. Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 7. Inherit fonts for form controls */
  input, button, textarea, select {
    font: inherit;
  }

  /* 8. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 9. Improve line wrapping */
  p {
    text-wrap: pretty;
  }
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
    line-height: 1.1;
    letter-spacing: -2px;
    font-family: var(--font-primary);
    font-weight: var(--fw-extrabold);
  }
  h1 {
    font-size: clamp(2.5rem, 1.282vw + 2.019rem, 3rem);
  }
  h2 {
    font-size: clamp(2.5rem, 1.333vw + 2rem, 3rem);
  }
  h3 {
    font-size: var(--fs-32);
    letter-spacing: -1px;
    font-weight: var(--fw-bold);
  }
  h4 {
    font-size: var(--fs-24);
    font-weight: var(--fw-bold);
    letter-spacing: -1px;
  }

  /*
    10. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
`;