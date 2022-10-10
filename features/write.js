const database = require("../configs/connect-database");
const datas = require("../db/db.json");
const coinsDatas = require("../db/db_coins.json");
const sharksDatas = require("../db/db_sharks.json");
const tagsDatas = require("../db/db_tags.json");

const { FieldValue } = require("firebase-admin/firestore");
const {
    randomFirestoreDocumentId,
    convertUnixTimestampToNumber,
} = require("../helpers");

const writeCoinsInDB = async () => {
    datas.forEach(async (data) => {
        const docId = randomFirestoreDocumentId();
        await database.collection("tokens").doc(docId).set(data);
    });
};

const writeSharksInDB = async () => {
    sharksDatas.forEach(async (data) => {
        const docId = randomFirestoreDocumentId();
        await database.collection("sharks").doc(docId).set(data);
    });
};

const writeTagsInDB = async () => {
    tagsDatas.forEach(async (data) => {
        const docId = randomFirestoreDocumentId();
        await database.collection("tags").doc(docId).set(data);
    });
};

const reduceTokensInDB = async () => {
    const tokens = await database
        .collection("tokens")
        .orderBy("id", "asc")
        .startAt(61)
        .limit(48)
        .get();

    tokens.forEach((token) => {
        token.ref.delete();
    });
};

const updateTokensID = async () => {
    const tokens = await database
        .collection("tokens")
        .orderBy("id", "asc")
        .get();

    tokens.forEach((doc) => {
        doc.ref.update({ id: doc.get("id") + 10 });
    });
};

const updateTokensDailyPrice = async () => {
    const tokens = await database
        .collection("tokens")
        // .where("name", "==", "Bitcoin")
        .where("name", "==", "Ethereum")
        .get();

    tokens.forEach((doc) => {
        doc.ref.update({ price: datas[0] });
    });
};

const updateTokensFields = async () => {
    const tokens = await database
        .collection("tokens")
        .orderBy("id", "asc")
        .startAt(1)
        .limit(10)
        .get();

    let id = 0;

    tokens.forEach((doc) => {
        doc.ref.update(coinsDatas[id++]);
    });
};

const removeDocumentField = async () => {
    const users = await database
        .collection("users")
        .orderBy("userId", "asc")
        .startAt(1)
        .limit(30)
        .get();

    users.forEach((doc) => {
        doc.ref.update({ userId: FieldValue.delete() });
    });
};

module.exports = {
    writeCoinsInDB,
    writeSharksInDB,
    writeTagsInDB,
    reduceTokensInDB,
    updateTokensID,
    updateTokensDailyPrice,
    updateTokensFields,
    removeDocumentField,
};
