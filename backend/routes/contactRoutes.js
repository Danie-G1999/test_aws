const express = require('express');
const router = express.Router();
// Importamos el controlador
const { getAllContacts, saveContact, getContactById, updateContactById} = require('../controllers/ContactController');

// Ruta para obtener todos los contactos
router.get('/contacts', getAllContacts);

// Ruta para guardar un contacto (ya la tienes)
router.post('/saveContact', saveContact);

// Ruta para obtener un contacto por ID
router.get('/contact/:id', getContactById);

// Ruta para actualizar un contacto por ID
router.put('/updateContact/:id', updateContactById);

module.exports = router;
