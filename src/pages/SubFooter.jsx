import styled from '@emotion/styled'
import Linker from '../LinkButton'


export default function SubFooter() {
  return (
    <Wrapper>
      <h2>Ready to cook smarter?</h2>
      <Text>
        Hit the button, pick a recipe, and get dinner on the table—fast.
      </Text>
      <Linker to='/recipes'>Browse recipes</Linker>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  height: clamp(21.875rem, 5.952vw + 19.643rem, 25rem);
  background-color: var(--teal-500);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-0016);

  background-image: url('/src/assets/images/pattern-fork.svg'), url('/src/assets/images/pattern-knife.svg');
  background-repeat: no-repeat, no-repeat;
  background-position: left bottom, right top;
  background-size: 20%, 20%;
`;

const Text = styled.p`
  margin-block: var(--spacing-0400) var(--spacing-0500);
`;