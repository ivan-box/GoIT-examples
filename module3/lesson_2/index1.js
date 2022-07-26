//* Описание задачи: Напишите функцию, которая возвращает вложенный массив вида`[[key, value], [key, value]]`.
//* Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

let getArray(obj) {
  return Object.entries(obj);
}

let obj = {
  a: 1,
  b: 2,
};

console.log(getArray(obj));
