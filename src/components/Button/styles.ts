import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

const ButtonStyles = `
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`

export const ButtonContainer = styled.button<Props>`
  ${ButtonStyles}
  border: 2px solid ${(props) =>
    props.variant === 'primary' ? colors.green : colors.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
`
export const ButtonLink = styled(Link)`
  ${ButtonStyles}
  text-decoration: none;
  &:visited {
    color: ${colors.white};
  }
`
