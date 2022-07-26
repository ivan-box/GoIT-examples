// Перепиши функцию так, чтобы она принимала объект параметров со свойствами companyName
// и stock и выводила репорт о количестве товаров на складе любой компании.

function getStockReport(obj) {
  let { companyName, stock } = obj;
  let total = 0;
  for (const value of Object.values(stock)) {
    total += value;
  }

  return `${companyName} has ${total} items in stock`;
}

console.log(
  getStockReport({
    companyName: "Cyberdyne Systems",
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
);

console.log(
  getStockReport({
    companyName: "Belacci",
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
); // "Belacci has 35 item in stock"
