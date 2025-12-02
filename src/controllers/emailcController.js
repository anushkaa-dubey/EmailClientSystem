import { sendEmailService, getAllEmailsService } from "../services/emailService.js";

export const sendEmail = async (req, res) => {
  try {
    const { from, to, subject, body } = req.body;

    const email = await sendEmailService({ from, to, subject, body });

    res.status(200).json({
      message: "Email sent and saved successfully!",
      data: email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Email sending failed" });
  }
};

export const getEmails = async (req, res) => {
  try {
    const emails = await getAllEmailsService();
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch emails" });
  }
};
