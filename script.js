const {
    getListOfCoins,
    getListOfTokens
} = require("./features/read-and-handle");
const {
    writeCoinsInDB,
    reduceTokensInDB,
    updateTokensID,
    updateTokensDailyPrice,
    removeDocumentField
} = require("./features/write");

const runScript = async () => {
    // Step 1: Read & Handle datas
    // const data = await getListOfTokens();

    // // Step 2: Save above datas in temp file
    // require('fs').writeFile(
    //     './db.json',
    //     JSON.stringify(data),
    //     function (err) {
    //         if (err) {
    //             console.error(err);
    //         }
    //     }
    // );

    // Step 3: Write handled datas into DB
    await updateTokensDailyPrice();

    // [Optional]
    // await reduceTokensInDB();
    // await updateTokensID();
    // await testTimestamps();
}

runScript()