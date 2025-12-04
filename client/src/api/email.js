const API = "http://localhost:5000/api";

export const signup = async (data) => {
  const res = await fetch(`${API}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const login = async (data) => {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const sendEmail = async (data) => {
  const res = await fetch(`${API}/email/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const fetchInbox = async (email) => {
  const res = await fetch(`${API}/email/inbox?email=${email}`);
  return res.json();
};

export const fetchSent = async (email) => {
  const res = await fetch(`${API}/email/sent?email=${email}`);
  return res.json();
};
