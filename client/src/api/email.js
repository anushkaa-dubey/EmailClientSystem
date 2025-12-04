import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);

export const sendEmail = (data) => API.post("/email/send", data);
export const getInbox = (userId) => API.get(`/email/inbox/${userId}`);
export const getSent = (userId) => API.get(`/email/sent/${userId}`);
