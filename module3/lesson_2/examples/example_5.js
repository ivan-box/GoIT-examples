//Дополни функцию createContact(partialContact) так,
//чтобы она возвращала новый объект контакта с добавленными свойствами id и createdAt,
//а также list со значением "default" если в partialContact нет такого свойства.

function createContact(partialContact) {
  let obj = {
    list: "default",
    createdAt: Date.now(),
    id: generateId(),
    ...partialContact,
  };

  return obj;
}

console.log(
  createContact({
    name: "Mango",
    email: "mango@mail.com",
    list: "friends",
  })
);
console.log(
  createContact({
    name: "Poly",
    email: "poly@hotmail.com",
  })
);

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
