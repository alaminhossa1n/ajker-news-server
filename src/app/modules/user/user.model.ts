import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";
import config from "../../config";

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

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(this.password, Number(config.salt_rounds));
});

const userModel = model<TUser>("users", userSchema);

export default userModel;
