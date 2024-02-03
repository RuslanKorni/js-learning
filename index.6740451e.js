function e(e){return e&&e.__esModule?e.default:e}var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t;return e};class t{
//! Статический метод
static carInfo(e){console.log("carObg",e)}
//! то что идет на protptype это метод класса
changePrice(e){this.price=e}updateModel(e){this.model=e}
//! ГЕТТЕРЫ И СЕТТЕРЫ
get model(){return this._model}set model(e){this._model=e}get price(){return this._price}set price(e){this._price=e}
//!обязательно
constructor({brand:e,model:r,price:t}={}){this._brand=e,this._model=r,this._price=t}}
//! Статические свойства
e(r)(t,"description","About car class");new t({brand:"Audi",model:"Q3",price:35e3});
//! Промисы
new Promise(((e,r)=>{Math.random()>.5&&e("")}));
//# sourceMappingURL=index.6740451e.js.map
