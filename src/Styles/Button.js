import styled from 'styled-components'
import { pizzaRed } from '../Styles/colors'

const ButtonStyled  = styled.button`
  font-family: 'Quicksand', sans-serif;
  padding: 1rem 1.5rem;
  background-color: ${pizzaRed};
  color: #ffffff;
  font-size: 1.1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Button = ({text, action}) => {
  return (
    <ButtonStyled onClick={action}>
      {text}
    </ButtonStyled>
  )
}

export default Button;