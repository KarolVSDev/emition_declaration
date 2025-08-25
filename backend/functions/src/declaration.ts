import * as functions from "firebase-functions";
import admin from "firebase-admin";

admin.initializeApp();

export const createDeclaration = functions.https.onRequest(async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const declarationData = req.body;

  try {
    const declarationRef = await admin.firestore().collection("declarations").add(declarationData);
    return res.status(201).send({ id: declarationRef.id });
  } catch (error) {
    console.error("Error creating declaration:", error);
    return res.status(500).send("Internal Server Error");
  }
});

export const getDeclarations = functions.https.onRequest(async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const snapshot = await admin.firestore().collection("declarations").get();
    const declarations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return res.status(200).send(declarations);
  } catch (error) {
    console.error("Error fetching declarations:", error);
    return res.status(500).send("Internal Server Error");
  }
});

export const updateDeclaration = functions.https.onRequest(async (req, res) => {
  if (req.method !== "PUT") {
    return res.status(405).send("Method Not Allowed");
  }

  const { id, ...updateData } = req.body;

  try {
    await admin.firestore().collection("declarations").doc(id).update(updateData);
    return res.status(200).send("Declaration updated successfully");
  } catch (error) {
    console.error("Error updating declaration:", error);
    return res.status(500).send("Internal Server Error");
  }
});

export const deleteDeclaration = functions.https.onRequest(async (req, res) => {
  if (req.method !== "DELETE") {
    return res.status(405).send("Method Not Allowed");
  }

  const { id } = req.body;

  try {
    await admin.firestore().collection("declarations").doc(id).delete();
    return res.status(200).send("Declaration deleted successfully");
  } catch (error) {
    console.error("Error deleting declaration:", error);
    return res.status(500).send("Internal Server Error");
  }
});