import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import BasketItem from "./BasketItem";
import { clearBasket } from "../app/slices/basketSlice";

const BasketWrapper = () => {
  const { basketItems, totalPrice } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const checkout = () => {
    const checkoutPopup = window.confirm(
      `Your final total is £${totalPrice.toFixed(
        2
      )}. Press OK to checkout, or Cancel to continue shopping.`
    );
    if (checkoutPopup) {
      dispatch(clearBasket());
    }
  };

  return (
    <Wrapper>
      <header>
        <HeaderTitle>Available Items</HeaderTitle>
      </header>
      <section>
        {basketItems?.map((item) => {
          return (
            <BasketItem
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              itemsForSpecial={item.itemsForSpecial}
              regular_price={item.regular_price}
              special_price={item.special_price}
              totalBasket={item.totalBasket}
            />
          );
        })}
      </section>
      <Footer>
        <hr />
        <article>
          <BasketTotal>
            Total: <span>£{totalPrice.toFixed(2)}</span>
          </BasketTotal>
        </article>
        <ButtonWrapper>
          <CheckoutButton onClick={() => checkout()}>Checkout</CheckoutButton>
          <ClearButton onClick={() => dispatch(clearBasket())}>
            Clear Basket
          </ClearButton>
        </ButtonWrapper>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - 120px);
  width: 90vw;
  margin: 0 auto;
  margin-top: 40px;
  padding-bottom: 2.5rem;
  max-width: 50rem;
`;

const HeaderTitle = styled.h2`
  font-size: max(14px, 2vmax);
  text-decoration: underline;
  padding-bottom: 2vh;
`;

const Footer = styled.footer`
  margin-top: 4rem;
  text-align: center;
`;
const BasketTotal = styled.h4`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: (16px, 2.5vmax);
`;

const ButtonWrapper = styled.article`
  display: flex;
  justify-content: space-evenly;
`;

const CheckoutButton = styled.button`
  background: transparent;
  padding: 0.5rem 1rem;
  color: #023020;
  border: 1px solid #023020;
  margin-top: 1rem;
  font-size: max(16px, 2vmax);
  border-radius: 5px;

  &:hover {
    background: lightyellow;
    border-color: #556b2f;
  }
`;

const ClearButton = styled.button`
  background: transparent;
  padding: 0.5rem 1rem;
  color: #8b0000;
  border: 1px solid #8b0000;
  margin-top: 1rem;
  font-size: max(16px, 2vmax);
  border-radius: 5px;

  &:hover {
    background: lightyellow;
    border-color: red;
  }
`;

export default BasketWrapper;
