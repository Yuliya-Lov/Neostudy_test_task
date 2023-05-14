import Section from "../components/Section.js";
import {
  sessionData,
  headphonesProductArray,
  wirelessHeadphonesProductArray,
  allProductsArray,
  setCartCount
} from "../pages/scripts.js";

sessionData.loadSessionStorage();
sessionData.setCurrentCountOfAllProducts(allProductsArray);
setCartCount(sessionData.getTotalCountStorageItems());

const headphonesSection = new Section(
  'Наушники',
  '#headphonesSection'
)
headphonesSection.generateSection();
headphonesSection.addRendersArr(headphonesProductArray.map(item => item.generateProduct()));


const wirelessHeadphonesSection = new Section(
  'Беспроводные наушники',
  '#wirelessHeadphonesSection',
)
wirelessHeadphonesSection.generateSection();
wirelessHeadphonesSection.addRendersArr(wirelessHeadphonesProductArray.map(item => item.generateProduct()));



