import WidthUtil from './WidthUtil'

import IconInstagram from './assets/images/icon-instagram.svg'
import IconBluesky from './assets/images/icon-bluesky.svg'
import IconTiktok from './assets/images/icon-tiktok.svg'
import styled from '@emotion/styled'
import { QUERIES } from './constants'

export default function Footer() {
  return (
    <footer>

      <Wrapper>
          <div>Made with 💖 and 🥑</div>
          <Icons>
            <img src={IconInstagram} alt="instagram" />
            <img src={IconBluesky} alt="bluesky" />
            <img src={IconTiktok} alt="tiktok" />
          </Icons>
      </Wrapper>
      
    </footer>
  )
}

const Wrapper = styled(WidthUtil)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: var(--spacing-0400);
  padding-block: var(--spacing-0600);

  @media ${QUERIES.tabletAndLarger} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: var(--spacing-0300);
`;