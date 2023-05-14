export default class Product {
  constructor(data, templateSelector, addCartItem, removeCartItem, setPriceWithSpaces) {
    this.id = data.id;
    this._title = data.title;
    this._img = data.img;
    this.price = data.price;
    this._oldPrice = data.oldPrice || 0;
    this._rate = data.rate;
    this._template = templateSelector;
    this._addCartItem = addCartItem;
    this._removeCartItem = removeCartItem;
    this._setPriceWithSpaces = setPriceWithSpaces;
    this.count = 0;
  }

  _getTemplate(templ) {
    return document
      .querySelector(templ)
      .content
      .querySelector('#item')
      .cloneNode(true);
  }

  _createCommonFilds() {
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
    this._productPrice.textContent = this.price;
    this._setPriceWithSpaces(this._productPrice);
    this._productActualCount.textContent = this.count;
    return this._product;
  }

  _createProduct() {
    this._product = this._getTemplate(this._template);
    this._createCommonFilds();
    if (this._oldPrice > 0) {
      this._productOldPrice = this._product.querySelector('#itemOldPrice');
      this._productOldPrice.classList.remove('product__price_hidden')
      this._productOldPrice.textContent = this._oldPrice;
      this._setPriceWithSpaces(this._productOldPrice);
    }
    this._productRate = this._product.querySelector('#itemRate');
    this._productBuyButton = this._product.querySelector('.buy-button');
    if (this.count > 0) {
      this._isBought(true);
    }
    return this._product;
  }

  _createCardItem(cartItemTemlate) {
    this._product = this._getTemplate(cartItemTemlate);
    this._createCommonFilds();
    this._productDeleteButton = this._product.querySelector('#itemDeleteButton');
    this._productTotalPrice = this._product.querySelector('#itemTotalPrice');
    this._productTotalPrice.textContent = this.price;
  }

  _isBought(boolean) {
    if (boolean) {
      this._productBuyButton.classList.add('buy-button_hidden');
      this._productEditCount.classList.remove('count-editor_hidden');
    } else {
      this._productBuyButton.classList.remove('buy-button_hidden');
      this._productEditCount.classList.add('count-editor_hidden');
    }
  }

  _setCount(count) {
    this._productActualCount.textContent = count;
  }

  _setTotalProductPrice(count) {
    this._productTotalPrice.textContent = (this.price * count);
    this._setPriceWithSpaces(this._productTotalPrice);
  }

  _setProductEventListeners() {
    this._productBuyButton.addEventListener('click', () => {
      this.count += 1;
      this._setCount(this.count);
      this._addCartItem(this);
      this._isBought(true);
      return this.count;
    })
    this._productUpCountButton.addEventListener('click', () => {
      this.count += 1;
      this._setCount(this.count);
      this._addCartItem(this);
      return this.count;
    })
    this._productLowCountButton.addEventListener('click', () => {
      if (this.count == 1) {
        this._isBought(false);
        this.count = 0;
        this._removeCartItem(this);
        return this.count;
      } else {
        this.count -= 1;
        this._setCount(this.count);
        this._removeCartItem(this);
        return this.count;
      }
    })
  }

  _setCartItemEventListeners() {
    this._productUpCountButton.addEventListener('click', () => {
      this.count += 1;
      this._addCartItem(this);
      this._setCount(this.count);
      this._setTotalProductPrice(this.count);
      return this.count;
    })
    this._productLowCountButton.addEventListener('click', () => {
      if (this.count <= 1) {
        this.count = 0;
        this._removeCartItem(this);
        this._product.remove();
        return this.count;
      } else {
        this.count -= 1;
        this._setCount(this.count);
        this._removeCartItem(this);
        this._setTotalProductPrice(this.count);
        return this.count;
      }
    })
    this._productDeleteButton.addEventListener('click', () => {
      this.count = 0;
      this._removeCartItem(this);
      this._product.remove();
      return this.count;
    })
  }

  generateProduct() {
    this._createProduct();
    this._setProductEventListeners();
    return this._product;
  }

  generateCartItem(cartItemTemlate) {
    this._createCardItem(cartItemTemlate);
    this._setTotalProductPrice(this.count);
    this._setCartItemEventListeners();
    return this._product;
  }
}
