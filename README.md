# Node Auth JWT

A user authentication system built with **Express.js**, **JWT**, and **bcrypt**.

## Features

- User registration with password hashing (bcrypt)
- Login with JWT token generation
- Protected routes with token verification middleware
- Role-based access control (user / admin)
- Input validation and error handling
- SQLite database for persistence

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Auth:** JSON Web Tokens (JWT), bcryptjs
- **Database:** SQLite (via better-sqlite3)

## Getting Started

```bash
git clone https://github.com/Ola-mide1/node-auth-jwt.git
cd node-auth-jwt
npm install
npm start
```

Server runs at `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/register` | No | Register a new user |
| POST | `/api/auth/login` | No | Login and get token |
| GET | `/api/users/profile` | Yes | Get your profile |
| GET | `/api/users/` | Admin | List all users |

### Example Usage

```bash
# Register
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "success", "email": "success@example.com", "password": "mypassword123"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "success@example.com", "password": "mypassword123"}'

# Access protected route (use token from login response)
curl http://localhost:3000/api/users/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Project Structure

```
src/
├── index.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── controllers/
│   ├── authController.js
│   └── userController.js
├── models/
│   ├── database.js
│   └── userModel.js
└── middleware/
    └── auth.js
```

## License

MIT
