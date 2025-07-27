import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // @ts-expect-error: Add _mongoClientPromise to global for development
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    // @ts-expect-error: Attach client promise to global for reuse between reloads
    global._mongoClientPromise = client.connect();
  }
  // @ts-expect-error: Access the globally cached client promise
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
