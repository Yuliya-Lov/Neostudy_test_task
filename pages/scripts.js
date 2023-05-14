import {
  headphones,
  wirelessHeadphones,
  cartIconCount,
  cartIconCountArea,
  cartTotalPrice
} from "../utils/constants.js";
import StorageObj from "../components/StorageObj.js"
import Product from "../components/Product.js";

export const sessionData = new StorageObj(
  sessionStorage,
  (storageItems) => {
    return storageItems.map(cartEl => {
      return allProductsArray.find(product => {
        if (product.id == Object.keys(cartEl)[0])
          return product;
      })
    }).reduce((acc, item) => {
      return acc + (item.count * item.price);
    }, 0)
  }
);

export function setCartCount(count) {
  if (count > 0) {
    cartIconCount.textContent = count;

    cartIconCountArea.classList.contains('header__count-area_hidden')
      ? cartIconCountArea.classList.remove('header__count-area_hidden')
      : true;
  } else {
    cartIconCountArea.classList.contains('header__count-area_hidden')
      ? true
      : cartIconCountArea.classList.add('header__count-area_hidden');
  }
}

function setPriceWithSpaces(price) {
    price.textContent = price.textContent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

}

export function setTotalPrice(totalPrice){
  cartTotalPrice.textContent = totalPrice;
  setPriceWithSpaces(cartTotalPrice);
}

function addCartItem(item) {
  const currentStorageItem = sessionData.getAllStorageItemsArr().find(el => Object.keys(el)[0] == item.id);
  if (typeof currentStorageItem == 'undefined') {
    sessionData.addStorageItem(item);
    if (cartTotalPrice) {
      setTotalPrice(sessionData.getTotalPriceStorageItems());
    }
  } else {
    sessionData.setCountOfProduct(item);
    if (cartTotalPrice) {
      setTotalPrice(sessionData.getTotalPriceStorageItems());
    }
  }
}

function removeCartItem(item) {
  if (item.count >= 1) {
    sessionData.setCountOfProduct(item);
    if (cartTotalPrice) {
      setTotalPrice(sessionData.getTotalPriceStorageItems());
    }
  } else {
    sessionData.removeStorageItem(item)
    if (cartTotalPrice) {
      setTotalPrice(sessionData.getTotalPriceStorageItems());
    }
  }
}

export const headphonesProductArray =
  headphones.map(item => {
    return new Product(
      item,
      '#productTemplate',
      (product) => {
        addCartItem(product);
        setCartCount(sessionData.getTotalCountStorageItems(sessionData.getAllStorageItemsArr()));
      },
      (product) => {
        removeCartItem(product);
        setCartCount(sessionData.getTotalCountStorageItems(sessionData.getAllStorageItemsArr()));
      },
      (price) => {
        setPriceWithSpaces(price);
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
        setCartCount(sessionData.getTotalCountStorageItems(sessionData.getAllStorageItemsArr()));
      },
      (product) => {
        removeCartItem(product);
        setCartCount(sessionData.getTotalCountStorageItems(sessionData.getAllStorageItemsArr()));
      },
      (price) => {
        setPriceWithSpaces(price);
      }
    );
  })

export const allProductsArray = headphonesProductArray.concat(wirelessHeadphonesProductArray);
