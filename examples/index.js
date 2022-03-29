let quoter = require("../index");

let quotes = Number(process.argv[2]);
if(isNaN(quotes)) quotes=1;

let i = 0;
while (i < quotes) {
    console.log(quoter.getRandomQuote().toString({author: true}));
    console.log("\n");
    i++;
}