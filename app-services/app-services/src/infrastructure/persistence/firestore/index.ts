import * as admin from 'firebase-admin'

// Inicializando o firebase
var serviceAccount = require("../../../../app-services-5b5c2-firebase-adminsdk-svdea-07ece87d91.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

export const db = admin.firestore()