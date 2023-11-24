import axios from 'axios';

// Create an instance of Axios with custom configurations
const apiClient = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your actual API base URL
  timeout: 5000, // Timeout for API requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json', // Set the content type to JSON
    // You can add additional headers here if needed
  },
});

export default apiClient;
