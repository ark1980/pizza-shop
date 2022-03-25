import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import {Title} from '../Styles/title';
import {pizzaRed} from '../Styles/colors';
import styled from 'styled-components';

const OrderStyled = styled.div`
  width: 30%;
  font-size: 2rem;
  background-color: #fafafa;
  color: #191919;
  position: fixed;
  padding: 3rem 1rem;
  top: 100px;
  right: 0px;
  height: calc(100vh - 100px);
  box-shadow: 1px 3px 10px #898787;
`

const OrderItemStyled = styled.div`
  width: 100%;
  background-color: #fff;
  margin: 1.2rem 0;
  padding: .5rem;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteBtnStyled = styled.span`
  background-color: ${pizzaRed};
  padding: .4rem .6rem;
  margin-right: .5rem;
  color: #fff;
  cursor: pointer;
`

const Order = ({orders, setOrders}) => {

  const removeItem = (order) => {
    const filteredOrders = orders.filter(item => item.name !== order.name)
    setOrders(filteredOrders)
  }

  return (
    <OrderStyled>
      <Title>Cart</Title>
      {orders.map(order => (
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
    </OrderStyled>
  )
}

export default Order;