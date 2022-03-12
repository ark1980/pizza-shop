import React from 'react';
import {Title} from '../Styles/title'
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

const Order = () => {
  return (
    <OrderStyled>
      <Title>Cart</Title>
      <hr />
    </OrderStyled>
  )
}

export default Order;