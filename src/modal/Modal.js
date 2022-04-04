import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Button from '../Styles/Button';
import { priceFormatter } from '../data/FoodData';

const BackdropModal = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const OverlayModal = styled.div`
  background-color: #f3f3f3;
  color: #333;
  width: 500px;
  margin: 0 auto;
  max-height: calc(100% - 100px);
  z-index: 10000;
  position: fixed;
  top: 50px;
  left: calc(50% - 250px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  background-image: ${({ img }) => `url(${img})`};
  width: 100%;
  min-height: 180px;
  background-size: cover;
  background-position: center;
  border-radius: 20px 20px 0 0;
`;
const ModalContent = styled.div`
  width: 100%;
  padding: 1.5rem;
  overflow: auto;
`;

const ModalFooter = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px -5px 5px #bebebe;
  text-align: center;
`;

const Modal = ({ isOpen, openModal, food, orders, setOrders }) => {
  const order = {
    name: food.name,
    price: food.price,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    openModal(false);
  };

  if (isOpen) {
    return ReactDOM.createPortal(
      <>
        <OverlayModal>
          <ModalHeader img={food.img} />
          <ModalContent>
            <h2>{food.name}</h2>
            <p>{priceFormatter(food.price)}</p>
          </ModalContent>
          <ModalFooter>
            <Button action={addToOrder} text={'add to order'} />
          </ModalFooter>
        </OverlayModal>
        <BackdropModal onClick={() => openModal()} />
      </>,
      document.getElementById('modal')
    );
  } else return null;
};

export default Modal;
