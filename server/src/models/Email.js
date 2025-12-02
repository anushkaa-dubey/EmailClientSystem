const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  recipients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // multiple recipients
  subject: String,
  body: String,
  attachments: [String],
  folder: { type: String, enum: ['inbox','sent','draft','trash'], default: 'inbox' },
  isRead: { type: Boolean, default: false },
  isStarred: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Email', EmailSchema);
