const p = require("./services/products.js");
const config = require("./services/config.js");

async function main() {
  console.log("Carrinho de compra:");
  p.getFullName("408", "mousepad");
  p.getFullName("508", "Monitor");
  p.getProductLabel("Monitor");


 console.log(config.devArea);
}

main();
