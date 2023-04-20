import apples from "./images/apples.webp";
import bananas from "./images/bananas.webp";
import cucumbers from "./images/cucumbers.webp";
import dates from "./images/dates.webp";

const availableItems = [
  {
    id: 1,
    name: "Apple",
    regular_price: 0.5,
    special_price: 1.3,
    itemsForSpecial: 3,
    img: apples,
    totalBasket: 0,
  },
  {
    id: 2,
    name: "Banana",
    regular_price: 0.3,
    special_price: 0.45,
    itemsForSpecial: 2,
    img: bananas,
    totalBasket: 0,
  },
  {
    id: 3,
    name: "Cucumber",
    regular_price: 0.2,
    img: cucumbers,
    totalBasket: 0,
  },
  {
    id: 4,
    name: "Date",
    regular_price: 0.15,
    img: dates,
    totalBasket: 0,
  },
];

export default availableItems;
