import mongoose from "mongoose";

export function mongooseConnect() {
  const URI = process.env.MONGODB_URI;
  const DB_NAME = process.env.DB_NAME;

  if (!URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  if (mongoose.connection.readyState === 1)
    return mongoose.connection.asPromise();

  return mongoose.connect(URI, { dbName: DB_NAME });
}
