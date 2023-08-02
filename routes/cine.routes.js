const express = require('express');

const router= express.Router();
const {eliminarVoleto,actualizarVoleto,obtenerVoleto,crearVoleto}= require('../controllers/controllers');

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

//vista General
router.get('/cineA',(req,res)=>{
    res.render('index')
})
//Vista Crear

router.get('/cineA/create',(req,res)=>{
    res.render('crear')
})
//vista editar
router.get('/cineA/editar/:id', (req, res) => {
    res.render('editar', { id: req.params.id });
});








// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/cineA/', obtenerVoleto);
// Formulario para crear una reserva

router.post('/api/cineA/create',  crearVoleto);
// Formulario para actualizar una reserva

router.put('/api/cineA/editar/:id', actualizarVoleto);
// Formulario para eliminar una reserva 

router.delete('/api/cineA/:id', eliminarVoleto);

 
 
 module.exports = router;