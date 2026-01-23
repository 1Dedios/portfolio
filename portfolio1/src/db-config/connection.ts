import { MongoClient, Db } from "mongodb";

let _client: MongoClient | undefined = undefined;
let _db: Db;

const connectDB = async (): Promise<Db> => {
  console.log("ENVIRONMENT: ", process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development") {
    if (!_client) {
      console.log("ESTABLISHING DB CONNECTION IN DEV ENV...");
      _client = await MongoClient.connect(process.env.MONGO_DEV_URI!);
      _db = _client.db(process.env.MONGO_DEV_DB);
    }
    return _db;
  }

  if (!_client) {
    _client = await MongoClient.connect(process.env.MONGO_URI!);
    _db = _client.db(process.env.MONGO_COLLECTION);
  }
  return _db;
};

export default connectDB;
