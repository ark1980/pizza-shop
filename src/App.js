import GlobalStyle from "./GlobalStyle";
import Navbar from './navbar/Navbar';
import { Banner } from "./banner/Banner";
import Menu from "./menu/Menu";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu />
    </>
  );
}

export default App;
