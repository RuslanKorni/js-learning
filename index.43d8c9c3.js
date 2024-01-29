function e(e){return e&&e.__esModule?e.default:e}var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e};class r{
//! Статический метод
static carInfo(e){console.log("carObg",e)}
//! то что идет на protptype это метод класса
changePrice(e){this.price=e}updateModel(e){this.model=e}
//! ГЕТТЕРЫ И СЕТТЕРЫ
get model(){return this._model}set model(e){this._model=e}get price(){return this._price}set price(e){this._price=e}
//!обязательно
constructor({brand:e,model:t,price:r}={}){this._brand=e,this._model=t,this._price=r}}
//! Статические свойства
e(t)(r,"description","About car class");new r({brand:"Audi",model:"Q3",price:35e3});const o=new class extends class{gainXp(e){console.log(`${this.name} получает ${e} опыта`),this.xp+=e}constructor(e="hero",t=0){this.name=e,this.xp=t}}{constructor(e,t,r){super(e,t),this.weapon=r}}("Poly",1e3,"gun");console.log(o),o.gainXp(1e3);
//# sourceMappingURL=index.43d8c9c3.js.map
