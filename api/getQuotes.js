const { MongoClient } = require('mongodb');
const uri="mongodb+srv://DepthDweller21:P0YvljIktS2BbbVN@new-crud-app.ebjwiea.mongodb.net/"

export default async (req, res) => {
 const client = await MongoClient.connect(uri);
 const quotesCollection = client.db("crud-app").collection("quotes");
 
 try {
  let search = req.query.searchName.toLowerCase();
  let results = await quotesCollection.find().toArray();
  let searchResult = results.filter((element) =>element.name == search ? true : false);
  res.json(searchResult);
 } catch (err) {
  console.error(err);
 }
};