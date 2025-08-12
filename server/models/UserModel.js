import { mongoose } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: [true, "clerkId is required"],
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: [true, "Username should be unique"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },
    photo: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false },
);
const User = mongoose.models?.User || mongoose.model("User", UserSchema);

export default User;
