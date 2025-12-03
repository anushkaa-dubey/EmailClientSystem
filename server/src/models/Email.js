const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema(
  {
    from: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    subject: String,
    body: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Email", EmailSchema);
