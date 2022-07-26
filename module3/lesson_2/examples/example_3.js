function getBotReport(obj) {
  let {
    companyName,
    bots: { repair: repairBots, defence: defenceBots },
  } = obj;

  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

console.log(
  getBotReport({
    companyName: "Cyberdyne Systems",
    bots: {
      repair: 150,
      defence: 50,
    },
  })
);
