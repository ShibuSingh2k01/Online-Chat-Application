import dotenv from "dotenv";
dotenv.config();

import express from "express";
import chats from "./data/data.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("API Get Running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((chat) => chat._id == req.params.id);
  res.send(singleChat);
});

app.listen(PORT, console.log(`Server running on PORT - ${PORT}`));
