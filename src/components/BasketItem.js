import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  ChevronUpIcon as ChevronUp,
  ChevronDownIcon as ChevronDown,
} from "@heroicons/react/24/solid";
import { removeItem, increase, decrease } from "../app/slices/basketSlice";

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
        <h4>{name}</h4>
        <ItemPrice>Price: £{regular_price.toFixed(2)}</ItemPrice>
        {itemsForSpecial && special_price && (
          <SpecialOffer>
            Today only! Get {itemsForSpecial} for £{special_price.toFixed(2)}!
          </SpecialOffer>
        )}
        {/* remove button */}
        <RemoveButton
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Remove
        </RemoveButton>
      </section>
      <AmountWrapper>
        {/* increase amount */}
        <AmountButton
          className="amount-btn"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <ChevronUp />
        </AmountButton>
        {/* amount */}
        <p className="amount">{totalBasket}</p>
        {/* decrease amount */}
        <AmountButton
          className="amount-btn"
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
  width: 50vw;
`;

const ProductImage = styled.img`
  width: 20vw;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid black;
`;

const SpecialOffer = styled.h5`
  color: #dd4124;
  font-style: italic;
`;

const ItemPrice = styled.h4`
  color: #34568b;
`;

const RemoveButton = styled.button`
  color: #c3447a;
  cursor: pointer;
  font-size: 0.85rem;
  background: transparent;
  border: none;
  margin-top: 0.375rem;
  transition: all 0.3s linear;
`;

const AmountWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AmountButton = styled.button`
  width: 24px;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: pink;
  }
`;
export default BasketItem;
