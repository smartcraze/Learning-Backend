import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, lowercase: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: string,
      required: [true, "password is required"],
      minlength: 8,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

// database me jab database me store hoga jab plural ho jaba hai basically users ho jata hai
