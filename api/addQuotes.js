const { MongoClient } = require('mongodb');
const uri="mongodb+srv://DepthDweller21:P0YvljIktS2BbbVN@new-crud-app.ebjwiea.mongodb.net/"

export default async (req, res) => {
 const client = await MongoClient.connect(uri);
 const quotesCollection = client.db("crud-app").collection("quotes");
 
 try {
  await quotesCollection.insertOne(req.body);
  res.redirect("/");
 } catch (err) {
  console.error(err);
 }
};