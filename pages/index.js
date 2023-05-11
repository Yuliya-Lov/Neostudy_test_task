import Product from "../components/Product.js";
import Section from "../components/Section.js";

const headphones = [
    {
        id: 'headphones-1',
        img: "./assets/BYZS852I.png",
        title: "Apple BYZ S852I",
        price: 2927,
        oldPrice: 3527,
        rate:  4.7
    },
    {
        id: 'headphones-2',
        img: "./assets/earPods-1.png",
        title: "Apple EarPods",
        price: 2327,
        rate:  4.5
    },
    {
        id: 'headphones-3',
        img: "./assets/earPods-2.png",
        title: "Apple EarPods",
        price: 2327,
        rate:  4.5
    },
    {
        id: 'headphones-4',
        img: "./assets/BYZS852I.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate:  4.7
    },
    {
        id: 'headphones-5',
        img: "./assets/earPods-1.png",
        title: "Apple EarPods",
        price: 2327,
        rate:  4.5
    },
    {
        id: 'headphones-6',
        img: "./assets/earPods-2.png",
        title: "Apple EarPods",
        price: 2327,
        rate:  4.5
    }
]

const wirelessHeadphones =[
    {
        id: 'wirelessHeadphones-1',
        img: "./assets/earPods-3.png",
        title: "Apple EarPods",
        price: 9527,
        rate:  4.7
    },
    {
        id: 'wirelessHeadphones-2',
        img: "./assets/GH-04.png",
        title: "GERLAX GH-04",
        price: 6527,
        rate:  4.7
    },
    {
        id: 'wirelessHeadphones-3',
        img: "./assets/BO4.png",
        title: "BOROFONE BO4",
        price: 7527,
        rate:  4.7
    },
]

const cartButton = document.querySelector('.header__cart-link');
const cartButtonCount = document.querySelector('.header__counter_value_goods');
const cartButtonCountArea = document.querySelector('.header__counter_value_goods').closest('.header__count-area');
const sectionsParent = document.querySelector('.content');

function setCartCount(count){
  if(count > 0){
    cartButtonCount.textContent = count;

    cartButtonCountArea.classList.contains('header__count-area_hidden')
    ? cartButtonCountArea.classList.remove('header__count-area_hidden')
    : true;
  } else {
    cartButtonCountArea.classList.contains('header__count-area_hidden')
    ? true
    : cartButtonCountArea.classList.add('header__count-area_hidden');
  }
}

const cartItemsList = [];
let countCartItems = 0;

function addCartItem(item){
  if(!cartItemsList.includes(item)){
    cartItemsList.push(item);
    return countCartItems += 1;
  } else {
    return countCartItems += 1;
  }
}

function removeCartItem(item){
  if(item.count > 1){
    return countCartItems -= 1;
  } else {
    const index = cartItemsList.indexOf(item);
    cartItemsList.splice(index, 1);
    viewCart(cartItemsList);
    return countCartItems -= 1;
  }
}

function deleteCartItem(item){
  countCartItems -= item.count;
  const index = cartItemsList.indexOf(item);
  cartItemsList.splice(index, 1);
  viewCart(cartItemsList);
  return countCartItems;
}



const headphonesRendersArray =
headphones.map(item => {
  const productRender = new Product(
    item,
    '#productTemplate',
    (product) => {
      addCartItem(product);
      setCartCount(countCartItems);
    },
    (product) => {
      removeCartItem(product);
      setCartCount(countCartItems);
    },
    (product) => {
      deleteCartItem(product);
    }
    );
  return productRender.generateProduct();
})


const headphonesSection = new Section(
  'Наушники',
  '#productSectionTemplate',
  () => console.log('changeCountAction')
  )

  headphonesSection.generateSection(sectionsParent);
  headphonesSection.addRendersArr(headphonesRendersArray);

  const wirelessHeadphonesRendersArray =
  wirelessHeadphones.map(item => {
  const productRender = new Product(
    item,
    '#productTemplate',
    (product) => {console.log('add')},
    (product) => {console.log('remove')}
    );
  return productRender.generateProduct();
})

const  wirelessHeadphonesSection = new Section(
  'Беспроводные наушники',
  '#productSectionTemplate',
  () => console.log('changeCountAction')
  )

  wirelessHeadphonesSection.generateSection(sectionsParent);
  wirelessHeadphonesSection.addRendersArr(wirelessHeadphonesRendersArray);


  const cartSection = new Section(
    'Корзина',
    '#cartSectionTemplate',
    () => console.log('changeCountAction')
    )

  function viewCart(itemList){
    sectionsParent.innerHTML ='';
    cartSection.generateSection(sectionsParent);
    const renderArray = itemList.map(item =>{
      return item.generateCartItem('#cartItemTemplate');
    })
    cartSection.addRendersArr(renderArray);
  };






  cartButton.addEventListener('click', () =>{
    viewCart(cartItemsList);
  })


