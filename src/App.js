import GlobalStyle from "./GlobalStyle";
import Navbar from './navbar/Navbar';
import { Banner } from "./banner/Banner";
import Menu from "./menu/Menu";
import { MainContainer } from './Styles/mainContainer'
import OrderStyled from './order/Order'
import Order from "./order/Order";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <MainContainer>
        <Menu />
        <Order />
      </MainContainer>
    </>
  );
}

export default App;
