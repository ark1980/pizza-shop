export const foodItems = [
  {
    id: 1,
    name: 'Cheese Pizza',
    img: '/img/pizza.png',
    section: 'Pizza',
    price: 1,
  },
  {
    id: 2,
    name: 'Pepperoni Pizza',
    img: '/img/pizza2.jpeg',
    section: 'Pizza',
    price: 1.5,
  },
  {
    id: 3,
    name: 'Chicken Pizza',
    img: '/img/chicken-pizza.jpeg',
    section: 'Pizza',
    price: 2,
  },
  {
    id: 4,
    img: '/img/healthy-pizza.jpeg',
    name: 'Veggie Pizza',
    section: 'Pizza',
    price: 2,
  },
  {
    id: 5,
    img: '/img/burger.jpeg',
    name: 'Burger',
    section: 'Sandwich',
    price: 3,
  },
  {
    id: 6,
    img: '/img/sandwich.jpeg',
    name: 'Shrimp PoBoy',
    section: 'Sandwich',
    price: 6,
  },
  {
    id: 7,
    img: '/img/fries.jpeg',
    name: 'Fries',
    section: 'Sides',
    price: 1,
  },
  {
    id: 8,
    img: '/img/soda.jpeg',
    price: 1,
    name: 'Soda',
    section: 'Drinks',
    choices: ['Coke', 'Sprite', 'Root Beer'],
  },
  {
    id: 9,
    img: '/img/gyro.jpeg',
    name: 'Gyro',
    section: 'Sandwich',
    price: 4.5,
  },
];

export const allFoods = foodItems.reduce((res, food) => {
  const foodCategory = food.section;

  if (!res[foodCategory]) {
    res[foodCategory] = [];
  }
  res[foodCategory].push(food);

  return res;
}, {});

export const priceFormatter = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};
