# 💪 FitLife: Your Ultimate Fitness Companion 🏋️‍♂️

![legion](https://github.com/user-attachments/assets/8fdf5f3a-cca0-4ea3-961d-058010ccd661)

## 🚀 Overview

FitLife is a modern, containerized fitness application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Docker. This application helps users track their workouts, set fitness goals, and maintain a healthy lifestyle.

## ✨ Features

- 🏃‍♂️ Personalized workout tracking
- 📊 Progress visualization
- 🎯 Goal setting and monitoring
- 📱 Responsive design for all devices
- 🔐 Secure user authentication
- 🗄️ Cloud-based data storage

## 🏗️ Architecture

The application follows the MVC (Model-View-Controller) pattern and is containerized using Docker Compose:

- 📱 Frontend Container: React + Vite
- 🖥️ Backend Container: Node.js + Express
- 🗃️ Database: MongoDB

## 🛠️ Tech Stack

- **Frontend:**
  - React with Vite
  - Tailwind CSS

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB

- **DevOps:**
  - Docker
  - Docker Compose

## 🚀 Getting Started

### Prerequisites

- Docker and Docker Compose installed
- Node.js (for local development)
- Git

### Installation & Running with Docker

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Legion-Fitness.git
cd Legion-Fitness
```

2. Create `.env` files:

Backend `.env`:
```env
MONGODB_URI=mongodb://mongo:27017/fitlife
PORT=4000
```

Frontend `.env`:
```env
VITE_API_URL=http://localhost:5173
```

3. Run with Docker Compose:
```bash
docker-compose up --build
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:4000

### Local Development Setup

#### Frontend (React + Vite)

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

#### Backend (Node + Express)

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## 📁 Project Structure

```
fitlife-app/
├── frontend/                # React + Vite frontend
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── backend/                 # Node.js + Express backend
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

## 🔒 Environment Variables

### Backend Variables
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `PORT`: Server port (default: 5000)

### Frontend Variables
- `VITE_API_URL`: Backend API URL

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Thanks to all contributors who participated in this project
- Special thanks to the MERN stack and Docker communities

## 📧 Contact

Your Name - [sand.s.heep95@gmail.com](mailto:sand.s.heep95@gmail.com)

