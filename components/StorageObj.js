export default class StorageObj {
  constructor(dataObj, getTotalPrice) {
    this._obj = dataObj;
    this._getTotalPrice = getTotalPrice;
  }

  addStorageItem(item) {
    this.getAllStorageItemsArr().find(el => Object.keys(el)[0] == item.id)
      ? false
      : this._obj.setItem(item.id, item.count);
  }

  removeStorageItem(item) {
    this.getAllStorageItemsArr().find(el => Object.keys(el)[0] == item.id)
      ? this._obj.removeItem(item.id)
      : false;
  }

  getAllStorageItemsArr() {
    const cartList = [];
    if (this._obj.length > 0) {
      for (let i = 0; i < this._obj.length; i++) {
        const item = { [this._obj.key(i)]: this._obj.getItem(this._obj.key(i)) };
        cartList.push(item);
      }
      const needless = cartList.find(el => Object.keys(el).includes('IsThisFirstTime_Log_From_LiveServer'))
      needless
        ? cartList.splice(cartList.indexOf(needless), 1)
        : true;
      return cartList;
    } else {
      return [];
    }
  }

  loadSessionStorage() {
    this.getAllStorageItemsArr().forEach(data => {
      this._obj.setItem(Object.keys(data)[0], Object.values(data)[0]);
    })
  }

  setCountOfProduct(item) {
    this._obj[item.id] = item.count;
  }

  setCurrentCountOfAllProducts(productArr) {
    return this.getAllStorageItemsArr().length > 0
      ? this.getAllStorageItemsArr().map(storageItem => {
        const cartItem = productArr.find(product => product.id == Object.keys(storageItem)[0]);
        cartItem.count = +Object.values(storageItem);
        return cartItem;
      })
      : false;
  }

  getTotalCountStorageItems() {
    return this.getAllStorageItemsArr().reduce((res, item) => {
      return res + +Object.values(item);
    }, 0);
  }

  getTotalPriceStorageItems() {
    return this._getTotalPrice(this.getAllStorageItemsArr());
  }
}
