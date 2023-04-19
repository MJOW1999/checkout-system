import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculatePrices } from "./app/slices/basketSlice";
import BasketWrapper from "./components/BasketWrapper";
import Navbar from "./components/Navbar";

function App() {
  const { basketItems } = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculatePrices());
  }, [basketItems, dispatch]);

  return (
    <main>
      <Navbar />
      <BasketWrapper />
    </main>
  );
}

export default App;
