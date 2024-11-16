const express = require('express');
const cors = require('cors');
const app = express();

// Importamos las rutas
const contactRoutes = require('./routes/contactRoutes');

// Middleware para procesar el cuerpo de las solicitudes como JSON
app.use(express.json());  // Asegúrate de tener esto en tu servidor

// Habilitar CORS para permitir peticiones desde el frontend
app.use(cors({
  origin: 'http://localhost:8080',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Registramos las rutas bajo el prefijo /api
app.use('/api', contactRoutes);

app.listen(5000, () => {
  console.log('Backend running on port 5000');
});
