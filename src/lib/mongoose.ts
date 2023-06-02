import mongoose from "mongoose";

export function mongooseConnect() {
  const { MONGODB_URI, DB_NAME } = process.env;

  if (!MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  if (mongoose.connection.readyState === 1)
    return mongoose.connection.asPromise();

  return mongoose.connect(MONGODB_URI, { dbName: DB_NAME });
}
