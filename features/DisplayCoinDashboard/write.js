const database = require("../../configs/connect-database");
const datas = require('../../db.json');

const { randomFirestoreDocumentId } = require("../../helpers");

const writeCoinsInDB = () => {
    datas.forEach(async (data) => {
        const docId = randomFirestoreDocumentId();
        await database.collection("tokens").doc(docId).set(data);
    });
}

module.exports = { writeCoinsInDB };