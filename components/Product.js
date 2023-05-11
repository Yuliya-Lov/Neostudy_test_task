export default class Product {
  constructor(data, templateSelector, addCartItem, removeCartItem, deleteCartItem){
    this.id = data.id;
    this._title = data.title;
    this._img = data.img;
    this._price = data.price;
    this._oldPrice = data.oldPrice || 0;
    this._rate =data.rate;
    this._template = templateSelector;
    this._addCartItem = addCartItem;
    this._removeCartItem = removeCartItem;
    this._deleteCartItem = deleteCartItem;
    this.count = 0;
  }

  _getTemplate(templ){
    return document
    .querySelector(templ)
    .content
    .querySelector('#item')
    .cloneNode(true);
  }

  _createCommonFilds(){
    this._productImage = this._product.querySelector('#itemImg');
    this._productTitle = this._product.querySelector('#itemTitle');
    this._productPrice = this._product.querySelector('#itemPrice');
    this._productEditCount = this._product.querySelector('#countEditor');
    this._productUpCountButton = this._product.querySelector('#upButton');
    this._productLowCountButton = this._product.querySelector('#lowButton');
    this._productActualCount = this._product.querySelector('#itemCount');
    this._productImage.setAttribute('src', this._img);
    this._productImage.setAttribute('alt', this._title);
    this._productTitle.textContent = this._title;
    this._productPrice.textContent = this._price;
    this._productActualCount.textContent = this.count;
    return this._product;
  }

  _createProduct() {
    this._product = this._getTemplate(this._template);
    this._createCommonFilds();
    if(this._oldPrice > 0) {
      this._productOldPrice = this._product.querySelector('#itemOldPrice');
      this._productOldPrice.classList.remove('product__price_hidden')
      this._productOldPrice.textContent = this._oldPrice;
    }
    this._productRate= this._product.querySelector('#itemRate');
    this._productBuyButton = this._product.querySelector('.buy-button');
    return this._product;
  }

  _createCardItem(cartItemTemlate){
    this._product = this._getTemplate(cartItemTemlate);
    this._createCommonFilds();
    this._productDeleteButton = this._product.querySelector('#itemDeleteButton');
    this._productTotalPrice = this._product.querySelector('#itemTotalPrice');
    this._productTotalPrice.textContent = +this._productPrice.textContent;
  }

  _isBought(boolean){
    if(boolean){
      this._productBuyButton.classList.add('buy-button_hidden');
      this._productEditCount.classList.remove('count-editor_hidden');
    } else {
      this._productBuyButton.classList.remove('buy-button_hidden');
      this._productEditCount.classList.add('count-editor_hidden');
    }
  }

  _setProductEventListeners(){
    this._productBuyButton.addEventListener('click', () =>{
      this._addCartItem(this);
      this._isBought(true);
      this._productActualCount.textContent = this.count + 1;
      return this.count = +this._productActualCount.textContent;
    })
    this._productUpCountButton.addEventListener('click', () => {
      this._addCartItem(this);
      this._productActualCount.textContent = +this._productActualCount.textContent + 1;
      return this.count = +this._productActualCount.textContent;
    })
    this._productLowCountButton.addEventListener('click', ()=>{
      this._removeCartItem(this);
      if(this.count == 1){
        this._isBought(false);
        return this.count = 0;
      } else {
        this._productActualCount.textContent = this.count - 1;
      return this.count = +this._productActualCount.textContent;
      }
    })
  }
  _setCartItemEventListeners(){
    this._productUpCountButton.addEventListener('click', () => {
      this._addCartItem(this);
      this._productActualCount.textContent = +this._productActualCount.textContent + 1;
      this.count = +this._productActualCount.textContent;
      this._productTotalPrice.textContent = +this._productPrice.textContent*this.count;
      return this.count;
    })
    this._productLowCountButton.addEventListener('click', ()=>{
      if(this.count == 1){
        this._removeCartItem(this);
        this.count = 0;
        this._productTotalPrice.textContent = +this._productPrice.textContent*this.count;
        return this.count;
      } else {
        this._removeCartItem(this);
        this.count -= 1;
        this._productActualCount.textContent = this.count;
        this._productTotalPrice.textContent = +this._productPrice.textContent*this.count;
        return this.count;
      }
    })
    this._productDeleteButton.addEventListener('click', ()=>{
      this.count = 0;
      this._deleteCartItem(this);
    })
  }

    generateProduct(){
      this._createProduct();
      this._setProductEventListeners();
      return this._product;
    }

    generateCartItem(cartItemTemlate){
      this._createCardItem(cartItemTemlate);
      this._setCartItemEventListeners();
      return this._product;
    }

}
