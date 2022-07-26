let array = [0, 1, 2, 3, 4];
let obj = {
  foo() {
    console.log("Good");
  },
  key: 123,
};

let { foo: key } = obj;

console.log(key);
