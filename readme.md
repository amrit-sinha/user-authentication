# Authenctication App
Made by Amrit Sinha

# Overview

This project is a user authentication system built with Node.js, Express, MongoDB, and React. It allows users to register, log in, and access protected routes. JWT (JSON Web Tokens) is used for secure authentication, and cookies are used to maintain user sessions.

# To run the server:
### `node index`


# Features

- User Registration with validation
- User Login with validation
- Password hashing with bcrypt
- JWT-based authentication
- Protected routes
- Secure cookie handling
- Frontend built with React

# Routes
(authRoutes.js)
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login a user
- GET /api/auth/protected - Access a protected route (requires authentication)

# Controllers
(authController.js)
- Handles the logic for user registration, login, and accessing protected routes.

# Middleware
(authMiddleware.js)
- Middleware to protect routes by verifying JWT tokens.

# User Model
(User.js)
- Defines the User schema for MongoDB.

# Validation
(validate.js)
- Contains validation logic for user registration and login.