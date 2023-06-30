import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Post } from "./post.js";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

//Foreign key relation ships
userSchema.virtual("usrPost", {
  ref: "Post",
  localField: "_id",
  foreignField: "author",
});

//Generate jwt auth token for login and register
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString() },
    process.env.JWT_SECRET_KEY
  );

  user.tokens = user.tokens.concat({
    token,
  });
  await user.save();
  return token;
};

//Authenticate login
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("Invalid Credentials");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Invalid Credentials");

  return user;
};

//Mongoose MiddleWares
//Hashing password before saving in db
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

//Deleting all posts associated with a user
userSchema.pre("deleteOne", async function (next) {
  const user = this;
  await Post.deleteMany({ author: user._id });
  next();
});

//Filtering object contents that are sent back
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

export const User = mongoose.model("User", userSchema);
