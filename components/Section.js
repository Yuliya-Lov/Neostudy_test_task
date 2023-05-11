export default class Section {
  constructor(title, templateSelector, changeCountAction){
    this._title = title,
    this._template = templateSelector;
    this._changeCountAction = changeCountAction;
  }

  _getTemplate(){
    return document
    .querySelector(this._template)
    .content
    .querySelector('.section')
    .cloneNode(true);
  }

  _createSection(){
    this._section = this._getTemplate();
    this._sectionTitle = this._section.querySelector('#sectionTitle');
    this._itemContainer = this._section.querySelector('#sectionContainer');
    this._sectionTitle.textContent = this._title;
    return  this._section;
  }

  addRendersArr(arr){
    arr.forEach(render => {
      this._itemContainer.append(render);
    });
  }

  addCardItem(render){
    this._itemContainer.prepend(render);
  }

  changeCountCardItem(render){
    this._changeCountAction(render)
  }

  removeItem(render){
    console.log(render);
    render.remove();
  }


  removeSection(){
    this._section.remove();
  }

  getCount(){
    return this._itemContainer.children.reduce(acc, item =>{
      return acc += item.count;
    }, 0)
  }
  generateSection(el){
    console.log(el);
    el.append(this._createSection());
  }

}
