import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: String,
  name: String,
  image: String,
  posts: [{ type: Schema.Types.ObjectId, ref: "post" }],
});

const User = models.user || model("user", UserSchema);

export default User;
