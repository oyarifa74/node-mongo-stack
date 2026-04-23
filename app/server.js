const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

const mongoUrl = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongodb:27017`;
const client = new MongoClient(mongoUrl);

let db;

async function startServer() {
  try {
    await client.connect();
    db = client.db("mydatabase");
    console.log("Connected to MongoDB");

    app.get("/", async (req, res) => {
      const collection = db.collection("visits");

      await collection.insertOne({
        time: new Date()
      });

      const count = await collection.countDocuments();

      res.send(`Hello from Node.js. Total visits stored in MongoDB: ${count}`);
    });

    app.listen(port, () => {
      console.log(`App running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

startServer();
