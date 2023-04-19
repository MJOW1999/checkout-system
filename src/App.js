import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculatePrices } from "./app/slices/basketSlice";
import "./App.css";
import BasketItem from "./components/BasketItem";

function App() {
  const { basketItems } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculatePrices());
  }, [basketItems, dispatch]);

  return (
    <main>
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
    </main>
  );
}

export default App;
