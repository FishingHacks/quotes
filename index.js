class Quote {
    author="";
    quote="";
    /**
     * @param {{quote: string, author: string}} quote 
     */
    constructor(quote) {
        this.author = quote.author;
        this.quote = quote.quote
    }

    /**
     * @param {{author?: boolean}} options option
     * @returns {string} the string representation of the quote
     */
    toString(options={author: true}) {
        if(options.author) return (this.quote)+"\n   - "+this.author;
        return this.quote;
    }
}

let exp = {
    quotes: require("./data/quotes.json").quotes,
    /**
     * @returns {Quote} a random quote
     */
    getRandomQuote: function () {
        return new Quote(this.quotes[Math.floor(Math.random()*this.quotes.length)]);
    }
}

module.exports=exp;