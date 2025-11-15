# Quick Start Guide - ClassLang Backend Integration

## 🚀 Getting Started

### Step 1: Start MongoDB
Make sure MongoDB is running on your system:
```bash
mongod
```

### Step 2: Start the Node.js Backend
```bash
cd Backend
npm run dev
```

The server will start on `http://localhost:5000`

### Step 3: Open Frontend
Open `login.html` or `signup.html` in your browser. The forms are now connected to the backend!

---

## 📋 Checklist

- ✅ Backend created with Express.js
- ✅ MongoDB models configured
- ✅ Login endpoint: POST `/api/auth/login`
- ✅ Signup endpoint: POST `/api/auth/signup`
- ✅ Frontend forms connected to backend
- ✅ JWT token management
- ✅ Password hashing with bcryptjs
- ✅ CORS enabled

---

## 🧪 Test the APIs

### Test 1: Sign Up
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123",
    "role": "student"
  }'
```

### Test 2: Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123",
    "role": "student"
  }'
```

### Test 3: Health Check
```bash
curl http://localhost:5000/api/health
```

---

## 🔗 Frontend Integration Notes

Your HTML files now have:
1. **Role Selection**: Choose between Student and Teacher
2. **Form Validation**: Client-side checks before sending
3. **API Communication**: Direct connection to backend
4. **Token Storage**: JWT stored in localStorage
5. **Error Handling**: User-friendly error messages
6. **Loading States**: Visual feedback during requests

---

## 📦 What's Included

```
Backend/
├── config/database.js       # MongoDB connection
├── models/User.js           # User schema
├── routes/auth.js           # Login/Signup endpoints
├── middleware/auth.js       # JWT middleware
├── utils/jwt.js             # Token utilities
├── server.js                # Main server
└── .env                      # Environment config
```

---

## 🛠️ Troubleshooting

**MongoDB Connection Error?**
- Make sure MongoDB is running: `mongod`
- Check MongoDB URI in `.env`

**CORS Error?**
- CORS is already enabled in server.js
- Make sure frontend is on same origin or use proper CORS headers

**Port Already in Use?**
- Change PORT in `.env` file
- Default: 5000

**Token Issues?**
- Check localStorage in browser DevTools (F12)
- Tokens are valid for 7 days by default

---

## 📱 Next Steps

1. Create a dashboard page (`dashboard.html`)
2. Add logout functionality
3. Add protected routes (middleware)
4. Implement social login (Google, LinkedIn, etc.)
5. Add email verification
6. Add password reset functionality

---

## 📞 Support

If you need help, check:
- Backend logs in terminal
- Browser DevTools Console (F12)
- Network tab to see API requests
