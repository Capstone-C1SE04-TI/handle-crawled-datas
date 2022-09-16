const { getListOfCoins } = require("./features/DisplayCoinDashboard/read-and-handle")
const { writeCoinsInDB } = require("./features/DisplayCoinDashboard/write");

const runScript = async () => {
    // Step 1: Handle datas
    // const data = await getListOfCoins();
    // console.log(data);

    // Step 2: Save above datas in temp file
    // require('fs').writeFile(
    //     './db.json',
    //     JSON.stringify(data),
    //     function (err) {
    //         if (err) {
    //             console.error('Crap happens');
    //         }
    //     }
    // );

    // Step 3: Write handled datas into DB
    // writeCoinsInDB();
}

runScript()