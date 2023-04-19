import React, { useEffect } from "react";
import styled from "styled-components";
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
    <Main>
      <Navbar />
      <BasketWrapper />
    </Main>
  );
}

const Main = styled.main`
  background: mintcream;
`;

export default App;
