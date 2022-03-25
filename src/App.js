import React, { useState } from 'react';
import GlobalStyle from "./GlobalStyle";
import Navbar from './navbar/Navbar';
import { Banner } from "./banner/Banner";
import Menu from "./menu/Menu";
import { MainContainer } from './Styles/mainContainer'
import Modal from './modal/Modal'
import Order from "./order/Order";

function App() {

  const [isOpen, setIsOpen] =useState(false);
  const [foodInfo, setFoodInfo] = useState({});
  const [orders, setOrders] = useState([]);

  const openModal = () => {
    setIsOpen(!isOpen);
  }

  const getFoodInfo = (food) => {
    setFoodInfo(food)
  }

  return (
    <>
      <Modal orders={orders} setOrders={setOrders} isOpen={isOpen} openModal={openModal} food={foodInfo} />
      <GlobalStyle />
      <Navbar />
      <Banner />
      <MainContainer>
        <Menu openModal={openModal} getFoodInfo={getFoodInfo}/>
        <Order orders={orders} setOrders={setOrders}/>
      </MainContainer>
    </>
  );
}

export default App;
