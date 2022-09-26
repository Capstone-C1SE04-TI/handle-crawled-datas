const database = require("../../configs/connect-database");
const datas = require('../../db.json');
const { FieldValue } = require("firebase-admin/firestore");
const { randomFirestoreDocumentId } = require("../../helpers");

const writeCoinsInDB = async () => {
    datas.forEach(async (data) => {
        const docId = randomFirestoreDocumentId();
        await database.collection("tokens").doc(docId).set(data);

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

const updateTokensID = async () => {
    const tokens = await database.collection("tokens")
        .orderBy("id", "asc")
        .get();

    tokens.forEach((doc) => {
        doc.ref.update({ id: doc.get("id") + 10 });
    });
}

const removeDocumentField = async () => {
    const users = await database.collection("users")
        .orderBy("userId", "asc")
        .startAt(1)
        .limit(30)
        .get();

    users.forEach((doc) => {
        doc.ref.update({ userId: FieldValue.delete() });
    });
}

module.exports = { writeCoinsInDB, reduceTokensInDB, updateTokensID, removeDocumentField };