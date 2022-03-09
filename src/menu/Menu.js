import styled from 'styled-components'
import { foodItems } from '../data/FoodData';
import { FoodGrid } from '../Styles/foodGrid';
import FoodItem from './FoodItem'

const MenuStyled = styled.div`
  width: 80%;
  margin: 2rem auto;

  h2 {
    margin-bottom: 2rem;
  }
`;

const Menu = () => {
  return (
    <MenuStyled>
      <h2>Menu:</h2>
      <FoodGrid>
        {foodItems.map((food) => {
          return <FoodItem key={food.id} food={food}/>
        })}
      </FoodGrid>
    </MenuStyled>
  )
}

export default Menu;