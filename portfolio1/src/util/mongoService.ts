import mongoose from "mongoose";

declare global {
  var mongoose:
    | {
        conn: mongoose.Mongoose | null;
        promise: Promise<typeof import("mongoose")> | null;
      }
    | undefined;
}

const MONGODB_URI = process.env.MONGO_CONNECT!;
if (!MONGODB_URI) {
  throw new Error("Define MONGODB_URI environment variable.");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached!.conn) {
    return cached?.conn;
  } else {
    if (!cached!.promise) {
      const opts: mongoose.ConnectOptions = {
        serverApi: { version: "1", strict: true, deprecationErrors: true },
        bufferCommands: false,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        maxPoolSize: 10,
        minPoolSize: 1,
      };
      cached!.promise = mongoose.connect(MONGODB_URI, opts);
      try {
        cached!.conn = await cached!.promise;
        return cached!.conn;
      } catch (e) {
        cached!.promise = null;
        throw new Error(`${e}`);
      }
    }
  }
}

export default connectDB;
