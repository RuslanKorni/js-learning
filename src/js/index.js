/* Клаcсы
 * - обьявление
 * - конструктор
 * - методы
 * - static
 * - приватные свойства
 * - синтаксис публиных свойств и методы классов
 * - геттеры и сеттеры
 */

// class Car {
//   //! Статические свойства
//   static description = 'About car class';
//   //! Статический метод
//   static carInfo(carObj) {
//     console.log('carObg', carObj);
//   }

//   //* приватные свойства
//   #test = 'test';

//   //* публичные свойства
//   mySuperCar = 555; // Тоже что и this.mySuperCar = 555 в итоге под капотом оно в это и приобразуется
//   //! Все публичные свойства идут на екземпляр Пример с методом:
//     changePrice = (newPrice) => {
//         this.price = newPrice;
//     };//! эта функция пошла на экземпляр, а это метод класа
// //!     changePrice(newPrice) {
// //!     this.price = newPrice;
// //!   }, он идет на прототип

//   //!обязательно
//   constructor({ brand, model, price } = {}) {
//     // console.log('Вызывается constructor');
//     // console.log(this);

//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   //! то что идет на protptype это метод класса

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   updateModel(newModel) {
//     this.model = newModel;
//   }
// }

class Car {
  //! Статические свойства
  static description = 'About car class';
  //! Статический метод
  static carInfo(carObj) {
    console.log('carObg', carObj);
  }

  //!обязательно
  constructor({ brand, model, price } = {}) {
    // console.log('Вызывается constructor');
    // console.log(this);

    this._brand = brand;
    this._model = model;
    this._price = price;
  }
  //! то что идет на protptype это метод класса

  changePrice(newPrice) {
    this.price = newPrice;
  }

  updateModel(newModel) {
    this.model = newModel;
  }

  //! ГЕТТЕРЫ И СЕТТЕРЫ
  // getModel() {
  //     return this.model;// даже если тут изменится свойство все еще будет работать
  // } //Метод получения свойства

  // setModel(newModel) {
  //     this.model = newModel;
  // }// Метод обновления свойтва

  //*геттер
  get model() {
    return this._model;
  } //геттер не может называться именем свойства

  set model(newModel) {
    this._model = newModel;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }
}

// console.dir(Car);

const carInstans = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

// console.log(carInstans);
// console.log(carInstans.price);
// carInstans.price = 50000;
// console.log(carInstans.price);
// //? Обращение к геттеру
// console.log(carInstans.model);
// //? Обращение ы сеттеру
// carInstans.model = 'Q4';
// console.log(carInstans.model);

// console.log(carInstans.getModel());

// carInstans.setModel('Q4');

// console.log(carInstans.getModel());

/* НАСЛЕДОВАНИЕ
 * - extends
 * - super()
 */

//* Делаем общий ласс родител для наших героев

class Hero {
  constructor(name = 'hero', xp = 0) {
    this.name = name;
    this.xp = xp;
  }
  gainXp(amount) {
    console.log(`${this.name} получает ${amount} опыта`);
    this.xp += amount;
  }
}
// console.dir(Hero);

//? Делаем какого то героя
// const Poly = new Hero({ name: 'Poly', xp: 1000 });
// console.log(Poly);
// Poly.gainXp(1000);

//* Я хочу что бы воин наследовал свойства Hero
class Warrior extends Hero {
  constructor(name, xp, weapon) {
    // для того что бы все работало нужно
    // в конструкторе ребенка вызвать конструктор
    // родиеля через super()
    super(name, xp);
    this.weapon = weapon;
  }
}

// const Poly = new Warrior('Poly', 1000, 'gun');
// console.log(Poly);
// Poly.gainXp(1000);
//*===================================================================================================
//! Промисы

//? Здесь содаем промис
const promise = new Promise((resolve, reject) => {
  const canFullfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFullfill) {
      resolve('All ok (исполнен fulfilled)');
    }

    reject('error (отклонен rejected)');
  }, 2000);
});

console.log(promise);

/*
? then() это подписка на промис. then() буквально говорить если промис выполнился успешно то сделай это.
? здесь делаем планровку
*/
// promise.then(result => {
//   console.log('result:', result);
// },
//   error => {
//     console.log('error:', error);
//   }
// );
//! Концепция then(onSuccess, onError)
//! В then() мы обрабатываем успешное выполнение.  В catch() Обрабатываем ошибку. finally() для снятия промиса, выполняется в любом случае.

//* then() через функции
// promise.then(onFulfilled, onError); //результат промисов можно получит ТОЛЬКО ВНУТРИ ЭТИХ КОЛЛБЕКОВ

// function onFulfilled(result) {
//   console.log(`✅ ${result}`);
// };

// function onError(error) {
//   console.log(`❌ ${error}`);
// };

//* Цепочки промисов (chaining)
//! Промис в цепоче возвращает промис
// promise
//   .then(result => {
//     console.log(result);
//     //эта коллбек функция передаст 5 в следующий then()
//     return 5;
//   })
//   .then(
//     //В Этоу колбук функцию придет 5 с предидущего then(). так как этот колбук ничег не возвращает в следующий колбек придет
//     // undefient
//     x => {
//       console.log(x);
//     }
//   )
//   .then(
//     // этот then() вернет undefient
//     y => {
//       console.log(y);
//     }
//   );

//* пример с catch()

// promise
//   .then(result => {
//     console.log(result);
//     //эта коллбек функция передаст 5 в следующий then()
//     return 5;
//   })
//   .then(
//     //В Этоу колбук функцию придет 5 с предидущего then(). так как этот колбук ничег не возвращает в следующий колбек придет
//     // undefient
//     x => {
//       console.log(x);
//     }
//   )
//   .then(
//     // этот then() вернет undefient
//     y => {
//       console.log(y);
//     }
//   )
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Я выполнюсь всегда');
//   });
