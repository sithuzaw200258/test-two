function smallestPrice(num) {
    let smallestValue = [];
    let prices = [];
    for (let index = 0; index < num; index++) {
        prices.push(Math.floor(1 + Math.random() * 21));
    }
    // let prices = [5,10,3];
    for (let i = 0; i < prices.length; i++) {
        let first_value = prices[i];
        for (let ii = 0; ii < prices.length-1; ii++) {
            if (first_value > prices[ii+1]) {
                let value = first_value - prices[ii+1];
                smallestValue.push(value);
            }
        }
    }
    document.write("Prices : " + prices.join(" "));
    document.write("<br>");
    document.write("Minimum Loss : " + Math.min(...smallestValue));
}

smallestPrice(4);
