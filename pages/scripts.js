
import {
  headphones,
  wirelessHeadphones,
  cartButton,
  cartButtonCount,
  cartButtonCountArea,
  sectionsParent,
  cartProductList
} from "../utils/constants.js";

import Product from "../components/Product.js";
import Section from "../components/Section.js";

/* export function setSessionStorageObj(itemsArr){
  if(itemsArr.length > 0) {
    itemsArr.filter(item => {
      window.sessionStorage.key(item.id);
      return item;
    }).forEach(item => {
      window.sessionStorage.setItem(item.id, item.count);
    })
  } else {
    window.sessionStorage.clear();
  }
}

export function getSessionStorageArrItems(){
  const cartList = [];
  if(window.sessionStorage.length > 0){
    for(let i = 0; i < window.sessionStorage.length; i++){
      const item = {
        [window.sessionStorage.key(i)]: window.sessionStorage.getItem(window.sessionStorage.key(i))
      };
      cartList.push(item);
    }
    const needless = cartList.find(el => Object.keys(el).includes('IsThisFirstTime_Log_From_LiveServer'))
    needless
    ? cartList.splice(cartList.indexOf(needless), 1)
    : true;

    return  cartList;
  } else {
    return [];
  }
}

export function getTotalCount(cartList){
   return cartList.reduce((res, item) => {
    return res + +Object.values(item);
  }, 0)
}
 */
export function setCartCount(count){
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


function addCartItem(item){
  if(!cartProductList.some(el => el.id == item.id)){
    cartProductList.push(item);
    setSessionStorageObj(cartProductList);
  } else {
    cartProductList[cartProductList.indexOf(item)] = item;
    setSessionStorageObj(cartProductList);
  }
  setCartCount(getTotalCount(getSessionStorageArrItems()));
}

function removeCartItem(item){
  if(item.count >= 1){
    cartProductList[cartProductList.indexOf(item)] = item;
    setSessionStorageObj(cartProductList);
  } else {
    const num = cartProductList.indexOf(item);
    console.log(cartProductList);
    cartProductList.splice(num, 1)
    console.log(cartProductList);
    setSessionStorageObj(cartProductList);
  }
  console.log(cartProductList)
  setCartCount(getTotalCount(getSessionStorageArrItems()));
}




export const headphonesProductArray =
headphones.map(item => {
  return new Product(
    item,
    '#productTemplate',
    (product) => {
      addCartItem(product);
    },
    (product) => {
      removeCartItem(product);
      //setCartCount(getTotalCount(getSessionStorageArrItems()));
    }
    );
})

export const wirelessHeadphonesProductArray =
wirelessHeadphones.map(item => {
return new Product(
  item,
  '#productTemplate',
  (product) => {
    addCartItem(product);
    setCartCount(getTotalCount(getSessionStorageArrItems()));
  },
  (product) => {
    removeCartItem(product);
    setCartCount(getTotalCount(getSessionStorageArrItems()));
  }
  );
})

export const allProductsArray = headphonesProductArray.concat(wirelessHeadphonesProductArray);

//return productRender.generateProduct();


/* export function loadSessionStorage(){
  getSessionStorageArrItems().forEach(data => {
    window.sessionStorage.setItem(Object.keys(data)[0], Object.values(data)[0]);
  })
}

export function setCurrentCountOfProduct(storageData){
  return storageData.length > 0
    ? storageData.map(storageItem => {
      const cartItem = allProductsArray.find(product => product.id == Object.keys(storageItem)[0]);
      cartItem.count = +Object.values(storageItem);
         return cartItem;
         })
    :false;
}

 */



