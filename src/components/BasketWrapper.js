import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import BasketItem from "./BasketItem";
import { clearBasket } from "../app/slices/basketSlice";

const BasketWrapper = () => {
  const { basketItems, totalPrice } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

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
        <ClearButton onClick={() => dispatch(clearBasket())}>
          Clear Basket
        </ClearButton>
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
  font-size: 2vmax;
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
  font-size: 2.5vmax;
`;

const ClearButton = styled.button`
  background: transparent;
  padding: 0.5rem 1rem;
  color: #8b0000;
  border: 1px solid #8b0000;
  margin-top: 1rem;
  font-size: 2vmax;
  border-radius: 5px;

  &:hover {
    background: lightyellow;
    color: #8b0000;
    border-color: red;
  }
`;

export default BasketWrapper;
