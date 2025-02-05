# 📚 FAQ App
--

This repository contains the solution to the backend hiring test. The project is built using **React**, **Node.js**, and **MongoDB**, with features like multilingual FAQ management, WYSIWYG editor integration, caching with Redis, and REST API development.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation & Setup](#installation--setup)
5. [Challenges Faced](#challenges-faced)
6. [Testing](#testing)


---

## 🌟 Project Overview

The objective of this project was to design and implement a multilingual FAQ management system with the following key features:

- **CRUD Operations**: Create, Read, Update, and Delete FAQs effortlessly.
- **Multi-Language Support**: Translate FAQs into multiple languages (e.g., English, Hindi, Bengali).
- **Translation API**: Powered by a FastAPI service integrated with Google Translate.
- **Caching**: Implemented Redis for efficient translation storage and retrieval.
- **Dockerized Deployment**: Simplified setup and deployment using Docker.
- **Frontend**: Developed a React-based frontend to interact with the backend.
---

---

## 💻 Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MongoDB
- **Translation**: Google Translate API (`googletrans`)
- **Caching**: Redis
- **Containerization**: Docker
- **Testing**: Mocha/Chai for unit testing
- **Deployment**: Vercel (frontend), Render (backend)

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js (v16+)
- MongoDB (local or cloud instance)
- Redis (for caching)

### Steps to Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/BharatFd-Test.git
   cd BharatFd-Test
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGODB_URI=<your_mongodb_connection_string>
   REDIS_URL=<your_redis_url>
   ```

4. ### Running Without Docker
   i. Ensure **MongoDB** is running locally.

   ii. Start **Redis**:
      ```bash
      redis-server
      ```
   iii. Run the translation service:
      ```bash
      cd translation-service
      python main.py
      ```
   iv. Install and start the backend:
      ```bash
      cd ../backend
      npm install
      npm start
      ```
   v. Install and start the frontend:
      ```bash
      cd ../frontend
      npm install
      npm start
      ```

### Running with Docker
```bash
docker-compose up --build
```

---

🧩 Challenges Faced
While working on this project, I encountered several challenges that helped me grow as a developer. Here are the key challenges and how I overcame them:

1. Learning Redis for Caching
I had no prior experience with Redis before this project. To implement the caching mechanism for translations, I took the time to learn Redis fundamentals, including how to store and retrieve data efficiently.
Solution : I integrated Redis into the backend using the redis library and ensured that frequently accessed translations were cached, significantly improving performance.
2. Unit Testing with Mocha/Chai
Unit testing was a new area for me, but I understood its importance in ensuring code reliability and maintainability.
Solution : I learned how to write comprehensive unit tests using Mocha and Chai to cover model methods, API responses, and caching mechanisms.

🌟 What I Learned
This project was a great learning experience for me. I successfully:

Learned and implemented Redis for caching.
Wrote unit tests using Mocha and Chai to ensure code quality.


## 🧪 Testing

- **Unit Tests**: Written using Mocha/Chai to cover model methods, API responses, and caching mechanisms.
- **How to Run Tests**:
  ```bash
  npm test
  ```

---


##Thank You, eagerly waiting for +ve reply.
