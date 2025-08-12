import { User } from "@clerk/nextjs/server";
import connectDB from "./db/db";
import express from "express";

const app = express();

app.use(express.json());

export default async function createUser(user) {
  try {
    await connectDB();
    const newUser = User.create(user);
    await newUser.save();
    return newUser;
  } catch (error) {
    console.log(error);
  }
}
