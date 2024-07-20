import { Schema, model, models } from "mongoose";
import moment from "moment";

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
  post: { type: Schema.Types.ObjectId, ref: "post", required: true },
  userName: { type: String, required: true },
  userImg: { type: String, required: true },
  text: String,
  likes: { type: Number, default: 0 },
  createdAt: { type: String, default: () => moment().format("DD-MMM-YYYY") },
});

const Comment = models.comment || model("comment", commentSchema);

export default Comment;
