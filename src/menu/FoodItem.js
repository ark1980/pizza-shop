import styled from 'styled-components';

const FoodItemStyled = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 1em;
  height: 200px;
  padding: 0 1em 1em .5rem;
  background-image: ${({img}) => `url(${img})`};
  background-size: cover;
  background-position: center;
  filter: contrast(75%);
  transition: filter .2s, box-shadow .2s;

  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    box-shadow: 3px 3px 5px #BEBEBE;
  }
`;

const FoodLabel = styled.span`
  position: absolute;
  background-color: rgba(255, 255, 255, .7);
  padding: .4em;
  margin-top: .5em;
  border-radius: 5px;
`;

const FoodItem = ({food}) => {
  return(
    <FoodItemStyled img={food.img}>
      <FoodLabel>
        <h3>{food.name}</h3>
      </FoodLabel>
    </FoodItemStyled>
  )
}

export default FoodItem;