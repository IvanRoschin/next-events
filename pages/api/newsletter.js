import { connectDatabase, insertDocument } from "@/helpers/db-util";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userEmail || !emailRegex.test(userEmail)) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }
    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to database faild" });
    }

    try {
      const db = client.db();
      const existingEmail = await db
        .collection("newsletters")
        .findOne({ email: userEmail });
      if (existingEmail) {
        res.status(409).json({ message: "Email already exists" });
        return;
      } else {
        await insertDocument(client, "newsletters", {
          email: userEmail,
        });
        client.close();
      }
    } catch (error) {
      res.status(500).json({ message: "Insert data error" });
    }
    res.status(201).json({ message: "Signed Up!" });
  }
}
