import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const createDeclaration = functions.https.onRequest(async (request, response) => {
  const declarationData = request.body;

  try {
    const declarationRef = await admin.firestore().collection("declarations").add(declarationData);
    response.status(201).send({ id: declarationRef.id });
  } catch (error) {
    response.status(500).send({ error: "Failed to create declaration" });
  }
});

export const getDeclarations = functions.https.onRequest(async (request, response) => {
  try {
    const snapshot = await admin.firestore().collection("declarations").get();
    const declarations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    response.status(200).send(declarations);
  } catch (error) {
    response.status(500).send({ error: "Failed to retrieve declarations" });
  }
});

// Additional functions for updating and deleting declarations can be added here.