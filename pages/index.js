import Section from "../components/Section.js";
import {
  cartButton,
  sectionsParent,
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

//window.sessionStorage.clear();


//return productRender.generateProduct();
loadSessionStorage();
setCartCount(getTotalCount(getSessionStorageArrItems()));
setCurrentCountOfProduct(getSessionStorageArrItems());


const headphonesSection = new Section(
  'Наушники',
  '#headphonesSection',
  () => console.log('changeCountAction')
  )

  headphonesSection.generateSection(sectionsParent);
  headphonesSection.addRendersArr(headphonesProductArray.map(item => item.generateProduct()));


const  wirelessHeadphonesSection = new Section(
  'Беспроводные наушники',
  '#wirelessHeadphonesSection',
  () => console.log('changeCountAction')
  )

  wirelessHeadphonesSection.generateSection(sectionsParent);
  wirelessHeadphonesSection.addRendersArr(wirelessHeadphonesProductArray.map(item => item.generateProduct()));


  cartButton.addEventListener('click', () =>{
    console.log('open cart');
  })


