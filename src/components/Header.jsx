import TopBar from "./TopBar";
import NavBar from "./NavBar";

const Header = ({ openCart }) => {
  return (
    <header>
      <TopBar />
      <NavBar openCart={openCart} />
    </header>
  );
};

export default Header;
