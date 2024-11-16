const { Pool } = require('pg');

// Configuración de la conexión
const pool = new Pool({
    host: 'localhost', // Dirección del servidor PostgreSQL
    user: 'postgres', // Usuario de PostgreSQL
    password: '1234', // Contraseña del usuario
    database: 'postgres', // Nombre de la base de datos
    port: 5432, // Puerto de PostgreSQL (por defecto es 5432)
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
