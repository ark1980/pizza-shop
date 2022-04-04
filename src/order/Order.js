import React, {useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Title } from '../Styles/title';
import { pizzaRed } from '../Styles/colors';
import styled from 'styled-components';
import Button from '../Styles/Button';
import { priceFormatter } from '../data/FoodData';

const OrderStyled = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  font-size: 2rem;
  background-color: #fafafa;
  color: #191919;
  position: fixed;
  top: 100px;
  right: 0px;
  height: calc(100vh - 100px);
  box-shadow: 1px 3px 10px #898787;
`;
const OrderHeader = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid black;
`;

const OrderContent = styled.div`
  width: 100%;
  padding: 1.5rem 1rem;
`;

const OrderFooter = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem 0;
  text-align: center;
  font-size: 1rem;
`;

const OrderItemStyled = styled.div`
  width: 100%;
  background-color: #fff;
  margin: 0.3rem 0;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteBtnStyled = styled.span`
  background-color: ${pizzaRed};
  padding: 0.4rem 0.6rem;
  margin-right: 0.5rem;
  color: #fff;
  cursor: pointer;
`;

const Order = ({ orders, setOrders }) => {

  const [total, setTotal] = useState(0);

  

  const removeItem = (order) => {
    const filteredOrders = orders.filter((item) => item.name !== order.name);
    setOrders(filteredOrders);
  };

  return (
    <OrderStyled>
      <OrderHeader>
        <Title>Cart</Title>
      </OrderHeader>
      <OrderContent>
        {orders.map((order) => (
          <OrderItemStyled>
            <span>
              <DeleteBtnStyled onClick={() => removeItem(order)}>
                <FaTrashAlt />
              </DeleteBtnStyled>
              <span>{order.name}</span>
            </span>
            <span>${order.price}</span>
          </OrderItemStyled>
        ))}
      </OrderContent>
      <OrderFooter>
        <Button text={`checkout ${priceFormatter(total)}`} />
      </OrderFooter>
    </OrderStyled>
  );
};

export default Order;
