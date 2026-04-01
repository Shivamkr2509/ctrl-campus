# CTRL Campus

A comprehensive campus management platform built with the MERN stack.

## Features

- 🔐 Authentication with college email verification
- 👥 Multiple user types (Student, Professor, Vendor, Society)
- 📱 Role-based dashboards
- 💬 Real-time chat with AI moderation
- 📅 Calendar integration
- 🛍️ Campus marketplace
- 📚 File sharing and notes
- 🎓 Project collaboration
- 🏢 Society management
- 📝 Lost & Found board

## Tech Stack

- Frontend: React.js, TailwindCSS, React Router
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Real-time: Socket.io
- File Upload: Multer
- Calendar: Google Calendar API

## Project Structure

```
campus-hub/
├── client/                 # Frontend React application
├── server/                 # Backend Node.js application
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions
│   └── uploads/          # File uploads directory
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   CLIENT_URL=http://localhost:3000
   EMAIL_USER=your_gmail_address
   EMAIL_PASS=your_gmail_app_password
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## API Documentation

API documentation is available at `/api-docs` when running the server.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 