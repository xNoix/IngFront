import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3005/api', // Cambia el baseURL según tu configuración
  withCredentials: true, // Para enviar cookies en cada solicitud
});

export default axiosInstance;
