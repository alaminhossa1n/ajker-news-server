import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "editor", "reader"],
      default: "reader",
    },
    bio: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    profile_picture: {
      type: String,
      trim: true,
      default: "default_profile_picture_url",
    },
  },
  {
    timestamps: true,
  }
);

const userModel = model<TUser>("users", userSchema);

export default userModel;
