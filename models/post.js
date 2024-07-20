import { Schema, model, models } from "mongoose";
import moment from "moment";

const PostSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
  userName: { type: String, required: true },
  userImg: { type: String, required: true },
  title: String,
  tag: String,
  image: String,
  body: String,
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  likes: { type: Number, default: 0 },
  commentsCount: { type: Number, default: 0 },
  createdAt: { type: String, default: () => moment().format("DD-MMM-YYYY") },
});
// تعريف virtual لـ `commentsCount`
PostSchema.pre("save", async function () {
  this.commentsCount = this.comments.length;
});

const Post = models.post || model("post", PostSchema);

export default Post;
