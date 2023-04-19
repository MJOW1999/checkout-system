import styled from "styled-components";
import BasketItem from "./BasketItem";
import { useSelector } from "react-redux";

const BasketWrapper = () => {
  const { basketItems, totalPrice } = useSelector((state) => state.basket);

  return (
    <Wrapper>
      <header>
        <h2>Available Items</h2>
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
      <footer>
        <article>
          <BasketTotal>
            Total: <span>£{totalPrice.toFixed(2)}</span>
          </BasketTotal>
        </article>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: calc(100vh - 120px);
  width: 90vw;
  margin: 0 auto;
  margin-top: 40px;
  padding: 2.5rem 0;
  max-width: 50rem;
`;

const BasketTotal = styled.h4`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export default BasketWrapper;
