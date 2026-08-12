const product = require("./services/products.js");
const config = require("./services/config.js");
const database = require("./services/database.js");


async function main() {
  console.log("Carrinho de compra:");
  product.getFullName("408", "mousepad");
  product.getFullName("508", "Monitor");
  product.getProductLabel("Monitor");
  
  database.connectToDatabase("Henrique")

 console.log(config.devArea);
}

main();
