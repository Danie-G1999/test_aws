const conexion = require('../db/db');

// Metodo para obtener todos los contactos
const getAllContacts = (req, res) => {
    const sql = 'SELECT * FROM contact ORDER BY id DESC';
    conexion.query(sql, (err, resultado) => {
        if (err) {
            alert('Error al traer los contactos:', err);
            return res.status(500).send('Error al consultar');
        }
        res.status(200).send({
            contacts: resultado  // Enviar los contactos obtenidos
        });
    });
};

//Metodo para guardar contactos
const saveContact = (req, res) => {
    const { name, phone, email, direction, profession } = req.body;

    // Validación simple para asegurarse de que todos los campos requeridos están presentes
    if (!name || !phone || !email || !direction || !profession) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Consulta SQL con parámetros
    const sql = 'INSERT INTO contact (name, phone, email, direction, profession) VALUES ($1, $2, $3, $4, $5)';

    // Conexión a la base de datos (ejemplo usando MySQL2)
    conexion.query(sql, [name, phone, email, direction, profession], (err, result) => {
        if (err) {
            alert('Error al guardar el contacto:', err);
            return res.status(500).json({ error: 'Error al guardar el contacto.' });
        }

        // Respuesta exitosa
        res.status(200).json({
            status: 200,
            message: 'Contacto guardado exitosamente.',
            contactId: result.insertId, // Devuelve el ID del contacto recién creado
        });
    });
}

// Metodo para traer los datos de un contacto por id
const getContactById = async (req, res) => {
    const { id } = req.params;
  
    // Consulta SQL para obtener un contacto por ID
    const sql = 'SELECT * FROM contact WHERE id = $1';  // Usamos un placeholder para evitar inyecciones SQL
  
    try {
      const result = await conexion.query(sql, [id]);  // Ejecutamos la consulta con el ID proporcionado
      const rows = result.rows;  // Accedemos a la propiedad rows

      if (rows.length === 0) {
        return res.status(404).json({ message: 'Contacto no encontrado' });
      }
      
      res.json({ contact: rows[0] });  // Devolvemos el primer contacto encontrado
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener el contacto' });
    }
};

// Metodo para actualizar contacto
const updateContactById = async (req, res) => {
    const { id } = req.params;  
    const { name, phone, email, direction, profession } = req.body; 

    // Consulta SQL para actualizar el contacto
    const sql = `
        UPDATE contact 
        SET name = $1, phone = $2, email = $3, direction = $4, profession = $5
        WHERE id = $6
        RETURNING *;  
    `;
  
    try {
        // Ejecutamos la consulta de actualización
        const result = await conexion.query(sql, [name, phone, email, direction, profession, id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Contacto no encontrado' });
        }

        res.json({ 
            status: 200,
            contact: result.rows[0] 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el contacto' });
    }
};


module.exports = {
    getAllContacts,
    saveContact,
    getContactById,
    updateContactById
};
