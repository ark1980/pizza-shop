import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const BackdropModal = styled.div`
  background-color: rgba(0,0,0,.75);
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
  padding: 1rem;
  height: calc(100% - 100px);
  z-index: 10000;
  position: fixed;
  top: 50px;
  left: calc(50% - 250px);
  border-radius: 20px;
`;

const Modal = ({isOpen, openModal, food}) => {
  if (isOpen) {
    return ReactDOM.createPortal(
      <>
        <OverlayModal>
          <h1>{food.name}</h1>
          <p>{`$${food.price}`}</p>
        </OverlayModal>
      <BackdropModal onClick={() => openModal()} />
      </>,
      document.getElementById('modal')
    )
  } else return null;
}

export default Modal;