const { getListOfCoins, getListOfTokens } = require("./features/DisplayCoinDashboard/read-and-handle")
const { writeCoinsInDB, reduceTokensInDB, updateTokensID } = require("./features/DisplayCoinDashboard/write");

const runScript = async () => {
    // Step 1: Handle datas
    // const data = await getListOfTokens();

    // Step 2: Save above datas in temp file
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
    // await writeCoinsInDB();

    // [Optional]
    // await reduceTokensInDB();
    // await updateTokensID();
}

runScript()