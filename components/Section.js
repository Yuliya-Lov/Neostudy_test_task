export default class Section {
  constructor(title, selector) {
    this._title = title,
    this._section = document.querySelector(selector);
    this._parent = document.querySelector('.content');
  }

  _createSection() {
    this._sectionTitle = this._section.querySelector('#sectionTitle');
    this._itemContainer = this._section.querySelector('#sectionContainer');
    this._sectionTitle.textContent = this._title;
    return this._section;
  }

  addRendersArr(arr) {
    arr.forEach(render => {
      this._itemContainer.append(render);
    });
  }

  removeItem(render) {
    render.remove();
  }


  generateSection() {
    this._parent.append(this._createSection());
  }


}
