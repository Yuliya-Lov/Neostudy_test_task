import {
  cartTotalPrice
} from "../utils/constants.js";
import {
  sessionData,
  allProductsArray,
  setCartCount,
  setTotalPrice
} from "../pages/scripts.js";
import Section from "../components/Section.js";

sessionData.loadSessionStorage();
sessionData.setCurrentCountOfAllProducts(allProductsArray);
setCartCount(sessionData.getTotalCountStorageItems());
setTotalPrice(sessionData.getTotalPriceStorageItems());

const cartSection = new Section(
  'Корзина',
  '#cartSection'
)
cartSection.generateSection();

const cartRenderList = sessionData.getAllStorageItemsArr().map(cartEl => {
  const cartProduct = allProductsArray.find(product => {
    if (product.id == Object.keys(cartEl)[0])
      return product;
  })
  cartProduct.count = +Object.values(cartEl)[0];
  return cartProduct.generateCartItem('#cartItemTemplate');
})

cartSection.addRendersArr(cartRenderList);







