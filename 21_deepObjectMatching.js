function getConfig() {
  return {
    isOn: true,
    amount: 10,
    servers: {
      a: true,
      b: false,
    },
  };
}

var {
  isOn: myisOn,
  amount: myAmount,
  servers: { b: serversB },
} = getConfig();
myisOn;
myAmount;
serversB;
