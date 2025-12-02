import express from "express";
import { sendEmail, getEmails } from "../controllers/emailController.js";

const router = express.Router();

router.post("/send", sendEmail);
router.get("/all", getEmails);

export default router;
