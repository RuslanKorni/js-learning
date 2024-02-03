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
const o=new Promise(((e,r)=>{const t=Math.random()>.5;setTimeout((()=>{t&&e("All ok (исполнен fulfilled)"),r("error (отклонен rejected)")}),2e3)}));console.log(o);
//! Концепция then(onSuccess, onError)
//! В then() мы обрабатываем успешное выполнение.  В catch() Обрабатываем ошибку. finally() для снятия промиса, выполняется в любом случае.
//! Промис в цепоче возвращает промис
//# sourceMappingURL=index.95eca6be.js.map
