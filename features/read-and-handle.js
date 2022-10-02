const database = require("../configs/connect-database");
const { query, collection, where, getDocs } = require("firebase/firestore");
const { convertUnixTimestampToNumber } = require("../helpers");

const getListOfCoins = async () => {
    let id = 1;
    let coinsList = [];

    let coins = await database
        .collection("coins")
        .orderBy("cmc_rank", "asc")
        .get();

    coins.forEach((doc) => {
        const data = doc.data();

        const resultData = {
            id: id++,
            ethId: data.id,
            name: data.name,
            symbol: data.symbol,
            iconURL: data.iconURL,
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

const getListOfTokens = async () => {
    let tokensList = [];

    // const queryStatement = query(
    //     collection(database, "tokens"),
    //     where("name", "==", "Bitcoin"),
    //     where("name", "==", "Ethereum")
    // );

    // const tokens = await getDocs(queryStatement);

    let tokens = await database
        .collection("coins")
        // .where("name", "==", "Bitcoin")
        .where("name", "==", "Ethereum")
        .get();

    tokens.forEach((doc) => {
        const data = doc.data();
        // const resultData = {
        //     price: data.price.daily,
        // }

        // const timestamps = [];
        // const initValue = data.price.daily.convertUnixTimestampToNumber(key.slice(0, 10));

        for (key in data.price.daily) {
            tokensList.push({
                ts: key,
                tsNumber: convertUnixTimestampToNumber(key.slice(0, 10))
            });
        } 

        // tokensList.sort().reverse();

        // tokensList.push(resultData);
    });

    return tokensList;
}

module.exports = { getListOfCoins, getListOfTokens };