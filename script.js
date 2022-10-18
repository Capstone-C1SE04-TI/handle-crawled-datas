const {
    getListOfCoins,
    getListOfTokens,
    exportCollection,
} = require("./features/read-and-handle");
const {
    writeCoinsInDB,
    writeSharksInDB,
    writeTagsInDB,
    reduceTokensInDB,
    updateTokensID,
    updateTokensDailyPrice,
    updateTokensFields,
    removeDocumentField,
    updateCoinId,
    updateTagNames,
    updateMetadata,
    updateTokensPrices,
    handleTokensPrices,
    updateTokensPriceLast1Day,
} = require("./features/write");

const runScript = async () => {
    // Step 1: Read & Handle datas
    const data1 = await exportCollection("users");
    const data2 = await exportCollection("tokens");
    const data3 = await exportCollection("tags");
    const data4 = await exportCollection("sharks");

    // Step 2: Save above datas in temp file
    require("fs").writeFile("./db1.json", JSON.stringify(data1), (err) => {
        if (err) {
            console.error(err);
        }
    });
    require("fs").writeFile("./db2.json", JSON.stringify(data2), (err) => {
        if (err) {
            console.error(err);
        }
    });
    require("fs").writeFile("./db3.json", JSON.stringify(data3), (err) => {
        if (err) {
            console.error(err);
        }
    });
    require("fs").writeFile("./db4.json", JSON.stringify(data4), (err) => {
        if (err) {
            console.error(err);
        }
    });

    // Step 3: Write handled datas into DB
    // await exportCollections();
};

runScript();
