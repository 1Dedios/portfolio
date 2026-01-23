import { Collection } from "mongodb";
import { Projects } from "@/types/interface/db-interfaces";
import connectDB from "./connection";

let _collection: Collection<Projects> | undefined = undefined;

const getCollection = async (): Promise<Collection<Projects>> => {
  console.log("ENV", process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development") {
    if (!_collection) {
      console.log("RETRIEVING COLLECTION IN DEV ENV...");
      const dbConnection = await connectDB();
      _collection = dbConnection.collection(process.env.MONGO_DEV_COLLECTION!);
    }

    return _collection;
  }

  if (!_collection) {
    const dbConnection = await connectDB();
    _collection = dbConnection.collection(process.env.MONGO_COLLECTION!);
  }

  return _collection;
};

export const projectsCollection = getCollection();
