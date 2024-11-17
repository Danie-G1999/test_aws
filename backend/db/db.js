const { Pool } = require('pg');

// Configuración de la conexión utilizando variables de entorno
const pool = new Pool({
    host: process.env.DB_HOST, // Dirección del servidor PostgreSQL (desde RDS)
    user: process.env.DB_USER, // Usuario de PostgreSQL (de RDS)
    password: process.env.DB_PASSWORD, // Contraseña del usuario (de RDS)
    database: process.env.DB_NAME, // Nombre de la base de datos (de RDS)
    port: process.env.DB_PORT || 5432, // Puerto de PostgreSQL (usualmente 5432)
    ssl: {
        rejectUnauthorized: false, // Permite conexiones SSL
    },
});

// Verificar la conexión
pool.connect((err, client, release) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos.');
    release(); // Libera el cliente después de la prueba
});

module.exports = pool;
