import User from "./models/UserModel.js";
import connectDB from "./database/db.js";
import express from "express";

const app = express();

app.use(express.json());

export default async function createUser(user) {
  try {
    await connectDB();
    const newUser = await User.create(user);

    return newUser;
  } catch (error) {
    console.log(error);
    return null;
  }
}
