import { ShoppingCartIcon as Cart } from "@heroicons/react/24/solid";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalItems = useSelector((state) => state.basket.totalItems);
  console.log(totalItems);
  return (
    <Nav>
      <NavCenter>
        <NavTitle>MJOW1999 Checkout System</NavTitle>
        <NavContainer>
          <Cart width={"40px"} />
          {totalItems > 0 && (
            <ItemContainer>
              <TotalItems>{totalItems}</TotalItems>
            </ItemContainer>
          )}
        </NavContainer>
      </NavCenter>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 1.25rem 2rem;
`;

const NavCenter = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavTitle = styled.h3`
  margin-bottom: 0;
`;

const NavContainer = styled.section`
  display: block;
  position: relative;
`;

const ItemContainer = styled.article`
  position: absolute;
  top: -0.6rem;
  right: -0.6rem;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: #dd4124;
  display: flex;
  align-items: center;
  justify-content; center;
`;

const TotalItems = styled.p`
  color: white;
  margin-bottom: 0;
  font-size: 1.15rem;
  position: absolute;
  top: -1rem;
  left: 0.4rem;
`;

export default Navbar;
