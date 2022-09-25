const { getListOfCoins } = require("./features/DisplayCoinDashboard/read-and-handle")
const { writeCoinsInDB, reduceTokensInDB } = require("./features/DisplayCoinDashboard/write");

const runScript = async () => {
    // Step 1: Handle datas
    // const data = await getListOfCoins();

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
    // await writeCoinsInDB();

    // Step 4 (Optional): Reduce documents
    // await reduceTokensInDB();
}

runScript()