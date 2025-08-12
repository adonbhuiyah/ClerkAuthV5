import User from "./models/UserModel.js";
import connectDB from "./database/db.js";

export default async function createUser(user) {
  try {
    console.log("[createUser] Connecting to DB...");
    await connectDB();

    console.log("[createUser] User data received:", user);

    const newUser = await User.create(user);

    console.log("[createUser] User saved to MongoDB:", newUser);
    return newUser;
  } catch (error) {
    console.error("[createUser] Error:", error);
    return null;
  }
}
