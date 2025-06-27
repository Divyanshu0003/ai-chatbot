# 🤖 AI Chatbot with NLP — Node.js + Express + MongoDB

This project is a **Conversational AI Chatbot** built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**. It uses **OpenAI's GPT model** to understand natural language queries and respond intelligently. The chatbot can be integrated into **web** and **mobile platforms** for use cases such as support, education, and general assistance.

---

## 🚀 Features

- ✅ User Signup and Login (JWT-based)
- ✅ Chat with AI using natural language
- ✅ OpenAI GPT-powered responses
- ✅ Chat history stored in MongoDB
- ✅ REST API architecture
- ✅ Scalable and modular codebase

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| Node.js    | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB    | NoSQL database |
| Mongoose   | ODM for MongoDB |
| JWT        | Authentication |
| OpenAI API | NLP and AI Responses |
| CORS, dotenv, bcryptjs | Utilities & security |

---

## 📁 Project Structure

ai-chatbot/
├── config/
│ └── db.js
├── controllers/
│ ├── authController.js
│ └── chatController.js
├── models/
│ ├── User.js
│ └── Message.js
├── routes/
│ ├── authRoutes.js
│ └── chatRoutes.js
├── utils/
│ └── openai.js
├── middleware/
│ └── auth.js
├── .env
├── app.js
├── package.json
└── README.md
