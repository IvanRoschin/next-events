import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://IvanRoschin:s3x5x8kcWKeA6xnv@cluster0.djatngh.mongodb.net/events?retryWrites=true&w=majority"
  );
  const db = client.db();

  const evendId = req.query.evendId;

  if (!evendId) {
    return res.status(422).json({ message: "No Event Id" });
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      res.status(422).json({ message: "Invalid email" });
      return;
    } else if (!name || name.trim() === "") {
      res.status(422).json({ message: "Name must have" });
      return;
    } else if (!text || text.trim() === "") {
      res.status(422).json({ message: "Comment must have" });
      return;
    }

    const newComment = {
      name,
      email,
      text,
      evendId,
    };

    try {
      const result = await db.collection("comments").insertOne(newComment);
      newComment.id = result.insertedId;
      res.status(201).json({ message: "Added Comment", newComment });
    } catch (error) {
      console.error("Error add comment", error);
      res.status(500).json({ message: "Error add comment" });
    } finally {
      client.close();
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await db
        .collection("comments")
        .find(evendId)
        .sort({ _id: -1 })
        .toArray();
      return res.status(200).json({ comments: documents });
    } catch (error) {
      console.error("Error getting comments", error);
      res.status(500).json({ message: "Error getting comments" });
    } finally {
      await client.close();
    }
  }
}
