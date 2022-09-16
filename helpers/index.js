const _ = require("lodash");

function randomFirestoreDocumentId() {
    const validCharacters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(
            "",
        );
    const length = 20;
    return _.sampleSize(validCharacters, length).join("");
}

module.exports = { randomFirestoreDocumentId };
