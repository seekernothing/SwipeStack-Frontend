# 💞 SwipeStack

> A Tinder-inspired MERN app for making meaningful connections — with secure login, real-time chat, Razorpay integration, and beautiful swipe-based UI.

![SwipeStack Preview](https://swipestack.shop/)

---

## 🚀 Features

- 🔐 **Secure Authentication** — JWT + HTTP-only cookies  
- 💬 **Real-Time Chat** — Implemented with Socket.IO  
- 💳 **Razorpay Integration** — For seamless and secure payments  
- 💞 **Swipe-based Matching System** — Like or Ignore profiles with fluid transitions  
- ⚙️ **Cron Jobs** — Automated background tasks  
- ☁️ **AWS EC2 Deployment** — Nginx + PM2 for production  
- 🧱 **Clean MVC Architecture** — Organized routes, models, and utils  
- ⚛️ **Frontend with React + Vite** — Fast, responsive, and modern UI  
- 🎨 **Tailwind + DaisyUI** — Clean and customizable styling system  

---

## 🧠 Tech Stack

**Frontend**
- React (Vite)
- Redux Toolkit
- React Router v7
- Socket.IO Client
- Tailwind CSS v4.1 + DaisyUI
- Axios
- React Spring (animations)
- React Tinder Card (swipe)

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- Socket.IO
- Razorpay SDK
- JWT (jsonwebtoken)
- bcrypt
- validator
- node-cron
- dotenv
- cors
- cookie-parser

**Deployment**
- AWS EC2 (Ubuntu)
- Nginx (reverse proxy)
- PM2 (process manager)
- HTTPS enabled

---

## 📁 Folder Structure

### 🖥️ Frontend (`swipestack-frontend`)
```bash
frontend/
├── public/
└── src/
    ├── assets/
    ├── components/
    ├── context/
    ├── hooks/
    ├── pages/
    ├── redux/
    │   ├── slices/
    │   └── store/
    ├── services/
    ├── styles/
    └── utils/

### 🖥️ Backend (`swipestack-backend`)
```bash
backend/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
└── utils/

⚙️ Environment Variables

Create a .env file in the root of the backend:

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret


