import { MongoClient } from "mongodb";

const DB_HOST = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.djatngh.mongodb.net/events?retryWrites=true&w=majority`;

export const client = await MongoClient.connect(DB_HOST);

export const db = client.db();
