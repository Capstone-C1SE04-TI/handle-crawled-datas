const database = require("../../configs/connect-database");
const datas = require('../../db.json');

const { randomFirestoreDocumentId } = require("../../helpers");

const writeCoinsInDB = async () => {
    datas.forEach(async (data) => {
        const docId = randomFirestoreDocumentId();
        await database.collection("coins").doc(docId).set(data);

    });
}

const reduceTokensInDB = async () => {
    const tokens = await database.collection("tokens")
        .orderBy("id", "asc")
        .startAt(61)
        .limit(48)
        .get();
    
    tokens.forEach((token) => {
        token.ref.delete()
    });
}

module.exports = { writeCoinsInDB, reduceTokensInDB };