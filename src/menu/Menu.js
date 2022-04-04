import styled from 'styled-components';
import { allFoods } from '../data/FoodData';
import { FoodGrid } from '../Styles/foodGrid';
import FoodItem from './FoodItem';
import { Title } from '../Styles/title';
import { pizzaRed } from '../Styles/colors.js';

const MenuStyled = styled.div`
  width: 70%;
  padding-right: 0.7rem;

  h2 {
    margin: 2rem 0 1rem;
  }
`;

const MenuHeader = styled(Title)`
  font-size: 1.7rem;
  font-weight: bold;
  background-color: ${pizzaRed};
  display: inline-block;
  padding: 1rem;
  border-radius: 50px;
  color: #ffffff;
  text-shadow: 3px 3px 5px #2c2c2c;
  box-shadow: 3px 3px 5px #2c2c2c;
  margin: 0 0 1rem 0;
`;

const Menu = ({ openModal, getFoodInfo }) => {
  return (
    <MenuStyled>
      <MenuHeader>Popular Items</MenuHeader>
      {Object.entries(allFoods).map(([category, foods]) => (
        <>
          <h2>{category}</h2>
          <FoodGrid>
            {foods.map((food) => (
              <FoodItem
                key={food.id}
                food={food}
                openModal={openModal}
                getFoodInfo={getFoodInfo}
              />
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
};

export default Menu;
