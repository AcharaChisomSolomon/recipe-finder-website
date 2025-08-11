import * as Select from '@radix-ui/react-select'
import styled from '@emotion/styled'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export default function InputSection({
  searchTerms,
  setSearchTerms
}) {
  
  const handleSearchChange = (e) => {
    setSearchTerms(prev => ({
      ...prev,
      query: e.target.value
    }))
  }

  const handleCookTimeChange = (value) => {
    setSearchTerms(prev => ({
      ...prev,
      cookTime: value
    }))
  }

  const handlePrepTimeChange = (value) => {
    setSearchTerms(prev => ({
      ...prev,
      prepTime: value
    }))
  }

  return (
    <Form>
      <SelectGroup>

        <SingleSelect 
          placeholder="Max Prep Time"
          value={searchTerms.prepTime || ''}
          onValueChange={handlePrepTimeChange}
          options={[
            { value: '0', label: '0 minutes' },
            { value: '5', label: '5 minutes' },
            { value: '10', label: '10 minutes' },
            { value: null, label: 'Clear' }
          ]}
        />

        <SingleSelect 
          placeholder="Max Cook Time"
          value={searchTerms.cookTime || ''}
          onValueChange={handleCookTimeChange}
          options={[
            { value: '0', label: '0 minutes' },
            { value: '5', label: '5 minutes' },
            { value: '10', label: '10 minutes' },
            { value: '15', label: '15 minutes' },
            { value: '20', label: '20 minutes' },
            { value: null, label: 'Clear' }
          ]}
        />

      </SelectGroup>

      <SearchInputWrapper>
        <SearchIcon>
          <MagnifyingGlassIcon />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search by dish name or ingredient..."
          value={searchTerms.query || ''}
          onChange={handleSearchChange}
        />
      </SearchInputWrapper>
    </Form>
  )
}

function SingleSelect({ placeholder, value, onValueChange, options }) {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <SelectTrigger>
        <Select.Value placeholder={placeholder} />
        <SelectIcon>
          <ChevronDownIcon />
        </SelectIcon>
      </SelectTrigger>

      <Select.Portal>
        <SelectContent position='popper' sideOffset={8}>
          <SelectViewport>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label !== 'Clear' && (
                  <CircularIndicator isSelected={value === option.value}>
                    {value === option.value && <InnerDot />}
                  </CircularIndicator>
                )}
                <Select.ItemText>{option.label}</Select.ItemText>
              </SelectItem>
            ))}
          </SelectViewport>
        </SelectContent>
      </Select.Portal>
    </Select.Root>
  )
}

// Styled Components
const Form = styled.form`
  display: grid;
  gap: var(--spacing-0200);
  margin-block-start: clamp(3.5rem, 1.481vw + 2.367rem, 4.5rem);
  margin-block-end: var(--spacing-0300);

  @media (min-width: calc(700 / 16 * 1rem)) {
    grid-template-columns: auto 1fr;
    gap: var(--spacing-0300);
  }
`

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--neutral-000);
  border-radius: var(--radius-0008);
  overflow: hidden;
  padding-inline-start: var(--spacing-0150);

  &:focus-within, &:hover {
    border: 2px solid var(--neutral-900);
    padding-inline-start: calc(var(--spacing-0150) - 2px);
  }

  @media (min-width: calc(700 / 16 * 1rem)) {
    justify-self: end;
    width: min(calc(400 / 16 * 1rem), 100%);
  }
`

const SearchInput = styled.input`
  padding: var(--spacing-0150);
  border: none;
  font-size: var(--fs-18);
  font-family: var(--font-primary);
  min-width: min(calc(320 / 16 * 1rem), 100%);
  width: 100%;
  
  &:focus, &:active {
    border: none;
    outline: none;
  }
`

const SearchIcon = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--neutral-500);
  pointer-events: none; /* Allows clicking through to the input */
  
  svg {
    width: 16px;
    height: 16px;
  }
`

const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0200);

  @media (min-width: calc(700 / 16 * 1rem)) {
    flex-direction: row;
    gap: var(--spacing-0300);
  }
`

const SelectTrigger = styled(Select.Trigger)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-0150);
  padding: var(--spacing-0150);
  background-color: var(--neutral-000);
  border-radius: var(--radius-0008);
  border: none;
  font-size: var(--fs-18);
  font-family: var(--font-primary);
  cursor: pointer;
  color: inherit;

  &:active, &:focus, &:hover {
    border: 2px solid var(--neutral-900);
    outline: none;
    padding: calc(var(--spacing-0150) - 1px);
  }

  &[data-state="open"] {
    border-color: var(--neutral-900);
  }
`

const SelectIcon = styled(Select.Icon)`
  transition: transform 200ms;
  
  [data-state="open"] & {
    transform: rotate(180deg);
  }
`

const SelectContent = styled(Select.Content)`
  background-color: var(--neutral-000);
  border-radius: var(--radius-0008);
  box-shadow: 0 10px 38px -10px rgba(22, 23, 24, 0.35);
  z-index: 1000;
  width: calc(100vw - clamp(1rem, 3.529vw + -0.324rem, 2.5rem) * 2);
  transition: all 250ms;

  @media (min-width: calc(700 / 16 * 1rem)) {
    width: calc(240 / 16 * 1rem);
  }
`

const SelectViewport = styled(Select.Viewport)`
  padding: var(--spacing-0050);
`

const SelectItem = styled(Select.Item)`
  display: flex;
  align-items: center;
  gap: var(--spacing-0200);
  padding: var(--spacing-0150);
  border-radius: var(--radius-0004);
  cursor: pointer;
  font-size: var(--fs-18);
  font-family: var(--font-primary);

  &[data-state="checked"] {
    border: 2px solid var(--neutral-900);
  }

  &:focus {
    outline: none;
  }

  &[data-highlighted] {
    border: 2px solid var(--neutral-900);
  }
`

const CircularIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid var(--neutral-900);
  flex-shrink: 0;
  background-color: var(--neutral-000);

  ${props => props.isSelected && `
    border-color: var(--neutral-900);
  `}
`

const InnerDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--neutral-900);
`

// Simple chevron icon component
const ChevronDownIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path
      d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819L7.86819 8.93179C7.96069 9.02429 8.03931 9.02429 8.13181 8.93179L11.0682 6.06819C11.244 5.89245 11.244 5.60753 11.0682 5.43179C10.8925 5.25605 10.6076 5.25605 10.4318 5.43179L8 7.86362L5.56819 5.43179C5.39245 5.25605 5.10753 5.25605 4.93179 5.43179Z"
      fill={'#163b31ff'}
    />
  </svg>
)