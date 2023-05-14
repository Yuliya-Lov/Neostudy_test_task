export const headphones = [
  {
    id: 'headphones-1',
    img: "./assets/BYZS852I.png",
    title: "Apple BYZ S852I",
    price: 2927,
    oldPrice: 3527,
    rate: 4.7
  },
  {
    id: 'headphones-2',
    img: "./assets/earPods-1.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5
  },
  {
    id: 'headphones-3',
    img: "./assets/earPods-2.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5
  },
  {
    id: 'headphones-4',
    img: "./assets/BYZS852I.png",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7
  },
  {
    id: 'headphones-5',
    img: "./assets/earPods-1.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5
  },
  {
    id: 'headphones-6',
    img: "./assets/earPods-2.png",
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5
  }
]

export const wirelessHeadphones = [
  {
    id: 'wirelessHeadphones-1',
    img: "./assets/earPods-3.png",
    title: "Apple EarPods",
    price: 9527,
    rate: 4.7
  },
  {
    id: 'wirelessHeadphones-2',
    img: "./assets/GH-04.png",
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7
  },
  {
    id: 'wirelessHeadphones-3',
    img: "./assets/BO4.png",
    title: "BOROFONE BO4",
    price: 7527,
    rate: 4.7
  },
]

export const allProducts = headphones.concat(wirelessHeadphones);
export const cartIconCount = document.querySelector('.header__counter_value_goods');
export const cartIconCountArea = document.querySelector('.header__counter_value_goods').closest('.header__count-area');
export const cartTotalPrice = document.querySelector('.cart__total-price-span');
