import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  ChevronUpIcon as ChevronUp,
  ChevronDownIcon as ChevronDown,
} from "@heroicons/react/24/solid";
import { increase, decrease } from "../app/slices/basketSlice";

const BasketItem = ({
  id,
  img,
  name,
  regular_price,
  special_price,
  itemsForSpecial,
  totalBasket,
}) => {
  const dispatch = useDispatch();

  return (
    <BasketArticle>
      <ProductImage src={img} alt={name} />
      <section>
        <ProductName>{name}</ProductName>
        <ItemPrice>Price: £{regular_price.toFixed(2)}</ItemPrice>
        {itemsForSpecial && special_price && (
          <SpecialOffer>
            Today only! Get {itemsForSpecial} for £{special_price.toFixed(2)}!
          </SpecialOffer>
        )}
      </section>
      <AmountWrapper>
        {/* increase amount */}
        <AmountButton
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <ChevronUp />
        </AmountButton>
        {/* amount */}
        <Amount>{totalBasket}</Amount>
        {/* decrease amount */}
        <AmountButton
          onClick={() => {
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </AmountButton>
      </AmountWrapper>
    </BasketArticle>
  );
};

const BasketArticle = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
  min-width: 50vw;
`;

const ProductImage = styled.img`
  width: 20vw;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid black;
`;

const ProductName = styled.h4`
  font-size: 2vmax;
`;

const SpecialOffer = styled.h5`
  color: #dd4124;
  font-size: 1.25vmax;
  font-style: italic;
`;

const ItemPrice = styled.h4`
  color: #34568b;
  font-size: 1.5vmax;
`;

const AmountWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AmountButton = styled.button`
  width: 44px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: purple;
  }
`;

const Amount = styled.p`
  font-size: 20px;
`;
export default BasketItem;
