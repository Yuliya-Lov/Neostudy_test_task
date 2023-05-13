export default class StorageObj {
  constructor(){
  }

addStorageItem(item){
  window.sessionStorage.key(item.id)
  ? false
  : window.sessionStorage.setItem(item.id, item.count);
}

removeStorageItem(item){
  window.sessionStorage.key(item.id)
  ? window.sessionStorage.removeItem(item.id)
  : false;
}
}

/* export function getSessionStorageArrItems(){
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


}

export function loadSessionStorage(){
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
} */
