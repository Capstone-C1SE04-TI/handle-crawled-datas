const database = require("../../configs/connect-database");

const getListOfCoins = async () => {
    let coinsList = [];
    let coins = await database.collection("tokens").get();
    let id = 1;

    coins.forEach((doc) => {
        const data = doc.data();

        const resultData = {
            id: id++,
            name: data.name,
            symbol: data.symbol,
            usd: {
                price: data.quote.USD.price,
                percentChange24h: data.quote.USD.percent_change_24h,
                percentChange7d: data.quote.USD.percent_change_7d,
                volume24h: data.quote.USD.volume_24h
            },
            marketCap: data.quote.USD.market_cap,
            circulatingSupply: data.circulating_supply
        }

        coinsList.push(resultData);
    });

    return coinsList;
}

module.exports = { getListOfCoins };