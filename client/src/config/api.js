// API Base URL - uses environment variable in production, localhost in development
// Hardcoded for immediate stability
const API_BASE_URL = 'https://crm-2b00.onrender.com';

// Debug: Log API URL on load
console.log('🔍 API Configuration:', {
  API_BASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  REACT_APP_API_URL: process.env.REACT_APP_API_URL,
});

export default API_BASE_URL;
