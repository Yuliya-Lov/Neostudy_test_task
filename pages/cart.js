import Product from "../components/Product.js";
import Section from "../components/Section.js";
import {
  headphones,
  wirelessHeadphones,
  allProducts,
  cartButton,
  cartButtonCount,
  cartButtonCountArea,
  sectionsParent,
  cartProductList
} from "../utils/constants.js";
import {
  setSessionStorageObj,
  getSessionStorageArrItems,
  getTotalCount,
  setCartCount,
  headphonesProductArray,
  wirelessHeadphonesProductArray,
  allProductsArray,
  loadSessionStorage,
  setCurrentCountOfProduct
} from "../pages/scripts.js";

loadSessionStorage();

setCartCount(getTotalCount(getSessionStorageArrItems()));

const cartSection = new Section(
  'Корзина',
  '#cartSection',
  () => console.log('changeCountAction')
  )

  cartSection.generateSection(sectionsParent);


  let cartRenderList = setCurrentCountOfProduct(getSessionStorageArrItems()).map(el => el.generateCartItem('#cartItemTemplate'));


  console.log(cartRenderList);

  cartSection.addRendersArr(cartRenderList);

  cartRenderList.forEach(el => {
    console.log(el.id, el.count)
  });






