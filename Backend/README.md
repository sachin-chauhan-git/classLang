# ClassLang Backend - Node.js & MongoDB

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and update the values:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string (default: mongodb://localhost:27017/classlang)
- `JWT_SECRET`: Secret key for JWT tokens
- `NODE_ENV`: Environment (development/production)

### 3. Start MongoDB
Make sure MongoDB is running:
```bash
# If using MongoDB locally
mongod
```

### 4. Run the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

## API Endpoints

### Authentication Routes

#### Sign Up
- **URL**: `POST /api/auth/signup`
- **Body**:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student" // or "teacher"
}
```
- **Response**:
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "role": "student"
  }
}
```

#### Login
- **URL**: `POST /api/auth/login`
- **Body**:
```json
{
  "email": "john@example.com",
  "password": "password123",
  "role": "student" // or "teacher"
}
```
- **Response**: Same as signup response

#### Health Check
- **URL**: `GET /api/health`
- **Response**:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-11-15T10:30:00.000Z"
}
```

## Project Structure

```
Backend/
├── config/
│   └── database.js          # MongoDB connection
├── middleware/
│   └── auth.js              # JWT authentication middleware
├── models/
│   └── User.js              # User schema (Student/Teacher)
├── routes/
│   └── auth.js              # Auth endpoints
├── utils/
│   └── jwt.js               # JWT utilities
├── server.js                # Main server file
├── package.json             # Dependencies
├── .env.example             # Environment template
└── .gitignore              # Git ignore rules
```

## Testing with Postman

1. **Sign Up** (POST): `http://localhost:5000/api/auth/signup`
2. **Login** (POST): `http://localhost:5000/api/auth/login`
3. Copy the token from the response
4. Use the token in Authorization header: `Bearer <token>`

## Security Features

- ✅ Password hashing with bcryptjs
- ✅ JWT token authentication
- ✅ Email validation
- ✅ Input validation
- ✅ CORS enabled
- ✅ Error handling

## Next Steps

1. Install dependencies: `npm install`
2. Set up `.env` file
3. Ensure MongoDB is running
4. Start the server: `npm run dev`
