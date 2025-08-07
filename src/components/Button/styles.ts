import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

const ButtonStyles = `
  border: 2px solid ${colors.white};
  colort: ${colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`

export const ButtonContainer = styled.button`
  ${ButtonStyles}
`
export const ButtonLink = styled(Link)`
  ${ButtonStyles}
  text-decoration: none;
  &:visited {
    color: ${colors.white};
  }
`
