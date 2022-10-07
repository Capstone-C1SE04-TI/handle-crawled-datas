const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccountMain = require("./service-account-Capstone-C1SE04-TI-Main.json");
const serviceAccountCrawl = require("./service-account-Capstone-C1SE04-TI-Crawl.json");

initializeApp({
    credential: cert(serviceAccountMain),
    // credential: cert(serviceAccountCrawl),
});

const database = getFirestore();

module.exports = database;
