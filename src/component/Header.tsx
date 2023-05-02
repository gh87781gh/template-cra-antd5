import styled from 'styled-components'
import { IconLogo } from 'utility/icon'

export const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <IconLogo />
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. In itaque sequi
      nobis, rem numquam et ea ad dolor labore natus id, modi, libero facilis
      perferendis voluptatum impedit. Voluptate, quisquam magni?
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: red;
`
