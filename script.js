const {
    getListOfCoins,
    getListOfTokens,
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
} = require("./features/write");

const runScript = async () => {
    // Step 1: Read & Handle datas
    // const data = await handleTokensPrices();

    // // Step 2: Save above datas in temp file
    // require("fs").writeFile("./db2.json", JSON.stringify(data), function (err) {
    //     if (err) {
    //         console.error(err);
    //     }
    // });

    // Step 3: Write handled datas into DB
    // await updateTokensPrices();
};

runScript();
