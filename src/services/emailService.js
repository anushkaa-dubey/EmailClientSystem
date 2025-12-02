import nodemailer from "nodemailer";
import Email from "../models/Email.js";

export const sendEmailService = async ({ from, to, subject, body }) => {
  // Save to MongoDB
  const emailDoc = await Email.create({
    from,
    to,
    subject,
    body,
  });

  // Send email via Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App password
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    html: body,
  };

  await transporter.sendMail(mailOptions);

  return emailDoc;
};

export const getAllEmailsService = async () => {
  return await Email.find().sort({ createdAt: -1 });
};
