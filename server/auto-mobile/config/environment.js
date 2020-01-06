var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://angular-node-b4d5b.firebaseio.com"
    });
}

var db = admin.firestore();

module.exports = { database: db };
