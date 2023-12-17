import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "@/helpers/db-util";

export default async function handler(req, res) {
  const eventId = req.query.eventId;
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to database faild" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      res.status(422).json({ message: "Invalid email" });
      client.close();
      return;
    } else if (!name || name.trim() === "") {
      res.status(422).json({ message: "Name must have" });
      client.close();
      return;
    } else if (!text || text.trim() === "") {
      res.status(422).json({ message: "Comment must have" });
      client.close();
      return;
    }

    const newComment = {
      name,
      email,
      text,
      eventId,
    };

    try {
      const result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: "Added Comment", newComment });
    } catch (error) {
      console.error("Error add comment", error);
      res.status(500).json({ message: "Inserting comment faild!" });
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        { _id: -1 },
        { eventId: eventId }
      );
      res.status(200).json({ comments: documents });
    } catch (error) {
      console.error("Error getting comments", error);
      res.status(500).json({ message: "Getting documents failed!" });
    }
  }
  client.close();
  // if (req.method === "DELETE") {
  //   try {
  //     const documents = await db
  //       .collection("comments")
  //       .findOneAndDelete({  });
  //     return res.status(200).json({ comments: documents });
  //   } catch (error) {
  //     console.error("Error getting comments", error);
  //     res.status(500).json({ message: "Error getting comments" });
  //   } finally {
  //     await client.close();
  //   }
  // }
}
