// API Base URL - Change this to your backend URL in production
const API_BASE_URL = 'http://localhost:5000/api';

class AuthAPI {
  // Sign Up
  static async signup(firstName, lastName, email, password, role) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          role
        })
      });

      const data = await response.json();
      
      if (data.success) {
        // Store token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        return { success: true, data };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Login
  static async login(email, password, role) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          role
        })
      });

      const data = await response.json();
      
      if (data.success) {
        // Store token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        return { success: true, data };
      } else {
        return { success: false, error: data.message };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Logout
  static logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  // Get current user
  static getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Get token
  static getToken() {
    return localStorage.getItem('token');
  }

  // Check if user is authenticated
  static isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  // Get Authorization header
  static getAuthHeader() {
    const token = this.getToken();
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  }
}

// Example usage in your HTML:
/*
const role = 'student'; // or 'teacher'
const email = document.querySelector('input[type="email"]').value;
const password = document.querySelector('input[type="password"]').value;

const result = await AuthAPI.login(email, password, role);
if (result.success) {
  console.log('Login successful!', result.data.user);
  // Redirect to dashboard
  window.location.href = '/dashboard.html';
} else {
  console.error('Login failed:', result.error);
  alert(result.error);
}
*/
